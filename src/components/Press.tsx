"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Press() {
  const basePath = process.env.NODE_ENV === "production" ? "/DarlingDrinkCompany" : "";

  return (
    <section id="press" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-mint-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-4xl sm:text-5xl gradient-text text-center mb-4">
            As Seen On TV
          </h2>
          <p className="text-center text-rose-600/70 text-lg mb-16 max-w-2xl mx-auto">
            We were thrilled to be featured on WJTV Channel 12 — sharing our story and our drinks with even more of Mississippi!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-3"
            >
              <Image
                src={`${basePath}/images/wjtv-filming.jpg`}
                alt="Darling Drink Company featured on WJTV Channel 12"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-3"
              >
                <Image
                  src={`${basePath}/images/wjtv-visit.jpg`}
                  alt="Taylor and Dee Dee visiting WJTV studio"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </motion.div>

              <div className="glass rounded-3xl p-6 text-center">
                <Image
                  src={`${basePath}/images/wjtv-promo.jpg`}
                  alt="Darling Drink Company - As Seen on WJTV"
                  width={600}
                  height={300}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
