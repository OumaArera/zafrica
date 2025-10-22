import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  return (
    <div className="bg-white text-gray-900 -mt-6">
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/African Tech.jpeg')",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Africa Through Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Innovative Software. Intelligent Systems. Secure Future.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section
        className="py-20 text-center px-6"
        style={{ backgroundColor: darkBackgroundColor, color: "white" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Who We Are
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Zafrika is a forward-thinking African technology company pioneering
          innovation in Software Development, Cybersecurity, Data Science, and
          Artificial Intelligence. We empower organizations with digital
          solutions tailored for growth and resilience.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our Core Expertise
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {[
            {
              title: "Software Development",
              desc: "Custom enterprise-grade software and web solutions.",
              img: "/coding developer workspace.jpeg",
            },
            {
              title: "Cybersecurity",
              desc: "Comprehensive digital defense and threat prevention.",
              img: "/cybersecurity network.jpeg",
            },
            {
              title: "Data Science",
              desc: "Insights that drive intelligent business decisions.",
              img: "/data analytics dashboard.jpeg",
            },
            {
              title: "AI & Machine Learning",
              desc: "Transforming systems with artificial intelligence.",
              img: "/artificial intelligence.jpeg",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

        {/* CALL TO ACTION */}
        <section
            className="py-24 text-center text-white relative overflow-hidden mb-0"
            style={{
            background: "linear-gradient(135deg, #0B1120 0%, #007BFF 100%)",
            }}
        >
            <div className="absolute inset-0 bg-black/30" /> {/* subtle overlay for depth */}
            <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                Building the Digital Future of Africa
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10">
                Empower your organization with intelligent, secure, and scalable technology solutions.
            </p>
            <a
                href="/contact"
                className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
            >
                Get in Touch
            </a>
            </div>
        </section>

    </div>
  );
};

export default Home;
