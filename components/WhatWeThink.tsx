'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const images = [
  '/clean-energy-thinking.jpg',
  '/solar-panel-future.jpg',
  '/people-sustainable-energy.jpg',
];

export default function WhatWeThink() {
  const [current, setCurrent] = useState(0);

  // Auto-switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="think"
      className="py-20 bg-gradient-to-b from-gray-100 to-white px-4 md:px-12"
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Think
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            At <span className="font-semibold text-blue-800">WWS Energy</span>, we believe clean
            energy is not just a breakthrough—it’s a basic human right. Our perspective is driven
            by ethics, community, and sustainability.
          </motion.p>

          <motion.blockquote
            className="bg-white shadow-md rounded-xl px-8 py-6 text-blue-900 text-lg italic flex items-start gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <FaQuoteLeft className="text-2xl text-blue-600 mt-1" />
            “The future of energy lies not in extraction, but in harmony — with nature, with people,
            and with purpose.”
          </motion.blockquote>

          <motion.p
            className="mt-6 text-gray-700 text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our core belief is that equitable energy access can transform lives and protect the
            planet. Through innovation and collaboration, we strive to build a better energy future
            — one powered by intention, inclusion, and impact.
          </motion.p>
        </div>

        {/* Auto-Changing Image Carousel */}
        <motion.div
          className="w-full relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={images[current]}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt="Clean energy visuals"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
