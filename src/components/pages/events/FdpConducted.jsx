import { GraduationCap, FileDown } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset, doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/events/fdp-conducted'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'FDP Conducted' },
]

const fdps = [
  { tag: '5-Day FDP', date: '2025', title: 'Future Innovations in Quantum VLSI', text: 'AI-driven approaches in quantum computing and VLSI.' },
  { tag: '5-Day FDP', date: '1–5 Apr 2025', title: 'Future of Grid Operations', text: 'Real-time insights through smart meters and Wide-Area Monitoring Systems (WAMS).' },
  { tag: '5-Day FDP', date: '11–15 Nov 2024', title: 'AI on Robotics & Energy Management', text: 'Implementation of artificial intelligence across robotics and energy-management systems.' },
  { tag: '3-Day FDP', date: '13–15 May 2024', title: 'Industry-Academia Consortium', text: 'Control, energy and measurement — bridging industry practice and academic research.' },
  { tag: 'Intl. FDP', date: '28 Nov – 2 Dec 2023', title: 'Research Prospects Integrating AI & ML', text: 'Jointly with EE — 10 eminent speakers and 130 participants; sponsored by IEEE Women in Engineering and The Institution of Engineers (India).' },
]

export default function FdpConducted() {
  return (
    <PageShell
      eyebrow="Events"
      title="Faculty Development Programmes"
      lead="Intensive programmes that keep faculty and researchers at the frontier of emerging electrical and electronics technologies."
      image={img.research}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fdps.map((f, i) => (
            <InfoCard key={f.title} tag={f.tag} date={f.date} title={f.title} text={f.text} image={asset(`fdp${i + 1}.png`)} Icon={GraduationCap}>
              <a
                href={doc(`fdp${i + 1}.pdf`) || LIVE}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue transition-colors hover:text-brand-bluedark"
              >
                <FileDown size={14} /> Download report (PDF)
              </a>
            </InfoCard>
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
