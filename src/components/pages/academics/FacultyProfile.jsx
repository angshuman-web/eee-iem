import PageShell, { Band, SectionTitle, PersonCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Academics', to: '/academics/faculty-profile' },
  { label: 'Faculty Profile' },
]

// Faces: drop <FirstName>.png in src/assets/images (e.g. Rajat.png, Arijita.png,
// Swati.png … / Arindam.png, Madhusudan.png …); initials avatars show until then.
const firstName = (name) => name.replace(/^((Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s*)+/i, '').trim().split(/\s+/)[0]

const faculty = [
  { name: 'Prof. Dr. Rajat Shubhra Pal', role: 'Associate Professor & Head of Department', meta: 'Ph.D. · Electrical Engineering', tags: ['Electromagnetic Field Theory'], email: 'rajatsubhra.pal@iem.edu.in' },
  { name: 'Prof. Arijita Das', role: 'Assistant Professor & Assistant HoD', meta: 'M.Tech · Instrumentation & Control', tags: ['Biomedical Signal Processing'], email: 'arijita.das@iem.edu.in' },
  { name: 'Prof. Dr. Swati Chowdhuri', role: 'Professor', meta: 'Ph.D. · Wireless Network', tags: ['ML Signal Analysis', 'BCI', 'Image Processing'], email: 'swati.chowdhuri@iem.edu.in' },
  { name: 'Prof. Dr. Tanmay Sinha Roy', role: 'Associate Professor', meta: 'Ph.D. · Embedded Systems & IoT', tags: ['AI & ML', 'IoT', 'Healthcare Analytics'], email: 'Tanmay.SinhaRoy@iem.edu.in' },
  { name: 'Prof. Dr. Manas Mukherjee', role: 'Associate Professor', meta: 'Ph.D. · Power Systems', tags: ['Wide-Area Monitoring'], email: 'Manas.Mukherjee@iem.edu.in' },
  { name: 'Prof. Dr. Nirban Chakroborty', role: 'Assistant Professor', meta: 'Ph.D. · Power Electronics & Drives', tags: ['Renewable Energy', 'Micro Grid', 'Electricity Market'], email: 'nirban.chakraborty@iem.edu.in' },
  { name: 'Prof. Neeta Sahay', role: 'Assistant Professor', meta: 'M.Tech · Mechatronics', tags: ['Robotics'], email: 'neeta.sahay@iem.edu.in' },
  { name: 'Prof. Suman Sarkar', role: 'Assistant Professor', meta: 'M.Tech · VLSI & Micro Electronics', tags: ['Nano Electronics', '2D Materials'], email: 'suman.sarkar@iem.edu.in' },
  { name: 'Prof. Pratik De Sarkar', role: 'Assistant Professor', meta: 'M.Tech · VLSI & Micro Electronics', tags: ['Photovoltaic Devices'], email: 'pratik.desarkar@iem.edu.in' },
].map((p) => ({ ...p, photo: asset(`${firstName(p.name)}.png`) }))

const staff = [
  { name: 'Arindam Banerjea', role: 'Scientific Officer', meta: 'M.Sc. · Biomedical Instrumentation', email: 'arindam.banerjea@iem.edu.in' },
  { name: 'Madhusudan Baidya', role: 'Technical Assistant', meta: 'Diploma · Electrical Engineering', email: 'madhusudan.baidya@iem.edu.in' },
  { name: 'Saptamee De', role: 'Technical Assistant', meta: 'M.Tech · ECE (VLSI & Micro Electronics)', email: 'saptamee.de@iem.edu.in' },
  { name: 'Priyabrata Kumar', role: 'Technical Assistant', meta: 'M.Tech · Electrical Engineering', email: 'priyabrata.kumar@iem.edu.in' },
].map((p) => ({ ...p, photo: asset(`${firstName(p.name)}.png`) }))

export default function FacultyProfile() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Faculty Profile"
      lead="A research-active faculty combining doctoral depth with strong teaching and industry engagement across power, electronics, control and emerging domains."
      image={img.research}
      crumb={crumb}
    >
      <Band>
        <SectionTitle heading="Faculty Members" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((p, i) => (
            <PersonCard key={p.name} {...p} delay={(i % 3) * 60} />
          ))}
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Technical & Scientific Staff" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {staff.map((p, i) => (
            <PersonCard key={p.name} {...p} delay={(i % 3) * 60} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
