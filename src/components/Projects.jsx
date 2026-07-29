import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "../data"

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tech))]

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All")

  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tech.includes(activeTag))

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto bg-white dark:bg-[#0a0505]">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          My <span className="text-crimson">Projects</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-16 h-1 bg-gold rounded-full mb-6 origin-left"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={"px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all duration-300 " + (activeTag === tag ? "bggold text-white shadow-md" : "bg-gray-100 dark:bg-[#1a1010] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700")}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}