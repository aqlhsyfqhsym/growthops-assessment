"use client";

import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Intro from "@/components/Landing";
import About from "@/components/About";
import Abstract from "@/components/atoms/Abstract";
import WhatWeDo from "@/components/WhatWeDo";
import Result from "@/components/Result";
import Feedback from "@/components/Feedback";
import PartnerLogo from "@/components/PartnerLogo";
import Footer from "@/components/Footer";
import Preloader from "@/components/Splashscreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

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
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Intro />
      <Abstract align="left" variant="svg1" />
      <div className="flex flex-col-reverse sm:flex-col">
        <About />
        <WhatWeDo />
      </div>
      <Result />
      <Abstract align="right" variant="svg2" />
      <Feedback />
      <PartnerLogo />
      <div className="flex justify-center mb-16">
        <Link href="/contact">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full shadow-md transition">
            Let’s chat
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
