import { Trophy } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'About', to: '/about/vision-mission' },
  { label: 'Awards & Achievements' },
]

// Drop award1.png … award9.png in src/assets/images (order below).
const awards = [
  { tag: 'Placement', title: 'Aditya Pratyush — Barclays', text: 'Aditya Pratyush (Batch 2018–2022) was selected at Barclays at a package of ₹45 Lakhs.' },
  { tag: 'GATE · Placement', title: 'Prem Prakash Kumar — GATE AIR 76', text: 'Prem Prakash Kumar (Batch 2019–2023) secured All India GATE Rank 76 in the 2024 GATE Exam. Selected in both PGCIL and IOCL, he chose to join IOCL as a Grade-A Officer.' },
  { tag: 'Sports', title: 'Table Tennis Champion', text: 'Asutosh Saha (Batch 2022–2026) — Champion in Table Tennis.' },
  { tag: 'GATE', title: 'Gaurav Kumar — GATE AIR 1096', text: 'Gaurav Kumar (Batch 2019–2023) secured All India Rank 1096 in GATE 2024.' },
  { tag: 'Sports', title: 'Kabaddi Tournament Champion', text: 'Asutosh Saha (Batch 2022–2026), team captain — Champion in the Kabaddi Tournament.' },
  { tag: 'Sports', title: 'Bronze Medal — Athletics (Shotput)', text: 'Ashutosh Saha (Batch 2022–2026) represented the college in athletics (Shotput) at IIT KGP’s Shaurya Sports Fest and secured a Bronze Medal.' },
  { tag: 'Recognition', title: 'BIS World Standard Day 2024', text: 'On World Standard Day 2024, the Bureau of Indian Standards recognized IEM, Kolkata at Taj Taal Kutir on 23rd October 2024 for promoting standardization through the “BIS Standard Club of IEM”. The award was received by Dr. Rajat Subhra Pal, HoD of the EEE department.' },
  { tag: 'Faculty Honour', title: 'Best Teacher Award 2023 — Prof. Arijita Das', text: 'The Best Teacher Award 2023 was awarded to Prof. Arijita Das by the IEM-UEM Group.' },
  { tag: 'Faculty Honour', title: 'Research Excellence — Prof. Suman Sarkar', text: 'Appreciation for Research Excellence was awarded to Prof. Suman Sarkar by the IEM-UEM Group.' },
]

export default function AwardsAchievements() {
  return (
    <PageShell
      eyebrow="About the Department"
      title="Awards & Achievements"
      lead="Milestones of our students and faculty — from top placements and GATE ranks to sporting laurels and national recognition."
      image={img.convocation}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <InfoCard key={a.title} tag={a.tag} title={a.title} text={a.text} image={asset(`award${i + 1}.png`)} Icon={Trophy} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
