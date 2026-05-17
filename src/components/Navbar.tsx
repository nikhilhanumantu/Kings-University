"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Research", href: "#" },
    { name: "Campus", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-40px)] md:max-w-7xl md:rounded-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b md:border border-white/20 dark:border-white/10 shadow-lg py-4 md:py-3"
            : "bg-transparent py-6 md:py-4"
        } flex justify-between items-center px-6 md:px-8`}
      >
        <div className="text-xl md:text-2xl font-bold tracking-tight text-primary dark:text-white z-50">
          Kings University
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                i === 0
                  ? "text-primary dark:text-white font-semibold"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all active:scale-95">
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-50 p-2 text-primary dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0a0a0a] pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={i}
                  className="border-b border-gray-100 dark:border-white/10 pb-4 text-gray-800 dark:text-gray-200 hover:text-primary"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto mb-10"
            >
              <button className="w-full bg-primary text-white py-4 rounded-xl text-lg font-semibold shadow-lg active:scale-95 transition-transform">
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
