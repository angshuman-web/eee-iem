import { useState } from 'react'
import {
  ChevronRight, Home, CheckCircle2, ExternalLink, ArrowRight, FileDown,
  GraduationCap, Quote, Image as ImageIcon, Mail, Eye, Download,
} from 'lucide-react'
import Reveal from '../common/Reveal'
import SmartLink from '../common/SmartLink'
import PdfModal from '../common/PdfModal'
import { asset } from '../../data/assets'

// ─────────────────────────────────────────────────────────────────────────────
// Shared shell + small presentational atoms used by the individual subpages.
// Each subpage writes its own JSX layout and composes these building blocks —
// there is no generic data-driven block dispatch.
// ─────────────────────────────────────────────────────────────────────────────

// crumb: [{ label, to? }, …] — the last item is rendered as the current page.
export function Breadcrumb({ crumb }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px]">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/60">
        <li>
          <SmartLink href="#top" className="inline-flex items-center gap-1 transition-colors hover:text-white">
            <Home size={13} /> Home
          </SmartLink>
        </li>
        {crumb.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="opacity-50" />
            {c.to && i < crumb.length - 1 ? (
              <SmartLink href={c.to} className="transition-colors hover:text-white">{c.label}</SmartLink>
            ) : (
              <span className="font-medium text-white">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function PageHeader({ eyebrow, title, lead, image, crumb }) {
  // A shared header banner (src/assets/images/header.png) is used across every
  // subpage when present; each page's own `image` is the per-page fallback.
  const headerBg = asset('header.png') || image
  return (
    <section className="relative overflow-hidden bg-brand-navy2">
      {headerBg && <img src={headerBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy2 via-brand-navy2/95 to-brand-navy/70" />
      <div className="container-x relative py-12 sm:py-16">
        {crumb && <Breadcrumb crumb={crumb} />}
        {eyebrow && (
          <p className="eyebrow mt-6 !text-brand-sky">
            <span className="h-px w-6 bg-current opacity-60" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-white sm:text-[40px]">
          {title}
        </h1>
        {lead && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">{lead}</p>}
      </div>
    </section>
  )
}

// A full-width content band. Alternate `tone` between sections for rhythm.
export function Band({ tone = 'white', children }) {
  return (
    <section className={tone === 'soft' ? 'bg-surface-soft py-14 sm:py-16' : 'bg-white py-14 sm:py-16'}>
      <div className="container-x">{children}</div>
    </section>
  )
}

// Optional heading block at the top of a section.
export function SectionTitle({ heading, lead }) {
  if (!heading) return null
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-[26px]">{heading}</h2>
      {lead && <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">{lead}</p>}
    </div>
  )
}

function PageCTA() {
  return (
    <section className="bg-white pb-16">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-navy2 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Have a question for the department?</h3>
            <p className="mt-1 text-[14px] text-white/70">Reach out for admissions, academics or collaboration enquiries.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <SmartLink href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-white/90">
              Contact Us
            </SmartLink>
            <a href="https://exam.iem.edu.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              <GraduationCap size={16} /> Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Page wrapper: header band → content bands (children) → shared footer CTA.
export default function PageShell({ eyebrow, title, lead, image, crumb, children }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={lead} image={image} crumb={crumb} />
      {children}
      <PageCTA />
    </>
  )
}

// ── Reusable content atoms ────────────────────────────────────────────────────

// A bordered card that lifts on hover — good for lists of items. Pass `cover`
// (or an `image` / `Icon`) to show a cover photo at the top; a branded gradient
// placeholder is used until the image file is supplied.
export function InfoCard({ tag, date, title, text, href, to, cta, image, Icon, cover, fit, premium, children }) {
  const hasCover = cover || image !== undefined || Icon !== undefined
  // `premium` layers a richer hover treatment: a stronger blue glow, an accent
  // ring, a gradient top-bar that wipes in, and a title that shifts to brand blue.
  const shell = premium
    ? 'group relative flex flex-col overflow-hidden rounded-2xl border border-surface-line bg-white shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-[0_24px_55px_-18px_rgba(21,101,216,0.45)] hover:ring-1 hover:ring-brand-blue/20'
    : 'group flex flex-col overflow-hidden rounded-2xl border border-surface-line bg-white shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-brand-blue/25 hover:shadow-cardhover'
  return (
    <Reveal className={shell}>
      {premium && (
        <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue via-brand-sky to-brand-gold transition-transform duration-500 group-hover:scale-x-100" />
      )}
      {hasCover && <CardImage src={image} alt={title} Icon={Icon} fit={fit} />}
      <div className="flex flex-1 flex-col p-6">
        {(tag || date) && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {tag && <span className="rounded-full bg-brand-skysoft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">{tag}</span>}
            {date && <span className="text-[12px] font-medium text-ink-400">{date}</span>}
          </div>
        )}
        {title && <h4 className={`font-display text-[16px] font-bold leading-snug text-ink-900 ${premium ? 'transition-colors duration-300 group-hover:text-brand-blue' : ''}`}>{title}</h4>}
        {text && <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-600">{text}</p>}
        {children}
        {to && (
          <SmartLink href={to} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue transition-colors hover:text-brand-bluedark">
            {cta || 'Learn more'} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </SmartLink>
        )}
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue transition-colors hover:text-brand-bluedark">
            {cta || 'Learn more'} <ExternalLink size={13} />
          </a>
        )}
      </div>
    </Reveal>
  )
}

// A single numbered item (PO1, PSO2, …).
export function NumberedItem({ badge, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="flex gap-4 rounded-2xl border border-surface-line bg-white p-5 shadow-soft">
      <span className="shrink-0 rounded-lg bg-brand-blue px-2.5 py-1 text-[12px] font-bold text-white">{badge}</span>
      <div>
        <h4 className="font-display text-[15px] font-bold text-ink-900">{title}</h4>
        <p className="mt-1 text-[13px] leading-relaxed text-ink-600">{text}</p>
      </div>
    </Reveal>
  )
}

// A document resource row. Offers an in-page preview ("View" opens the PDF in a
// popup) alongside a direct "Download". `href` is the resolved document URL (or
// a live-portal fallback). Pass `previewable={false}` for non-PDF targets to
// hide the View action.
export function DownloadLink({ title, meta, href, previewable = true, delay = 0 }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal delay={delay}>
      <div className="group flex items-center gap-4 rounded-xl border border-surface-line bg-white p-4 shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-cardhover">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-skysoft text-brand-blue transition-all duration-400 ease-smooth group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-pill">
          <FileDown size={19} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-semibold text-ink-900">{title}</p>
          {meta && <p className="text-[12px] text-ink-400">{meta}</p>}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {previewable && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-surface-line px-3 py-2 text-[12.5px] font-semibold text-ink-600 transition-colors hover:border-brand-blue/40 hover:bg-brand-skysoft hover:text-brand-blue"
            >
              <Eye size={14} /> <span className="hidden sm:inline">View</span>
            </button>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue px-3 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-brand-bluedark"
          >
            <Download size={14} /> <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>
      {open && previewable && <PdfModal title={title} href={href} onClose={() => setOpen(false)} />}
    </Reveal>
  )
}

const cardInitials = (name) =>
  name
    .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s*/gi, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

// A person card (faculty, staff, alumni). `photo` is an optional resolved image
// URL; without it a coloured initials avatar is shown.
export function PersonCard({ name, role, meta, tags, email, photo, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group card card-hover flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Avatar src={photo} name={name} size={56} />
        <div className="min-w-0">
          <h4 className="font-display text-[15px] font-bold leading-tight text-ink-900">{name}</h4>
          <p className="mt-0.5 text-[12.5px] font-medium text-brand-blue">{role}</p>
        </div>
      </div>
      {meta && <p className="mt-4 text-[12.5px] text-ink-400">{meta}</p>}
      {tags && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="rounded-md bg-surface-soft px-2 py-1 text-[11.5px] font-medium text-ink-600">{t}</span>
          ))}
        </div>
      )}
      {email && (
        <a href={`mailto:${email}`} className="mt-4 inline-flex items-center gap-1.5 truncate border-t border-surface-line pt-3 text-[12.5px] font-medium text-ink-600 transition-colors hover:text-brand-blue">
          <Mail size={13} className="shrink-0 text-brand-blue" />
          <span className="truncate">{email}</span>
        </a>
      )}
    </Reveal>
  )
}

// A headline statistic tile.
export function StatCard({ value, label, delay = 0 }) {
  return (
    <Reveal delay={delay} className="rounded-2xl border border-surface-line bg-gradient-to-b from-surface-soft to-white p-6 text-center shadow-soft">
      <div className="font-display text-3xl font-extrabold text-brand-blue">{value}</div>
      <div className="mt-1 text-[13px] font-medium text-ink-600">{label}</div>
    </Reveal>
  )
}

// A checklist row with a tick.
export function CheckItem({ text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="flex gap-3 rounded-xl border border-surface-line bg-white p-5 shadow-soft">
      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
      <p className="text-[13.5px] leading-relaxed text-ink-600">{text}</p>
    </Reveal>
  )
}

// A prominent call-to-action strip that links out to the live portal.
export function Callout({ title, text, cta, href }) {
  return (
    <Reveal className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-surface-line bg-surface-soft p-8 sm:flex-row sm:items-center">
      <div>
        <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-ink-600">{text}</p>
      </div>
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary group shrink-0">
          {cta || 'Learn more'}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </Reveal>
  )
}

// Simple prose paragraphs.
export function Prose({ children }) {
  return <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-600">{children}</div>
}

// A cover image for a card. Falls back to a branded gradient + icon when the
// photo hasn't been supplied yet (see src/data/assets.js). Use fit="contain"
// for logos (rendered on white, no crop); default fit="cover" for photos.
export function CardImage({ src, alt, Icon, ratio = 'aspect-[16/10]', fit = 'cover' }) {
  const Placeholder = Icon || ImageIcon
  const contain = fit === 'contain'
  return (
    <div className={`relative ${ratio} overflow-hidden ${contain ? 'bg-white' : 'bg-gradient-to-br from-brand-navy2 via-brand-navy to-brand-blue'}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 ${contain ? 'object-contain p-6' : 'object-cover'}`}
        />
      ) : (
        <span className={`absolute inset-0 grid place-items-center transition-transform duration-700 group-hover:scale-110 ${contain ? 'text-brand-blue/25' : 'text-white/35'}`}>
          <Placeholder size={40} />
        </span>
      )}
      {!contain && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />}
    </div>
  )
}

// A round avatar: photo when available, initials otherwise.
export function Avatar({ src, name, size = 56 }) {
  const style = { height: size, width: size }
  return src ? (
    <img src={src} alt={name} loading="lazy" style={style} className="shrink-0 rounded-full object-cover object-top ring-4 ring-brand-skysoft" />
  ) : (
    <span style={style} className="grid shrink-0 place-items-center rounded-full bg-brand-blue font-display text-[16px] font-bold text-white ring-4 ring-brand-skysoft">
      {cardInitials(name)}
    </span>
  )
}

// A responsive data table. `columns` are header labels; `rows` is an array of
// cell arrays (cells may be strings or JSX). Scrolls horizontally on small
// screens rather than overflowing the page.
export function DataTable({ columns, rows }) {
  return (
    <Reveal className="overflow-x-auto rounded-2xl border border-surface-line shadow-soft">
      <table className="w-full min-w-[560px] border-collapse text-left text-[13.5px]">
        <thead>
          <tr className="bg-brand-navy2 text-white">
            {columns.map((c, i) => (
              <th key={i} className="px-4 py-3 font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={ri % 2 ? 'bg-surface-soft' : 'bg-white'}>
              {r.map((cell, ci) => (
                <td key={ci} className="border-t border-surface-line px-4 py-3 align-top text-ink-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  )
}

export { Quote }
