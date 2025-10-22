import { motion } from "framer-motion";
import { User } from "lucide-react";

const Team = () => {
  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  // Team data
  const teamMembers = [
    {
      name: "Ouma Arera",
      role: "Chief Executive Officer (CEO) – Software Engineer & Cybersecurity Specialist",
      bio: "Ouma is a versatile software engineer and cybersecurity specialist with a strong background in building secure, scalable applications. He leads the company’s vision, strategy, and innovation, ensuring Zafrika delivers resilient, cutting-edge digital solutions.",
      image: "/Ouma.JPG", 
    },
    {
      name: "Elisha Onyando",
      role: "Chief Technology Officer (CTO) – Software, QA & Electrical Engineer",
      bio: "Elisha contributes extensively across software engineering, quality assurance, and system architecture. His leadership ensures our products meet the highest standards of performance, reliability, and technical innovation.",
      image: "/onyando_photo.png",
    },
    {
      name: "Sophy Oguta",
      role: "Head of Client Relations & Business Development",
      bio: "Sophy oversees client engagement and business expansion strategies. Her focus on customer acquisition and partnership building strengthens Zafrika’s market presence while ensuring every client experience is exceptional.",
      image: "", 
    },
    {
      name: "Silas Okinyi",
      role: "Head of Strategy & Data Intelligence (Actuarial Science, Data Science)",
      bio: "Silas drives organizational strategy through data-driven insights. With expertise in actuarial science and data analytics, he ensures Zafrika’s decisions are guided by measurable impact and sustainable growth models.",
      image: "silas.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-900 -mt-6">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/Team.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          className="relative z-10 max-w-2xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Meet the <span style={{ color: primaryColor }}>Zafrika</span> Team
          </h1>
          <p className="text-lg text-gray-200">
            A diverse team of innovators, engineers, and visionaries driving Africa’s digital evolution.
          </p>
        </motion.div>
      </section>

      {/* TEAM MEMBERS GRID */}
      <section
        className="py-20"
        style={{ backgroundColor: darkBackgroundColor, color: "white" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Leadership
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-gray-900/50 rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden flex flex-col items-center p-6"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-blue-500 mb-6"
                  />
                ) : (
                  <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gray-800 border-2 border-blue-500 mb-6">
                    <User className="w-12 h-12 text-blue-500" />
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: primaryColor }}
                >
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0B1120 0%, #007BFF 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Join Our Growing Team
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Be part of Africa’s digital transformation. Collaborate, innovate, and create impact with Zafrika.
          </p>
          <a
            href="mailto:careers@zafrika.com"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Explore Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
