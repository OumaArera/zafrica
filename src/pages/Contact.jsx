import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const primaryColor = "#007BFF";
  const darkBackgroundColor = "#0B1120";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle send
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Construct the mailto link
    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open the user's email client
    window.location.href = `mailto:info@zafrika.com?cc=ceo@zafrika.com&subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white text-gray-900 -mt-6">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/Contact.jpg')",
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
            Get in <span style={{ color: primaryColor }}>Touch</span>
          </h1>
          <p className="text-lg text-gray-200">
            Let’s collaborate to shape the future of technology in Africa and beyond.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO GRID */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
          >
            <Mail className="w-10 h-10 mx-auto mb-4" style={{ color: primaryColor }} />
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-gray-600">info@zafrika.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
          >
            <Phone className="w-10 h-10 mx-auto mb-4" style={{ color: primaryColor }} />
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+254 748 800 714</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
          >
            <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: primaryColor }} />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Send Us a Message
          </motion.h2>
          <p className="text-gray-600 mb-12">
            Have a project in mind or a question about our services? We’d love to hear from you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* MAP / CTA SECTION */}
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0B1120 0%, #007BFF 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Partner with Zafrika to innovate, scale, and transform your digital vision.
          </p>
          <a
            href="mailto:info@zafrika.com"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Email Us Directly
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
