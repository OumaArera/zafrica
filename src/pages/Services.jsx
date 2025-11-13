import { motion } from "framer-motion";
import {
  Database,
  MonitorSmartphone,
  Building2,
  GraduationCap,
  ShoppingCart,
  CreditCard,
  Users,
  Truck,
  Handshake,
} from "lucide-react";

const Services = () => {
  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  const services = [
    {
      icon: <Database className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "Enterprise Resource Planning (ERP)",
      description:
        "An integrated system connecting accounting, HR, inventory, procurement, and CRM — empowering businesses to operate seamlessly under one platform.",
      image: "/erp dashboard.jpg",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "Point of Sale (POS) & Inventory System",
      description:
        "Offline-first POS solution designed for retail and hardware stores. Manage sales, stock movement, and generate receipts — even without internet.",
      image: "/pos system retail.jpg",
    },
    {
      icon: <Building2 className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "Hotel & Booking Management System",
      description:
        "Smart hotel management platform that automates booking, check-ins, billing, and reporting — designed for hotels, lodges, and resorts.",
      image: "/hotel booking management.jpg",
    },
    {
      icon: <GraduationCap className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "School Management System",
      description:
        "Digitize your institution with automated academic records, finance, attendance, and parent communication tools — all under one secure system.",
      image: "/school management system.jpg",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "E-Commerce & Marketplace Solutions",
      description:
        "Build online stores and marketplaces with secure payment gateways, product management, and mobile-friendly design tailored for local markets.",
      image: "/ecommerce dashboard.jpg",
    },
    {
      icon: <CreditCard className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "Financial & Payment Solutions",
      description:
        "From M-Pesa integration to custom fintech platforms — we deliver secure digital payment infrastructures that drive growth and transparency.",
      image: "/financial payment platform.jpg",
    },
    {
      icon: <Users className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "Human Resource & Payroll Systems",
      description:
        "Automate HR processes with digital records, leave tracking, payroll management, and performance analytics in one intuitive platform.",
      image: "/hr payroll software.jpg",
    },
    {
      icon: <Truck className="w-10 h-10 mb-4" style={{ color: primaryColor }} />,
      title: "Fleet & Logistics Management",
      description:
        "Optimize operations with real-time GPS tracking, vehicle analytics, delivery scheduling, and maintenance management tools.",
      image: "/fleet logistics system.jpg",
    },
  ];


  return (
    <div className="bg-white text-gray-900 -mt-6">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/African Tech Dream for youths.jpeg')",
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
            Our <span style={{ color: primaryColor }}>Services</span>
          </h1>
          <p className="text-lg text-gray-200">
            Transforming Africa’s digital ecosystem through innovation, intelligence, and integrity.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          What We Deliver
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE HIGHLIGHT SECTION */}
      <section
        className="py-24 text-white"
        style={{ backgroundColor: darkBackgroundColor }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="/African tech dream.jpeg"
            alt="Innovation at Zafrika"
            className="rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              We Build Technology for Tomorrow
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Zafrika integrates modern engineering, AI-driven analytics, and secure
              cloud architectures to deliver robust digital ecosystems. From financial
              services to agriculture, health, and education — we partner with African
              organizations to enable digital transformation that lasts.
            </p>
            <a
              href="/projects"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Explore Our Projects
            </a>
          </motion.div>
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
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Let’s work together to create scalable, intelligent solutions that redefine Africa’s tech frontier.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
