"use client";

import React, { useState } from "react";
import Image from "next/image";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurOffice from "@/components/OurOffice";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setMessage(result.message);

      console.log("Submitted form:", data);
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen mx-auto mt-10 text-white p-8 md:p-12">
        <div className=" max-w-[1440px] mx-auto">
          <h1 className="text-[clamp(2rem,6vw,6rem)] font-extrabold uppercase">
            CONTACT US
          </h1>
          <p className="text-[clamp(1rem,6vw,2rem)] mt-2">
            Let’s create something awesome together
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl mt-14 space-y-6 relative z-20"
          >
               <div className="flex flex-col ">
                <label className="mb-1 text-sm">Full name</label>
                <input
                  name="name"
                  type="text"
                  className="bg-[#0E1015] p-3 rounded-md w-1/2"
                  required
                />
              </div> 
         
            <div className="grid md:grid-cols-2  md:gap-4  py-2 sm:py-0">
           
              <div className="flex flex-col py-2 sm:py-0">
                <label className="mb-1 text-sm">Phone number</label>
                <div className="flex gap-2">
                  <select name="code" className="bg-[#0E1015] p-3 rounded-md">
                    <option>+60</option>
                  </select>
                  <input
                    name="phone"
                    type="tel"
                    className="bg-[#0E1015] p-3 rounded-md w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col py-2 sm:py-0">
                <label className="mb-1 text-sm">Work email</label>
                <input
                  name="email"
                  type="email"
                  className="bg-[#0E1015] p-3 rounded-md w-full"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">I want to</label>
              <div className="flex flex-col md:flex-row gap-4">
                {[
                  "Become a client",
                  "Join the team",
                  "Investor enquiry",
                  "Others",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-[#fefefe]"
                  >
                    <input
                      type="radio"
                      name="want to"
                      value={option}
                      className="accent-green-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">Tell us more</label>
              <textarea
                name="message"
                placeholder="Briefly describe your message here"
                className="bg-[#0E1015] p-3 rounded-md w-full min-h-[120px] text-white placeholder:text-[#666666]"
              />
            </div>

            <div className="space-y-3">
              <label className="flex md:items-center items-start gap-2 text-sm text-[#fefefe]">
                <input
                  type="checkbox"
                  name="subscribe"
                  className="accent-green-500 mt-1"
                />
                I want to subscribe to the occasional insightful materials from
                GrowthOps.
                <span className="text-gray-400">(optional)</span>
              </label>
              <label className="flex md:items-center items-start gap-2 text-sm text-[#fefefe]">
                <input
                  type="checkbox"
                  name="agree"
                  className="accent-green-500 mt-1"
                  required
                />
                I have read and agree to the website’s
                <a href="/privacy-policy" className="underline hidden md:block">
                  privacy policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#33FF85] hover:bg-green-600 text-white font-medium px-6 py-2 rounded-[40px]"
            >
              Submit
            </button>

            {message && <p className="mt-4 text-green-400">{message}</p>}
          </form>
        </div>
        <Image
          src="/images/shape/vector-red.svg"
          alt="Abstract Background"
          width={800}
          height={800}
          className="absolute top-0 left-0 z-10 "
        />
        <Image
          src="/images/shape/vector-green.svg"
          alt="Abstract Background"
          width={800}
          height={800}
          className="absolute top-0 left-0 z-10 "
        />

        <Image
          src="/images/shape/vector-red2.svg"
          alt="Abstract Background"
          width={800}
          height={800}
          className="absolute top-0 right-0 z-10    "
        />
        <Image
          src="/images/shape/vector-green2.svg"
          alt="Abstract Background"
          width={800}
          height={800}
          className="absolute top-0 right-0 z-10  hidden sm:block"
        />

        <OurOffice />
        <h1 className="text-[clamp(2rem,6vw,6rem)] font-extrabold uppercase text-center mb-20 hidden sm:block">
          Keep in touch
        </h1>
        <h1 className="text-[clamp(2rem,6vw,6rem)] font-extrabold uppercase text-left mb-20 block sm:hidden">
          Keep <br /> in touch
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
