"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const menuCategories = [
  {
    title: "Specialty Lemonades",
    icon: "🍋",
    description: "Our signature hand-crafted lemonades with creative flavor combinations that keep you coming back for more.",
    items: [
      { name: "Blush and Bashful", desc: "A fan-favorite pink lemonade with a sweet, rosy twist" },
      { name: "The Alanis", desc: "Bold and refreshing with a citrus kick you won't forget" },
      { name: "Southern Charm", desc: "Classic southern lemonade with a hint of peach" },
      { name: "Pink Ladies", desc: "Sweet strawberry lemonade with a splash of love" },
      { name: "Fruit Loop", desc: "A playful, fruity lemonade bursting with tropical flavors" },
    ],
  },
  {
    title: "Dirty Sodas",
    icon: "🥤",
    description: "Your favorite sodas jazzed up with flavored syrups, cream, and fresh fruit for the ultimate treat.",
    items: [
      { name: "Dirty Dr Pepper", desc: "Dr Pepper with coconut cream and a flavor shot" },
      { name: "Dirty Sprite", desc: "Sprite with fresh lime, coconut, and sweet cream" },
      { name: "Dirty A&W", desc: "Root beer elevated with vanilla cream and caramel" },
    ],
  },
  {
    title: "Dirty Energy Drinks",
    icon: "⚡",
    description: "Need a boost? Our energy drinks are customized with fun flavors and cream for a delicious pick-me-up.",
    items: [
      { name: "Custom Energy", desc: "Choose your energy base with your favorite flavor combo" },
    ],
  },
  {
    title: "Seasonal Specials",
    icon: "☕",
    description: "Rotating seasonal offerings to match the mood — from cozy hot chocolate to refreshing summer sips.",
    items: [
      { name: "Hot Chocolate", desc: "Rich, creamy hot chocolate perfect for chilly event nights" },
    ],
  },
];

export default function Menu() {
  const basePath = process.env.NODE_ENV === "production" ? "/DarlingDrinkCompany" : "";

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mint-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-300/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-4xl sm:text-5xl gradient-text text-center mb-4">
            Our Menu
          </h2>
          <p className="text-center text-rose-600/70 text-lg mb-16 max-w-2xl mx-auto">
            From specialty lemonades to dirty sodas and energy drinks — there&apos;s something sweet for everyone.
          </p>
        </AnimatedSection>

        {/* Trailer image */}
        <AnimatedSection delay={0.1}>
          <div className="glass rounded-3xl p-3 mb-16 max-w-4xl mx-auto">
            <Image
              src={`${basePath}/images/trailer-side.jpg`}
              alt="Darling Drink Company trailer"
              width={900}
              height={500}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8">
          {menuCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-8 h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-heading text-2xl text-rose-600">
                    {category.title}
                  </h3>
                </div>
                <p className="text-rose-700/60 text-sm mb-6">{category.description}</p>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex flex-col">
                      <span className="font-bold text-rose-800">{item.name}</span>
                      <span className="text-sm text-rose-600/70">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center text-rose-500/60 text-sm mt-12 italic">
            Menu items may vary by event. Custom drinks and flavors available upon request!
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
