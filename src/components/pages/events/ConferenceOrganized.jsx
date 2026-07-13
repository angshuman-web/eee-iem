import { Presentation } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Conferences Organized' },
]

const conferences = [
  { tag: 'IEMRE 2025', date: '12–14 Sep 2025', title: 'Innovation in Energy Management & Renewable Resources', text: 'Fifth international conference (hybrid) on renewable energy, power systems and energy management, with keynotes, technical sessions and international workshops.' },
  { tag: 'IESIA 2025', date: '25–27 Jun 2025', title: 'Intelligent Electrical Systems & Industrial Automation', text: 'Jointly with EE — 317 papers received globally, 82 presented and forwarded to Springer, with an inter-college hardware-model competition.' },
  { tag: 'IEMRE 2024', date: '20–22 Sep 2024', title: 'Innovation in Energy Management & Renewable Resources', text: 'Fourth edition — 110 papers received, 30 presented and published in Springer’s Lecture Notes in Electrical Engineering; keynotes on microelectronics, policy and EV powertrains.' },
  { tag: 'IESIA 2024', date: '5–7 Apr 2024', title: 'Intelligent Electrical Systems & Industrial Automation', text: 'Hybrid mode — 82 papers received, 34 presented and forwarded to Springer’s Studies in Automatic, Data Driven and Industrial Computing.' },
  { tag: 'IEMRE 2022', date: '25–27 Feb 2022', title: 'Innovation in Energy Management & Renewable Resources', text: 'Online — 142 papers received, 56 accepted; a premium forum for advances in renewable-energy systems and AI-based energy management.' },
  { tag: 'IEMPOWER 2021', date: '26–28 Nov 2021', title: 'Industrial Electronics, Mechatronics, Electrical & Mechanical Power', text: 'Second international conference with IET(UK) Kolkata Local Network and Smart Society, USA — keynotes on space microgrids and AI in IoT health.' },
]

export default function ConferenceOrganized() {
  return (
    <PageShell
      eyebrow="Events"
      title="Conferences Organized"
      lead="International conferences hosted by the department in renewable energy, power systems and intelligent industrial automation, with proceedings published by Springer."
      image={img.lecture}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {conferences.map((c, i) => (
            <InfoCard key={c.tag} tag={c.tag} date={c.date} title={c.title} text={c.text} image={asset(`conf${i + 1}.png`)} Icon={Presentation} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
