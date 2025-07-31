'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add backend integration here
    alert('Form submitted successfully!');
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-20 px-4 md:px-20 bg-blue-100 w-full overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Get in Touch</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We’re here to answer your questions, discuss your project ideas, and help you make the transition to clean energy. Whether you're a homeowner, a business, or a public organization — our team is ready to assist you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left: Contact Details and Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-6 border border-blue-100"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Contact Information</h3>
          <ul className="space-y-3 text-gray-800">
            <li>📍 <strong>Office Address:</strong> F-2, Chandaka Industrial Estate
              In front of Infocity, Infocity
              Chandrasekharpur, Bhubaneshwar
              Odisha - 751024</li>
            <li>📞 <strong>Phone:</strong> +91 9439173220</li>
            <li>✉️ <strong>Email:</strong> contact@wwsenergy.in</li>
            <li>🌐 <strong>Website:</strong> www.wwsenergy.in</li>
          </ul>

          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29483.588774419763!2d85.7879246!3d20.2960585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2b1e23ed3%3A0x21dcb45b9fcf07d0!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              loading="lazy"
              className="border-none"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-6 border border-blue-100"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Send Us a Message</h3>
          <div className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              type="email"
              className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
