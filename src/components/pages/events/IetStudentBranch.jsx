import { CalendarDays } from 'lucide-react'
import PageShell, { Band, InfoCard, SectionTitle, StatCard, Prose, Callout } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/events/professional-societies-clubs/iet-student-branch'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Professional Societies', to: '/events/professional-societies' },
  { label: 'IET Student Branch' },
]

const focus = ['Renewable Energy', 'Smart Grids', 'Electric Vehicles', 'IoT', 'Machine Learning', 'Sustainable Tech']

const events = [
  { tag: 'Workshop', date: '22–25 Jun 2026', title: 'Grid-Interactive Electric Vehicles', text: 'A four-day workshop on the modeling, control and simulation of grid-interactive electric vehicles.' },
  { tag: 'Hackathon', date: '20–22 Mar 2026', title: 'CODE-ON 2026', text: 'The flagship hackathon under the Skills Strike series, drawing 50+ teams from 20 colleges across India.' },
  { tag: 'Seminar', date: '22 Jul 2025', title: 'Vehicle-to-Grid & Vehicle-to-Home', text: 'An industrial seminar exploring V2G and V2H technologies and their role in future energy systems.' },
  { tag: 'Membership', date: '22 Jun 2025', title: 'Membership Drive with IET Leadership', text: 'An on-campus drive introducing students to IET membership benefits alongside IET leadership.' },
  { tag: 'Industrial Visit', date: '29 Mar 2025', title: 'Haldia Energy Limited', text: 'A visit to Haldia Energy Limited covering thermal power generation and operational practice.' },
  { tag: 'Hackathon', date: '2025', title: 'AI for Social Good', text: 'A hackathon applying AI across climate, healthcare, education and urban sustainability.' },
  { tag: 'Competition', date: 'May–Jun 2024', title: 'TECH-INTELLINA', text: 'A project competition that opened with 89 initial submissions across engineering domains.' },
  { tag: 'Workshop', date: '2023', title: 'MATLAB on Control & Signal Processing', text: 'Two-day MATLAB workshops on control systems and signal processing fundamentals.' },
]

export default function IetStudentBranch() {
  return (
    <PageShell
      eyebrow="Professional Societies & Clubs"
      title="IET Student Branch"
      lead="The Institution of Engineering & Technology (IET) student branch at IEM, affiliated with the Department of Electrical & Electronics Engineering."
      image={img.robotics}
      crumb={crumb}
    >
      <Band>
        <Prose>
          <p>
            The <strong className="text-ink-900">IET Student Branch</strong> functions as a professional society
            affiliated with the Department of Electrical & Electronics Engineering. It runs flagship annual events
            under the <em>Skills Strike</em> series — including CODE-ON (hackathon), INNOVATE-ON (hardware projects),
            POSTER-ON (technical posters) and PHOTOTRON (photography) — alongside industry seminars, workshops and
            technical visits.
          </p>
          <p>
            The branch emphasises renewable energy, smart grids, electric vehicles, IoT, machine learning and
            sustainable technologies through hands-on workshops, industry partnerships and competitive events.
          </p>
        </Prose>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {focus.map((f) => (
            <div key={f} className="rounded-xl border border-surface-line bg-surface-soft px-3 py-4 text-center text-[12.5px] font-semibold text-ink-700">
              {f}
            </div>
          ))}
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Activities & Events" lead="Workshops, hackathons, seminars and industrial visits organised by the branch." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <InfoCard key={e.title} tag={e.tag} date={e.date} title={e.title} text={e.text} image={asset(`iet${i + 1}.png`)} Icon={CalendarDays} />
          ))}
        </div>
      </Band>

      <Band>
        <Callout
          title="Learn more about the IET Student Branch"
          text="Visit the department portal for the full archive of IET Student Branch events and announcements."
          cta="Visit portal"
          href={LIVE}
        />
      </Band>
    </PageShell>
  )
}
