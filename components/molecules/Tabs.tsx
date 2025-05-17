import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="text-white px-10 py-10">
      <div className="flex   bg-black rounded-full p-1 border border-gray-700 mb-6 w-fit mx-auto">
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
        <div className="flex flex-col w-3/4 mx-auto text-left">
          <div className="flex flex-row gap-9">
            <p className="text-lg italic mb-4 text-[#00E0DC]">“</p>
            <p className="text-gray-200 text-base text-left mb-6">
              Through this initiative, GrowthOps have shown to have the right
              capabilities to take our platform to the next level. We believe
              the refreshed U.COM.MY will equip us with more insights, enabling
              us to make more data-led decisions that will result in new digital
              experiences that will truly benefit our customers.
            </p>
            <p className="font-semibold">Jasmine Lee</p>
            <p className="text-sm text-gray-500">[Position], [Company Name]</p>
         </div>
        
        </div>
      ),
    },
    {
      label: "Insurance",
      content: <p className="text-gray-300">Insurance content goes here...</p>,
    },
    {
      label: "Fintech",
      content: <p className="text-gray-300">Fintech content goes here...</p>,
    },
    {
      label: "IT",
      content: <p className="text-gray-300">IT content goes here...</p>,
    },
  ];

  return <Tabs tabs={tabData} />;
}
