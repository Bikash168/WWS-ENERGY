import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between text-center md:text-left">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold tracking-wide">WWS Energy</h3>
          <p className="text-sm mt-2 text-blue-200">
            Empowering a cleaner, greener future through sustainable energy solutions.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Middle Links */}
        <div className="mb-6 md:mb-0">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-green-400 transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-400 transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-sm text-blue-200">&copy; {new Date().getFullYear()} WWS Energy</p>
          <p className="text-sm text-blue-300 mt-1">
            <a href="https://wwsenergy.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400">
              www.wwsenergy.in
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm text-blue-300">
        Designed & Developed by WWS Team | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
