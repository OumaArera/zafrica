import { motion } from "framer-motion";

const Projects = () => {
  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  const projects = [
    {
      name: "YGAK.org",
      description:
        "A digital ecosystem built for Youths for Green Action Kenya (YGAK) to empower, organize, and illuminate youth-driven environmental change. Beyond the website, we developed a full ERP system transforming their operations — from project initiation and budgeting, to fund allocation, payments, donor management, volunteer coordination, and activity scheduling. This platform positions YGAK as a model for digital transformation in the non-profit space across Kenya.",
      image: "/ygak-logo.png",
      location: "Kenya",
    },
    {
      name: "HouseholdMall.co.ke",
      description:
        "An advanced e-commerce platform for the Kenyan market, designed to simplify online shopping and ensure accessibility of household and consumer products. It features real-time inventory updates, secure payment integrations, and intelligent search capabilities to enhance customer experience and vendor visibility.",
      image: "/hhm-logo.png",
      location: "Kenya",
    },
    {
      name: "EdmondSerenity.com",
      description:
        "A comprehensive Adult Family Home management system built for the United States market. The platform digitizes all aspects of care facility management — from resident data (medication, behavior, meals, sleep) to staff scheduling, grocery and supply management, company records, and secure internal communications. It ensures compliance, accuracy, and efficiency in elderly care management.",
      image: "/1ST EDMONDS_LOGO.png",
      location: "USA",
    },
    {
      name: "Dholuo.co.ke",
      description:
        "A philanthropic initiative dedicated to preserving the Dholuo language through technology. The platform hosts an online English–Luo dictionary, enabling users to learn, translate, and engage with cultural heritage. It stands as a testament to our belief that technology should preserve, not erase, identity.",
      image: "/dholuo.png",
      location: "Kenya",
    },
    {
      name: "Vinlogs.com",
      description:
        "A vehicle history management system enabling users to purchase and access detailed vehicle reports — including service records, mileage, accident data, natural disaster exposure, and ownership history. Vinlogs provides transparency and trust for vehicle buyers and dealers across markets.",
      image: "/vinlogs-logo.png",
      location: "Global",
    },
  ];

  return (
    <div className="bg-white text-gray-900 -mt-6">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/Our Services.jpeg')",
          backgroundSize: "cover",
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
            Our <span style={{ color: primaryColor }}>Projects</span>
          </h1>
          <p className="text-lg text-gray-200">
            Transforming ideas into impact across Africa and the world.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Featured Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: primaryColor }}
                >
                  {project.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section
        className="py-24 text-white text-center"
        style={{ backgroundColor: darkBackgroundColor }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empowering Africa’s Digital Transformation
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            From non-profit ecosystems to e-commerce, education, and AI, Zafrika
            builds scalable and secure systems that make technology a force for
            progress. Our projects reflect Africa’s potential — bold, creative,
            and limitless.
          </p>
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
            Want to Build Something Remarkable?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Partner with Zafrika to turn your ideas into impactful digital solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
