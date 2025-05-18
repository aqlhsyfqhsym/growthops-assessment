import React from "react";
import MarqueeItem from "./LogoMarquee";

const Marquee = () => {
  const upperMarquee = [
    "images/logo/group1/logo-1.svg",
    "images/logo/group1/logo-2.svg",
    "images/logo/group1/logo-3.svg",
    "images/logo/group1/logo-4.svg",
     "images/logo/group1/logo-6.svg",
    "images/logo/group1/logo-7.svg", 
    "images/logo/group1/logo-8.svg", 
  ];

    const middleMarquee = [ 
    "images/logo/group2/logo-17.svg",
    "images/logo/group2/logo-18.svg", 
    "images/logo/group2/logo-19.svg",
    "images/logo/group2/logo-20.svg",
    "images/logo/group2/logo-21.svg",
    "images/logo/group2/logo-22.svg",
    "images/logo/group2/logo-23.svg",
  ];

  const lowerMarquee = [
    "images/logo/group3/logo-1.svg",
    "images/logo/group3/logo-2.svg",
    "images/logo/group3/logo-3.svg",
    "images/logo/group3/logo-4.svg",
    "images/logo/group3/logo-5.svg",  
    "images/logo/group3/logo-8.svg",
     "images/logo/group3/logo-10.svg",
    ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={middleMarquee} from={"-100%"} to={0} />
      <MarqueeItem images={lowerMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;
