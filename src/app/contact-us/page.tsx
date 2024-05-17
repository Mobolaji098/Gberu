"use client";

import MainNav from "../components/landingpage/MainNav";
import useWindowSize from "@/hooks/useWindowSize";
import { mdBreakPoint } from "@/lib/tailwind";
import { useTheme } from "next-themes";
import Footer from "../components/landingpage/Footer";
import SuccessModal from "../components/ui/successmodal";
import { FormEvent, useState } from "react";

export default function Home() {
  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= mdBreakPoint;
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    subject:"",
    phoneNumber:"",
    message:""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const handleInput = (e: InputEvent) => {
    const target = e.target;
    const fieldName = target.name;
    const fieldValue = target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
   
    
  };



  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log(formData);

    event.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData();
      const response = await fetch("/api/waitinglist-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();

        console.log(result.message);
        openModal();
      }

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
    } catch (error) {
      // Capture the error message to display to the user
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen justify-center flex-col overflow-hidden">
      <MainNav lscreen={isLargeScreen} Theme={theme} SetTheme={setTheme} />
      <div className="bg-white dark:bg-black flex justify-center min-h-screen">
        <div className="flex flex-col  w-full justify-center items-center">
          <div className="flex  flex-col  text-center lg:min-w-[720px] mx-4 my-32">
            <p className="mb-6 text-3xl font-bold">Contact Us</p>
            <p className="mb-6">
              We love to hear from u. kindly fill the form below to contact us
            </p>

            <div className="flex flex-col">
              <SuccessModal
                header={"Submission Successful"}
                body={"Thank you for submission."}
                show={isModalOpen}
                close={closeModal}
              />

              <form onSubmit={onSubmit} className="flex flex-col items-start">
                <div className="flex flex-col gap-5 my-6 items-start w-full">
                  <label htmlFor="FullName">Full Name</label>

                  <input
                    className={`w-full h-16 border rounded-md border-red-200 p-6 text-sm`}
                    placeholder="Enter Full Name"
                    id="FullName"
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={formData.name}
                  />
                  <label htmlFor="email">Email Address</label>
                  <input
                    className={`w-full h-16 border rounded-md border-red-200 p-6 text-sm`}
                    placeholder="Enter your Email"
                    id="email"
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={formData.email}
                  />
                  <label htmlFor="Subject">Subject</label>
                  <input
                    className={`w-full h-16 border rounded-md border-red-200 p-6 text-sm`}
                    placeholder="Enter subject of the mail"
                    id="Subject"
                    type="text"
                    name="subject"
                    onChange={handleInput}
                    value={formData.subject}
                  />
                  <label htmlFor="PhoneNumber">Phone Number</label>
                  <input
                    className={`w-full h-16 border rounded-md border-red-200 p-6 text-sm`}
                    placeholder="Enter your phone number"
                    id="PhoneNumber"
                    type="number"
                    name="phoneNumber"
                    onChange={handleInput}
                    value={formData.phoneNumber}
                  />
                  <label htmlFor="Message">Message</label>

                  <textarea
                    className={`w-full  border rounded-md border-red-200 p-6 text-sm h-40`}
                    placeholder="Enter your message"
                    id="Message"
                    name="message"
                    onChange={handleInput}
                    value={formData.message}
                    />
                </div>

                <button type="submit">
                  {
                    <div className={`bg-red-500 p-3 text-white rounded-md mx-auto`}>
                      {isLoading ? "Loading..." : "Submit"}
                    </div>
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
