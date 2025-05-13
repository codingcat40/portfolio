import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center
    justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-purple-500 gradient-text bg-clip-text text-transparent leading-right">
          Hi, I am Naman Matoliya
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am a passionate web developer with a knack for crafting robust and
          scalable web applications. With over 2.5 years of hands-on experience,
          I have honed my skills in front-end technologies like Javascript,
          React and Next.js, as well as back-end technologies like Node.js,
          Express, and MongoDB. My goal is to leverage my expertise to create
          innovative solutions that drive business growth and deliver
          exceptional user experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-600 py-3 text-white px-6 font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-blue-700/10 rounded-md">View Projects</a>
          <a href="#contact" className="border border-blue-500/50 px-6 py-3 font-medium transition-all duration-300 text-blue-500 hover:translate-y-0.5 hover:shadow-blue-700/10 rounded-md">Contact</a>

        </div>
      </div>
    </section>
  );
};

export default Home;
