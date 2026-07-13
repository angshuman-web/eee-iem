import PageShell, { Band, SectionTitle, NumberedItem } from '../PageShell'
import { img } from '../../../data/images'

const crumb = [
  { label: 'About', to: '/about/vision-mission' },
  { label: 'PO, PSO & PEO' },
]

const PO = [
  { title: 'Engineering Knowledge', text: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
  { title: 'Problem Analysis', text: 'Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
  { title: 'Design / Development of Solutions', text: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental considerations.' },
  { title: 'Conduct Investigations', text: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
  { title: 'Modern Tool Usage', text: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.' },
  { title: 'Societal & Environmental Analysis', text: 'Analyse and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment.' },
  { title: 'Ethics', text: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
  { title: 'Individual & Teamwork', text: 'Function effectively as an individual, and as a member or leader in diverse / multidisciplinary teams.' },
  { title: 'Communication', text: 'Communicate effectively and inclusively within the engineering community and society at large — comprehend and write effective reports and design documents, and make effective presentations considering cultural, language, and learning differences.' },
  { title: 'Project Management & Finance', text: "Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
  { title: 'Life-long Learning', text: 'Recognize the need for, and have the preparation and ability for independent and life-long learning, adaptability to new and emerging technologies, and critical thinking in the broadest context of technological change.' },
]

const PSO = [
  { title: 'Technical Knowledge', text: 'Apprehend and analyze specific engineering problems of communication, networking, electrical & electronics circuits, signal processing, computer programming, embedded systems, VLSI design and semiconductor technology by applying the knowledge of basic sciences, engineering mathematics and engineering fundamentals.' },
  { title: 'Design & Implementation', text: 'Ability to design and implement the acquired technical knowledge with proficiency in logical programming for applications in Electrical & Electronics Engineering.' },
  { title: 'Professional Development', text: 'Ability to communicate effectively with excellent professional skills and demonstrate the practice of professional ethics for societal benefit.' },
]

const PEO = [
  { title: 'Career Foundation', text: 'To prepare graduates with a strong foundation in Engineering, Science & Technology for a successful career in Electrical & Electronics Engineering.' },
  { title: 'Advanced Studies', text: 'To prepare graduates who will have the knowledge, ability and courage to pursue higher studies and research.' },
  { title: 'Professional Placement', text: 'To ensure proper placement of graduates in reputed industrial sectors by training them with soft skills, domain knowledge and managerial skills.' },
]

function Group({ heading, prefix, items, tone }) {
  return (
    <Band tone={tone}>
      <SectionTitle heading={heading} />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <NumberedItem key={it.title} badge={`${prefix}${i + 1}`} title={it.title} text={it.text} delay={(i % 2) * 60} />
        ))}
      </div>
    </Band>
  )
}

export default function PoPsoPeo() {
  return (
    <PageShell
      eyebrow="About the Department"
      title="Program Outcomes, PSOs & Educational Objectives"
      lead="The outcomes and objectives that anchor our B.Tech programme, aligned to national accreditation frameworks."
      image={img.circuit}
      crumb={crumb}
    >
      <Group heading="Program Outcomes (PO)" prefix="PO" items={PO} tone="white" />
      <Group heading="Program Specific Outcomes (PSO)" prefix="PSO" items={PSO} tone="soft" />
      <Group heading="Program Educational Objectives (PEO)" prefix="PEO" items={PEO} tone="white" />
    </PageShell>
  )
}
