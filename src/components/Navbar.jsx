import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { FiGithub, FiSun, FiMoon } from "react-icons/fi"
import { personalInfo, navLinks } from "../data"

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

      const sections = navLinks.map((link) => link.toLowerCase())
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100
      })
      if (current) {
        setActiveSection(current.charAt(0).toUpperCase() + current.slice(1))
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-[3px] bg-gray-900 dark:bg-[#0f0a0a] z-50"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gold transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            className="fixed top-3 left-4 right-4 z-40 max-w-5xl mx-auto rounded-full px-4 py-2 flex items-center justify-between backdrop-blur-md border bg-white/90 dark:bg-red-950/80 shadow-lg border-gray-200 dark:border-red-800/40 transition-all duration-300"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a
              href="#home"
              className="font-heading font-bold text-lg text-gold cursor-pointer"
            >
              {personalInfo.name.charAt(0)}
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                    activeSection === link
                      ? "text-gold"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {link}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bggold text-white text-sm font-medium hover:shadow-lg hover:glow-gold/25 transition-all duration-300"
              >
                Resume
              </a>
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-600 dark:text-gray-300 hover:text-gold transition-colors duration-200"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300"
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
            className="fixed inset-0 z-30 bg-white/95 dark:bg-[#0a0505]/95 backdrop-blur-md flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-2xl font-heading font-semibold text-gray-800 dark:text-gray-200 hover:text-gold transition-colors"
              >
                {link}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bggold text-white font-medium"
            >
              Resume
            </a>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 mt-4"
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
      className="p-2 rounded-full bg-gray-200 dark:bg-[#1a1010] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  )
}