import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // optional reset
    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-400 text-sm">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              required
              autoComplete="off"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 border border-white/10 
                         text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-cyan-500
                         transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 border border-white/10 
                         text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-cyan-500
                         transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/40 border border-white/10 
                         text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-cyan-500
                         transition-all duration-300 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl 
                       bg-linear-to-r from-cyan-500 to-blue-600
                       text-white font-medium tracking-wide
                       hover:from-cyan-400 hover:to-blue-500
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
