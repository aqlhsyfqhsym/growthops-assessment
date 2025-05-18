"use client";
import Image from "next/image";
import { JSX, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

 
import BackgroundMobile from "./../public/images/abstract-mobile.svg";
import Background from "./../public/images/abstract.svg";

export default function Section(): JSX.Element {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "-55%"]);

  return (
    <div
      ref={container}
      className="relative h-screen overflow-hidden  "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* <Navbar /> */}
      <div className="fixed top-[-20vh] inset-0 -z-10  h-screen ">
        <motion.div style={{ y }} className="relative w-full h-full">
          {/* Desktop Background */}
          <div className="hidden sm:block absolute inset-0 ">
            <Image
              src={Background}
              alt="Background"
              fill
              style={{ objectFit: "contain", top: "10vh" }}
            />
          </div>

          {/* Mobile Background */}
          <div className="block sm:hidden absolute inset-0 ">
            <Image
              src={BackgroundMobile}
              alt="Background mobile"
              fill
              style={{ objectFit: "cover"  }}
            />
          </div>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center justify-center h-full px-5 sm:px-18 2xl:px-30 gap-4">
        <div className="xl:w-[75rem] 2xl:w-full flex flex-col uppercase font-extrabold text-[clamp(2rem,6vw,8rem)] px-5 sm:px-18 2xl:px-52 leading-none ">
          <h1 className="">Your new-breed,</h1>
          <h1 className="text-end">end-to-end</h1>
          <h1 className="sm:ps-30">digital ally</h1>
        </div>
        <div className="flex flex-col capitalize font-medium text-sm ps-20 sm:hidden ms-10    ">
          <p>
            we are award winning marketing transformation partner delivering
            unforgettable digital brands, experiences and technology
          </p>
        </div>
      </div>
    </div>
  );
}
