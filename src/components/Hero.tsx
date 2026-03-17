"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-mint-200/40 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-16 w-32 h-32 rounded-full bg-rose-300/30 blur-sm"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-mint-300/30 blur-sm"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block"
        >
          <div className="glass rounded-3xl p-6 sm:p-8 inline-block mx-auto mb-8">
            <Image
              src="/images/logo.png"
              alt="Darling Drink Company"
              width={200}
              height={200}
              className="mx-auto w-40 sm:w-48 h-auto"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl gradient-text mb-4"
        >
          Darling Drink Company
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-rose-600/80 font-medium max-w-2xl mx-auto mb-4"
        >
          Specialty Lemonades &bull; Dirty Sodas &bull; Dirty Energy Drinks
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-base text-rose-500/70 font-medium mb-10"
        >
          Madison, Mississippi&apos;s favorite mobile drink trailer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => handleScroll("#book")}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Book Us For Your Event
          </button>
          <button
            onClick={() => handleScroll("#menu")}
            className="px-8 py-4 rounded-full glass font-bold text-rose-700 text-lg hover:bg-white/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            View Our Menu
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — positioned outside the content div at the very bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold text-rose-400/70 tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-rose-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
