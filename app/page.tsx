"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";

import Masthead from "@/components/Firsthead";
import About from "@/components/About";
import Abstract from "@/components/atoms/Abstract";
import WhatWeDo from "@/components/WhatWeDo";
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
    <div className="scroll-smooth bg-black/80">
      <Navbar />
      <Masthead />
         <Abstract align="left" variant="svg1" />
        <About />

        <WhatWeDo />
     </div>
  );
}
