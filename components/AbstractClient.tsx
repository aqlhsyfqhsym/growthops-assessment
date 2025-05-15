"use client";

import React, { JSX } from "react";

export default function AbstractComponent(): JSX.Element {
  const images = [
    "/images/abstract/1.svg",
    "/images/abstract/2.svg",
    "/images/abstract/3.svg",
    "/images/abstract/4.svg",
    "/images/abstract/5.svg",
    "/images/abstract/6.svg",
  ];

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Abstract Layer ${index + 1}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          draggable={false}
        />
      ))}
    </div>
  );
}
