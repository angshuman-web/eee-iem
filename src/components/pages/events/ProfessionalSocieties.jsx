import { Users } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Professional Societies' },
]

const societies = [
  { title: 'IET Student Branch', text: 'The Institution of Engineering & Technology student branch — technical talks, industrial visits and professional-development activities.', to: '/events/professional-societies/iet' },
  { title: 'IEEE Student Branch', text: 'The IEEE student branch fostering research culture, technical events and society chapter activities on campus.', to: '/events/professional-societies/ieee' },
  { title: 'BIS Standard Club of IEM', text: 'The Bureau of Indian Standards club promoting awareness of standardisation and quality among students.', to: '/events/professional-societies/bis' },
]

export default function ProfessionalSocieties() {
  return (
    <PageShell
      eyebrow="Events"
      title="Professional Societies & Clubs"
      lead="Student chapters and clubs that extend learning beyond the classroom through technical, professional and standardisation activities."
      image={img.studentsTeam}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {societies.map((s, i) => (
            <InfoCard key={s.title} title={s.title} text={s.text} href={s.href} cta="Learn more" image={asset(`society${i + 1}.png`)} Icon={Users} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
