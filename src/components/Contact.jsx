import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent!");
      })
      .catch(() => alert("Something went wrong!"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px-4 lg:w-180 md:w-140 sm:w-100">
          <h2
            className="text-3xl font-bold mb-8 text-center
        bg-gradient-to-r from-blue-600 to-cyan-700 text-transparent
        bg-clip-text"
          >
            Get in touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blu-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blu-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blu-500 focus:bg-blue-500/5"
                placeholder="Enter Your Message here...."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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
