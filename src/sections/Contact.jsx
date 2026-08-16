import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Building2,
  CheckCircle2
} from 'lucide-react'
import { motion } from 'framer-motion'

import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

const API_URL =
  import.meta.env.VITE_API_URL ||
  'http://localhost:5000/api'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const update = (e) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }))
  }

  const submit = async (e) => {
    e.preventDefault()

    setLoading(true)

    setStatus({
      type: '',
      message: ''
    })

    try {
      // --------------------------------
      // Send information to backend
      // --------------------------------

      const response = await fetch(
        `${API_URL}/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
            'Unable to send your information.'
        )
      }

      // --------------------------------
      // Create WhatsApp message
      // --------------------------------

      const whatsappMessage = `
Hi ${portfolio.name},

I visited your portfolio and would like to connect with you.

━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}
Company: ${form.company || 'Not provided'}
Subject: ${form.subject || 'Not provided'}

━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━

${form.message}

━━━━━━━━━━━━━━━━━━

Thank you.
      `.trim()

      const encodedMessage =
        encodeURIComponent(
          whatsappMessage
        )

      const whatsappUrl =
        `https://wa.me/${portfolio.whatsapp}?text=${encodedMessage}`

      // --------------------------------
      // Success
      // --------------------------------

      setStatus({
        type: 'success',
        message:
          'Your information has been received. Opening WhatsApp...'
      })

      // Clear form
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })

      // --------------------------------
      // Open WhatsApp
      // --------------------------------

      window.location.href = whatsappUrl

    } catch (error) {
      console.error(
        'Contact submission error:',
        error
      )

      setStatus({
        type: 'error',
        message:
          error.message ||
          'Something went wrong. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  // --------------------------------
  // Direct WhatsApp button
  // --------------------------------

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi ${portfolio.name}, I visited your portfolio and would like to connect with you.`
    )

    window.open(
      `https://wa.me/${portfolio.whatsapp}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      id="contact"
      className="section border-t border-white/5 py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's connect and build something great."
          description="Have an SAP opportunity, technical discussion, collaboration idea or simply want to connect? Send me a message and I'll get back to you."
        />

        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="glass rounded-3xl p-7 sm:p-9"
          >

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Get in touch
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Connect with me
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I'm open to discussing SAP ABAP,
                ABAP on HANA, S/4HANA, CDS Views,
                RAP, AMDP, OData, SAP BTP and
                exciting technology opportunities.
              </p>
            </div>

            {/* Contact Details */}

            <div className="mt-8 space-y-4">

              {/* Email */}

              <a
                href={`mailto:${portfolio.email}`}
                className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.06]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/10">
                  <Mail
                    className="text-blue-400"
                    size={19}
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm text-slate-200">
                    {portfolio.email}
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href={`tel:${portfolio.phone}`}
                className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.06]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/10">
                  <Phone
                    className="text-violet-400"
                    size={19}
                  />
                </span>

                <div>
                  <p className="text-xs text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-200">
                    {portfolio.phone}
                  </p>
                </div>
              </a>

              {/* Location */}

              <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-500/10">
                  <MapPin
                    className="text-cyan-400"
                    size={19}
                  />
                </span>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-200">
                    {portfolio.location}
                  </p>
                </div>
              </div>

            </div>

            {/* =========================
                WHATSAPP CTA
            ========================== */}

            <button
              type="button"
              onClick={openWhatsApp}
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-5 py-4 font-bold text-white shadow-lg shadow-emerald-500/10 transition duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-emerald-500/20"
            >
              <MessageCircle
                size={20}
                className="transition-transform group-hover:scale-110"
              />

              Chat with me on WhatsApp
            </button>

            <p className="mt-3 text-center text-xs text-slate-600">
              Available for professional opportunities,
              collaborations and technical discussions.
            </p>

            {/* =========================
                SOCIAL LINKS
            ========================== */}

            <div className="mt-8 border-t border-white/5 pt-7">

              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Find me online
              </p>

              <div className="flex gap-3">

                <a
                  href={portfolio.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition hover:-translate-y-1 hover:border-white/20 hover:text-white"
                >
                  <Github size={18} />
                </a>

                <a
                  href={portfolio.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition hover:-translate-y-1 hover:border-white/20 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>

              </div>
            </div>

          </motion.div>

          {/* =========================
              CONTACT FORM
          ========================== */}

          <motion.form
            onSubmit={submit}
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="glass rounded-3xl p-7 sm:p-9"
          >

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Send a message
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Tell me about your opportunity
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Your information will be securely sent to
                my backend and recorded in my contact
                sheet. After submission, WhatsApp will
                open so we can connect directly.
              </p>
            </div>

            {/* Name + Email */}

            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="John Doe"
              />

              <Field
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="john@example.com"
              />

            </div>

            {/* Phone + Company */}

            <div className="mt-5 grid gap-5 sm:grid-cols-2">

              <Field
                label="Phone number"
                name="phone"
                type="tel"
                required={false}
                value={form.phone}
                onChange={update}
                placeholder="+1 555 123 4567"
              />

              <Field
                label="Company"
                name="company"
                required={false}
                value={form.company}
                onChange={update}
                placeholder="Company name"
                icon={<Building2 size={15} />}
              />

            </div>

            {/* Subject */}

            <div className="mt-5">

              <Field
                label="Subject"
                name="subject"
                required={false}
                value={form.subject}
                onChange={update}
                placeholder="SAP ABAP opportunity"
              />

            </div>

            {/* Message */}

            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Message
                <span className="ml-1 text-red-400">
                  *
                </span>
              </label>

              <textarea
                name="message"
                required
                value={form.message}
                onChange={update}
                rows={6}
                maxLength={3000}
                placeholder="Tell me about the opportunity, project or how you'd like to connect..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
              />

              <div className="mt-2 flex justify-end">
                <span className="text-[11px] text-slate-600">
                  {form.message.length}/3000
                </span>
              </div>

            </div>

            {/* =========================
                STATUS
            ========================== */}

            {status.message && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                className={`mt-5 flex items-start gap-3 rounded-xl px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-emerald-400/10 text-emerald-300'
                    : 'bg-red-400/10 text-red-300'
                }`}
              >

                {status.type === 'success' && (
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <span>
                  {status.message}
                </span>

              </motion.div>
            )}

            {/* =========================
                SUBMIT BUTTON
            ========================== */}

            <button
              type="submit"
              disabled={loading}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-bold text-slate-950 shadow-lg shadow-white/5 transition duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-white/10 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >

              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-slate-950" />

                  Saving your information...
                </>
              ) : (
                <>
                  Send & Connect on WhatsApp

                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}

            </button>

            <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">
              By submitting this form, your contact
              information will be recorded for
              communication purposes.
            </p>

          </motion.form>

        </div>
      </div>
    </section>
  )
}


/* =================================
   REUSABLE FIELD
================================= */

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = true,
  icon
}) {
  return (
    <label className="block">

      <span className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-300">

        {icon && (
          <span className="text-slate-500">
            {icon}
          </span>
        )}

        {label}

        {required && (
          <span className="text-red-400">
            *
          </span>
        )}

      </span>

      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
      />

    </label>
  )
}