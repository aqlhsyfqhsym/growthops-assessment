import Image from "next/image";
import ScrollingClient from "@/components/ScrollingClient";
import Navbar from "@/components/Navbar";
import IntroPage from "@/components/IntroPage";
 
export default function Home() {
  return (
    <div className="scroll-smooth">
      <IntroPage />

     
        <ScrollingClient>
          <Navbar />
          <div className="p-8 text-center text-lg">
            Your custom content
          </div>
        </ScrollingClient>
     </div>
  );
}
