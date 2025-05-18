"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";

import Masthead from "@/components/Firsthead";
import About from "@/components/About";
import Abstract from "@/components/atoms/Abstract";
import WhatWeDo from "@/components/WhatWeDo";
import Result from "@/components/Result";
import Feedback from "@/components/Feedback";
import PartnerLogo from "@/components/PartnerLogo";
import Footer from "@/components/Footer";
  
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
    <div className="scroll-smooth ">
      <Navbar />
      <Masthead />
      <Abstract align="left" variant="svg1" />
      <div className ="flex flex-col-reverse sm:flex-col">
      <About />
      <WhatWeDo />
      </div>
      <Result />
      <Abstract align="right" variant="svg2" />
      <Feedback />
      <PartnerLogo />
      <Footer />
 

    </div>
  );
}
