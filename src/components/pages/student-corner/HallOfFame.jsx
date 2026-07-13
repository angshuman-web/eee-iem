import PageShell, { Band, PersonCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Student Corner', to: '/student-corner/placement' },
  { label: 'Hall of Fame' },
]

// Drop hof1.png … in src/assets/images for student faces; initials show meanwhile.
const people = [
  { name: 'Aditya Pratyush', role: 'Network Service Manager, Barclays (UK)', meta: 'Batch 2018–2022', tags: ['President, IEM Toastmasters', 'IEEE Spokesperson'] },
  { name: 'Shrey Rungta', role: 'Product Manager, Microsoft', meta: 'Batch 2019–2023', tags: ['MBA, IIFT', '₹25 LPA'] },
  { name: 'Prem Prakash Kumar', role: 'Grade-A Officer Engineer, IOCL', meta: 'Batch 2019–2023', tags: ['GATE 2024 · AIR 76', 'Academic Excellence'] },
  { name: 'Kunal', role: 'M.Tech, IIT Delhi', meta: 'Batch 2019–2023', tags: ['GATE Qualified', 'Multiple Offers'] },
  { name: 'Riya Kumari', role: 'Associate Software Engineer, Accenture', meta: 'Batch 2019–2023', tags: ['SAP ABAP on HANA'] },
].map((p, i) => ({ ...p, photo: asset(`hof${i + 1}.png`) }))

export default function HallOfFame() {
  return (
    <PageShell
      eyebrow="Student Corner"
      title="Hall of Fame"
      lead="Distinguished alumni of the department who are making their mark across global industry, premier institutes and research."
      image={img.convocation}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <PersonCard key={p.name} {...p} delay={(i % 3) * 60} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
