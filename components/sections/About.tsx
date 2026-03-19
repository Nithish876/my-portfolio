"use client";

import { motion } from "framer-motion";
import { siteMetadata, skills } from "@/lib/data";

export function About() {
  return (
    <section className="py-32 px-6 md:px-12 relative bg-[#030008]" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 tracking-tighter text-white">
            Beyond <br /><span className="text-gray-600">Code.</span>
          </h2>
          <div className="text-gray-400 leading-relaxed text-lg md:text-xl space-y-6 font-light max-w-xl">
            <p>{siteMetadata.description}</p>
            <p>
              Transforming complex technical requirements into elegant, high-converting digital products is my specialty. Trust is earned through flawless execution.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
          }}
          className="bg-white/[0.02] border border-white/5 p-10 md:p-14 rounded-[2.5rem]"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Technical Arsenal</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium text-sm transition-all hover:bg-white/10"
                >
                  <Icon size={18} className="text-purple-400" />
                  {skill.name}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
