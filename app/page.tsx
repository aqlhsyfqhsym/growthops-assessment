import Image from "next/image";
import ScrollingClient from "@/components/ScrollingClient";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="scroll-smooth items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/images/landing.png"
          alt="intro page"
          fill
          className="object-cover sm:block hidden"
        />
         <Image
          src="/images/mobile.png"
          alt="intro page"
          fill
          className="object-cover sm:hidden block"
        />
        <ScrollingClient>
           <Navbar/>
          <div>Your custom content</div>
         </ScrollingClient> 
      </main>
    </div>
  );
}
