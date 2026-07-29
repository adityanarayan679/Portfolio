import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 })

  useEffect(() => {
    const handleMouse = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const handleLeave = () => setVisible(false)
    window.addEventListener("mousemove", handleMouse)
    document.addEventListener("mouseleave", handleLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouse)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-crimson/40 pointer-events-none z-[200] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.2 }}
    />
  )
}