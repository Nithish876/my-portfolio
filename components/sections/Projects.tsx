"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section className="py-32 px-6 md:px-12 relative bg-[#030008]" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-white leading-[0.9]">
            Selected <br /><span className="text-gray-600">Works.</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project: any, idx: number) => (
            <motion.div
              key={idx}
              className={`group flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full lg:w-3/5 overflow-hidden rounded-[2rem] relative aspect-[4/3] bg-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-transparent z-10 pointer-events-none group-hover:bg-purple-900/10 transition-colors duration-700 mix-blend-overlay" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>
              
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <p className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-4">0{idx + 1}</p>
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-lg lg:text-xl font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((item: any, i: number) => {
                    const Icon = item.icon;
                    return (
                      <span 
                        key={i} 
                        className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5"
                      >
                        <Icon size={14} className="text-purple-400" />
                        {item.name}
                      </span>
                    )
                  })}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b-2 border-white/20 text-white pb-1 hover:border-white transition-colors w-fit font-bold tracking-widest uppercase text-xs"
                >
                  View Live Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
