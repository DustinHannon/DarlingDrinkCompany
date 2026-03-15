"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const basePath = process.env.NODE_ENV === "production" ? "/DarlingDrinkCompany" : "";

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-4xl sm:text-5xl gradient-text text-center mb-16">
            Our Story
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-3xl p-8 sm:p-10">
              <p className="text-lg leading-relaxed mb-6 text-rose-800/80">
                Darling Drink Company is a family-run mobile drink trailer based in
                Madison, Mississippi. Founded by <strong>Taylor Hannon</strong> and
                her mom, <strong>Dee Dee</strong>, we bring specialty drinks and
                good vibes to events all across the area.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-rose-800/80">
                Most of the time you&apos;ll see us along with other family members
                working together in the trailer. It&apos;s truly a family company
                and something we&apos;re really proud of.
              </p>
              <p className="text-lg leading-relaxed text-rose-800/80">
                From neighborhood gatherings to festivals, school functions to
                grand openings — we love connecting with our customers. We&apos;re
                so grateful for the support — it means the world to us.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="relative">
              <div className="glass rounded-3xl p-3 rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={`${basePath}/images/taylor-deedee.jpg`}
                  alt="Taylor and Dee Dee - Darling Drink Company"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-3 -rotate-3 hover:rotate-0 transition-transform duration-500 w-48">
                <Image
                  src={`${basePath}/images/drink-pink.jpg`}
                  alt="Darling Drink Company pink drink"
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
