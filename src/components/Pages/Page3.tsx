import { ButtonColored } from "../ui/Button";


export default function Page3() {
  return (
    <div className={`relative  flex flex-col justify-center bg-white dark:bg-black py-16 items-center lg:min-w-[1281px] md:min-w-[780px] `}>
      <h1 className={`flex lg:text-6xl md:text-5xl text-black dark:text-white  items-center justify-center `}>
        <span className="lg:font-black font-semibold text-3xl sm:text-4xl lg:text-6xl p-2 text-center md:font-semibold"> Earn money with us on Gberu </span>
      </h1>
      <div className="flex gap-7 my-10 justify-center items-center flex-wrap ">
        <ButtonColored className=" text-white font-semibold bg-red-500 rounded-2xl w-[235px] h-[54px] text-[1.5rem] md:mx-16 lg:mx-0">
          Rider
        </ButtonColored>
        <ButtonColored className=" text-white font-semibold bg-black dark:bg-white dark:text-black rounded-2xl w-[235px] h-[54px] text-[1.5rem] md:mx-16 lg:mx-0">
          Driver
        </ButtonColored>
        <ButtonColored className=" text-white font-semibold bg-red-500 rounded-2xl w-[235px] h-[54px] text-[1.5rem] md:mx-16 lg:mx-0">
          Referrals
        </ButtonColored>
        <ButtonColored className=" text-white font-semibold bg-black dark:bg-white dark:text-black rounded-2xl w-[235px] h-[54px] text-[1.5rem] md:mx-16 lg:mx-0">
          Courier
        </ButtonColored>
        
      </div>
      <div className="flex justify-center items-center">
        <span className="lg:text-[1.875rem] text-black dark:text-white leading-7 md:text-[1.5rem] text-center ">Whichever way you want, earn while you use our app</span>
      </div>
    </div>
  );
}
