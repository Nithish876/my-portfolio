import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <motion.div
      className="p-8 bg-gray-900/40 rounded-2xl border border-purple-500/20 backdrop-blur-md flex flex-col justify-between group hover:border-purple-500/50 transition-colors duration-500"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
      >
        View Project <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
    </motion.div>
  );
}
