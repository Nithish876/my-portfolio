"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteMetadata } from "@/lib/data";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Nithish, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`;
    window.open(`https://wa.me/${siteMetadata.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 px-6 md:px-12 relative bg-[#030008]" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[0.9]">
            Let's build<br />
            <span className="text-gray-600">great</span><br />
            systems.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-md">
            Taking on new projects. Complete the precise form or connect directly to my secure WhatsApp channel.
          </p>
          <div className="mt-12">
            <p className="text-sm font-mono tracking-widest uppercase text-gray-600 mb-2">Direct Line</p>
            <p className="text-2xl font-light text-white">{siteMetadata.whatsappNumber}</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-2">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 text-xl md:text-2xl outline-none transition-colors text-white placeholder:text-gray-700 rounded-none font-light"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 text-xl md:text-2xl outline-none transition-colors text-white placeholder:text-gray-700 rounded-none font-light"
              placeholder="Your Email"
            />
          </div>
          <div className="space-y-2">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 text-xl md:text-2xl outline-none transition-colors text-white placeholder:text-gray-700 resize-none rounded-none font-light"
              placeholder="Project Details"
            />
          </div>
          <button type="submit" className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors rounded-full float-right">
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
