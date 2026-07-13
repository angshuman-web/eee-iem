import { Target, Compass, Quote, CheckCircle2, ArrowRight } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import SmartLink from '../common/SmartLink'
import Reveal from '../common/Reveal'
import { visionLead, visionPoints, vision, mission, hod } from '../../data/content'
import { asset } from '../../data/assets'

const hodPhoto = asset('hod.png') || hod.image

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow="About the Department"
          title="A tradition of engineering excellence, built on strong foundations"
          lead="Established in 2015, the Department of Electrical & Electronics Engineering combines a research-driven faculty, industry-grade laboratories and an industry-aligned curriculum to prepare students for careers that shape the world's energy and electronics future."
        />

        {/* Vision & Mission */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="card card-hover p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-skysoft text-brand-blue">
                <Compass size={20} />
              </span>
              <h3 className="font-display text-lg font-bold text-ink-900">Our Vision</h3>
            </div>
            <p className="mt-5 text-[14px] font-semibold text-ink-900">{visionLead}</p>
            <ul className="mt-3 space-y-2.5">
              {visionPoints.map((v) => (
                <li key={v} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-blue" />
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-surface-line pt-4 text-[14px] leading-relaxed text-ink-600">{vision}</p>
          </Reveal>

          <Reveal className="card card-hover p-7 sm:p-8" delay={80}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-skysoft text-brand-blue">
                <Target size={20} />
              </span>
              <h3 className="font-display text-lg font-bold text-ink-900">Our Mission</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {mission.map((m) => (
                <li key={m} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-blue" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Head's welcome message — full width */}
        <Reveal className="mt-8 overflow-hidden rounded-2xl border border-surface-line shadow-card">
          <div className="grid md:grid-cols-[300px_1fr]">
            <div className="relative min-h-[320px] bg-brand-navy2">
              <img
                src={hodPhoto}
                alt={hod.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy2/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-brand-navy2/10" />
            </div>
            <div className="bg-white p-7 sm:p-10">
              <p className="eyebrow">
                <span className="h-px w-6 bg-current opacity-60" />
                Message from the Head
              </p>
              <Quote size={30} className="mt-4 text-brand-blue/20" />
              <div className="mt-2 space-y-3.5 text-[14px] leading-relaxed text-ink-600">
                {hod.message.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-surface-line pt-5">
                <div>
                  <p className="font-display text-[16px] font-bold text-ink-900">{hod.name}</p>
                  <p className="text-[13px] text-brand-blue">{hod.title}</p>
                  <p className="text-[12px] text-ink-400">Department of Electrical &amp; Electronics Engineering</p>
                </div>
                <SmartLink href="#programs" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-blue transition-colors hover:text-brand-bluedark">
                  Explore our programmes
                  <ArrowRight size={15} />
                </SmartLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
