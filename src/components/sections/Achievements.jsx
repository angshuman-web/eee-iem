import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import { achievements } from '../../data/content'
import { img } from '../../data/images'

export default function Achievements() {
  return (
    <section id="achievements" className="bg-surface-soft py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img src={img.studentsTeam} alt="EEE students collaborating" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-surface-line bg-white p-5 shadow-card sm:block">
              <p className="font-display text-3xl font-extrabold text-brand-blue">100+</p>
              <p className="text-[12.5px] text-ink-600">Awards & honours<br />in the last five years</p>
            </div>
          </Reveal>

          <div>
            <SectionHeader
              eyebrow="Student Achievements"
              title="Our students compete, publish and win — at every level"
              lead="From GATE toppers and hackathon champions to admits at leading universities abroad, EEE students consistently punch above their weight."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {achievements.map((a, i) => (
                <Reveal key={a.label} delay={(i % 2) * 70} className="card card-hover p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-skysoft text-brand-blue">
                      <a.Icon size={20} />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-ink-900">{a.stat}</span>
                  </div>
                  <h3 className="mt-3 text-[14.5px] font-bold text-ink-900">{a.label}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-600">{a.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
