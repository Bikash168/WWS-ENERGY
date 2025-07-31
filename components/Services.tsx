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

export default function Services() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
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
            Our Core Focus Areas
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

          {/* Core Focus Areas */}
          <motion.div
            className="mt-10 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Wind Energy</h3>
              <p className="text-gray-700 leading-relaxed">
                We harness the kinetic power of wind to generate electricity using high-performance wind turbines. Our wind energy projects are designed for maximum efficiency and minimal environmental impact. Whether onshore or offshore, we deliver reliable systems tailored to local conditions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Hydro Energy</h3>
              <p className="text-gray-700 leading-relaxed">
                Water has powered civilizations for centuries. We modernize that potential by developing small- to large-scale hydropower solutions. By converting flowing water into electricity, we provide a clean and consistent energy source that supports both urban and rural power needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Solar Energy</h3>
              <p className="text-gray-700 leading-relaxed">
                As one of the most abundant resources on Earth, sunlight offers vast potential for energy generation. We provide advanced solar PV systems for residential, commercial, and industrial use. From rooftop panels to large-scale solar farms, our systems are engineered for high performance and longevity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Auto-Changing Image Carousel */}
        <motion.div
          className="w-full relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
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
