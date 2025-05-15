"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import IntroPage from "@/components/IntroPage";
import Masthead from "@/components/Firsthead";
// import Abstract from "@/components/AbstractClient";
  
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="scroll-smooth">
      <IntroPage />
      <Masthead />
     </div>
  );
}
