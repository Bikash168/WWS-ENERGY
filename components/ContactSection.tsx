'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-blue-950 text-white px-4 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Content */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-4xl font-extrabold mb-6 text-green-400">Let’s Connect</h2>
          <p className="text-lg mb-6 text-gray-200">
            Whether you have an idea, a project, or simply want to explore ways to work together towards a greener future,
            we’d love to hear from you.
          </p>
          <form className="grid gap-4">
  <input
    type="text"
    placeholder="Your Name"
    className="px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
  />
  <textarea
    rows={4}
    placeholder="Your Message"
    className="px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
  />
  <button
    type="submit"
    className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition"
  >
    Send Message
  </button>
</form>

        </div>

        {/* Google Map Embed */}
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.3052843422076!2d85.80342207502332!3d20.33388041064085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091c30482347%3A0x3f47bd11ec30c71!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1651825094524!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
