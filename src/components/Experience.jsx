import { motion } from "framer-motion"
import { experience } from "../data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gold rounded-full mb-10" />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold opacity-30" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bggold flex items-center justify-center ring-4 ring-white dark:ring-[#0a0505]">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40 hover:border-amber-400 dark:hover:border-amber-700/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-heading font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gold dark:text-amber-300 font-medium mb-2">{exp.organization}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{exp.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}