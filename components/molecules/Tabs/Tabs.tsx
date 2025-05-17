import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialContent } from "./TabsContent";

// Props for the individual tabs
interface TabData {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabData[];
  accentColor?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, accentColor = "#00E0DC" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-white md:px-10 md:py-10 ">
      <div className="flex   bg-black rounded-full p-1 border border-gray-700 my-6 w-fit mx-auto">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
              idx === activeIndex ? "text-black font-semibold" : "text-gray-300"
            }`}
            style={{
              backgroundColor:
                idx === activeIndex ? accentColor : "transparent",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="absolute w-full"
          >
            {tabs[activeIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function ExampleTabs() {
  const tabData: TabData[] = [
    {
      label: "Telco",
      content: (
        <TestimonialContent
          quote="Through this initiative, GrowthOps have shown to have the right
capabilities to take our platform to the next level. We believe
the refreshed U.COM.MY will equip us with more insights,
enabling us to make more data-led decisions that will result in
new digital experiences that will truly benefit our customers."
          author="Jasmine Lee"
          position="[Position], [Company Name]"
        />
      ),
    },
    {
      label: "Insurance",
   content: (
        <TestimonialContent
          quote="Through this initiative, GrowthOps have shown to have the right
capabilities to take our platform to the next level. We believe
the refreshed U.COM.MY will equip us with more insights,
enabling us to make more data-led decisions that will result in
new digital experiences that will truly benefit our customers."
          author="Jasmine Lee"
          position="[Position], [Company Name]"
        />
      ),
    },
    {
      label: "Fintech",
      content: (
        <TestimonialContent
          quote="Through this initiative, GrowthOps have shown to have the right
capabilities to take our platform to the next level. We believe
the refreshed U.COM.MY will equip us with more insights,
enabling us to make more data-led decisions that will result in
new digital experiences that will truly benefit our customers."
          author="Jasmine Lee"
          position="[Position], [Company Name]"
        />
      ),
    },
    {
      label: "IT",
      content: (
        <TestimonialContent
          quote="Through this initiative, GrowthOps have shown to have the right
capabilities to take our platform to the next level. We believe
the refreshed U.COM.MY will equip us with more insights,
enabling us to make more data-led decisions that will result in
new digital experiences that will truly benefit our customers."
          author="Jasmine Lee"
          position="[Position], [Company Name]"
        />
      ),
    },
  ];

  return <Tabs tabs={tabData} />;
}
