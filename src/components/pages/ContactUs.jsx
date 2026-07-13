import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import PageShell, { Band } from './PageShell'
import Reveal from '../common/Reveal'
import { img } from '../../data/images'

const crumb = [{ label: 'Contact Us' }]

const ADDRESS = 'IEM Management Building, D-1, Street No. 13, EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091'
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

const details = [
  { Icon: Mail, label: 'Email', lines: [{ text: 'eee.iemk@gmail.com', href: 'mailto:eee.iemk@gmail.com' }] },
  {
    Icon: Phone,
    label: 'Phone',
    lines: [
      { text: '+91 33 2357 2969', href: 'tel:+913323572969' },
      { text: '+91 33 2357 7649', href: 'tel:+913323577649' },
    ],
  },
  { Icon: MapPin, label: 'Address', lines: [{ text: ADDRESS }] },
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const field = 'w-full rounded-lg border border-surface-line bg-white px-4 py-3 text-[14px] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15'

  return (
    <Reveal className="card p-7 sm:p-8">
      <h3 className="font-display text-lg font-bold text-ink-900">Send us a message</h3>
      <p className="mt-1 text-[13.5px] text-ink-600">We usually respond within a couple of working days.</p>

      {sent && (
        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-brand-blue/20 bg-brand-skysoft px-4 py-3 text-[13.5px] text-brand-bluedark">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
          Thank you — your message has been noted. We’ll get back to you at the email you provided.
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className={field} placeholder="Your name *" value={form.name} onChange={set('name')} required />
          <input className={field} type="email" placeholder="Email address *" value={form.email} onChange={set('email')} required />
        </div>
        <input className={field} placeholder="Subject" value={form.subject} onChange={set('subject')} />
        <textarea className={`${field} min-h-[140px] resize-y`} placeholder="Your message *" value={form.message} onChange={set('message')} required />
        <button type="submit" className="btn-primary group w-full sm:w-auto">
          Send Message
          <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </form>
    </Reveal>
  )
}

export default function ContactUs() {
  return (
    <PageShell
      eyebrow="Get in touch"
      title="Contact the Department"
      lead="Reach out for admissions, academics, research collaboration or general enquiries — we’d love to hear from you."
      image={img.campus}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Details + map */}
          <div className="space-y-5">
            {details.map((d) => (
              <Reveal key={d.label} className="flex gap-4 rounded-2xl border border-surface-line bg-white p-5 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-skysoft text-brand-blue">
                  <d.Icon size={19} />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-400">{d.label}</p>
                  <div className="mt-1 space-y-0.5">
                    {d.lines.map((l) =>
                      l.href ? (
                        <a key={l.text} href={l.href} className="block text-[14px] font-medium text-ink-900 transition-colors hover:text-brand-blue">{l.text}</a>
                      ) : (
                        <p key={l.text} className="text-[14px] leading-relaxed text-ink-700">{l.text}</p>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal className="overflow-hidden rounded-2xl border border-surface-line shadow-soft">
              <iframe
                title="IEM Kolkata location"
                src={mapSrc}
                className="h-[300px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </Band>
    </PageShell>
  )
}
