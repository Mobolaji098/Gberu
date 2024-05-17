import { ButtonColored } from "../ui/Button";


export default function Page3() {
  return (
    <div className="bg-white dark:bg-black">
    <div className={`relative  flex flex-col  py-16  w-full lg:max-w-[1300px] max-w-[650px] m-auto `}>
      <h1 className={`flex lg:text-6xl md:text-4xl text-3xl text-black dark:text-white  items-center justify-center `}>
        <span className="lg:font-black font-semibold  p-2 text-center md:font-semibold"> Earn money with us on Gberu </span>
      </h1>
      <div className="flex gap-7 my-10 justify-center items-center flex-wrap ">
        <ButtonColored className=" text-white font-semibold bg-red-500 rounded-2xl w-[200px] h-[54px] ">
          Rider
        </ButtonColored>
        <ButtonColored className=" text-white font-semibold bg-black dark:bg-white dark:text-black rounded-2xl w-[200px] h-[54px] ">
          Driver
        </ButtonColored>
        <ButtonColored className=" text-white font-semibold bg-red-500 rounded-2xl w-[200px] h-[54px] ">
          Referrals
        </ButtonColored>
        <ButtonColored className=" text-white font-semibold bg-black dark:bg-white dark:text-black rounded-2xl w-[200px] h-[54px]">
          Courier
        </ButtonColored>
        
      </div>
      <div className="flex justify-center items-center">
        <span className=" text-black dark:text-white leading-7 md:text-[1.5rem] text-center ">Whichever way you want, earn while you use our app</span>
      </div>
    </div>
    </div>
  );
}
