import PageShell, { Band, PersonCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Student Corner', to: '/student-corner/placement' },
  { label: 'Hall of Fame' },
]

// Drop hof1.png … in src/assets/images for student faces; initials show meanwhile.
const people = [
  { name: 'Aditya Pratyush' , role: 'Network Service Manager, Barclays (UK)', meta: 'My four years at IEM were transformative, shaping my growth both personally and professionally. As the President and Founding Member of the IEM Toastmasters Club, Spokesperson for the IEEE Society, and CWC and Membership Chair of ISHRAE, I gained invaluable skills in leadership and communication. From hosting events to organizing initiatives like the IOPAC Olympiad in my first year, each experience taught me resilience, teamwork, and adaptability. These roles enriched my college journey, preparing me for future challenges and instilling a deep gratitude for the dynamic environment at IEM that fostered my growth. ', tags: ['Batch 2018–2022', 'President, IEM Toastmasters', 'IEEE Spokesperson'] },
  { name: 'Prem Prakash Kumar', role: 'Grade-A Officer Engineer, IOCL', meta: 'My name is Prem Prakash Kumar. I joined IEM in the year 2019 as a BTech student in the Electrical and Electronics Engineering department. I was not very comfortable with meeting new people make new friends, so till the first semester, I didn’t have many friends; I was fully focused on my curriculum. After the first semester, due to COVID-19, we have to stay in our homes till 5th semester. After 5th semester I came to college and met our department faculties, and our batchmates, and they were very supportive. Till the end of my course, I also took part in some co-curriculum activities, and I also won an academic excellence award from the institute. Currently I am joined in IOCL as an officer post. ', tags: ['Batch 2019–2023', 'GATE 2024 · AIR 76', 'Academic Excellence'] },
  { name: 'Riya Kumari', role: 'Associate Software Engineer, Accenture', meta: 'I work with SAP ABAP on HANA technology, a role where my college experience has truly been invaluable. My time at college offered a holistic 360-degree journey of learning and self-growth, where I evolved not just academically but personally as well. Engaging with peers, faculty, and diverse experiences built strong communication and networking skills that I now rely on daily in the corporate world. My active involvement in various college events, both as a participant and a leader, fostered a sense of responsibility and initiative, preparing me to confidently step into leadership roles at work. College, for me, was a foundation that groomed me in every way for a successful career, leaving me with skills, friendships, and memories that will last a lifetime.' ,  tags: ['Batch 2019–2023', 'SAP ABAP on HANA'] },
    { name: 'Kunal', role: 'M.Tech, IIT Delhi', meta: 'I’m Kunal, a 2019-23 B.Tech graduate in Electrical and Electronics Engineering (EEE) from the Institute of Engineering and Management (IEM) Kolkata, currently pursuing my master’s degree at IIT Delhi. I joined IEM in 2019 through the WEBJEE exam, and, initially, I felt quite nervous about job prospects in a core engineering branch. I often wondered whether I’d secure a good job, but later realized there were multiple ways to excel, even in a core branch. I considered preparing for non-core jobs but soon realized that coding wasn’t my strength, which led me to explore other options. During this time, I learned about the GATE exam and understood that a strong performance there could also open doors to good opportunities in core engineering fields. I had some great teachers who helped me develop an interest in my subjects, so I decided to prepare for GATE in my later years. Still, I kept placement preparation as a backup and managed to secure 2 to 3 job offers. Balancing GATE prep with placements was challenging. I dedicated more time to my GATE preparation. Ultimately, my efforts paid off with a decent GATE rank, which helped me gain admission to IIT Delhi for my master’s. Since joining IIT, I’ve realized that success requires hard work and resilience, no matter where you are.', tags: ['Batch 2019–2023', 'GATE Qualified', 'Multiple Offers'] },
  { name: 'Shrey Rungta', role: 'Product Manager, Microsoft', meta: 'He is one of the brightest student of our department. After passing out on 2023, he opted for higher studies and got admitted in Indian Institute Of Foreign Trade (IIFT) for persuing his MBA. Currently he has got a job offer from Microsoft with designation of Product manager. He is offered with 25 lacs INR/annaum saraly for the post.', tags: ['Batch 2019–2023', 'MBA, IIFT', '₹25 LPA'] }
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
