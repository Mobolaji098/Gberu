import Image from "next/image";

export default function Page6() {
  return (
    <div className="bg-white dark:bg-black">
    <div className="flex flex-col py-16 items-center max-w-[750px] lg:max-w-[1300px] w-full m-auto ">
      <div className="bg-black py-10 flex flex-col justify-center rounded-2xl mx-48 w-11/12 ">
      <h1 className={`flex lg:text-4xl text-3xl text-white  items-center justify-center md:px-12`}>
        <span className="font-black p-2 text-center"> Reasons to stick with us </span>
      </h1>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20 ">
        <Stickwithus word="24/7 Customer support" images='/interface-help-customer-support.png'/>
        <Stickwithus word="Secured orders, payments and privacy" images='/interface-pad.png'/>
        <Stickwithus word="One time and fast delivery" images='/interface-time-alarm.png'/>
        <Stickwithus word="Experienced and Trained drivers/riders" images='/interface-user.png'/>
        <Stickwithus word="Hassle free and secured payments" images='/Group.png'/>
        <Stickwithus word="24/7 Customer support" images='/interface-help-customer-support.png'/>


      </div>
      </div>
      </div>
    </div>
  );
}

interface StickwithusProps {
    word:string;
    images:string;
}


function Stickwithus({word,images}:StickwithusProps) {
    return <div className=" flex flex-col  text-white font-bold p-6 justify-center items-center relative  ">
        <div className="justify-center items-center flex bg-white w-[166px] h-[166px] rounded-full">
        <Image
          className=" "
          src={images}
          width={106}
          height={106}
          alt="Our service"
        />
        </div>
      <div className="my-4 text-center font-light ">{word}</div> 
    
   
        </div>
      
  }
  