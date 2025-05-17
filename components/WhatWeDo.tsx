import React from "react";
import Image from "next/image";
import NumberedImage from "./molecules/NumberredImage";

const numberedImageData = [
  {
    number: 1,
    title: `Performance\nMarketing &\nAnalytics`,
    items: [
      "Performance Media",
      "Search Engine Optimisation",
      "Web & App Analytics",
      "Conversion Rate Optimisation Through Personalisation",
    ],
    image: "/images/photos.png",
    reverse: false,
  },
  {
    number: 2,
    title: `Digital-First\nCreative`,
    items: [
      "Brand & Communication Strategy",
      "Content Hubs",
      "Creative Services",
     ],
    image: "/images/photos.png",
    reverse: true,
  },
  {
    number: 3,
    title: `Marketing\nTechnology`,
    items: [
      "Technology Consulting",
      "MarTech Deployment & Partnerships",
      "Cloud Readiness & Migration",
      "Mobile Development",
      "Custom Web Development",
      "Solution Architecture",
    ],
    image: "/images/photos.png",
    reverse: false,
  },
    {
    number: 4,
    title: `Experiece Design &\nStratergy`,
    items: [
      "Technology Consulting",
      "MarTech Deployment & Partnerships",
      "Cloud Readiness & Migration",
      "Mobile Development",
      "Custom Web Development",
      "Solution Architecture",
    ],
    image: "/images/photos.png",
    reverse: true,
  },
];

export default function WhatWeDo() {
  return (
    <section className="text-white py-24 px-6 md:px-12 text-center">
      <span className="text-[clamp(2rem,6vw,6rem)] font-extrabold uppercase text-white mt-40">
        What we do
      </span>
      <div className="flex flex-col gap-12 mt-16">
        {numberedImageData.map((block, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              block.reverse ? "md:flex-row-reverse" : ""
            } justify-center items-center w-full sm:w-3/5 sm:mx-auto gap-8`}
          >
            <NumberedImage
              number={block.number}
              title={block.title}
              items={block.items}
            />
            <Image
              src={block.image}
              alt={`design shape ${block.number}`}
              width={600}
              height={600}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
