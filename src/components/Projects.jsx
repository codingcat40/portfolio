const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center
    justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 
        bg-gradient-to-r from-blue-600 to-cyan-700 text-transparent
        bg-clip-text"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-2">Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dignissimos facere officia cupiditate placeat odio
              consequatur tenetur error culpa consequuntur esse necessitatibus
              recusandae nemo delectus mollitia tempore, eligendi magni
              aspernatur.
            </p>
            {/* skills come here */}
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-2">Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dignissimos facere officia cupiditate placeat odio
              consequatur tenetur error culpa consequuntur esse necessitatibus
              recusandae nemo delectus mollitia tempore, eligendi magni
              aspernatur.
            </p>
            {/* skills come here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
