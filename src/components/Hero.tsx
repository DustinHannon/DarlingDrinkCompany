"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const basePath = process.env.NODE_ENV === "production" ? "/DarlingDrinkCompany" : "";

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={`${basePath}/images/logo.png`}
            alt="Darling Drink Company"
            width={220}
            height={220}
            className="mx-auto mb-6 drop-shadow-lg"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl gradient-text text-shadow mb-4"
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-rose-400/50 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-rose-400/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
