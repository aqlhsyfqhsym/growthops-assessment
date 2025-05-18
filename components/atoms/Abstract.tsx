"use client";

import Image from "next/image";

type AbstractProps = {
  align?: "left" | "right";
  variant?: "svg1" | "svg2";
};

export default function Abstract({
  align = "left",
  variant = "svg1",
}: AbstractProps) {
  const isLeft = align === "left";

  // Assuming you saved the SVGs as image files in /public/images/abstract/
  const imageSrc =
    variant === "svg1"
      ? "/images/shape/vector.svg"
      : "/images/shape/vector2.svg";

  return (
    <div
      className={`absolute z-10 ${isLeft ? "left-0" : "right-0"}  `}
    >
      <Image
        src={imageSrc}
        alt="abstract shape"
        width={variant === "svg1" ? 652 : 457}
        height={1061}
        className="object-contain"
        priority
      />
    </div>
  );
}
