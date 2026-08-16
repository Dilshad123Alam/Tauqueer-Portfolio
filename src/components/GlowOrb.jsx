import { motion } from 'framer-motion'

export default function GlowOrb({ className = '' }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`pointer-events-none absolute rounded-full bg-blue-500/20 blur-3xl ${className}`}
    />
  )
}
