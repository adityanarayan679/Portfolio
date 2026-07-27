import { motion } from "framer-motion"
import { FiGithub, FiMail, FiPhone, FiDownload } from "react-icons/fi"
import { personalInfo } from "../data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-red-950 to-gray-950"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 dark:bg-amber-800/30 border border-amber-400 dark:border-amber-700/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6"
          >
            <span className="text-crimson">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-200 font-heading font-light mb-4"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-300 max-w-lg mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-crimson text-white font-semibold text-base hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bggold text-white font-semibold text-base hover:shadow-lg hover:glow-gold/25 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <FiDownload className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-gold hover:bg-amber-800/30 transition-all duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-gold hover:bg-amber-800/30 transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Call phone"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-gold hover:bg-amber-800/30 transition-all duration-300"
            >
              <FiPhone className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-gray-500 flex items-start justify-center p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}