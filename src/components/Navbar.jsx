import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { FiGithub, FiSun, FiMoon } from "react-icons/fi"
import { personalInfo, navLinks } from "../data"

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")
  const rawProgress = useMotionValue(0)
  const smoothProgress = useSpring(rawProgress, { stiffness: 80, damping: 25 })
  const progressWidth = useTransform(smoothProgress, [0, 100], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      rawProgress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      const sections = navLinks.map((link) => link.toLowerCase())
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120
      })
      if (current) {
        setActiveSection(current.charAt(0).toUpperCase() + current.slice(1))
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gold/20 z-50" aria-hidden="true">
        <motion.div className="h-full bg-gold relative overflow-hidden" style={{ width: progressWidth }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            className="fixed top-3 left-4 right-4 z-40 max-w-5xl mx-auto rounded-xl px-4 py-2.5 flex items-center justify-between backdrop-blur-xl border border-white/5 bg-charcoal/80 shadow-lg shadow-black/20 transition-all duration-300"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <a href="#home" className="font-heading font-bold text-lg text-gold tracking-wide cursor-pointer">
                {personalInfo.name.charAt(0)}
              </a>
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className={"gold-underline text-sm font-medium transition-colors duration-200 " + (activeSection === link ? "text-gold active" : "text-gray-400 hover:text-gold")}
                >
                  {link}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-md bggold text-white text-xs font-semibold tracking-wide hover:shadow-glow-gold transition-all duration-300"
              >
                Resume
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-400 hover:text-gold transition-colors duration-200"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-2xl font-heading font-semibold text-gray-300 hover:text-gold transition-colors"
              >
                {link}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-md bggold text-white font-semibold text-sm tracking-wide"
            >
              Resume
            </a>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 mt-4"
            >
              <FiGithub className="w-7 h-7" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-gold hover:border-gold/20 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  )
}