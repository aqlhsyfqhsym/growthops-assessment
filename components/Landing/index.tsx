"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideUp } from "./animate";

const blink = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Section() {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative h-[120vh] flex items-center justify-center overflow-hidden px-5 sm:px-18 2xl:px-30 "
    >
      {/* Background SVG stack */}
      <div className="absolute inset-0 z-10 items-center justify-center hidden md:flex -top-36">
        <motion.div
          {...blink}
          className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/landing/1.svg"
            alt="Background 1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>
        <motion.div
          {...blink}
          className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/landing/2.svg"
            alt="Background 2"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>
        <motion.div
          {...blink}
          className="absolute top-1/2 left-1/2 w-[50vw] h-[50vw] -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/landing/3.svg"
            alt="Background 3"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>
        <motion.div
          {...blink}
          className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/landing/4.svg"
            alt="Background 4"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>
        <motion.div
          {...blink}
          className="absolute top-1/2 left-1/2 w-[70vw] h-[70vw] -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/landing/5.svg"
            alt="Background 5"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>
        <motion.div
          {...blink}
          className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/landing/6.svg"
            alt="Background 6"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>
      </div>
      <div className="block md:hidden absolute inset-0 ">
        <Image
          src="/images/abstract-mobile.svg"
          alt="Background mobile"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

  
      <div className="relative z-10 flex flex-col uppercase font-extrabold text-[clamp(2rem,6vw,8rem)] leading-none gap-4 max-w-8xl -top-16">
        <h1>Your new-breed,</h1>
        <h1 className="text-end">end-to-end</h1>
        <h1 className="sm:ps-30">digital ally</h1>
        <div className="flex flex-col capitalize font-medium text-sm ps-20 sm:hidden ms-10">
          <p>
            we are award winning marketing transformation partner delivering
            unforgettable digital brands, experiences and technology
          </p>
        </div>
      </div>
    </motion.main>
  );
}
