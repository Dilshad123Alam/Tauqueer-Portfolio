import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="03 — Experience" title="Where I've made an impact" description="Professional experience, responsibilities and selected achievements." />

        <div className="space-y-5">
          {portfolio.experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={i * 0.1}>
              <article className="group glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-blue-400/20 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
                  <p className="text-sm font-bold text-blue-400">{item.period}</p>
                  <div>
                    <h3 className="text-2xl font-black text-white">{item.role}</h3>
                    <p className="mt-1 font-medium text-violet-300">{item.company}</p>
                    <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="rounded-xl bg-white/[0.035] p-3 text-sm text-slate-300">
                          ✓ {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
