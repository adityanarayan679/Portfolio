import { motion } from "framer-motion"
import { FiGithub, FiMail, FiPhone } from "react-icons/fi"
import { personalInfo } from "../data"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-red-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bggold flex items-center justify-center text-white font-heading font-bold text-sm">
              A
            </div>
            <span className="font-heading font-semibold text-gray-900 dark:text-white">
              {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#1a1010] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gold hover:bg-amber-100 dark:hover:bg-amber-700/10 transition-all duration-300"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#1a1010] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gold hover:bg-amber-100 dark:hover:bg-amber-700/10 transition-all duration-300"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone"
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#1a1010] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gold hover:bg-amber-100 dark:hover:bg-amber-700/10 transition-all duration-300"
            >
              <FiPhone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-300 mt-1">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}