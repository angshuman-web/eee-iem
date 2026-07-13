import { CalendarDays } from 'lucide-react'
import PageShell, { Band, InfoCard, SectionTitle, Prose, Callout } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/events/professional-societies-clubs/bis-standard-club-of-iem'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Professional Societies', to: '/events/professional-societies' },
  { label: 'BIS Standard Club of IEM' },
]

const events = [
  { tag: 'Competition', date: 'Feb 2026', title: 'Reel Making Competition — "AI vs Fraud"', text: 'A creative digital-storytelling contest promoting awareness of artificial intelligence’s role in fraud prevention.' },
  { tag: 'Competition', date: 'Aug 2025', title: 'Poster Making Using Gen-AI', text: 'Participants designed digital posters with generative-AI tools; 13 finalists presented and explained their creative process.' },
  { tag: 'Quiz', date: 'Feb 2025', title: 'Quiz Pedia 2025', text: 'A two-round competition testing engineering standards, technical advancements and general awareness.' },
  { tag: 'Campaign', date: 'Mar 2025', title: 'Quality Connect Campaign', text: 'A volunteer-driven initiative supporting standardisation education among students.' },
  { tag: 'Hackathon', date: '2024–2025', title: 'Hack & Build', text: 'Hardware-based hackathons emphasising interdisciplinary collaboration and problem-solving.' },
  { tag: 'Tech Talk', date: 'Jan & Sep 2024', title: 'Tech Talk Sessions', text: 'Educational presentations on technical topics such as transformers.' },
  { tag: 'Industrial Visit', date: 'Aug 2024', title: 'BIS Eastern Regional Laboratory', text: 'Twenty-four students toured the BIS Eastern Regional Laboratory to observe standardisation processes first-hand.' },
  { tag: 'Competition', date: 'Jul 2024', title: 'Standard Writing Competition', text: 'A two-day event promoting quality and standardisation awareness among students.' },
]

export default function BisStandardClub() {
  return (
    <PageShell
      eyebrow="Professional Societies & Clubs"
      title="BIS Standard Club of IEM"
      lead="The Bureau of Indian Standards (BIS) Standard Club, organised by the Department of Electrical & Electronics Engineering, fostering quality and standardisation awareness among students."
      image={img.server}
      crumb={crumb}
    >
      <Band>
        <Prose>
          <p>
            The <strong className="text-ink-900">BIS Standard Club of IEM</strong> operates under the Bureau of Indian
            Standards and is organised by the Department of Electrical & Electronics Engineering. Its core purpose is
            to foster quality and standardisation awareness among students and young volunteers, with an emphasis on
            understanding how standardisation processes function in practice.
          </p>
          <p>
            Through competitions, campaigns, tech talks, hackathons and industrial visits, the club engages students
            with the real-world importance of standards, quality and technical rigour.
          </p>
        </Prose>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Activities & Events" lead="Competitions, campaigns, tech talks and visits organised by the club." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <InfoCard key={e.title} tag={e.tag} date={e.date} title={e.title} text={e.text} image={asset(`bis${i + 1}.png`)} Icon={CalendarDays} />
          ))}
        </div>
      </Band>

      <Band>
        <Callout
          title="Learn more about the BIS Standard Club"
          text="Visit the department portal for the full archive of BIS Standard Club events and announcements."
          cta="Visit portal"
          href={LIVE}
        />
      </Band>
    </PageShell>
  )
}
