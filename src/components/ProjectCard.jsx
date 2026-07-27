import { motion } from "framer-motion"
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi"

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-white dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40 hover:border-amber-400 dark:hover:border-amber-700/30 transition-all duration-300 hover:shadow-xl hover:glow-gold/10 hover:-translate-y-1"
    >
      <div className="absolute inset-0 rounded-2xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors duration-300" />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-700/10 text-gold dark:text-amber-300 border border-amber-300 dark:border-amber-800/40"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-crimson text-white text-sm font-medium hover:shadow-lg hover:glow-red/25 transition-all duration-300"
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 dark:border-red-800/40 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
          >
            <FiArrowUpRight className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}