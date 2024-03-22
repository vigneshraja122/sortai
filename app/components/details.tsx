import { Button } from "@/components/ui/button";

const Details = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-14">
      <h1 className="text-5xl font-bold">Experience AI-native Contract</h1>
      <h1 className="text-5xl font-bold">Lifecycle Management</h1>
      <div className="space-y-20 mt-16">
        <div className="w-full flex justify-between items-center gap-20 mt-10 container">
          <div className="w-[40%] space-y-4">
            <h1 className="text-3xl font-bold">Connect</h1>
            <p className="">
              Get in sync. Connect Salesforce, SAP Ariba, Box, Sharepoint and
              hundreds of other systems with Evisort to automatically ingest and
              analyze contracts at scale, enable e-signature, and deliver
              AI-enriched contract data to the tools your teams use every day.
            </p>
            <Button className="bg-blue-600">Learn more</Button>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img
              src="/65a7b6da3817ee1dcf92309f_connect.gif"
              className="w-[90%] h-[90%]"
            ></img>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-20 mt-10 container">
          <div className="w-[50%] flex justify-center items-center">
            <img src="/analys.gif" className="w-[90%] h-[90%]"></img>
          </div>
          <div className="w-[40%] space-y-4">
            <h1 className="text-3xl font-bold">Analyze</h1>
            <p className="">
              Know everything. Surface risks, opportunities, and actionable
              insights easily with Evisort&#39;s customizable AI and dashboards,
              advanced search and filtering, conversational AI experience, and
              seamless reporting.
            </p>
            <Button className="bg-blue-600">Learn more</Button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-20 mt-10 container">
          <div className="w-[40%] space-y-4">
            <h1 className="text-3xl font-bold">Accelerate</h1>
            <p className="">
              Supercharge your workflows. Simplify every stage of the contract
              lifecycle — ticketing, drafting, editing, negotiation, and storage
              — with Evisort&#39;s AI-powered workflows, risk analysis, automated
              redlining, and total visibility and accountability.
            </p>
            <Button className="bg-blue-600">Learn more</Button>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img src="/document.gif" className="w-[90%] h-[90%]"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
