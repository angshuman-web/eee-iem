import PageShell, { Band, SectionTitle, Prose, DataTable } from '../PageShell'
import { img } from '../../../data/images'

const crumb = [
  { label: 'About', to: '/about/vision-mission' },
  { label: 'Advisory Board' },
]

const internal = [
  ['1', 'Prof. Dr. Rajat Shubhra Pal', 'Head of the Department, EEE', 'Chairman'],
  ['2', 'Prof. Dr. Subhajit Kar', 'Associate Professor & Head, Department of EE, IEM', 'Member'],
  ['3', 'Prof. Dr. Debika Bhattacharya', 'Dean (Academic) & Controller of Examinations', 'Member'],
  ['4', 'Prof. Dr. Mohuya Chakraborty', 'Dean (HR), Professor & Head, Dept. of CSE, IEM', 'Member'],
  ['5', 'Prof. Dr. Malay Gangopadhyay', 'Professor & Head, Department of ECE, IEM', 'Member'],
  ['6', 'Prof. Dr. Swati Chowdhuri', 'Associate Professor, Department of EEE, IEM', 'Member'],
  ['7', 'Prof. Tapas Kumar Datta', 'Professor, Department of EE, IEM', 'Member'],
  ['8', 'Prof. Somnath Hazra', 'Assistant Professor, Department of EEE, IEM', 'Member'],
  ['9', 'Prof. Arijita Das', 'Assistant Professor, Department of EEE, IEM', 'Member'],
  ['10', 'Prof. Nirban Chakraborty', 'Assistant Professor, Department of EEE, IEM', 'Member'],
  ['11', 'Prof. Neeta Sahay', 'Assistant Professor, Department of EEE, IEM', 'Member'],
  ['12', 'Prof. Pratik De Sarkar', 'Assistant Professor, Department of EEE, IEM', 'Member'],
  ['13', 'Prof. Suman Sarkar', 'Assistant Professor, Department of EEE, IEM', 'Member'],
]

const external = [
  ['1', 'Prof. Dr. Abhinandan De', 'Associate Professor, Dept. of EE, IIEST, Shibpur (Academic Expert)', 'Member'],
  ['2', 'Prof. Amitabha Sinha', 'Professor, Dept. of Microelectronics and VLSI Technology, MAKAUT (University Nominee)', 'Member'],
  ['3', 'Mr. Sankar Nath Mukhopadhyay', 'Head, Asia Institute of Power Management, CESC Limited (Industry Expert)', 'Member'],
  ['4', 'Prof. Dr. Madhubanti Maitra', 'Professor, Dept. of EE, JU (Academic Expert)', 'Member'],
  ['5', 'Sayed Fahim Karim', 'Alumni Member (EEE, Batch 2016–2020)', 'Alumni Member'],
]

const columns = ['Sl. No.', 'Name', 'Designation', 'Responsibility']

export default function AdvisoryBoard() {
  return (
    <PageShell
      eyebrow="About the Department"
      title="Departmental Advisory Board"
      lead="An advisory board of eminent personalities from academia and industry guides the department’s academic direction and industrial engagement."
      image={img.research}
      crumb={crumb}
    >
      <Band>
        <Prose>
          <p>The Departmental Advisory Board is responsible for the general superintendence and academic supervision of the Department of Electrical & Electronics Engineering, including matters of academic and industrial exposure.</p>
          <p>The board comprises eminent personalities drawn from academia and from our industrial partner organisations, organised into internal and external members. Together they review curriculum, mentor strategic initiatives and strengthen the department’s links with industry and research institutions.</p>
        </Prose>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Internal Members" lead="Senior faculty and academic leadership of the department and the institute." />
        <DataTable columns={columns} rows={internal} />
      </Band>

      <Band>
        <SectionTitle heading="External Members" lead="Distinguished academicians, industry experts and alumni who bring an external perspective." />
        <DataTable columns={columns} rows={external} />
      </Band>
    </PageShell>
  )
}
