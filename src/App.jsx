import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import Particles from "./components/Particles"


export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Particles />
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#F6F6F6] flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-20 h-20 rounded-2xl bggold flex items-center justify-center mb-6"
            >
              <span className="text-white font-heading font-bold text-3xl">A</span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="h-0.5 w-32 bg-gold/40 origin-center mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-heading text-xl text-gray-700 font-semibold tracking-wide"
            >
              Aditya Narayan Barik
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-sm text-gray-400 mt-1 tracking-heraldic uppercase"
              onAnimationComplete={() => {
                setTimeout(() => setIntroComplete(true), 800)
              }}
            >
              Software Developer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Experience />
            <Contact />
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
