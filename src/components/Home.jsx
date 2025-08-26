import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* 👋 Hello Icon with Animation */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-6xl md:text-7xl mb-4"
          >
            👋
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 to-cyan-500 bg-clip-text text-transparent">
            I am Naman Matoliya
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            I am a passionate web developer with a knack for crafting robust and
            scalable web applications. I have been improving my development skills in Frontend technologies like
            <span className="text-blue-400 font-semibold"> JavaScript</span>,{" "}
            <span className="text-blue-400 font-semibold">React</span>, and{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>, as
            well as Backend technologies like{" "}
            <span className="text-blue-400 font-semibold">Node.js</span>,{" "}
            <span className="text-blue-400 font-semibold">Express</span>, and{" "}
            <span className="text-blue-400 font-semibold">MongoDB</span>.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-blue-600 py-3 px-8 text-white font-medium rounded-xl shadow-md shadow-blue-700/20 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 px-8 py-3 font-medium rounded-xl text-blue-400 hover:bg-blue-500/10 transition transform hover:-translate-y-1"
            >
              Contact
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
