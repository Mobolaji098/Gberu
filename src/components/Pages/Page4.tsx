import { ButtonColored } from "../ui/Button";
import Image from "next/image";

export default function Page3() {

    const serviceImages = [
        ['/truckback.png'],
        ['/gberuBus.png'],
        ['/truck.png'],
        ['/scooter.png'],
        ['/tesla.png'],
        ['/toyotacorolla.png','/fruitcart.png']
      ];

  return (
    <div className="relative  flex flex-col justify-center  bg-red-500 xl:px-12 py-10 items-center lg:min-w-[1281px] md:min-w-[780px] ">
      <h1 className="flex text-5xl text-white  items-center justify-center ">
        <span className="font-black"> Our Services </span>
      </h1>
      <div className="flex justify-center items-center">
        <span className="lg:text-[1.5rem] p-8 text-white leading-5 text-center md:text-[1rem]">
          {" "}
          Whatever you need, experience more courier and logistics option on the
          app
        </span>
      </div>

        <div className="flex flex-row gap-10  flex-wrap justify-center max-w-screen-xl">
          <Ourservicebox word='Long distance movement' images = {serviceImages[0]}  />
          <Ourservicebox word='Short distance movement' images = {serviceImages[1]}/>
          <Ourservicebox word='Interstate movement' images = {serviceImages[2]}/>
        <Ourservicebox word='Parcel delivery' images = {serviceImages[3]}/>
        <Ourservicebox word='VIP Courier service' images =  {serviceImages[4]}/>
        <Ourservicebox word='Groceries shopping' images = {serviceImages[5]}/>

        </div>
      </div>
  );
}


interface OurserviceProps {
    word:string;
    images:string[];
}


function Ourservicebox({word,images}:OurserviceProps) {
  return <div className=" bg-white rounded-3xl text-black font-bold p-6 h-[233px] w-[371px] relative  ">
    <div className="w-2/3 text-lg">{word}</div> 
  
  <Image
          className=" absolute top-12 left-40 "
          src={images[0]}
          width={212}
          height={212}
          alt="Our service"
        />
{    images[1]? <Image
          className=" absolute bottom-[102px] left-52"
          src={images[1]}
          width={71}
          height={52}
          alt="Our service"
        />:''}

      </div>
    
}
