import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import GlowOrb from '../components/GlowOrb'

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="section relative min-h-screen overflow-hidden pt-32">
      <div className="grid-bg absolute inset-0 -z-10 opacity-70" />
      <GlowOrb className="left-[-8rem] top-40 h-72 w-72" />
      <GlowOrb className="right-[-8rem] top-72 h-96 w-96 bg-violet-500/20" />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {portfolio.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-4 text-lg font-semibold text-blue-400"
          >
            {portfolio.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
          >
            {portfolio.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i > 4 ? 'text-gradient' : ''}> {word}</span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            {portfolio.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1"
            >
              View Projects
              <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Let's Talk
            </button>
          </motion.div>

          <div className="mt-9 flex items-center gap-3">
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-white">
              <Github size={19} />
            </a>
            <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-white">
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glow glass relative overflow-hidden rounded-[2rem] p-7">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">/developer/profile</span>
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />
              </div>

              <div className="grid h-52 place-items-center rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-400/10">
                <div className="grid h-32 w-32 place-items-center rounded-full border border-white/10 bg-slate-950 text-5xl font-black text-gradient">
                  {portfolio.initials}
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm text-slate-500">Hello, I'm</p>
                <h3 className="mt-1 text-2xl font-black text-white">{portfolio.name}</h3>
                <p className="mt-1 text-slate-400">{portfolio.role}</p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2">
                {portfolio.hero.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/[0.04] p-3 text-center">
                    <p className="text-lg font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-[10px] leading-4 text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 md:flex"
      >
        Scroll to explore
        <ArrowDown className="animate-bounce" size={16} />
      </button>
    </section>
  )
}
