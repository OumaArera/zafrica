import { motion } from "framer-motion";

const About = () => {
  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  return (
    <div className="bg-white text-gray-900 -mt-6">
      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/Africa in Tech.jpeg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span style={{ color: primaryColor }}>Zafrika</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Innovating Africa’s digital future through software, data, and intelligence.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/African tech dream.jpeg"
            alt="Zafrika Team Collaboration"
            className="rounded-2xl shadow-lg object-cover"
          />
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded with a vision to elevate Africa’s presence in the global technology
              landscape, Zafrika brings together a diverse team of engineers, data scientists,
              and innovators. Our mission is to build smart, secure, and scalable systems that
              empower African enterprises and communities to thrive in the digital era.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe technology is the language of progress. By combining cutting-edge
              engineering with local insight, we’re helping Africa move from being a technology
              consumer to a creator — shaping a sustainable and inclusive digital economy.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: darkBackgroundColor }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Our Mission",
              text: "To empower Africa through transformative technology, driving innovation and sustainability.",
            },
            {
              title: "Our Vision",
              text: "To be Africa’s leading technology powerhouse, enabling digital excellence across the continent.",
            },
            {
              title: "Our Values",
              text: "Integrity, Innovation, Collaboration, and Impact — guiding every solution we deliver.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-[#101830] rounded-2xl shadow-lg hover:bg-[#1b2540] transition"
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT / METRICS */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { number: "10+", label: "Enterprise Clients" },
            { number: "25+", label: "Projects Delivered" },
            { number: "3+", label: "African Countries" },
            { number: "4", label: "Core Technology Divisions" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <span
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: primaryColor }}
              >
                {stat.number}
              </span>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0B1120 0%, #007BFF 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Join Us in Building Africa’s Digital Legacy
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Together, we can design systems that inspire progress and empower generations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
