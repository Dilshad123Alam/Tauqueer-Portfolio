import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-3xl"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>}
    </motion.div>
  )
}
