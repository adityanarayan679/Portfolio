import { useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MagneticButton({ children, className, href, target, rel, download, onClick, type }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.08, y: y * 0.08 })
  }

  const handleLeave = () => setPosition({ x: 0, y: 0 })

  const motionProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: handleLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring", stiffness: 500, damping: 10, mass: 0.03 },
    className,
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} download={download} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}