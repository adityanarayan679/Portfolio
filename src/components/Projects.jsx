import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "../data"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          My <span className="text-crimson">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-crimson rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}




