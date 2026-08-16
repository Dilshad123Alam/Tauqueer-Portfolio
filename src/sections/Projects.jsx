import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="05 — Projects" title="Things I've built" description="Selected projects demonstrating product design, frontend engineering and backend architecture." />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`${project.featured ? 'lg:col-span-1' : ''} group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8`}
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-violet-500/15" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">{project.category}</span>
                  <ArrowUpRight className="text-slate-600 transition group-hover:text-white" />
                </div>

                <div className="mt-12 h-48 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/10 via-slate-950 to-violet-500/10 p-5">
                  <div className="h-full rounded-xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                      <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    </div>
                    <div className="mt-7 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-blue-500/10" />
                      <div className="h-16 rounded-lg bg-violet-500/10" />
                      <div className="h-16 rounded-lg bg-cyan-500/10" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
{/* 
                <div className="mt-7 flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
