import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // To detect active route

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  return (
    <header
      style={{ backgroundColor: darkBackgroundColor }}
      className="w-full text-white fixed top-0 left-0 z-50 shadow-lg border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Zafrika Logo"
            className="h-10 w-auto object-contain"
          />
          <span
            className="text-2xl font-bold tracking-wide"
            style={{ color: primaryColor }}
          >
            ZAFRIKA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive
                    ? `text-[${primaryColor}] border-b-2 border-[${primaryColor}] pb-1`
                    : "text-white hover:text-[${primaryColor}]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6" style={{ color: primaryColor }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: primaryColor }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: darkBackgroundColor }}
            className="md:hidden border-t border-gray-800"
          >
            <div className="flex flex-col items-center space-y-4 py-4 text-sm">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? `text-[${primaryColor}] border-b border-[${primaryColor}] pb-1`
                        : "text-white hover:text-[${primaryColor}]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
