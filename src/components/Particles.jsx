import { useEffect, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"

const PARTICLES = 20

function Particle({ index }) {
  const controls = useAnimationControls()

  useEffect(() => {
    const startX = Math.random() * 100
    const startY = Math.random() * 100
    const size = Math.random() * 3 + 1
    const duration = Math.random() * 20 + 15
    const drift = Math.random() * 40 - 20

    controls.start({
      x: [0, drift, -drift, drift, 0],
      y: [0, -20 - Math.random() * 30, 20 + Math.random() * 30, -10, 0],
      transition: { duration, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
    })
  }, [])

  const size = Math.random() * 3 + 1
  const isGold = Math.random() > 0.5

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        width: size + "px",
        height: size + "px",
        background: isGold ? "#d4af37" : "#991b1b",
        opacity: Math.random() * 0.15 + 0.05,
      }}
      animate={controls}
    />
  )
}

export default function Particles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {Array.from({ length: PARTICLES }).map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  )
}