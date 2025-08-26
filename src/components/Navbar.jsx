import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.7)] backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with 👋 */}
          <a
            href="#home"
            className="font-mono text-2xl font-bold text-white flex items-center gap-2"
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block"
            >
              👋
            </motion.span>
            Naman<span className="text-blue-500">.tech</span>
          </a>

          {/* Hamburger Icon */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 font-medium">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
