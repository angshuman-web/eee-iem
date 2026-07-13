import { useEffect, useState } from 'react'
import { Clock, Users, ArrowUpRight, GraduationCap, X } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import { programs, learningOutcomes } from '../../data/content'

const accentRing = {
  blue: 'text-brand-blue',
  navy: 'text-brand-navy',
  gold: 'text-brand-gold',
}

export default function Programs() {
  const [term, setTerm] = useState('')

  // Receives the term broadcast by the navbar search.
  useEffect(() => {
    const onSearch = (e) => setTerm((e.detail || '').toLowerCase())
    window.addEventListener('iem:search', onSearch)
    return () => window.removeEventListener('iem:search', onSearch)
  }, [])

  const matches = (p) =>
    !term ||
    [p.title, p.tag, p.outcomes, ...p.highlights].join(' ').toLowerCase().includes(term)

  const visible = programs.filter(matches)

  return (
    <section id="programs" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow="Academic Programs"
          title="Programmes designed for depth, rigour and real-world readiness"
          lead="Undergraduate, postgraduate and doctoral pathways — each anchored in strong fundamentals, laboratory practice and research exposure."
        />

        {term && (
          <div className="mt-6 flex items-center gap-3 rounded-lg border border-brand-blue/20 bg-brand-skysoft px-4 py-2.5 text-[13px] text-brand-bluedark">
            <span>
              Showing results for <strong>“{term}”</strong> — {visible.length} programme
              {visible.length === 1 ? '' : 's'}.
            </span>
            <button onClick={() => setTerm('')} className="ml-auto inline-flex items-center gap-1 font-semibold hover:underline">
              <X size={13} /> Clear
            </button>
          </div>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {(visible.length ? visible : programs).map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="group card card-hover flex flex-col overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[17px] font-bold leading-snug text-ink-900">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] text-ink-400">
                  <span className="inline-flex items-center gap-1.5"><Clock size={13} className={accentRing[p.accent]} />{p.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><Users size={13} className={accentRing[p.accent]} />{p.seats}</span>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13px] text-ink-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-surface-line pt-4 text-[13px] leading-relaxed text-ink-400">{p.outcomes}</p>
                <a href="https://exam.iem.edu.in/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-blue transition-colors hover:text-brand-bluedark">
                  Learn more & apply
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Learning outcomes strip */}
        <Reveal className="mt-10 rounded-2xl border border-surface-line bg-surface-soft p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue text-white">
              <GraduationCap size={20} />
            </span>
            <h3 className="font-display text-lg font-bold text-ink-900">Programme Learning Outcomes</h3>
          </div>
          <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {learningOutcomes.map((o, i) => (
              <div key={o} className="flex gap-3 text-[13.5px] leading-relaxed text-ink-600">
                <span className="font-display text-[15px] font-bold text-brand-blue/40">0{i + 1}</span>
                {o}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
