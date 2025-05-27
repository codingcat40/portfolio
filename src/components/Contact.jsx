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
            className="text-3xl font-bold mb-8 text-center
        bg-gradient-to-r from-blue-600 to-cyan-700 text-transparent
        bg-clip-text"
          >
            Get in touch
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blu-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blu-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="relative">
              <textarea
                id="name"
                name="name"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blu-500 focus:bg-blue-500/5"
                placeholder="Enter Your Message here...."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
