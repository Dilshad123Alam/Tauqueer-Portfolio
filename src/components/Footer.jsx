import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink
} from 'lucide-react'

import { portfolio } from '../data/portfolio'

const navigation = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Academic', id: 'academic' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]

const technologies = [
  'ABAP',
  'Modern ABAP',
  'ABAP on HANA',
  'CDS Views',
  'RAP',
  'AMDP',
  'OData',
  'SAP BTP',
  'S/4HANA'
]

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050914]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr]">

          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                {portfolio.initials}
              </span>

              <div className="text-left">
                <p className="font-black text-white">
                  {portfolio.name}
                </p>

                <p className="text-xs text-blue-400">
                  {portfolio.role}
                </p>
              </div>
            </button>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              SAP ABAP on HANA Developer specializing in Modern ABAP,
              S/4HANA, CDS Views, RAP, AMDP, OData, SAP BTP and
              cloud-ready enterprise solutions.
            </p>

            {/* Availability */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {portfolio.availability}
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href={portfolio.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${portfolio.email}`}
                aria-label="Email"
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm text-slate-500 transition hover:translate-x-1 hover:text-blue-400"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact + Technologies */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail size={16} />
                </span>

                {portfolio.email}
              </a>

              <a
                href={`tel:${portfolio.phone}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-violet-500/10 text-violet-400">
                  <Phone size={16} />
                </span>

                {portfolio.phone}
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin size={16} />
                </span>

                {portfolio.location}
              </div>

            </div>

            {/* Technologies */}
            <div className="mt-7">

              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Core Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-400 transition hover:border-blue-400/20 hover:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* Footer Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
            </p>

            <p className="mt-1 text-[11px] text-slate-600">
              Designed & developed with Modern Technologies.
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white sm:flex"
            >
              Let's work together
              <ExternalLink size={13} />
            </button>

            {/* Back To Top */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }
              aria-label="Back to top"
              className="group grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-950 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
            >
              <ArrowUp
                size={17}
                className="transition group-hover:-translate-y-0.5"
              />
            </button>

          </div>

        </div>

      </div>
    </footer>
  )
}