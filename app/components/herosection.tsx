import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Herosection = () => {
  return (
    <div className="w-full h-[600px] bg-[#fff9f0] flex items-center justify-center">
      <div className="w-[45%] h-full flex flex-col justify-center space-y-5 ">
        <h1 className="text-5xl font-bold">
          The unparalleled leader in contract AI
        </h1>
        <div className="space-y-1">
          <p className="font-bold text-lg">
            AI is evolving quickly. Choose your partner wisely.
          </p>
          <p className="text-lg">
            Only Evisort delivers a complete, AI-native platform for end-to-end
            contract lifecycle management, including the first large language
            model built specifically for contracts.
          </p>
        </div>
        <div className="flex items-center">
          <Input className="w-64 h-12" />
          <Button className="h-12 bg-blue-600">Get a demo</Button>
        </div>
      </div>
      <div className="w-[45%]">
        <video src="/Website_Hero Header on Vimeo.mhtml"></video>
      </div>
    </div>
  );
};

export default Herosection;
