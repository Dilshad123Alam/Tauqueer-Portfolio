import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

export default function Academic() {
  return (
    <section id="academic" className="section border-y border-white/5 bg-white/[0.015] py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="02 — Academic" title="Education & learning" description="A timeline of my academic foundation and continuous learning." />

        <div className="relative ml-2 border-l border-white/10 pl-8 sm:ml-8 sm:pl-12">
          {portfolio.academic.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.1} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[2.12rem] top-1 h-4 w-4 rounded-full border-4 border-[#070b14] bg-blue-400 sm:-left-[3.15rem]" />
              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">{item.year}</span>
                  <span className="text-xs text-slate-500">Academic</span>
                </div>
                <h3 className="mt-5 text-2xl font-black text-white">{item.degree}</h3>
                <p className="mt-1 font-medium text-violet-300">{item.institution}</p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
