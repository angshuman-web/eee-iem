import PageShell, { Band, SectionTitle, Prose, DataTable } from '../PageShell'
import { img } from '../../../data/images'

const crumb = [
  { label: 'Research', to: '/research/departmental-publications' },
  { label: 'Patent Details' },
]

const columns = ['Faculty Name', 'Designation', 'Patent Approving Body', 'Topic', 'Status']

const patents = [
  ['Dr. Swati Chowdhuri', 'Professor', 'AusPat', 'An Artificial Intelligence Based System for Emotional Recognition', 'Granted'],
  ['Dr. Swati Chowdhuri', 'Professor', 'Indian Patent', 'Smart Energy Management System Using Machine Learning and IoT', 'Granted'],
  ['Dr. Swati Chowdhuri', 'Professor', 'Indian', 'Deep learning based method and system for detecting insulin leaf diseases', 'Published'],
  ['Dr. Swati Chowdhuri', 'Professor', 'Indian Copyright', 'BCEI: A novel balanced dataset designed for performing automated leaves identification', 'Granted'],
  ['Dr. Swati Chowdhuri', 'Professor', 'Indian Copyright', 'FoliageDB: A novel database designed for automated identification of similarly patterned leaves', 'Granted'],
  ['Dr. Tanmay Sinha Roy', 'Associate Professor', 'Indian Design Patent', 'Multicore VLSI Chip Interfaced AR/VR Device', 'Applied / Filed on 31/03/25'],
  ['Dibyadarshi Das', 'Student', 'Comptroller-General of Patents, Designs and Trade Marks — Intellectual Property Office (UK Design Registration)', 'Thermal Compress Lumbar Support Belt', 'Granted'],
]

export default function PatentDetails() {
  return (
    <PageShell
      eyebrow="Research"
      title="Patent Details"
      lead="Intellectual property arising from the department’s research and innovation activities."
      image={img.handsCircuit}
      crumb={crumb}
    >
      <Band>
        <Prose>
          <p>The department encourages translation of research into intellectual property, with patents and copyrights emerging from faculty research and student innovation projects.</p>
        </Prose>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Patents & Copyrights" />
        <DataTable columns={columns} rows={patents} />
      </Band>
    </PageShell>
  )
}
