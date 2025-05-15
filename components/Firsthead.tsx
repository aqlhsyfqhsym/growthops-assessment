"use client";
import Image from "next/image";
import Background from "./../public/images/abstract.svg";
import BackgroundMobile from "./../public/images/abstract-mobile.svg";
import { useScroll, useTransform, motion } from "framer-motion";
import { JSX, useRef } from "react";

export default function Section(): JSX.Element {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["70%", "-10%"]);

  return (
    <div
      ref={container}
      className="relative h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div style={{ y }} className="relative w-full h-full">
          {/* Desktop Background */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src={Background}
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Mobile Background */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src={BackgroundMobile}
              alt="Background mobile"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative flex items-center justify-center h-full px-5 sm:px-18 2xl:px-30">
           <div className="w-[75rem] 2xl:w-full flex flex-col uppercase font-extrabold text-[clamp(2rem,6vw,8rem)] px-5 sm:px-18 2xl:px-30 leading-none ">
            <h1 className="">Your new-breed,</h1>  
            <h1 className="text-end">end-to-end</h1>  
            <h1 className="sm:ps-30">digital ally</h1>
          </div>
      </div>
    </div>
  );
}
