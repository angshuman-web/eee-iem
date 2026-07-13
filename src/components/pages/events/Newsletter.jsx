import PageShell, { Band, DownloadLink } from '../PageShell'
import { img } from '../../../data/images'
import { doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/events/newsletter'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Newsletter' },
]

export default function Newsletter() {
  return (
    <PageShell
      eyebrow="Events"
      title="Department Newsletter"
      lead="Periodic updates on department news, events, achievements and activities."
      image={img.lecture}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-3 sm:grid-cols-2">
          <DownloadLink title="Newsletter — July–December 2025" meta="PDF · Latest" href={doc('newsletter.pdf') || LIVE} />
        </div>
      </Band>
    </PageShell>
  )
}
