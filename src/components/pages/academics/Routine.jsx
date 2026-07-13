import PageShell, { Band, DownloadLink } from '../PageShell'
import { img } from '../../../data/images'
import { doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/academics/routine'

const crumb = [
  { label: 'Academics', to: '/academics/faculty-profile' },
  { label: 'Routine' },
]

export default function Routine() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Class Routine"
      lead="Current semester class and laboratory schedule for the Department of EEE."
      image={img.lecture}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-3 sm:grid-cols-2">
          <DownloadLink title="EEE Routine — Odd Semester 2026-27" meta="PDF · Current" href={doc('routine.pdf') || LIVE} />
        </div>
      </Band>
    </PageShell>
  )
}
