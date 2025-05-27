import { RevealOnScroll } from "./RevealOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px-4 w-180">
          <h2
            className="text-3xl font-bold mb-8 
        bg-gradient-to-r from-blue-600 to-cyan-700 text-transparent
        bg-clip-text"
          >
            Get in touch
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blu-500 focus:bg-blue-500/5"/>
              
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
