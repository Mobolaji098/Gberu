import { ButtonColored } from "../ui/Button";
import Image from "next/image";


export default function Page5() {
  return (
    <div className="bg-white dark:bg-black">
    <div className={`relative  flex flex-col justify-center py-16 items-center max-w-[750px] lg:max-w-[1300px] w-full m-auto`}>
      <div className="flex justify-center items-center">
      <Image
        className=" z-20 lg:absolute  lg:block hidden left-0 bottom-48 translate-x-64"
        src="/gberuPersonCarrybox.png"
        width={443}
        height={450}
        alt="Logistics picture"
      />
      <Image
        className=" z-10 lg:absolute lg:block hidden left-20 bottom-20 translate-x-4 "
        src="/phoneLogin.png"
        width={312}
        height={873}
        alt="Logistics picture"
      />
       <Image
        className=" z-30 lg:absolute lg:block hidden left-0 bottom-0 transform scale-x-[-1] translate-y-36 translate-x-12"
        src="/tesla.png"
        width={630}
        height={873}
        alt="Logistics picture"
      />
      </div>
      

      <h1 className={`flex lg:text-4xl md:text-3xl text-2xl text-black dark:text-white  items-center justify-center md:px-12`}>
        <span className="font-black p-2 text-center"> With multiple courier services in a single app
        , your goods get around safely </span>
      </h1>
     
      <div className="flex justify-center items-center">
        <span className="lg:text-2xl text-xl text-black dark:text-white leading-7 p-8 text-center">Placing and delivering orders has never been easier.
        </span>
      </div>
      <div className="flex relative flex-col justify-center items-center lg:justify-end lg:items-end w-full lg:p-[4rem] lg:gap-8 gap-0">
      <ButtonColored className=" flex text-white font-semibold bg-red-500 lg:rounded-2xl lg:px-10 h-[5rem] text-[1.5rem] md:mx-16 lg:mx-0 tracking-wider w-full lg:w-auto">
      Download Gberu Courier app
        </ButtonColored>
        <ButtonColored className=" flex text-white font-semibold bg-black dark:bg-white dark:text-black lg:rounded-2xl h-[5rem] text-[1.5rem] md:mx-16 lg:mx-0 lg:w-auto w-full lg:px-10 tracking-wider">
        Download Gberu Driver/Rider app
        </ButtonColored>
    <p className="lg:text-3xl md:text-2xl text-black dark:text-white max-w-[535px] text-center lg:text-right"> Available on iOS and Android devices </p>
    <div className="flex gap-4">
        <ButtonColored className="mt-10  text-white bg-black dark:bg-red-500 rounded-r-lg w-[160px] h-[54px] ">
          <div className="flex justify-center items-center gap-2">
            <img
             className="w-[20px] "
             src="/whiteAppleLogo.svg"
             alt="Logistics picture"
             />
          <p>Get on iPhone</p>
          </div>
          
        </ButtonColored>
        <ButtonColored className="mt-10 dark:text-black text-white bg-black dark:bg-white  rounded-r-lg w-[160px] h-[54px] ">
          <div className="flex justify-center items-center gap-2">
            <img
             className="w-[20px]"
             src="/google-icon.svg"
             alt="Logistics picture"
             />
          <p className="">Get on Android</p>
          </div>
          
        </ButtonColored>
        </div>
      </div>
    </div>
    </div>
  );
}
