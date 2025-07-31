'use client';
import { motion } from 'framer-motion';

export default function AboutUs() {
    return (
        <section id="who" className="py-20 bg-white px-4 md:px-12 text-center">
            <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
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
                    We are a dedicated renewable energy company working at the intersection of innovation and sustainability. Our mission is to transform the way energy is produced and consumed by tapping into natural sources—wind, water, and sunlight. These elements, often overlooked in conventional energy models, hold the key to building a cleaner, greener, and more reliable energy ecosystem.
                </motion.p>

                <motion.p
                    className="text-lg text-gray-700 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    With a growing demand for sustainable alternatives, we focus on delivering customized and scalable renewable energy solutions that meet the needs of industries, communities, and institutions alike.
                </motion.p>



                <motion.p
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    Together, we envision a planet where energy is equitable, innovation is inclusive, and
                    sustainability is the standard. We&apos;re not waiting for change &mdash; we&apos;re engineering it.
                </motion.p>



            </motion.div>
        </section>
    );
}
