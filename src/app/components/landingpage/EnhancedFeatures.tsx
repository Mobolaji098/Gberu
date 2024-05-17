import Image from "next/image";


export default function EnhancedFeatures() {

    const serviceImages = [
        ['/truckback.png'],
        ['/gberuBus.png'],
        ['/truck.png'],
        ['/scooter.png'],
        ['/tesla.png'],
        ['/toyotacorolla.png','/fruitcart.png']
      ];

  return (
    <div className="bg-white dark:bg-black">
    <div className={`relative  flex flex-col  py-16  w-full lg:max-w-[1300px] max-w-[650px] m-auto `}>
      <h1 className={`flex dark:text-white  items-center justify-center `}>
        <span className=" font-semibold  p-2 text-center "> Enhance Features </span>
      </h1>
      <h2 className={`lg:font-black lg:text-6xl md:text-4xl text-3xl flex dark:text-white  items-center justify-center my-8`}>
      We understand your needs </h2>
      <div className="flex gap-7 my-10 justify-center items-center flex-wrap ">
        <div className=" text-white font-semibold bg-red-500 rounded-2xl w-[500px] h-[500px] px-10 py-12 relative overflow-hidden">
          <p className="text-sm">For Users</p>
          <p className="py-6 text-2xl">Ease in Carrier selection</p>
          <p className="text-sm">Our flagship service, inventory financing, provides retailers with the capital they need to purchase inventory from our network of trusted partner distributors.</p>  
            <Image
                    className=" lg:absolute right-12 mt-5 mx-auto "
                    src= '/gberu app booking 4.png'
                    width={150}
                    height={150}
                    alt="Our service"
                    />

        </div>
        <div className=" text-white font-semibold bg-black rounded-2xl w-[500px] h-[500px] px-10 py-12 relative overflow-hidden">
          <p className="text-sm">For Users</p>
          <p className="py-6 text-2xl">Offer your price</p>
          <p className="text-sm">Our flagship service, inventory financing, provides retailers with the capital they need to purchase inventory from our network of trusted partner distributors.</p>  
            <Image
                    className=" lg:absolute right-12 mt-5 mx-auto "
                    src= '/gberu app quote3.png'
                    width={150}
                    height={150}
                    alt="Our service"
                    />

        </div>
        <div className=" text-white font-semibold bg-black rounded-2xl w-[500px] h-[500px] px-10 py-12 relative overflow-hidden">
          <p className="text-sm">For Users</p>
          <p className="py-6 text-2xl">Ride control</p>
          <p className="text-sm">Our flagship service, track your pakage, rate the courier service. We verify every courier’s basic info and documents before they join the app
</p>  
            <Image
                    className=" lg:absolute right-12 mt-5 mx-auto "
                    src= '/confirm.png'
                    width={180}
                    height={180}
                    alt="Our service"
                    />

        </div>
        <div className=" text-black font-semibold bg-white rounded-2xl w-[500px] h-[500px] px-10 py-12 relative overflow-hidden">
          <p className="text-sm">For Drivers</p>
          <p className="py-6 text-2xl">Flexibilty in Orders and Payment</p>
          <p className="text-sm">Drivers can access a wide range of deliver goods, accept at your pace , empowering them to grow their business.</p>  
            <Image
                    className=" lg:absolute right-12 mt-5 mx-auto"
                    src= '/gberu driver app homepage.png'
                    width={150}
                    height={150}
                    alt="Our service"
                    />

        </div>
        
      </div>

    </div>
    </div>
  );
}



// Ease of usage
// Ease in selection of the SendCarrier
// Offer your price
// Ride control, rate the SendCarrier We verify every courier’s basic info and documents before they join the app


