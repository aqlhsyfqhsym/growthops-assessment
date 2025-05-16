import React from "react";

export default function About() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto space-y-8 ">
        <p className="text-lg md:text-3xl leading-relaxed font-medium">
          With a focus in fusing
          <span className="text-cyan-400 font-medium">strategy</span>,<br />
          <span className="inline-block border border-cyan-400 px-2 py-0.5 rounded text-cyan-400 font-medium">
            design
          </span>
          and{" "}
          <span className="text-cyan-400 font-mono">&lt;technology/&gt;</span>{" "}
          to
          <br /> build and sustain market leaders
        </p>
 <p className="animate-gradient">Test Animation</p>

        <p className="text-lg md:text-3xl font-medium tracking-wider">
          this is
        </p>

        <h2
          className="text-4xl md:text-5xl font-extrabold
             bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400
             bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
        >
          GrowthOps <span className="text-white">Asia</span>
        </h2>
      </div>
    </section>
  );
}