"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./../../public/images/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

   

  return (
    <header className="relative sm:top-30 top-10 left-0 w-full z-100">
      <div className="flex justify-between items-center w-11/12 xl:w-9/12 mx-auto px-6 py-4 bg-black/80 backdrop-blur-md rounded-full border border-white/10">
        <div className="w-10 h-10 relative">
          <Image src={Logo} alt="Go Logo" fill className="object-contain" />
        </div>
        <button
          className="cursor-pointer text-white uppercase flex items-center gap-2 "
          onClick={() => setMenuOpen(true)}
        >
          <span className="text-md tracking-widest ">Menu</span>
          <div className="w-7 h-7 relative cursor-pointer">
            <Image src="./../icons/hamburger.svg" alt="Menu" fill />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-end justify-center text-white z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-end gap-8 tracking-wide w-[75rem] 2xl:w-full uppercase font-extrabold text-[clamp(1rem,4vw,6rem)] px-5 sm:px-18 2xl:px-32 leading-none">
              <button
                className="absolute top-28 text-xl cursor-pointer font-bold"
                onClick={() => setMenuOpen(false)}
              >
                CLOSE ✕
              </button>

              <a href="#">Services</a>
              <a href="#">Work</a>
              <a href="#">Insights</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}