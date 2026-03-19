"use client";

import { motion } from "framer-motion";
import { siteMetadata } from "@/lib/data";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center p-6 md:p-12 relative overflow-hidden pointer-events-none">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="pointer-events-auto text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-purple-400 font-mono tracking-widest uppercase text-sm md:text-base mb-6"
          >
            {siteMetadata.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-12 text-white"
          >
            React Native. <br />
            <span className="text-gray-600">Full-Stack.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 items-center md:items-start md:justify-start mb-16"
          >
            <a href="#projects" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-12 py-5 text-lg bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                Explore Work
              </button>
            </a>
            <a href="#contact" className="w-full md:w-auto px-12 py-5 text-lg text-white border border-white/20 hover:bg-white/5 rounded-full font-bold transition-all text-center">
              Let's Talk
            </a>
          </motion.div>

          {/* Social / Upwork Links Restored */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            {siteMetadata.socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
