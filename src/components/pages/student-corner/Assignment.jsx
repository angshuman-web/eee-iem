import PageShell, { Band, SectionTitle, DownloadLink } from '../PageShell'
import { img } from '../../../data/images'
import { doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/student-corner/assignment'

const crumb = [
  { label: 'Student Corner', to: '/student-corner/placement' },
  { label: 'Assignment' },
]

// Assignment PDFs are keyed <type><year><subject> — e.g. theory2a.pdf is the
// first theory subject of the 2nd year, practical3b.pdf the second practical
// subject of the 3rd year. Drop the files into src/assets/docs (see doc()).
const years = [
  {
    heading: '2nd Year',
    digit: 2,
    tone: 'white',
    theory: ['Circuit Theory & Networks', 'Analog Electronics', 'Electrical Machines I'],
    practical: ['Circuit Theory Laboratory', 'Analog Electronics Laboratory', 'Electrical Machines Laboratory'],
  },
  {
    heading: '3rd Year',
    digit: 3,
    tone: 'soft',
    theory: ['Power Systems', 'Control Systems', 'Power Electronics'],
    practical: ['Power Systems Laboratory', 'Control Systems Laboratory', 'Power Electronics Laboratory'],
  },
]

const letter = (i) => String.fromCharCode(97 + i) // 0 -> 'a', 1 -> 'b', …

function resolve(type, digit, i) {
  return doc(`${type}${digit}${letter(i)}.pdf`) || LIVE
}

export default function Assignment() {
  return (
    <PageShell
      eyebrow="Student Corner"
      title="Assignments"
      lead="Theory and practical assignments for each subject, organised by year. Download the PDF for any subject below."
      image={img.library}
      crumb={crumb}
    >
      {years.map((y) => (
        <Band key={y.heading} tone={y.tone}>
          <SectionTitle heading={y.heading} />

          <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-blue">Theory Assignments</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {y.theory.map((subject, i) => (
              <DownloadLink
                key={`t-${subject}`}
                title={subject}
                meta={`Theory · ${y.heading} · PDF`}
                href={resolve('theory', y.digit, i)}
                delay={(i % 2) * 50}
              />
            ))}
          </div>

          <h3 className="mb-3 mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-blue">Practical Assignments</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {y.practical.map((subject, i) => (
              <DownloadLink
                key={`p-${subject}`}
                title={subject}
                meta={`Practical · ${y.heading} · PDF`}
                href={resolve('practical', y.digit, i)}
                delay={(i % 2) * 50}
              />
            ))}
          </div>
        </Band>
      ))}
    </PageShell>
  )
}
