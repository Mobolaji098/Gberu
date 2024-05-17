import React, { useState, FormEvent,useEffect } from "react";
import SuccessModal from "../ui/successmodal";

export default function WaitingListforms() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState({
    email: "",
    role:"User"
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => { 
    validateForm(); 
}, [formData.email]); 
// Validate form 
const validateForm = () => { 
    let errors = ''; 
    if(formData.email.length == 0 ){
      errors = ''
    }

    else if (formData.email.length > 0 && !/\S+@\S+\.\S+/.test(formData.email)) { 
        errors = 'Email is invalid.'; 
    } 

    setError(errors); 
}; 

  type InputEvent = React.ChangeEvent<HTMLInputElement>;
  type SelectEvent = React.ChangeEvent<HTMLSelectElement>
  // type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

  const handleInput = (e: InputEvent) => {
    const target = e.target
    const fieldName = target.name;
    const fieldValue = target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));

  };

const handleSelect = (e:SelectEvent) => {
  const target = e.target
  const fieldName = target.name;
  const fieldValue = target.value;

  setFormData((prevState) => ({
    ...prevState,
    [fieldName]: fieldValue,
  }));
};
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    // console.log(formData);

    event.preventDefault();
    setIsLoading(true)
    setError('') // Clear previous errors when a new request starts

    try {
      const data = new FormData()
      const response = await fetch('/api/waitinglist-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        const result = await response.json();
      
        console.log(result.message);
        openModal()
      } 
      

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }

    } catch (error) {
      // Capture the error message to display to the user
      console.error(error)
    } finally {
      setIsLoading(false)

    }
  }

  return (
    <div className="flex flex-col px-5">

      <SuccessModal header={"Submission Successful"} body={"Thank you for submission. You would be contacted once we are live"}
      show={isModalOpen} close={closeModal}/>
      <form onSubmit={onSubmit} className="flex flex-col ">
        <div className="flex gap-5 my-6">
        <label htmlFor="email">Email</label>


          <input
            className={`w-56 border-b  border-gray-400  outline-none ${!error?'text-black':'text-red-500'}`}
            placeholder="johndoe@gmail.com"
            id="email" 
            type="text"
            name="email"
            onChange={handleInput}
            value={formData.email}
          />
          

        </div>
       
        <div className="flex gap-5 mt-6 mb-10">
        <label htmlFor="role">Role</label>
          <select  id="role"  name="role" onChange={handleSelect} value = {formData.role} >
            <option value="Rider">Rider</option>
            <option selected value="User">User</option>
          </select>
        </div>
       
        <button type="submit" disabled={isLoading || error?.length > 0 || formData.email.length == 0}>
          {
            <div className={`bg-red-500 p-3 text-white rounded-md ${!error?'bg-red-500':'bg-gray-500'}`}>
              {isLoading ? "Loading..." : " Notify Me"}
            </div>
          }
        </button>

      </form>
    </div>
  );
}
