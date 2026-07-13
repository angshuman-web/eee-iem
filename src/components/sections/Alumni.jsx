import { Award } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import SmartLink from '../common/SmartLink'
import { alumni } from '../../data/content'

const initials = (name) =>
  name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function Alumni() {
  return (
    <section id="alumni" className="bg-surface-soft py-20 sm:py-24">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Hall of Fame"
          title="Where our graduates are today"
          lead="From global industry and premier institutes to research — our alumni carry the department's values into the world."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {alumni.map((a, i) => (
            <Reveal key={a.name} delay={i * 90} className="card card-hover flex flex-col p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-blue font-display text-[16px] font-bold text-white ring-4 ring-brand-skysoft">
                  {initials(a.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[15.5px] font-bold leading-tight text-ink-900">{a.name}</p>
                  <p className="mt-0.5 text-[12px] font-medium text-brand-blue">{a.batch}</p>
                </div>
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-ink-900">
                <Award size={14} className="text-brand-gold" />
                {a.role}
              </p>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-600">{a.note}</p>
              <SmartLink href="/student-corner/hall-of-fame" className="mt-5 text-[13px] font-semibold text-brand-blue transition-colors hover:text-brand-bluedark">
                View Hall of Fame →
              </SmartLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
