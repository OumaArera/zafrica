import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FaWhatsapp, FaXTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/zafrika", label: "LinkedIn" },
    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/254748800714", label: "WhatsApp" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/zafrika", label: "Facebook" },
    { icon: <FaXTwitter size={20} />, href: "https://x.com/zafrika", label: "X (Twitter)" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/zafrika", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/zafrika", label: "YouTube" },
    { icon: <FaTiktok size={20} />, href: "https://tiktok.com/@zafrika", label: "TikTok" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects Portfolio", href: "/projects" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      style={{ backgroundColor: darkBackgroundColor }}
      className="text-white  relative overflow-hidden font-sans"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${darkBackgroundColor} 95%, rgba(0, 123, 255, 0.05) 100%)`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/logo.png"
              alt="Zafrika Logo"
              className="w-14 h-14 object-contain border-white/40 shadow-lg"
            />
            <h2
              className="font-extrabold text-3xl tracking-wider uppercase"
              style={{ color: primaryColor }}
            >
              ZAFRIKA
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            A leading technology and consulting firm, dedicated to building digital futures and driving innovation across Africa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 pb-2 text-white border-b border-gray-700">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition duration-200 hover:text-[${primaryColor}]`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 pb-2 text-white border-b border-gray-700">
            Reach Out
          </h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="shrink-0 mt-1 text-red-400" />
              <span>Nairobi, Kenya</span>
            </li>

            <li className="flex items-start space-x-3">
              <Phone size={18} className="shrink-0 mt-1" style={{ color: primaryColor }} />
              <a
                href="tel:+254748800714"
                className={`hover:text-[${primaryColor}] transition duration-200`}
              >
                +254 748 800 714 (Call)
              </a>
            </li>

            <li className="flex items-start space-x-3">
              <FaWhatsapp size={18} className="shrink-0 mt-1 text-green-400" />
              <a
                href="https://wa.me/254748800714"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition duration-200"
              >
                +254 748 800 714 (WhatsApp)
              </a>
            </li>

            <li className="flex items-start space-x-3">
              <Mail size={18} className="shrink-0 mt-1" style={{ color: primaryColor }} />
              <a
                href="mailto:info@zafrika.com"
                className={`hover:text-[${primaryColor}] transition duration-200`}
              >
                info@zafrika.com
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-4 pb-2 text-white border-b border-gray-700">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Follow our journey and stay updated with our latest innovations and projects.
          </p>

          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                style={{ "--hover-bg": primaryColor }}
                className="p-3 bg-white/10 rounded-xl transition duration-200 text-white/80 flex items-center justify-center shadow-lg hover:bg-(--hover-bg)"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} ZAFRIKA. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Digital solutions built for the future.</p>
      </div>
    </footer>
  );
};

export default Footer;
