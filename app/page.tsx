import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Herosection from "./components/herosection";
import Contracts from "./components/contracts";
import Slidecontainer from "./components/slidecontainer";
import Details from "./components/details";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between container h-22 bg-black">
        <div className="flex items-center gap-4">
          <img src="/aj_logo_21_09_2023 2 (3).svg" className="w-20 h-20"></img>
          <div className="flex items-center gap-4 text-white">
            <a>Product</a>
            <a>Solutions</a>
            <a>Customers</a>
            <a>Resources</a>
            <a>Company</a>
          </div>
        </div>
        <div className="flex items-center gap-5 text-white">
          <a>Search</a>
          <a className="flex items-center">
            <User />
            Login
          </a>
          <Button className="bg-blue-600">Get a demo</Button>
        </div>
      </div>
      <Herosection />
      <Contracts />
      <Slidecontainer />
      <Details />
    </div>
  );
}
