import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="01 — About"
          title={portfolio.about.title}
          description={portfolio.about.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="glass rounded-3xl p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">My approach</p>
            <p className="mt-5 text-xl font-semibold leading-9 text-slate-200">
              I combine engineering discipline with product thinking to create interfaces that are clean, useful and memorable.
            </p>
            <div className="mt-8 h-px bg-white/10" />
            <p className="mt-7 leading-8 text-slate-400">
              From the first component to the final API endpoint, I care about structure, performance, accessibility and the small interactions that make software feel polished.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-3 sm:grid-cols-2">
            {portfolio.about.highlights.map((item, i) => (
              <div key={item} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blue-400/20">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                  <CheckCircle2 size={20} />
                </div>
                <p className="font-semibold text-white">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">Built with practical, production-focused thinking.</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
