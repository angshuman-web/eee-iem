import PageShell, { Band, SectionTitle, Prose, DataTable } from '../PageShell'
import { img } from '../../../data/images'

const crumb = [
  { label: 'Research', to: '/research/departmental-publications' },
  { label: 'Research Grant-in-Progress' },
]

const columns = ['Faculty Name', 'Title of Project']

const projects = [
  ['Dr. Rajat Shubhra Pal', 'Prototype model of conveyor using LIM (Linear Induction Motor)'],
  ['Dr. Arpita Mandal', 'Navigation Vizor'],
  ['Dr. Swati Chowdhuri', 'Automated Plant Disease detection using Deep Learning and Image Processing using MATLAB'],
  ['Dr. Swati Chowdhuri', 'A LoRa based Autonomous Solar powered Aerial recharging station (ASPARS) for enhancing IoT networks sustainability in remote areas'],
  ['Nirban Chakraborty', 'Effects of harmonics and Mitigation in PV-EV integrated system for optimal load management considering transformer deratings'],
  ['Dr. Swati Chowdhuri', 'Intelligent Emotion recognition system'],
  ['Dr. Swati Chowdhuri', 'Harvestvision: Deep neural approaches for intelligent crop evaluation'],
  ['Dr. Arpita Mandal', 'High performance Microwave circuit to show the applicability of electromagnetic metamaterials and resonator for use in wireless communication'],
]

export default function ResearchGrants() {
  return (
    <PageShell
      eyebrow="Research"
      title="Research Grant-in-Progress"
      lead="Sponsored and funded research projects undertaken by the department’s faculty and research groups."
      image={img.research}
      crumb={crumb}
    >
      <Band>
        <Prose>
          <p>The department pursues sponsored and consultancy research across power systems, renewable energy, embedded systems and applied machine learning, in collaboration with its industry partners and professional bodies.</p>
        </Prose>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Ongoing Projects" />
        <DataTable columns={columns} rows={projects} />
      </Band>
    </PageShell>
  )
}
