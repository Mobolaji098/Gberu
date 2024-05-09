import Image from "next/image";
import { ButtonColored, ButtonNoOutline } from "../ui/Button";



export default function Page2() {
  return (
    <div className="bg-black w-full">
    <div className="flex p-6  flex-col md:flex-row  md:px-[68px] relative lg:min-w-[1281px] lg:max-w-[1300px] max-w-[650px] m-auto">
      <div className="flex h-auto items-center justify-center ">
        <Image
          className=" "
          src="/552shots_so.png"
          width={400}
          height={600}
          alt="Phone Mockup"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="lg:text-6xl md:text-4xl text-3xl text-white  lg:tracking-wider py-3  lg:w-[771px] text-wrap text-center md:text-left">
          <span className=""> Send out couriers with ease </span>
        </h1>
        <div className="lg:w-[640px] text-center md:text-left">
          <span className="text-white ">
            Be at peace cause your package is in experienced hands
          </span>
        </div>
        <div className="flex mt-10 gap-8 lg:gap-4 lg:flex-row flex-col justify-center items-center sm:items-start lg:items-center ">
          <ButtonColored className=" text-black lg:font-semibold bg-white rounded-2xl w-[200px] h-[44px] lg:w-[225px] lg:h-[54px] ">
            Get Started
          </ButtonColored>
          <ButtonNoOutline className=" text-white lg:text-center md:text-left   p-0 ">
            <p className="underline underline-offset-4">
            Sign in, if you already have an account
            </p>
          </ButtonNoOutline>
        </div>
      </div>
    </div>
    </div>
  );
}
