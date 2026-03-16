"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const menuCategories = [
  {
    title: "32 oz. Lemonades",
    icon: "🍋",
    price: "Plain $7 / Flavored $8",
    items: [
      "Strawberry", "Blue Raspberry", "Mango", "Pineapple", "Watermelon",
      "Peach", "Coconut", "Granny Smith Apple", "Cherry", "Blue Cotton Candy",
    ],
  },
  {
    title: "Specialty Lemonades",
    icon: "✨",
    price: "$8",
    items: [
      { name: "Tropical Sunrise", desc: "Watermelon + Mango + Coconut" },
      { name: "Pina Colada", desc: "Coconut + Pineapple" },
      { name: "Blue Hawaiian", desc: "Coconut + Blue Raspberry + Pineapple" },
      { name: "Arnold Palmer", desc: "Lemonade + Sweet Tea" },
      { name: "The Abby", desc: "Peach + Watermelon + Mango" },
      { name: "Caramel Apple", desc: "Granny Smith Apple + Caramel Drizzle" },
    ],
  },
  {
    title: "Dirty Sodas with Cream",
    icon: "🥤",
    price: "$10",
    items: [
      { name: "Southern Dew", desc: "Mountain Dew + Watermelon + Peach + Cream" },
      { name: "The Darling", desc: "Choice of Soda + Vanilla + Cream" },
      { name: "Coconut Wave", desc: "Sprite + Blue Raspberry + Coconut Cream" },
      { name: "Butter Beer Coke", desc: "Coke + Vanilla + Caramel + Cream" },
      { name: "Pink Ladies", desc: "Sprite + Strawberry + Vanilla + Coconut Cream" },
      { name: "Southern Charm", desc: "Dr. Pepper + Cherry + Vanilla + Cream" },
      { name: "Strawberry Sundrop", desc: "Sunkist + Strawberry + Pineapple + Cream" },
    ],
  },
  {
    title: "Dirty Sodas w/out Cream",
    icon: "🧊",
    price: "$10",
    items: [
      { name: "Hawaiian Coke", desc: "Coke + Pineapple + Cherry" },
      { name: "Strawberry Refresher", desc: "Lemonade + Sprite + Strawberry" },
      { name: "Neon Nights", desc: "Sprite + Blue Raspberry + Pineapple Juice" },
      { name: "Fruit Loop", desc: "Sprite + Strawberry + Watermelon + Pineapple" },
    ],
  },
  {
    title: "Dirty Alanis",
    icon: "⚡",
    price: "$10",
    items: [
      { name: "Sunburst", desc: "Orange Kiss Alani + Vanilla + Coconut + Peach + Cream" },
      { name: "Cherry Jubilee", desc: "Cherry Twist Alani + Cherry + Peach + Mango + Cream" },
      { name: "Blush & Bashful", desc: "Pink Slush Alani + Pineapple + Vanilla + Strawberry + Cream" },
    ],
  },
  {
    title: "Drinks & Snacks",
    icon: "🍿",
    price: null,
    items: [
      { name: "32oz Sweet Tea", desc: "$5" },
      { name: "Soft Drinks", desc: "$4" },
      { name: "Ice Water", desc: "$3" },
      { name: "Candy", desc: "$2" },
      { name: "Nachos", desc: "$8" },
    ],
  },
];

type MenuItem = string | { name: string; desc: string };

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
            From specialty lemonades to dirty sodas and dirty Alanis energy drinks — there&apos;s something sweet for everyone.
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-heading text-xl text-rose-600">
                    {category.title}
                  </h3>
                </div>
                {category.price && (
                  <p className="text-rose-500 font-bold text-sm mb-4 ml-10">{category.price}</p>
                )}
                <ul className="space-y-2 mt-3">
                  {category.items.map((item: MenuItem, j: number) =>
                    typeof item === "string" ? (
                      <li key={j} className="text-sm text-rose-800/80 font-medium">
                        {item}
                      </li>
                    ) : (
                      <li key={item.name} className="flex flex-col">
                        <span className="font-bold text-sm text-rose-800">{item.name}</span>
                        <span className="text-xs text-rose-600/70">{item.desc}</span>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center text-rose-500/60 text-sm mt-12 italic">
            Menu items and prices may vary by event. Custom drinks and flavors available upon request!
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
