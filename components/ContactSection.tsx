'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-28 px-4 md:px-20 bg-blue-950 w-full overflow-hidden"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Get in Touch
        </h2>
        <p className="text-white max-w-2xl mx-auto text-lg">
          We are here to answer your questions, discuss your project ideas, and help you make the transition to clean energy. Whether you are a homeowner, a business, or a public organization — our team is ready to assist you.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Left: Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">
            Contact Information
          </h3>
          <ul className="space-y-4 text-gray-800 text-base leading-relaxed">
            <li>
              📍 <strong>Office Address:</strong><br />
              F-2, Chandaka Industrial Estate,<br />
              In front of Infocity, Chandrasekharpur,<br />
              Bhubaneswar, Odisha - 751024
            </li>
            <li>📞 <strong>Phone:</strong> +91 9439173220</li>
            <li>✉️ <strong>Email:</strong> contact@wwsenergy.in</li>
            <li>🌐 <strong>Website:</strong> www.wwsenergy.in</li>
          </ul>

          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29483.588774419763!2d85.7879246!3d20.2960585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2b1e23ed3%3A0x21dcb45b9fcf07d0!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="border-none"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">
            Send Us a Message
          </h3>
          <div className="space-y-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition w-full"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
