"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Sarah M.",
    event: "Jingle & Mingle, Madison",
    text: "Just enjoyed 'Blush and Bashful' — the best version of the Alanis — and my daughter had the best hot chocolate at the Jingle and Mingle event from Darling Drink Company. Highly recommend both!",
    rating: 5,
  },
  {
    name: "Jessica R.",
    event: "Neighborhood Block Party",
    text: "We had Darling Drink Company at our subdivision event and they were a HUGE hit! The dirty sodas were incredible and Taylor and Dee Dee were so sweet and fun. Everyone kept going back for seconds!",
    rating: 5,
  },
  {
    name: "Amanda K.",
    event: "School Fall Festival",
    text: "The kids went absolutely crazy for the Fruit Loop lemonade and the adults couldn't get enough of the dirty Dr Pepper. Such a unique and fun addition to our school festival. Already rebooked for spring!",
    rating: 5,
  },
  {
    name: "Lauren T.",
    event: "Birthday Party",
    text: "Booked the Darling Drink trailer for my daughter's sweet 16 and it was the highlight of the party! The pink trailer matched our theme perfectly and the drinks were delicious. Taylor made everything so easy!",
    rating: 5,
  },
  {
    name: "Melissa H.",
    event: "Grand Opening",
    text: "Had Darling Drink Company at our shop's grand opening and they brought the cutest setup! The specialty lemonades were refreshing and our customers loved having something unique to sip on. Will definitely book again!",
    rating: 5,
  },
  {
    name: "Caroline D.",
    event: "Vendor Market",
    text: "I look forward to seeing the pink trailer at every vendor event! The Southern Charm lemonade is my go-to. Taylor and her mom are the sweetest people and always remember my order. True community favorites!",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-4xl sm:text-5xl gradient-text text-center mb-4">
            What People Are Saying
          </h2>
          <p className="text-center text-rose-600/70 text-lg mb-16 max-w-2xl mx-auto">
            We love making events special — and our customers love telling us about it!
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-6 h-full flex flex-col"
              >
                <Stars count={review.rating} />
                <p className="text-rose-800/80 mt-4 mb-6 flex-1 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-rose-700">{review.name}</p>
                  <p className="text-sm text-rose-500/70">{review.event}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
