import React from "react";
import Image from "next/image";
import TitleHeading from "./molecules/StatHighlights";

export default function Result() {
  return (
    <section className=" text-white  md:px-12 text-center">
      <span className="relative inline-block px-10">
        <Image
          src="./../images/shape/deisgn-ellipse.svg"
          alt="design shape"
          fill
          className="absolute inset-0 w-full h-full object-contain "
        />
        <span
          className="relative z-10 text-[clamp(1.5rem,6vw,6rem)] font-extrabold bg-clip-text text-transparent uppercase"
          style={{
            backgroundImage:
              "linear-gradient(90.54deg, #004CBA 0.06%, #19B2A7 44.49%, #FDD196 83.69%)",
          }}
        >
          Unforgettable
        </span>
      </span>
      <span
        className="text-[clamp(1rem,6vw,6rem)] font-extrabold uppercase text-white "
        style={{ lineHeight: "30px" }}
      >
        <br /> Results
      </span>
 
      <div className="mx-auto lg:w-1/2 flex flex-col gap-12 md:gap-0 mt-10 py-12 px-6">
        <TitleHeading
          statPercentage="400%"
          statTitle="Increase in Organic Page Views"
          description="Using our SEO services, it also resulted in a 109% increase in page visibility"
          highlightColor="#00E0DC"
          align="start"
        />

        <TitleHeading
          statPercentage="4.5%"
          statTitle="Increase in sales"
          description="Through our creative services, a national automaker experienced a 4.5% increase in sales amidst a -4.6% market decline. They also had a 2% increase in market share, and a 5.6 point shift in brand perception"
          highlightColor="#00E0DC"
          align="end"
        />
        <TitleHeading
          statPercentage="96%"
          statTitle="faster page launches"
          description="Using AEM, a leading Telco saw these results"
          bars={[
            {
              label: "Campaign launches",
              from: "7 days",
              to: "2 days",
              value: 80,
            },
            {
              label: "Page launches",
              from: "2 days",
              to: "2 hours",
              value: 90,
            },
          ]}
          highlightColor="#00E0DC"
          align="start"
        />

        <TitleHeading
          statPercentage="71%"
          statTitle="reduction in cpl"
          description="After optimising the performance media funnel, a leading bank saw savings over AUD$300 in the first year"
          highlightColor="#00E0DC"
          align="end"
        />

        <TitleHeading
          statPercentage="38%"
          statTitle="conversion rate improvement"
          description="Using Adobe Target to A/B test landing pages’ forms, we saw an increase in conversion rate"
          highlightColor="#00E0DC"
          align="start"
        />
      </div>
    </section>
  );
}