"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AnimatedSection from "./AnimatedSection";

const eventTypes = [
  "Vendor Event",
  "School Function",
  "Sports Event",
  "Festival",
  "Grand Opening",
  "Birthday Party",
  "Wedding / Reception",
  "Neighborhood Gathering",
  "Corporate Event",
  "Other",
];

export default function BookUs() {
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (eventDate) {
      formData.set("eventDate", eventDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }));
    }

    try {
      await fetch("https://formspree.io/f/mykndrbk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please call us at 601-405-4281 or email taylor@hellodarlingdesigns.net");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-mint-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-4xl sm:text-5xl gradient-text text-center mb-4">
            Book Us For Your Event
          </h2>
          <p className="text-center text-rose-600/70 text-lg mb-16 max-w-2xl mx-auto">
            Ready to bring Darling Drink Company to your next event? Fill out the form below and we&apos;ll get back to you!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-strong rounded-3xl p-12 text-center"
            >
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="font-heading text-3xl text-rose-600 mb-4">Thank You!</h3>
              <p className="text-rose-700/80 text-lg">
                We&apos;ve received your booking request! Taylor will be in touch soon to confirm the details.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-rose-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 placeholder-rose-400/50"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-rose-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 placeholder-rose-400/50"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-rose-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 placeholder-rose-400/50"
                    placeholder="(601) 555-1234"
                  />
                </div>

                {/* Event Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventType" className="text-sm font-semibold text-rose-700">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className="px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventDate" className="text-sm font-semibold text-rose-700">
                    Event Date *
                  </label>
                  <DatePicker
                    selected={eventDate}
                    onChange={(date: Date | null) => setEventDate(date)}
                    minDate={new Date()}
                    placeholderText="Pick a date"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 placeholder-rose-400/50 cursor-pointer"
                  />
                </div>

                {/* Guest Count */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="guestCount" className="text-sm font-semibold text-rose-700">
                    Estimated Guest Count
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    min="1"
                    className="px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 placeholder-rose-400/50"
                    placeholder="50"
                  />
                </div>

                {/* Event Location */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="location" className="text-sm font-semibold text-rose-700">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 placeholder-rose-400/50"
                    placeholder="Address or venue name"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-rose-700">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="px-4 py-3 rounded-xl bg-white/50 border border-rose-200/60 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent transition-all text-rose-800 placeholder-rose-400/50 resize-none"
                    placeholder="Tell us about your event — theme, special requests, anything we should know!"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full py-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 cursor-pointer"
              >
                {submitting ? "Sending..." : "Send Booking Request"}
              </motion.button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
