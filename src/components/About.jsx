import { motion } from "framer-motion"
import { FiMapPin, FiClock, FiTarget } from "react-icons/fi"
import { personalInfo, education } from "../data"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          About <span className="text-crimson">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gold rounded-full mb-8" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FiMapPin className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FiClock className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">Final Year B.Tech</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <FiTarget className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">Entry-Level Roles</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40 hover:border-amber-400 dark:hover:border-amber-700/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-semibold text-sm text-gold mb-1">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
)
}