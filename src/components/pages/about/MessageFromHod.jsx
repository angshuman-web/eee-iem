import PageShell, { Band, Quote } from '../PageShell'
import Reveal from '../../common/Reveal'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'
import { hod } from '../../../data/content'

const hodPhoto = asset('hod.png') || hod.image

const crumb = [
  { label: 'About', to: '/about/vision-mission' },
  { label: 'Message from HOD' },
]

export default function MessageFromHod() {
  return (
    <PageShell
      eyebrow="About the Department"
      title="Message from the Head of the Department"
      lead="A word of welcome from the Head of the Department of Electrical & Electronics Engineering."
      image={img.lecture}
      crumb={crumb}
    >
      <Band>
        <Reveal className="overflow-hidden rounded-2xl border border-surface-line shadow-card">
          <div className="grid md:grid-cols-[320px_1fr]">
            <div className="relative min-h-[340px] bg-brand-navy2">
              <img src={hodPhoto} alt={hod.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <div className="bg-white p-7 sm:p-10">
              <Quote size={30} className="text-brand-blue/20" />
              <div className="mt-2 space-y-3.5 text-[14px] leading-relaxed text-ink-600">
                {hod.message.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-6 border-t border-surface-line pt-5">
                <p className="font-display text-[16px] font-bold text-ink-900">{hod.name}</p>
                <p className="text-[13px] text-brand-blue">{hod.title}</p>
                <p className="text-[12px] text-ink-400">Department of Electrical & Electronics Engineering</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Band>
    </PageShell>
  )
}
