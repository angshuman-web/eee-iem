import { useState } from 'react'
import {
  Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, ArrowRight, Mail, Phone, Send, Check,
} from 'lucide-react'
import Logo from '../common/Logo'
import SmartLink from '../common/SmartLink'

const columns = [
  {
    title: 'Department',
    links: [
      { label: 'About EEE', href: '#about' },
      { label: 'Vision & Mission', href: '#about' },
      { label: 'Why Choose EEE', href: '#why' },
      { label: 'Academics', href: '#programs' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'B.Tech Programme', href: '#programs' },
      { label: 'M.Tech Programme', href: '#programs' },
      { label: 'PhD & Research', href: '#programs' },
      { label: 'Placements', href: '#placements' },
    ],
  },
  {
    title: 'Student Corner',
    links: [
      { label: 'Awards & Achievements', href: '#achievements' },
      { label: 'Alumni', href: '#alumni' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Events', href: '#news' },
    ],
  },
  {
    title: 'Important Links',
    links: [
      { label: 'IEM Kolkata', href: 'https://iem.edu.in/', external: true },
      { label: 'Admissions', href: 'https://exam.iem.edu.in/', external: true },
      { label: 'NIRF', href: '#' },
      { label: 'NBA / NAAC', href: '#stats' },
      { label: 'Anti-Ragging', href: '#' },
    ],
  },
]

const socials = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-brand-navy2 text-white/70">
      {/* Admissions apply banner — the arrow opens the exam portal */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container-x py-8">
          <a
            href="https://exam.iem.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl bg-brand-blue p-7 shadow-card transition-all duration-300 hover:bg-brand-bluedark sm:flex-row sm:items-center sm:p-9"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/75">
                Admissions Open · 2026
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-[28px]">
                Apply to the EEE Programme
              </h3>
              <p className="mt-1.5 text-[13.5px] text-white/80">
                Take the first step towards a future in electrical &amp; electronics engineering.
              </p>
            </div>
            <span className="flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue transition-all duration-300 group-hover:gap-4">
              Apply Now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={17} />
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="relative z-10 container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand + address */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed">
              Department of Electrical &amp; Electronics Engineering, Institute of Engineering &amp;
              Management — building competent engineers and innovators for a sustainable future.
            </p>
            <p className="mt-4 flex items-start gap-2 text-[13px] leading-relaxed">
              <MapPin size={15} className="mt-0.5 shrink-0 text-brand-gold" />
              Gurukul, Y-12, Block-EP, Sector-V, Salt Lake, Kolkata 700091
            </p>
            <div className="mt-3 space-y-2">
              <a href="mailto:eee@iem.edu.in" className="flex items-center gap-2 text-[13px] transition-colors hover:text-white">
                <Mail size={14} className="shrink-0 text-brand-gold" />
                eee@iem.edu.in
              </a>
              <a href="tel:+913323572059" className="flex items-center gap-2 text-[13px] transition-colors hover:text-white">
                <Phone size={14} className="shrink-0 text-brand-gold" />
                +91 33 2357 2059
              </a>
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Follow Us
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              {socials.map(({ Icon, label }) => (
                <SmartLink
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white"
                >
                  <Icon size={16} />
                </SmartLink>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <SmartLink
                      href={link.href}
                      external={link.external}
                      className="group inline-flex items-center gap-1.5 text-[13px] transition-colors hover:text-brand-gold"
                    >
                      <span className="h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-[12px] sm:flex-row">
          <p>© 2026 Department of EEE, IEM Kolkata. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <SmartLink href="#" className="transition-colors hover:text-white">Terms of Use</SmartLink>
            <SmartLink href="#" className="transition-colors hover:text-white">Privacy Policy</SmartLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
