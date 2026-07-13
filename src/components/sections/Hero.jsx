import { ArrowRight, Users, ChevronDown } from 'lucide-react'
import CountUp from '../common/CountUp'
import SmartLink from '../common/SmartLink'
import { heroStats } from '../../data/content'
import { img } from '../../data/images'
import { asset, video } from '../../data/assets'

// Drop a file at src/assets/videos/hero.mp4 (or .webm) to play a background
// video; until then the hero falls back to the still laboratory image.
const heroVideo = video('hero.mp4') || video('hero.webm')

// Drop src/assets/images/hero.png to set the hero backdrop; falls back to the
// bundled laboratory still until then.
const heroImage = asset('hero.png') || img.heroLab

export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* Immersive laboratory backdrop with a restrained navy/blue overlay */}
      <div className="relative overflow-hidden">
        {heroVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={heroImage}
            alt="Electrical & Electronics engineering laboratory at IEM"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy2/95 via-brand-navy/85 to-brand-navy/55" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_0%,transparent_40%,rgba(8,31,73,0.55)_100%)]" />

        <div className="container-x relative z-10 py-20 sm:py-28 lg:pb-40 lg:pt-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              AICTE Accredited · NAAC A+
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-brand-sky sm:text-5xl lg:text-[56px]">
              Department of {' '}
              <span className="text-white">Electrical &amp; Electronics Engineering</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/80">
              At the Institute of Engineering &amp; Management, we blend rigorous fundamentals with
              hands-on practice — from power systems and drives to embedded intelligence and
              renewable energy — shaping engineers who build what matters.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <SmartLink href="#programs" className="btn-primary group !bg-white !text-brand-blue hover:!bg-white/90">
                Explore Programs
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </SmartLink>
              <SmartLink
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                <Users size={16} />
                About the Department
              </SmartLink>
            </div>
          </div>
        </div>

        <SmartLink
          href="#stats"
          aria-label="Scroll to statistics"
          className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/50 lg:hidden"
        >
          <ChevronDown size={26} />
        </SmartLink>
      </div>

      {/* Statistics — a single elevated rectangle card that overlaps the hero */}
      <div id="stats" className="bg-white lg:bg-transparent">
        <div className="container-x lg:-mt-24">
          <div className="relative z-10 overflow-hidden rounded-2xl border border-surface-line bg-white shadow-card">
            <div className="grid grid-cols-2 divide-surface-line lg:grid-cols-4 lg:divide-x">
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-4 py-8 text-center sm:py-10 ${i % 2 === 1 ? 'border-l border-surface-line lg:border-l-0' : ''} ${i >= 2 ? 'border-t border-surface-line lg:border-t-0' : ''}`}
                >
                  <div className="font-display text-3xl font-extrabold text-brand-blue sm:text-4xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-[13.5px] font-semibold text-ink-900">{s.label}</div>
                  <div className="mt-0.5 text-[12px] text-ink-400">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
