import { useState } from 'react'
import { Handshake, Building2, Users, Briefcase, Layers, IndianRupee, TrendingUp } from 'lucide-react'
import PageShell, { Band, SectionTitle, StatCard, CheckItem } from '../PageShell'
import Reveal from '../../common/Reveal'
import BarChart from '../../common/BarChart'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'
import { placementBatches } from '../../../data/placements'

// Same convention as the home placements strip: logo file is the recruiter name
// lowercased with non-alphanumerics stripped — "Tata Power" -> tatapower.png.
const logoFile = (name) => `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`

const crumb = [
  { label: 'Student Corner', to: '/student-corner/placement' },
  { label: 'Placement' },
]

const heroStats = [
  { value: '₹45 LPA', label: 'Highest Package' },
  { value: '2015', label: 'Placements Since' },
  { value: 'Yr 1', label: 'Training Begins' },
  { value: '30+', label: 'Recruiting Partners' },
]

const prep = [
  'Tri-mentoring sessions where delegates from industry, academia and alumni share their views and experiences.',
  'Aptitude classes from the 2nd year onwards so students get ample time to practise and build confidence for recruitment drives.',
  'Curriculum enhancement — Java, Python, IoT, Machine Learning and AI introduced to strengthen software skills for IT drives.',
  'Mock interviews, group discussions, aptitude and coding tests conducted by professionals.',
  'Essential Studies for Professionals (ESP) and Skill Development Programme (SDP) classes from the 1st year onwards.',
]

const recruiters = ['Barclays', 'Microsoft', 'Accenture', 'IOCL', 'PGCIL', 'TCS', 'Wipro', 'Cognizant', 'Capgemini', 'L&T']

function Metric({ Icon, value, label }) {
  return (
    <div className="rounded-xl border border-surface-line bg-white p-4 text-center shadow-soft">
      <Icon size={18} className="mx-auto text-brand-blue" />
      <div className="mt-2 font-display text-xl font-extrabold text-ink-900">{value}</div>
      <div className="mt-0.5 text-[11.5px] font-medium text-ink-500">{label}</div>
    </div>
  )
}

function PlacementReport() {
  const [active, setActive] = useState(0)
  const batch = placementBatches[active]
  const chart = batch.companies.map((c) => ({ label: c.name, value: c.offers, sub: `₹${c.package} LPA` }))

  return (
    <div>
      {/* Year toggle */}
      <div className="flex flex-wrap gap-2">
        {placementBatches.map((b, i) => (
          <button
            key={b.batch}
            onClick={() => setActive(i)}
            className={`rounded-lg px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
              i === active
                ? 'bg-brand-blue text-white shadow-pill'
                : 'border border-surface-line bg-white text-ink-600 hover:border-brand-blue/40 hover:text-brand-blue'
            }`}
          >
            {b.batch}
          </button>
        ))}
      </div>

      {/* Metric tiles for the selected batch */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Metric Icon={Building2} value={batch.summary.companies} label="Companies" />
        <Metric Icon={Users} value={batch.summary.students} label="Students" />
        <Metric Icon={Briefcase} value={batch.summary.jobs} label="Jobs Offered" />
        <Metric Icon={Layers} value={batch.summary.multiple} label="Multiple Offers" />
        <Metric Icon={IndianRupee} value={`${batch.summary.avg}`} label="Avg CTC (LPA)" />
        <Metric Icon={TrendingUp} value={`${batch.summary.highest}`} label="Highest CTC (LPA)" />
      </div>

      {/* Animated bar chart — re-animates on year switch via the key */}
      <Reveal className="mt-8 rounded-2xl border border-surface-line bg-white p-6 shadow-soft sm:p-8">
        <h4 className="mb-6 font-display text-[15px] font-bold text-ink-900">
          Offers by recruiter · Batch {batch.batch}
        </h4>
        <BarChart key={batch.batch} data={chart} unit=" offers" note="Bar length reflects the number of offers; package shown alongside each recruiter." />
      </Reveal>
    </div>
  )
}

export default function Placement() {
  return (
    <PageShell
      eyebrow="Student Corner"
      title="Placement"
      lead="A structured, multi-year placement effort — aptitude training, mock assessments and curriculum enhancement — prepares students for careers across core and IT sectors."
      image={img.convocation}
      crumb={crumb}
    >
      <Band>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 60} />
          ))}
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Placement statistics report" lead="Switch between graduating batches to explore recruiters, offers and package trends." />
        <PlacementReport />
      </Band>

      <Band>
        <SectionTitle heading="How we prepare students" />
        <div className="grid gap-3 md:grid-cols-2">
          {prep.map((t, i) => (
            <CheckItem key={i} text={t} delay={(i % 2) * 50} />
          ))}
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Where our students go" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {recruiters.map((name) => {
            const logo = asset(logoFile(name))
            return (
              <Reveal key={name} className="group flex h-16 items-center justify-center gap-2.5 rounded-xl border border-surface-line bg-white px-4 shadow-soft transition-colors duration-300 hover:border-brand-blue/30">
                {logo ? (
                  <img src={logo} alt={name} loading="lazy" className="max-h-9 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <>
                    <Handshake size={16} className="text-brand-blue/50" />
                    <span className="font-display text-[14px] font-bold text-ink-600">{name}</span>
                  </>
                )}
              </Reveal>
            )
          })}
        </div>
      </Band>
    </PageShell>
  )
}
