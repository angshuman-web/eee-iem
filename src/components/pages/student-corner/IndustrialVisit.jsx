import { Factory } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Student Corner', to: '/student-corner/placement' },
  { label: 'Industrial Visit' },
]

const visits = [
  { tag: 'DVC', date: '16 Mar 2026', title: 'Durgapur Steel Thermal Power Station (DSTPS)', text: 'Coal-based thermal plant on the Rankine cycle — high-pressure boilers, steam turbines, synchronous generators and advanced control systems. 15 students with faculty.' },
  { tag: 'POWERGRID', date: '6 Sep 2025', title: 'Jeerat Substation, Power Grid Corporation of India', text: '765 kV / 400 kV substation operations — operating mechanisms, anomaly management and equipment maintenance. 18 EEE students.' },
  { tag: 'Thermal', date: '29 Mar 2025', title: 'Haldia Energy Limited', text: 'Jointly with IET — thermal power generation and operational aspects for EE and EEE students.' },
  { tag: 'Tata Power', date: '29 Aug 2024', title: 'Tata Power SDI & Maithon Thermal Power Plant', text: 'Skill-development overview emphasising sustainable and renewable energy for the power sector. 21 IET-IEM students.' },
  { tag: 'BIS', date: '22 Aug 2024', title: 'Bureau of Indian Standards — Eastern Regional Lab', text: 'Standardisation-awareness visit exploring how standardisation works. 24 IEM students.' },
  { tag: 'NKDA', date: '12 Apr 2023', title: 'New Town Water Treatment Plant', text: 'A smart-project facility operated by the New Town Kolkata Development Authority.' },
  { tag: 'DVC', date: '24 Mar 2023', title: 'Mejia Thermal Power Station (MTPS)', text: 'Organised by the IET-IEM Student Chapter with IET Kolkata Local Network.' },
  { tag: 'Industry', date: '27–28 Apr 2022', title: 'Eastern Transformer & Equipment Pvt. Ltd.', text: 'Transformer construction and testing with hands-on experience; 30 IET-IEM students in two teams.' },
]

export default function IndustrialVisit() {
  return (
    <PageShell
      eyebrow="Student Corner"
      title="Industrial Visits"
      lead="Industrial visits bridge the industry–academia gap, giving students first-hand exposure to power plants, substations, transformer works and standards laboratories."
      image={img.powerGrid}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visits.map((v, i) => (
            <InfoCard key={v.title} tag={v.tag} date={v.date} title={v.title} text={v.text} image={asset(`industry${i + 1}.png`)} Icon={Factory} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
