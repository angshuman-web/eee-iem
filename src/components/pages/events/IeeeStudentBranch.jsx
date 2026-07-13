import { CalendarDays } from 'lucide-react'
import PageShell, { Band, InfoCard, SectionTitle, Prose, Callout } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/events/professional-societies-clubs/ieee-student-branch'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Professional Societies', to: '/events/professional-societies' },
  { label: 'IEEE Student Branch' },
]

const events = [
  { tag: 'Competition', date: '2 Apr 2026', title: 'POSTERNOVA 2026', text: 'A technical poster presentation competition where students showcase innovative ideas, research insights and technical knowledge.' },
  { tag: 'Competition', date: '2 Apr 2026', title: 'SIMULCRUM 2026', text: 'A project demonstration competition emphasising innovation and technical excellence through functional prototypes and engineering design.' },
  { tag: 'WIE', date: '8 Nov 2025', title: 'IEEE WIE Meet', text: 'A Women in Engineering gathering with 45 participants, including industry professionals and student members.' },
  { tag: 'Quiz', date: '7 Oct 2025', title: 'IEEE Day Quiz — Electro-Forge', text: 'A competition with 125 registrations covering general IEEE knowledge, electronics and circuits.' },
  { tag: 'Invited Talk', date: '11 Sep 2025', title: 'MEMS Technology', text: 'A lecture by Dr. Koushik Guha on mimicking human organs with microfluidics and MEMS technology.' },
  { tag: 'Contest', date: '1–3 Sep 2025', title: 'Hive Control Smart Home App', text: 'A no-code platform competition featuring a quiz round and a presentation round.' },
  { tag: 'Installation', date: '5 Aug 2025', title: 'Student Branch Installation', text: 'Recognition of student achievements alongside technical sessions marking the branch installation.' },
  { tag: 'Challenge', date: '25 Jul 2025', title: 'The Fault Hunter Circuit Challenge', text: 'A debugging competition testing circuit fundamentals and problem-solving.' },
  { tag: 'Outreach', date: 'Jul 2024', title: 'IEEE WIE DEI Outreach', text: 'A school education initiative introducing students to the Internet of Things.' },
  { tag: 'Fest', date: 'Apr 2022', title: 'Elevate 2022', text: 'A multi-day fest with webinars, workshops and competitions attracting 180+ registrations.' },
  { tag: 'Competition', date: 'Nov 2022', title: 'DevSprint', text: 'A software development competition co-hosted with multiple IEEE chapters.' },
]

export default function IeeeStudentBranch() {
  return (
    <PageShell
      eyebrow="Professional Societies & Clubs"
      title="IEEE Student Branch"
      lead="An active professional society organising technical events, competitions, workshops and outreach programmes for students in electrical and electronics engineering."
      image={img.circuit}
      crumb={crumb}
    >
      <Band>
        <Prose>
          <p>
            The <strong className="text-ink-900">IEEE Student Branch</strong> at IEM fosters a strong research and
            innovation culture through year-round technical events, society chapter activities and a vibrant Women in
            Engineering (WIE) affinity group. From poster and project competitions to invited talks and circuit
            challenges, the branch gives students hands-on exposure to the profession beyond the classroom.
          </p>
        </Prose>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Activities & Events" lead="Competitions, invited talks, WIE initiatives and outreach organised by the branch." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <InfoCard key={e.title} tag={e.tag} date={e.date} title={e.title} text={e.text} image={asset(`ieee${i + 1}.png`)} Icon={CalendarDays} />
          ))}
        </div>
      </Band>

      <Band>
        <Callout
          title="Learn more about the IEEE Student Branch"
          text="Visit the department portal for the full archive of IEEE Student Branch events and announcements."
          cta="Visit portal"
          href={LIVE}
        />
      </Band>
    </PageShell>
  )
}
