import { Button } from "@/components/ui/button";

const Contracts = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#f3f9ff]">
      <h1 className="text-5xl font-sans font-bold pt-10">
        Know everything about your contracts
      </h1>
      <div className="w-full p-10 flex justify-center items-center gap-8">
        <div className="w-[30%] space-y-6">
          <img
            src="/65a7b60602e6d181e64872a8_ask-anything.gif"
            className="rounded-lg"
          ></img>
          <div className="flex flex-col justify-center items-center space-y-6">
            <h1 className="font-bold text-xl">Ask anything.</h1>
            <p className="text-center">
              Talk to your agreements. Ask questions in simple, natural language
              and get clear, reasoned answers — to surface opportunities,
              identify risks, and manage obligations.
            </p>
            <Button>Learn more</Button>
          </div>
        </div>
        <div className="w-[30%] space-y-6">
          <img
            src="/65ae61fe0d2c5eab73e5f8ab_track-everything 1.gif"
            className="rounded-lg"
          ></img>
          <div className="flex flex-col justify-center items-center space-y-6">
            <h1 className="font-bold text-xl">Track everything.</h1>
            <p className="text-center">
              Be a know-it-all. Track terms of interest across all your
              contracts and related documents, with custom AI to generate the
              data points that matter for your sales, procurement, risk, and
              finance teams.
            </p>
            <Button>Learn more</Button>
          </div>
        </div>
        <div className="w-[30%] space-y-6">
          <img
            src="/65a7b62f57eb015c408ef48d_streamline-anything.gif"
            className="rounded-lg"
          ></img>
          <div className="flex flex-col justify-center items-center space-y-6">
            <h1 className="font-bold text-xl">Streamline it all.</h1>
            <p className="text-center">
              Stamp out busy work. Speed time to revenue while reducing cost and
              risk, with automated redlining, clause generation, and
              configurable, AI-powered workflows to eliminate manual tasks.
            </p>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
