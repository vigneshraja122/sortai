import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center ">
      <div className="flex items-center w-full h-[60%] mt-20 gap-6">
        <div className="w-[30%] h-full flex justify-center mt-12">
          <img src="/footer.png" className="rounded-2xl w-[80%] h-[50%]"></img>
        </div>
        <div className="w-[70%] text-white flex">
          <div className="flex flex-col w-[25%] space-y-4">
            <h1>Product</h1>
            <p className="font-bold">All features</p>
            <p className="font-bold">Connect & Integrate</p>
            <p className="font-bold">Draft & Negotiate</p>
            <p className="font-bold">Analyze</p>
            <p className="font-bold">Report</p>
            <p className="font-bold">Manage & Automate</p>
            <p className="font-bold">Collaborate</p>
          </div>
          <div className="flex flex-col w-[25%] space-y-4">
            <h1>Solutions</h1>
            <p className="font-bold">Success Stories</p>
            <a className="font-bold">Legal</a>
            <a className="font-bold">Procurement</a>
            <a className="font-bold">Operations</a>
            <a className="font-bold">Sales</a>
            <a className="font-bold">Finance</a>
            <a className="font-bold">IT</a>
          </div>
          <div className="flex flex-col w-[25%] space-y-4">
            <h1>Resources</h1>
            <a className="font-bold">Resource Library</a>
            <a className="font-bold">Events</a>
            <a className="font-bold">Blog</a>
            <a className="font-bold">Glossary</a>
            <a className="font-bold">Contact Us</a>
          </div>
          <div className="flex flex-col w-[25%] space-y-4">
            <h1>Company</h1>
            <a className="font-bold">About Us</a>
            <a className="font-bold">Evisort AI Labs</a>
            <a className="font-bold">In The News</a>
            <a className="font-bold">Careers</a>
            <a className="font-bold">Partners</a>
          </div>
        </div>
      </div>
      <div className="w-full h-[40%] text-white flex justify-center mt-20">
        <div className="space-y-16 w-[70%] h-full ml-6">
          <div className="w-full flex items-center text-xs gap-6">
            <p>(888) 384-7678 (Evisort)</p>
            <p>130 Sutter Street, Floor 2, San Francisco, California 94104</p>
          </div>
          <div className="flex items-center text-xs gap-8">
            <a>Privacy</a>
            <a>Cookies settings</a>
            <a>Terms</a>
            <a>GDPR</a>
          </div>
        </div>
        <div className="w-[30%] flex gap-8">
          <Facebook className="w-8 h-8 bg-white text-black rounded-lg p-1" />
          <Instagram className="w-8 h-8 bg-white text-black rounded-lg p-1" />
          <Linkedin className="w-8 h-8 bg-white text-black rounded-lg p-1" />
          <Twitter className="w-8 h-8 bg-white text-black rounded-lg p-1" />
          <Youtube className="w-8 h-8 bg-white text-black rounded-lg p-1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
