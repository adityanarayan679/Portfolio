import { motion } from "framer-motion"
import { skillCategories, personalInfo } from "../data"
import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          My <span className="text-crimson">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gold rounded-full mb-4" />

        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "bggold text-white shadow-lg glow-gold/20"
                  : "bg-gray-100 dark:bg-[#1a1010] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40 hover:border-amber-400 dark:hover:border-amber-700/30 hover:shadow-md hover:glow-gold/10 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {(() => {
                const IconComp = skill.icon
                return <IconComp className="w-5 h-5 text-gold" />
              })()}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}