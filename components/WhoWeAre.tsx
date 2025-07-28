'use client';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
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
                    Who We Are
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    We are a collective of engineers, innovators, and energy enthusiasts with a singular mission:
                    to make clean, renewable power accessible and affordable for all. At WWS Energy, we don&apos;t just
                    work with technology &mdash; we work with purpose.
                </motion.p>

                <motion.p
                    className="text-lg text-gray-700 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    Our team is driven by innovation, resilience, and a firm belief that a carbon-free future
                    isn&apos;t just possible &mdash; it&apos;s essential. Whether it&apos;s harnessing solar, wind, or hydrogen power,
                    we design systems that are smarter, cleaner, and built for communities that need them most.
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
