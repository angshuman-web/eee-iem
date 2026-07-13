import PageShell, { Band, DownloadLink } from '../PageShell'
import { img } from '../../../data/images'
import { doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/events/magazine'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Magazine' },
]

export default function Magazine() {
  return (
    <PageShell
      eyebrow="Events"
      title="Department Magazine"
      lead="EEE-xtravaganza — the department’s annual magazine showcasing student and faculty creativity, activities and achievements."
      image={img.library}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-3 sm:grid-cols-2">
          <DownloadLink title="EEE-xtravaganza — June 2025" meta="Annual Magazine · PDF" href={doc('magazine.pdf') || LIVE} />
        </div>
      </Band>
    </PageShell>
  )
}
