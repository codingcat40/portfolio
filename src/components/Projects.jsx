import { PROJECTS } from "../constants";
import { RevealOnScroll } from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center
    justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 
        bg-gradient-to-r from-blue-600 to-cyan-700 text-transparent
        bg-clip-text"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-2 text-sm text-gray-400">{project.description}</p>
              {/* skills come here */}
              <div className="flex gap-3 mb-2">
                {project.skills.map((skill, index) => (
                  <p
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-300 cursor-pointer transition"
                  >
                    {skill}
                  </p>
                ))}
              </div>

              {/* Link/View project */}
              <div className="flex justify-between items-center">
              <a className="my-4 hover:text-blue-200 transition-colors text-blue-400" href={project.url}>
                    View Project 
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
