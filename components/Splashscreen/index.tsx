"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import { slideUp } from "./anim";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className={styles.introduction}
        >
          <div className="hidden sm:block absolute inset-0 ">
            <Image
              src="/images/landing.png"
              alt="Landing"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="block sm:hidden absolute inset-0 ">
            <Image
              src="/images/mobile.png"
              alt="Landing"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
