"use client";

import React from "react";
import { motion } from "framer-motion";

type MarqueeItemProps = {
  images: string[];
  from: string | number;
  to: string | number;
};

const MarqueeItem: React.FC<MarqueeItemProps> = ({ images, from, to }) => {
  return (
    <div className="flex gradient">
      {[1, 2].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {images.map((image, index) => (
            <img
              className="h-40 w-56 pr-20 object-contain"
              src={image}
              key={index}
              alt={`logo-${index}`}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MarqueeItem;
