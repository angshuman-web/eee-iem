import PageShell, { Band, SectionTitle, DownloadLink, DataTable } from '../PageShell'
import { img } from '../../../data/images'
import { doc } from '../../../data/assets'

const LIVE = 'https://eee.iem.edu.in/academics/holiday-list'

const crumb = [
  { label: 'Academics', to: '/academics/faculty-profile' },
  { label: 'Holiday List' },
]

const columns = ['Date', 'Day', 'No. of Day(s)', 'Occasion']

const holidays = [
  ['1st January, 2026', 'Thursday', '1', "New Year's Day"],
  ['12th January, 2026', 'Monday', '1', 'Birthday of Swami Vivekananda'],
  ['23rd January, 2026', 'Friday', '1', "Netaji's Birth Day / Saraswati Puja [Sree Panchami]"],
  ['26th January, 2026', 'Monday', '1', 'Republic Day'],
  ['4th March, 2026', 'Wednesday', '1', 'Holi'],
  ['21st March, 2026', 'Saturday', '0', 'Eid-Ul-Fitr'],
  ['3rd April, 2026', 'Friday', '1', 'Good Friday'],
  ['14th April, 2026', 'Tuesday', '1', "Dr Ambedkar Jayanti; Bengali New Year's Day (Nababarsha)"],
  ['15th April, 2026', 'Wednesday', '1', "Bengali New Year's Day (Nababarsha)"],
  ['1st May, 2026', 'Friday', '1', 'May Day & Buddha Purnima'],
  ['27th May, 2026', 'Wednesday', '1', 'Bakrid'],
  ['26th June, 2026', 'Friday', '1', 'Muharram'],
  ['15th August, 2026', 'Saturday', '0', 'Independence Day'],
  ['4th September, 2026', 'Friday', '1', 'Janmashtami'],
  ['17th September, 2026', 'Thursday', '1', 'Vishwakarma Puja'],
  ['2nd October, 2026', 'Friday', '1', 'Mahatma Gandhi Jayanti'],
  ['10th October, 2026', 'Saturday', '0', 'Mahalaya'],
  ['17th October, 2026', 'Saturday', '0', 'Maha Sasthi'],
  ['18th October, 2026', 'Sunday', '0', 'Maha Saptami'],
  ['19th October, 2026', 'Monday', '1', 'Maha Astami'],
  ['20th October, 2026', 'Tuesday', '1', 'Maha Nabami'],
  ['21st October, 2026', 'Wednesday', '1', 'Maha Dashami'],
  ['25th October, 2026', 'Sunday', '0', 'Lakshmi Puja'],
  ['8th November, 2026', 'Sunday', '0', 'Diwali'],
  ['11th November, 2026', 'Wednesday', '1', 'Bhratridwitiya'],
  ['15th November, 2026', 'Sunday', '0', 'Chhat Puja'],
  ['24th November, 2026', 'Tuesday', '1', 'Guru Nanak Jayanti'],
  ['25th December, 2026', 'Friday', '1', 'Christmas'],
]

export default function HolidayList() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Holiday List"
      lead="Official list of institute holidays for the IEM-UEM Group for the 2026 calendar year."
      image={img.campus}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-3 sm:grid-cols-2">
          <DownloadLink title="Holiday List 2026 — IEM-UEM Group" meta="PDF" href={doc('holidayList.pdf') || LIVE} />
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Holiday List 2026 — IEM-UEM Group" />
        <DataTable columns={columns} rows={holidays} />
      </Band>
    </PageShell>
  )
}
