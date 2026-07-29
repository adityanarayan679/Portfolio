import { motion } from "framer-motion"
import { skillCategories } from "../data"
import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto bg-white dark:bg-[#0a0505]">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          My <span className="text-crimson">Skills</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-16 h-1 bg-gold rounded-full mb-6 origin-left"
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={"px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-300 " + (activeCategory === i ? "bggold text-charcoal shadow-lg" : "bg-gray-100 dark:bg-[#1a1010] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700")}
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
          {skillCategories[activeCategory].skills.map((skill, i) => {
            const IconComp = skill.icon
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] card-base cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <IconComp className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}