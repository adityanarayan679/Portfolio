import { motion } from "framer-motion"
import { MdOutlineVerified } from "react-icons/md"
import { certifications } from "../data"

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto bg-white dark:bg-[#0a0505]">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          My <span className="text-crimson">Certifications</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-16 h-1 bg-gold rounded-full mb-10 origin-left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] card-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
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