import { TrendingUp, Building2, Briefcase } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import CountUp from '../common/CountUp'
import { placementStats, recruiters } from '../../data/content'
import { asset } from '../../data/assets'

// A recruiter's logo file is its name lowercased with all non-alphanumerics
// stripped — e.g. "Tata Power" -> tatapower.png, "L&T" -> lt.png. Drop the
// files into src/assets/images and they replace the text mark automatically.
const logoFile = (name) => `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`

export default function Placements() {
  return (
    <section id="placements" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Placement & Career Success"
          title="Careers that begin with confidence"
          lead="A dedicated training and placement effort, strong core-industry links and job-ready graduates translate into consistent, high-quality outcomes."
        />

        {/* Headline stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {placementStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 70}
              className="rounded-2xl border border-surface-line bg-gradient-to-b from-surface-soft to-white p-7 text-center shadow-soft"
            >
              <div className="font-display text-[34px] font-extrabold text-brand-blue sm:text-[40px]">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-1 text-[13px] font-medium text-ink-600">{s.label}</div>
            </Reveal>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { Icon: TrendingUp, title: 'Consistent Growth', text: 'Placement rates and average packages have climbed steadily year on year.' },
            { Icon: Briefcase, title: 'Internships', text: 'Structured summer internships with core and IT recruiters, many converting to offers.' },
            { Icon: Building2, title: 'Core + IT Roles', text: 'A healthy mix of power/electronics core roles alongside software and analytics.' },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 70} className="card card-hover p-6">
              <c.Icon size={22} className="text-brand-blue" />
              <h3 className="mt-3 text-[15px] font-bold text-ink-900">{c.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">{c.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Recruiter logo wall (text marks) */}
        <Reveal className="mt-12">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-400">
            Our Students Are Hired By
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {recruiters.map((r) => {
              const logo = asset(logoFile(r))
              return (
                <div
                  key={r}
                  className="group flex h-16 items-center justify-center rounded-xl border border-surface-line bg-white px-3 font-display text-[15px] font-bold text-ink-400 shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-brand-blue/30 hover:text-brand-blue hover:shadow-card"
                >
                  {logo ? (
                    <img src={logo} alt={r} loading="lazy" className="max-h-9 w-auto max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0" />
                  ) : (
                    r
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
