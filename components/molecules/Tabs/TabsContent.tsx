// components/TestimonialContent.tsx
import Image from "next/image";
import React from "react";

interface TabsContent {
  quote: string;
  author: string;
  position: string;
}

export const TestimonialContent: React.FC<TabsContent> = ({
  quote,
  author,
  position,
}) => (
  <div className="flex flex-col md:mt-10 md:w-3/4 mx-auto text-left h-screen">
    <div className="flex flex-row gap-2 md:gap-10 items-start">
      <Image
        src="/images/shape/quote.svg"
        alt="design shape"
        width={40}
        height={40}
        className="object-contain"
      />

      <div className="flex flex-col gap-8">
        <p className="text-gray-200 text-[clamp(1rem,6vw,1.5rem)] text-left">
          {quote}
        </p>
        <p className="font-semibold">
          {author}
          <br />
          <span className="text-sm text-gray-500">{position}</span>
        </p>
      </div>
    </div>
  </div>
);
