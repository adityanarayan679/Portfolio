import { motion } from "framer-motion"
import { MdOutlineVerified } from "react-icons/md"
import { certifications } from "../data"

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          Certifications
        </h2>
        <div className="w-16 h-1 bg-gold rounded-full mb-2" />
        <p className="text-gray-500 dark:text-gray-300 mb-10">
          Certifications I have earned along the way.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40 hover:border-amber-400 dark:hover:border-amber-700/30 transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-700/10 flex items-center justify-center flex-shrink-0">
                <MdOutlineVerified className="w-5 h-5 text-gold" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}