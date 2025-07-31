'use client';
import { motion } from 'framer-motion';
import {
  FaLeaf,
  FaTools,
  FaUserCog,
  FaHandshake,
  FaCheckCircle,
  FaChartLine, // newly added icon
} from 'react-icons/fa';

const reasons = [
  {
    icon: <FaLeaf className="text-4xl text-green-600" />,
    title: 'Environmental Commitment',
    description:
      'Sustainability isn’t just part of our mission — it defines our work culture, processes, and purpose.',
  },
  {
    icon: <FaTools className="text-4xl text-blue-600" />,
    title: 'Technical Excellence',
    description:
      'Our team includes skilled engineers, project managers, and renewable energy specialists with deep industry knowledge.',
  },
  {
    icon: <FaUserCog className="text-4xl text-orange-500" />,
    title: 'Customized Solutions',
    description:
      'We develop personalized strategies tailored to the unique needs of every location and client for optimal efficiency and cost-effectiveness.',
  },
  {
    icon: <FaHandshake className="text-4xl text-purple-600" />,
    title: 'After-Sales Support',
    description:
      'We believe in long-term partnerships. From maintenance to monitoring, our support continues beyond installation.',
  },
  {
    icon: <FaCheckCircle className="text-4xl text-blue-700" />,
    title: 'Regulatory Compliance',
    description:
      'All our projects follow strict national and international environmental and safety standards.',
  },
  {
    icon: <FaChartLine className="text-4xl text-indigo-600" />,
    title: 'Strategic Insights',
    description:
      'We offer deep market insights and energy strategies aligned with your business goals, ensuring long-term sustainability and ROI.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="py-20 bg-white px-4 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At WWS Energy, we don’t just build clean energy systems — we build trust, sustainability,
          and long-term value. Here’s what sets us apart.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
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
