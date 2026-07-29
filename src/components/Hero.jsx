import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { FiGithub, FiMail, FiPhone, FiDownload } from "react-icons/fi"
import { personalInfo } from "../data"
import MagneticButton from "./MagneticButton"

const roles = ["Software Developer", "AI Developer", "Problem Solver"]

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
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
<section
      id="home"
      className="min-h-screen relative flex flex-col overflow-hidden bg-[#F6F6F6] lg:justify-center lg:items-center"
    >
      <img
        src="/profile.jpeg"
        alt={personalInfo.name}
        className="w-full object-cover lg:hidden"
        style={{ maxHeight: "45vh" }}
      />
      <div
        className="absolute inset-0 z-0 bg-[#F6F6F6] hidden lg:block"
        style={{
          backgroundImage: "url('/profile.jpeg')",
          backgroundSize: "contain",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="hidden lg:block">
        <motion.div className="absolute left-0 top-0 z-0 pointer-events-none" aria-hidden="true"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
            <path d="M0 200 C100 100 200 150 250 200 C200 250 100 300 0 200Z" fill="#d4af37" />
            <path d="M0 350 C80 300 150 320 200 350 C150 380 80 400 0 350Z" fill="#991b1b" />
            <path d="M0 50 C60 20 120 40 160 70 C120 100 60 80 0 50Z" fill="#d4af37" />
          </svg>
        </motion.div>
        <motion.div className="absolute left-0 bottom-0 z-0 pointer-events-none" aria-hidden="true"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15">
            <path d="M0 100 C50 50 120 30 180 80 C120 130 50 150 0 100Z" fill="#d4af37" />
            <path d="M0 180 C40 140 90 130 140 170 C90 190 40 200 0 180Z" fill="#991b1b" />
          </svg>
        </motion.div>
        <motion.div className="absolute left-0 top-1/3 z-0 pointer-events-none" aria-hidden="true"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
            <path d="M0 150 C30 100 80 80 120 120 C80 160 30 200 0 150Z" fill="#d4af37" />
            <circle cx="100" cy="200" r="60" fill="#d4af37" />
            <circle cx="40" cy="220" r="40" fill="#991b1b" />
          </svg>
        </motion.div>
        <motion.div className="absolute right-0 top-0 z-0 pointer-events-none" aria-hidden="true"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <svg width="250" height="350" viewBox="0 0 250 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15">
            <path d="M250 150 C150 80 80 120 50 180 C100 220 180 250 250 150Z" fill="#d4af37" />
            <path d="M250 300 C180 270 120 280 80 320 C140 340 200 350 250 300Z" fill="#991b1b" />
          </svg>
        </motion.div>
        <motion.div className="absolute right-0 bottom-0 z-0 pointer-events-none" aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
            <path d="M200 80 C140 40 80 60 40 100 C80 140 140 120 200 80Z" fill="#d4af37" />
            <circle cx="160" cy="180" r="50" fill="#d4af37" />
            <circle cx="200" cy="220" r="35" fill="#991b1b" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute left-[40%] md:left-[38%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson/20 to-transparent z-10 hidden md:block" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-16 pt-8 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg md:ml-auto text-center md:text-right md:mx-0 mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson/10 border border-crimson/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sapphire ring-2 ring-crimson/20 animate-pulse" />
            <span className="text-sm font-medium text-crimson tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-4"
          >
            <span className="text-sapphire">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-end gap-3 mb-6">
            <div className="h-px flex-1 bg-gold max-w-[60px] md:max-w-none" />
            <AnimatePresence mode="wait">
              <motion.span key={roleIndex} className="text-gold text-sm tracking-heraldic uppercase whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >{roles[roleIndex]}</motion.span>
            </AnimatePresence>
            <div className="h-px w-12 bg-crimson" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-500 max-w-lg md:ml-auto mb-8 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center md:items-end justify-center md:justify-end gap-4 mb-10"
          >
            <MagneticButton
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-md bggold text-white font-semibold text-sm tracking-wide hover:scale-[1.02] hover:glow-gold-lg transition-all duration-300"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-md border border-crimson/50 text-crimson font-semibold text-sm tracking-wide hover:bg-crimson/10 hover:border-crimson transition-all duration-300"
            >
              Download CV
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-end gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={"mailto:" + personalInfo.email}
              aria-label="Send email"
              className="w-10 h-10 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href={"tel:" + personalInfo.phone}
              aria-label="Call phone"
              className="w-10 h-10 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              <FiPhone className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-crimson" />
        </motion.div>
      </motion.div>
    </section>
  )
}