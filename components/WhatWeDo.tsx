"use client";
import { motion } from "framer-motion";
import { FaWind, FaWater, FaSun, FaBatteryFull, FaLeaf, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaWind className="text-4xl text-blue-500" />,
    title: "Wind Power",
    description:
      "We develop cutting-edge wind turbines that convert natural wind into clean, renewable electricity for both commercial and remote applications.",
  },
  {
    icon: <FaWater className="text-4xl text-blue-400" />,
    title: "Hydro Energy",
    description:
      "Using the natural flow of water, our hydro systems are designed to generate sustainable energy with minimal environmental disruption.",
  },
  {
    icon: <FaSun className="text-4xl text-yellow-400" />,
    title: "Solar Solutions",
    description:
      "From rooftops to industrial parks, our solar technologies harness sunlight efficiently, providing long-term green energy.",
  },
  {
    icon: <FaBatteryFull className="text-4xl text-green-600" />,
    title: "Energy Storage",
    description:
      "We integrate smart battery systems to store excess energy, ensuring uninterrupted supply and maximum efficiency.",
  },
  {
    icon: <FaLeaf className="text-4xl text-green-500" />,
    title: "Sustainable Design",
    description:
      "Every project is built with sustainability in mind — reducing waste, maximizing performance, and leaving a lighter footprint.",
  },
  {
    icon: <FaGlobe className="text-4xl text-blue-700" />,
    title: "Global Impact",
    description:
      "We’re creating change not just locally, but globally — by supporting communities, reducing carbon emissions, and promoting clean energy.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="about" className="py-20 bg-white px-4 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At WWS Energy, we drive innovation in renewable energy through the power of Wind, Water, and Sun.
          Our commitment extends beyond technology — we aim to empower communities and build a cleaner, greener planet.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
