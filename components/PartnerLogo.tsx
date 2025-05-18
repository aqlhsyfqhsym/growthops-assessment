import React from "react";
import Image from "next/image";
import LogoMarquee from "./molecules/Marquee/MarqueeItem";

const logos = [
  { src: "/logos/uob.svg", alt: "UOB" },
  { src: "/logos/toyota.svg", alt: "Toyota" },
  { src: "/logos/posb.svg", alt: "POSB" },
  { src: "/logos/singlife.svg", alt: "Singlife" },
  { src: "/logos/amway.svg", alt: "Amway" },
];

export default function PartnerLogo() {
  return (
    <section className=" text-white  md:px-12 text-center mt-20">
      <span className="relative inline-block px-6">
        <Image
          src="./../images/shape/deisgn-ellipse2.svg"
          alt="design shape"
          fill
          className="absolute inset-0 w-full h-full object-contain "
        />
        <span
          className="relative z-10 text-[clamp(1.5rem,6vw,6rem)] font-extrabold bg-clip-text text-transparent uppercase"
          style={{
            backgroundImage:
              "linear-gradient(91.91deg, #9747FF 0.18%, #96BFFD 32.82%)",
          }}
        >
          Super
        </span>
      </span>
      <span
        className="text-[clamp(1rem,6vw,6rem)] font-extrabold uppercase text-white "
        style={{ lineHeight: "32px" }}
      >
        Proud to <br /> work with
      </span>

      <div className="container mx-auto w-full h-screen text-white flex justify-center items-center overflow-x-hidden">
        <LogoMarquee />
      </div>
    </section>
  );
}
