import Marquee from "react-fast-marquee";

const Slidecontainer = () => {
  return (
    <Marquee>
      <div className="w-full flex flex-col justify-start items-start bg-gray-100 rounded-lg p-2">
        <h1 className="text-3xl font-bold">Get fast ROI</h1>
        <div className="w-full flex items-center gap-2">
          <img
            src="/Screenshot 2024-03-22 125817.png"
            className="w-[60%] h-96"
          ></img>
          <img
            src="/65a5022cd602092b9483a697_Workday_Hero-p-500.png"
            className="w-[30%] h-96"
          ></img>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start bg-gray-100 rounded-lg p-2">
        <h1 className="text-3xl font-bold">Automate complaince</h1>
        <div className="w-full flex items-center gap-2">
          <img
            src="/Screenshot 2024-03-22 133915.png"
            className="w-[60%] h-96"
          ></img>
          <img
            src="/65a5020123fc63adf9a71e52_Five Rivers_Hero-p-500.png"
            className="w-[30%] h-96"
          ></img>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start bg-gray-100 rounded-lg p-2">
        <h1 className="text-3xl font-bold">Getup and running fast</h1>
        <div className="w-full flex items-center gap-2">
          <img
            src="/Screenshot 2024-03-22.png"
            className="w-[60%] h-96"
          ></img>
          <img
            src="/65a16d4156d9192c8b6963f5_Microsoft_Hero-p-500.png"
            className="w-[30%] h-96"
          ></img>
        </div>
      </div>
    </Marquee>
  );
};

export default Slidecontainer;
