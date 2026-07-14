import PageShell, { Band, SectionTitle, DownloadLink } from '../PageShell'
import { img } from '../../../data/images'
import { doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/academics/syllabus'

const crumb = [
  { label: 'Academics', to: '/academics/faculty-profile' },
  { label: 'Syllabus' },
]

const btech = [
  { title: '2nd Year — Odd Semester 2026', meta: 'PDF', file: 'syllabus2nd.pdf' },
  { title: '3rd Year — Odd Semester 2026', meta: 'PDF', file: 'syllabus3rd.pdf' },
  { title: '4th Year — Odd Semester 2026', meta: 'PDF', file: 'syllabus4th.pdf' },
]

export default function Syllabus() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Syllabus"
      lead="Semester-wise curriculum documents for the B.Tech programme and the Minor Degree in Robotics."
      image={img.circuit}
      crumb={crumb}
    >
      <Band>
        <SectionTitle heading="Odd Semester 2026-27" />
        <div className="grid gap-3 sm:grid-cols-2">
          {btech.map((d, i) => (
            <DownloadLink key={d.title} title={d.title} meta={d.meta} href={doc(d.file) || LIVE} delay={(i % 2) * 50} />
          ))}
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Specialised Programme" />
        <div className="grid gap-3 sm:grid-cols-2">
          <DownloadLink title="EEE Minor Degree in Robotics — IEMK 2024" meta="PDF" href={doc('syllabusminor.pdf') || LIVE} />
        </div>
      </Band>
    </PageShell>
  )
}
