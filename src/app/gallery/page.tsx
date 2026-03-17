"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const galleryImages = [
  { src: "deedee-serving.jpg", alt: "Dee Dee serving at the trailer window" },
  { src: "trailer-side.jpg", alt: "Full side view of the Darling Drink trailer" },
  { src: "drink-pink.jpg", alt: "Pink drink with branded cup" },
  { src: "taylor-deedee.jpg", alt: "Taylor and Dee Dee at the trailer" },
  { src: "trailer-outdoor.jpg", alt: "Trailer at outdoor event" },
  { src: "wjtv-visit.jpg", alt: "Taylor and Dee Dee at WJTV station" },
  { src: "flyer-booking.jpg", alt: "Spring booking promo" },
  { src: "trailer-holiday.jpg", alt: "Trailer with holiday decorations" },
  { src: "wjtv-filming.jpg", alt: "WJTV filming at the trailer" },
  { src: "flyer-info.jpg", alt: "Business info flyer" },
  { src: "wjtv-promo.jpg", alt: "As Seen On WJTV promo" },
  { src: "flyer-march.jpg", alt: "March event dates flyer" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl gradient-text mb-4">
              Gallery
            </h1>
            <p className="text-rose-600/70 text-lg max-w-2xl mx-auto">
              Snapshots from events, our trailer, and the Darling Drink family
            </p>
          </AnimatedSection>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.src} delay={0.08 * i}>
                <motion.div
                  className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() =>
                    setLightbox(`/images/gallery/${img.src}`)
                  }
                >
                  <Image
                    src={`/images/gallery/${img.src}`}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Full size view"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
