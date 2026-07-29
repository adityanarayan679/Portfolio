import { motion } from "framer-motion"
import TiltCard from "./TiltCard"

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ProjectCard({ project, index }) {
  return (
    <TiltCard>
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-xl bg-white dark:bg-[#0f0a0a] card-base"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white group-hover:text-crimson transition-colors duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="w-2.5 h-2.5 rounded-full bg-sapphire flex-shrink-0" title="Featured project" />
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20"
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bggold text-white text-sm font-semibold tracking-wide hover:scale-[1.02] hover:shadow-glow-gold transition-all duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  </TiltCard>
  )
}