import PageShell, { Band, SectionTitle, DownloadLink, DataTable, Prose } from '../PageShell'
import { img } from '../../../data/images'
import { doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/academics/academic-calendar'

const crumb = [
  { label: 'Academics', to: '/academics/faculty-profile' },
  { label: 'Academic Calendar' },
]

const columns = ['Event', 'Date']

const odd = [
  ['Commencement of Classes (New Batch)', '1 July 2026'],
  ['Improvement / Backlog Examinations', '29–30 June & 1 July 2026'],
  ['Commencement of Classes (Existing Batches)', '3 August 2026'],
  ['Term I Theory Examinations (30 Marks)', '7–11 September 2026'],
  ['NPTEL Examination', '19–20 September 2026'],
  ['NPTEL Examination', '16–18 October & 23–25 October 2026'],
  ['Term II Theory Examinations (30 Marks)', '30 October – 5 November 2026'],
  ['End Semester Practical / Sessional Examinations & Viva-Voce (100 Marks)', '12–13 November & 18–27 November 2026'],
  ['End Semester Theory Examinations (100 Marks)', '30 November – 16 December 2026'],
  ['Winter Internship Period', '17 December 2026 – 10 January 2027'],
  ['Inter-Semester Break (Faculty)', '21 December 2026 – 3 January 2027'],
  ['Commencement of Even Semester', '11 January 2027'],
  ['Publication of Odd Semester Results', 'By January 2027'],
]

const even = [
  ['Winter Internship Period', '17 December 2026 – 10 January 2027'],
  ['Inter-Semester Break (Faculty)', '21 December 2026 – 3 January 2027'],
  ['Commencement of Classes', '11 January 2027'],
  ['Term I Theory Examinations (30 Marks)', '23–26 February 2027'],
  ['NPTEL Examination (Tentative)', '20–21 March 2027'],
  ['Term II Theory Examinations (30 Marks)', '5–9 April 2027'],
  ['End Semester Practical / Sessional Examinations & Viva-Voce (100 Marks)', '12–23 April 2027'],
  ['End Semester Theory Examinations (100 Marks)', '26 April – 18 May 2027'],
  ['NPTEL Examinations (Tentative)', '17–18 April, 24–25 April & 1–2 May 2027'],
  ['Summer Internship Period', '19 May – 11 June 2027'],
  ['Summer Semester', '14 June – 9 July 2027'],
  ['Inter-Semester Break (Faculty)', '24 May – 11 June 2027'],
  ['Commencement of Odd Semester 2027 (New Batch)', '1 July 2027'],
  ['Commencement of Odd Semester 2027 (Existing Batches)', '12 July 2027'],
  ['Publication of Even Semester Results', 'By June 2027'],
]

export default function AcademicCalendar() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Academic Calendar 2026–2027"
      lead="Term dates, examination schedule and key academic milestones for the current session across the IEM–UEM Group."
      image={img.library}
      crumb={crumb}
    >
      <Band>
        <Prose>
          <p>
            <strong className="text-ink-900">University of Engineering and Management (UEM), Kolkata & Jaipur</strong><br />
            <strong className="text-ink-900">Institute of Engineering & Management (IEM), Salt Lake & New Town</strong>
          </p>
        </Prose>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <DownloadLink title="Academic Calendar 2026-2027" meta="PDF · Current session" href={doc('academiccalender.pdf') || LIVE} />
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Odd Semester" lead="July 2026 – December 2026" />
        <DataTable columns={columns} rows={odd} />
      </Band>

      <Band>
        <SectionTitle heading="Even Semester" lead="January 2027 – June 2027" />
        <DataTable columns={columns} rows={even} />
      </Band>
    </PageShell>
  )
}
