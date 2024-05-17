import WaitingListforms from "../forms/waitingListforms";

export default function ComingSoon() {

  return (
    <div className="bg-white dark:bg-black flex justify-center min-h-screen">
        <div className="flex flex-col max-w-[700px] w-full justify-center items-center">
        <img
             className="w-[200px]"
             src="/coming-soon.svg"
             alt="coming soon picture"
             />
             <div className="flex justify-center flex-col items-center text-center max-w-96">
                <p className="m-6"> We're still</p>
                <p className="mb-6 text-3xl font-bold">Cooking on our Platform</p>
                <p className="mb-6">Be the first to know when food is done. And get to experience tech at it's finest.</p>
             </div>
             <WaitingListforms/>
        </div>
    </div>
  );
}
