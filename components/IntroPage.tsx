"use client";
import React, { JSX, useRef } from "react";
import Image from "next/image";
import Background from "./../public/images/landing.png";
import BackgroundMobile from "./../public/images/mobile.png";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro(): JSX.Element {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 110], ["0vh", "-150vh"]);

  return (
    <div className="h-screen overflow-hidden  " ref={container}>
      <motion.div style={{ y }} className="relative h-full">
        <div className="hidden sm:block">
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="block sm:hidden">
          <Image
            src={BackgroundMobile}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
