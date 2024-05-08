import Image from "next/image";
import { ButtonColored } from "../ui/Button";


export default function Page1() {

  return (
    <div className={`flex flex-col min-h-screen  bg-white dark:bg-black lg:min-w-[1281px] overflow-hidden px-12 py-10 relative lg:pb-[20rem] md:min-w-[780px] `}>
        <div className="flex justify-center items-center">
      <Image
        className=" lg:absolute lg:top-10 lg:right-40 lg:ml-8 lg:translate-x-0 "
        src="/gberuPersonCarrybox.png"
        width={450}
        height={450}
        alt="Logistics picture"
      />
      <Image
        className=" z-10 absolute top-[65px] right-0 -translate-x-[-70px] lg:block md:hidden max-md:hidden"
        src="/gberuBus.png"
        width={873}
        height={873}
        alt="Logistics picture"
      />
      </div>
      <div className=" flex flex-col  lg:w-1/2 xl:w-3/5 lg:pt-0 text-center lg:text-left lg:items-start items-center w-full justify-center">
        <h1 className={`text-gray-800 dark:text-white xl:text-6xl lg:text-5xl md:text-3xl text-2xl lg:mt-28 mt-12  leading-snug  lg:tracking-wider text-wrap`}>
          <span className="italic font-medium">Request </span>
          <span className="font-black">
            for a<span className={`text-red-600 dark:text-white}`}> courier</span> service,
          </span>
          <span className="italic font-medium"> anytime </span>
          <span className="font-black">and anywhere </span>
          <span className="italic font-medium"> you are</span>
        </h1>
        <p className={`text-gray-800 dark:text-white font-medium mt-10 lg:text-3xl md:text-2xl lg:w-4/5`}>
          Gberu is your handy courier service app. Your worries are over as your
          good would be delivered safely and on time.
        </p>
        <ButtonColored className="mt-10 text-white text-sm bg-red-600 rounded-r-lg w-[225px] h-[54px] ">
          Download the app
        </ButtonColored>
      </div>
    </div>
  );
}
