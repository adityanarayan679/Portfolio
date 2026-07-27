import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiDownload } from "react-icons/fi"
import { personalInfo } from "../data"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
          Get In <span className="text-crimson">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gold rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Have a project in mind or want to work together? Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40 hover:border-amber-400 dark:hover:border-amber-700/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-700/10 flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gold transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40 hover:border-amber-400 dark:hover:border-amber-700/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-700/10 flex items-center justify-center">
                  <FiPhone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gold transition-colors">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-700/10 flex items-center justify-center">
                  <FiMapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-10 rounded-2xl bg-gray-50 dark:bg-[#0f0a0a] border border-gray-200 dark:border-red-800/40">
            <div className="w-16 h-16 rounded-full bggold flex items-center justify-center mb-6">
              <FiDownload className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
              Download My Resume
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
              Get a detailed overview of my skills, experience, and education.
            </p>
            <a
              href={personalInfo.resumeUrl} download="resume.pdf" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bggold text-white font-semibold text-base hover:shadow-lg hover:glow-gold/25 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}