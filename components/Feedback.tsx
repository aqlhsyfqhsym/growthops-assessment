import React from "react";
import Tabs from "./molecules/Tabs/Tabs";
 

 
export default function Feedback() {
  return (
    <section className= " text-white xl:py-24 xl:px-12 text-center flex flex-col px-6 xl:w-4/5 mx-auto ">
      <div className="min-h-[65vh] sm:h-[80vh]">
      <span className="text-[clamp(2rem,6vw,6rem)] font-extrabold uppercase text-white ">
        What clients say
      </span>
      <Tabs/> 
     </div>
    </section>
  );
}
