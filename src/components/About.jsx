import React from "react";
import { FRONTEND_SKILLS, BACKEND_SKILLS } from "../constants";
import { EXPERIENCES } from "../constants";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center
    justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 
        bg-gradient-to-r from-blue-600 to-cyan-700 text-transparent
        bg-clip-text"
        >
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Developer with passion for building scalable web apps and innovative
            solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Front End</h3>
              <div className="flex flex-wrap gap-2">
                {FRONTEND_SKILLS.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-300 cursor-pointer transition"
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back End</h3>
              <div className="flex flex-wrap gap-2">
                {BACKEND_SKILLS.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-300 cursor-pointer transition"
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-8 ">Education</h3>
            <div className="list-disc list-inside space-y-4">
              <p className="text-gray-400">
                <strong className="text-white">B.E in Computer Science</strong> - KLE Technological
                University, Hubli, Karnataka [2019 - 2023]
              </p>
              <p className="text-sm text-gray-400">
                <strong className="text-white">Relevant Coursework:</strong> Data Structures and Algorithms, Machine
                Learning, Web Development, Problem Solving, Cloud Computing,
                Computer Networks, Database management system
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-8">Work Experience</h3>
            <div className="space-y-4 text-gray-400">
              {EXPERIENCES.map((exp, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-white">
                    {exp.position} at {exp.company} ({exp.year})
                  </h4>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
