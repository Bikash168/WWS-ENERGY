'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/clean-energy-thinking.jpg',
  '/solar-panel-future.jpg',
  '/people-sustainable-energy.jpg',
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="who" className="py-20 bg-white px-4 md:px-12">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <motion.h2
            className="text-4xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Powering a Greener Tomorrow
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            We are a dedicated renewable energy company working at the intersection
            of innovation and sustainability. Our mission is to transform the way
            energy is produced and consumed by tapping into natural sources—wind,
            water, and sunlight. These elements, often overlooked in conventional
            energy models, hold the key to building a cleaner, greener, and more
            reliable energy ecosystem.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            With a growing demand for sustainable alternatives, we focus on
            delivering customized and scalable renewable energy solutions that
            meet the needs of industries, communities, and institutions alike.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Together, we envision a planet where energy is equitable, innovation
            is inclusive, and sustainability is the standard. We&apos;re not waiting
            for change &mdash; we&apos;re engineering it.
          </motion.p>
        </div>

        {/* Right Image Carousel */}
        <motion.div
          className="w-full relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
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
