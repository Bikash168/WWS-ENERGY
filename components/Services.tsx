'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-100 to-white px-4 md:px-12"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading & Intro */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Focus Areas
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            At <span className="font-semibold text-blue-800">WWS Energy</span>, we believe clean
            energy is not just a breakthrough—it’s a basic human right. Our perspective is driven
            by ethics, community, and sustainability.
          </motion.p>
        </div>

        {/* Energy Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Wind Energy */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
            <div className="relative w-full h-48">
              <Image
                src="/wind-energy.jpg"
                alt="Wind Energy"
                fill
                className="object-cover"
                sizes="100%"
              />
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Wind Energy</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We harness the kinetic power of wind to generate electricity using high-performance wind turbines. Our wind energy projects are designed for maximum efficiency and minimal environmental impact. Whether onshore or offshore, we deliver reliable systems tailored to local conditions.
              </p>
            </div>
          </div>

          {/* Hydro Energy */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
            <div className="relative w-full h-48">
              <Image
                src="/hydro-energy.jpg"
                alt="Hydro Energy"
                fill
                className="object-cover"
                sizes="100%"
              />
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Hydro Energy</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Water has powered civilizations for centuries. We modernize that potential by developing small- to large-scale hydropower solutions. By converting flowing water into electricity, we provide a clean and consistent energy source that supports both urban and rural power needs.
              </p>
            </div>
          </div>

          {/* Solar Energy */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
            <div className="relative w-full h-48">
              <Image
                src="/solar-energy.jpg"
                alt="Solar Energy"
                fill
                className="object-cover"
                sizes="100%"
              />
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Solar Energy</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                As one of the most abundant resources on Earth, sunlight offers vast potential for energy generation. We provide advanced solar PV systems for residential, commercial, and industrial use. From rooftop panels to large-scale solar farms, our systems are engineered for high performance and longevity.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
