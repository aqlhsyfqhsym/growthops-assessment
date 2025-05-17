import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 text-center hidden sm:block">
      <div className="max-w-4xl mx-auto flex flex-col gap-20 ">
        <p
          className="text-2xl  font-medium relative "
          style={{ lineHeight: "44px" }}
        >
          With a focus in fusing
          <span className="text-cyan-400 font-medium"> strategy</span>,<br />
          <span className="relative inline-block px-6 py-1  ">
            <Image
              src="./../images/shape/design-box.svg"  
              alt="design shape"
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="relative z-10 text-cyan-400 font-medium ">
              design
            </span>
          </span>{" "}
          and
          <span className="text-cyan-400 font-mono">
            {" "}
            &lt;technology/&gt;{" "}
          </span>{" "}
          to
          <br /> build and sustain market leaders
        </p>

        <p className="text-2xl  font-medium">
          this is
        </p>

        <span
          className="text-[clamp(2rem,6vw,6rem)] font-extrabold
    bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500
    bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]"
        >
          GrowthOps Asia
        </span>  
      </div>
    </section>
  );
}
