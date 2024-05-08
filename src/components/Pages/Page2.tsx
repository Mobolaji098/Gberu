import Image from "next/image";
import { ButtonColored, ButtonNoOutline } from "../ui/Button";



export default function Page2() {
  return (
    <div className="flex p-6  flex-col md:flex-row bg-black  md:px-[68px] md:min-w-[780px] relative lg:min-w-[1281px] overflow-hidden">
      <div className="flex h-auto items-center justify-center ">
        <Image
          className=" "
          src="/gberuPhoneScreenshot.png"
          width={314}
          height={600}
          alt="Phone Mockup"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="lg:text-6xl md:text-4xl text-3xl text-white  lg:tracking-wider py-3  lg:w-[771px] text-wrap text-center md:text-left">
          <span className="font-black"> Send out couriers with ease </span>
        </h1>
        <div className="lg:w-[640px] text-center md:text-left">
          <span className="text-white lg:text-[30px] lg:leading-7 md:text-[1.5rem] text-[1.125rem] ">
            Be at peace cause your package is in experienced hands
          </span>
        </div>
        <div className="flex mt-10 gap-8 lg:gap-4 lg:flex-row flex-col justify-center items-center md:justify-start md:items-start">
          <ButtonColored className=" text-black lg:font-semibold bg-white rounded-2xl w-[200px] h-[44px] lg:w-[225px] lg:h-[54px] lg:text-[26px] text-[20px] ">
            Get Started
          </ButtonColored>
          <ButtonNoOutline className=" text-white lg:font-semibold leading-8 text-[20px] lg:text-center md:text-left md:justify-start md:items-start p-0 md:text-[20px] lg:text-[26px]">
            <p className="underline underline-offset-4">
            Sign in, if you already have an account
            </p>
          </ButtonNoOutline>
        </div>
      </div>
    </div>
  );
}
