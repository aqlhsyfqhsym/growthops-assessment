import React from "react";
import Tabs from "./molecules/Tabs";
 

 
export default function Feedback() {
  return (
    <section className="bg-black/80 text-white py-24 px-6 md:px-12 text-center flex flex-col w-4/5 mx-auto">
      <span className="text-[clamp(2rem,6vw,6rem)] font-extrabold uppercase text-white mt-40">
        What clients say
      </span>
     <Tabs/> 
    </section>
  );
}
