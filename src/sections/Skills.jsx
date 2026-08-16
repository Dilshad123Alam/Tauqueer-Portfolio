import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

export default function Skills() {
  const groups = [...new Set(portfolio.skills.map((s) => s.category))]

  return (
    <section id="skills" className="section border-y border-white/5 bg-white/[0.015] py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="04 — Skills" title="My technical toolkit" description="Technologies and capabilities I use to turn ideas into production-ready software." />

        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <Reveal key={group} delay={groupIndex * 0.08} className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="mb-7 text-xl font-black text-white">{group}</h3>
              <div className="space-y-6">
                {portfolio.skills.filter((s) => s.category === group).map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
