import { Calendar, ArrowUpRight } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import SmartLink from '../common/SmartLink'
import { news } from '../../data/content'

const typeColor = {
  Conference: 'bg-brand-blue',
  Workshop: 'bg-brand-gold',
  Seminar: 'bg-brand-navy',
  Event: 'bg-brand-sky',
}

export default function News() {
  const [feature, ...rest] = news
  return (
    <section id="news" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="News, Events & Workshops"
            title="What's happening in the department"
            lead="Conferences, expert seminars, hands-on workshops and the flagship technical symposium — there is always something in motion."
          />
          <Reveal>
            <SmartLink href="/events/events-organised" className="btn-ghost shrink-0">View all events <ArrowUpRight size={15} /></SmartLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <Reveal className="group relative overflow-hidden rounded-2xl shadow-card">
            <img src={feature.image} alt={feature.title} loading="lazy" className="h-full min-h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy2/95 via-brand-navy/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ${typeColor[feature.type]}`}>
                {feature.type}
              </span>
              <div className="mt-3 flex items-center gap-1.5 text-[12.5px] text-white/70">
                <Calendar size={13} /> {feature.date}
              </div>
              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-white">{feature.title}</h3>
              <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-white/75">{feature.text}</p>
            </div>
          </Reveal>

          {/* List */}
          <div className="grid gap-5">
            {rest.map((n, i) => (
              <Reveal key={n.title} delay={i * 70} className="group flex gap-5 rounded-2xl border border-surface-line bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:shadow-cardhover">
                <div className="relative h-28 w-32 shrink-0 overflow-hidden rounded-xl">
                  <img src={n.image} alt={n.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="min-w-0 py-1">
                  <div className="flex items-center gap-2">
                    <span className={`inline-block h-2 w-2 rounded-full ${typeColor[n.type]}`} />
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">{n.type}</span>
                    <span className="text-[11px] text-ink-400">· {n.date}</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-[15.5px] font-bold leading-snug text-ink-900 line-clamp-2">{n.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-600 line-clamp-2">{n.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
