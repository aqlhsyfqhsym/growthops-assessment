'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollingClientProps {
  children: ReactNode;
}

export default function ScrollingClient({ children }: ScrollingClientProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section className="h-[50vh] flex items-center justify-center">
      <div
        ref={ref}
        className="sticky top-1/4  h-screen flex items-center justify-center"
      >
        <motion.div
          style={{ opacity, y }}
          className=" text-white rounded-lg text-center text-4xl font-bold shadow-2xl"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
