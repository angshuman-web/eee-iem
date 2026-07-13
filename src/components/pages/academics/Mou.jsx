import { Handshake } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Academics', to: '/academics/faculty-profile' },
  { label: 'Memorandum of Understanding' },
]

const mous = [
  { tag: 'Govt. of India', title: 'MSME Tool Room, Kolkata (CTTC)', text: 'Central Tool Room & Training Centre, Ministry of MSME — curriculum advisory, guest lectures, workshops, joint research projects, industrial internships and entrepreneurship development, with practical exposure to industrial technologies and training-fee concessions for IEM students.' },
  { tag: 'Centre of Excellence', title: 'CoE — AI & Digital Transformation', text: 'Implemented by the Indian Institute of Internship — skill-based training, industrial visits, guest lectures, research programmes and improved placement opportunities, emphasising Web 3.0, Industry 5.0 and AI applications.' },
  { tag: 'Industry', title: 'Aspinotech Infosolutions Pvt. Ltd., Kolkata', text: 'Industry-oriented training programmes, industry-based projects and internships, development of industry-grade laboratories, laboratory material supply, and repair & maintenance support.' },
]

export default function Mou() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Memorandum of Understanding (MoU)"
      lead="Industry–academia partnerships that bring practical exposure, training, internships and industry-grade infrastructure to our students."
      image={img.server}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 md:grid-cols-3">
          {mous.map((m, i) => (
            <InfoCard key={m.title} tag={m.tag} title={m.title} text={m.text} image={asset(`mou${i + 1}.png`)} Icon={Handshake} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
