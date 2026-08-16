import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../data/portfolio'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Academic', 'academic'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <nav className="glass flex h-16 items-center justify-between rounded-2xl px-4 shadow-2xl shadow-black/10">
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 font-black text-white">
              {portfolio.initials}
            </span>
            <span className="hidden text-sm font-bold text-white sm:block">{portfolio.name}</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={portfolio.resume}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="glass mt-2 rounded-2xl p-2 md:hidden"
            >
              {links.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-slate-200 hover:bg-white/5"
                >
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
