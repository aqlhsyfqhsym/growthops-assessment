'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      {/* Nav Container */}
      <motion.nav
        className="w-full px-6 py-3 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-between text-white shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg" // Replace with your actual logo path
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>

        {/* Menu button */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={toggleMenu}
        >
          <span className="text-sm font-medium tracking-wider">MENU</span>
          <div className="space-y-1">
            <span className="block w-4 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </div>
        </div>
      </motion.nav>

      {/* Animated Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex flex-col items-center justify-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="space-y-6 text-2xl font-semibold">
              <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
              <li><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
              <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
