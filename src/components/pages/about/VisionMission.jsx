import { Compass, Target, CheckCircle2 } from 'lucide-react'
import PageShell, { Band } from '../PageShell'
import Reveal from '../../common/Reveal'
import { img } from '../../../data/images'
import { visionLead, visionPoints, vision, mission } from '../../../data/content'

const crumb = [
  { label: 'About', to: '/about/vision-mission' },
  { label: 'Vision & Mission' },
]

function Pillar({ Icon, title, lead, items, footer }) {
  return (
    <Reveal className="card card-hover p-7 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-skysoft text-brand-blue">
          <Icon size={21} />
        </span>
        <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
      </div>
      {lead && <p className="mt-5 text-[14px] font-semibold text-ink-900">{lead}</p>}
      <ul className={`${lead ? 'mt-3' : 'mt-5'} space-y-3`}>
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-600">
            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-blue" />
            {it}
          </li>
        ))}
      </ul>
      {footer && (
        <p className="mt-5 border-t border-surface-line pt-4 text-[14px] leading-relaxed text-ink-600">{footer}</p>
      )}
    </Reveal>
  )
}

export default function VisionMission() {
  return (
    <PageShell
      eyebrow="About the Department"
      title="Vision & Mission of the Department"
      lead="The guiding purpose of the Department of Electrical & Electronics Engineering — the engineers we set out to produce, and the environment we build to shape them."
      image={img.campus}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-6 lg:grid-cols-2">
          <Pillar Icon={Compass} title="Our Vision" lead={visionLead} items={visionPoints} footer={vision} />
          <Pillar Icon={Target} title="Our Mission" items={mission} />
        </div>
      </Band>
    </PageShell>
  )
}
