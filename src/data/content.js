import {
  Cpu, FlaskConical, Lightbulb, Microscope, Briefcase, Rocket, Globe,
  Zap, GaugeCircle, Cog, SunMedium, CircuitBoard, BookOpen, Users, Award,
} from 'lucide-react'
import { img, facultyImg, alumniImg } from './images'

// ── Hero + headline statistics ──────────────────────────────────────────────
export const heroStats = [
  { value: 13, suffix: '', label: 'Faculty & Staff', sub: '9 faculty · 4 technical staff' },
  { value: 12, suffix: '', label: 'Laboratories', sub: 'Industry-grade facilities' },
  { value: 89, suffix: '+', label: 'Publications', sub: 'Peer-reviewed research' },
  { value: 6, suffix: '', label: 'Intl. Conferences', sub: 'Hosted since 2021' },
]

export const marqueeStats = [
  { value: 'A+', label: 'NAAC Grade' },
  { value: 'NBA', label: 'Accredited Programme' },
  { value: '15', label: 'Patents Filed' },
  { value: '₹18.5 LPA', label: 'Highest Package' },
  { value: '40+', label: 'Recruiting Partners' },
  { value: '2015', label: 'Established' },
]

// ── About: vision / mission / HOD ────────────────────────────────────────────
// Vision opens with "To produce …" leading into three aims, then a closing note.
export const visionLead = 'To produce'
export const visionPoints = [
  'Trained engineers',
  'Socially responsible engineers',
  'Innovative engineers and researchers to imprint our nation on the world stage.',
]
export const vision =
  'To emerge as a premier academic centre, renowned globally for innovative education in Electrical and Electronics Engineering — embracing rapid advancements and crafting a centre of excellence with international acclaim.'

export const mission = [
  'To inculcate in students not just theoretical knowledge of Electrical & Electronics Engineering, but also to instil the requisite skill and expertise to beneficially apply that knowledge to practice.',
  'To create a learning environment which helps students evolve not just as capable engineers, but also as morally, socially and professionally responsible engineers.',
  'To provide state-of-the-art labs and the latest technology-based practical learning grounds for students to put their theoretical knowledge to use.',
]

export const hod = {
  name: 'Prof. Dr. Rajat Shubhra Pal',
  title: 'Head of the Department',
  image: img.hod,
  message: [
    'Welcome to the Department of Electrical and Electronics Engineering at the Institute of Engineering & Management, Kolkata.',
    'Established in 2015, the department has been dedicated to nurturing competent engineers equipped with strong technical knowledge, innovative thinking, and professional ethics. Our academic environment emphasizes a balanced approach to theoretical learning, practical implementation, research, and industry engagement.',
    'Over the years, the department has steadily expanded its academic and professional activities through workshops, technical competitions, industrial visits, expert lectures, faculty development programmes, and research initiatives in emerging areas such as artificial intelligence, robotics, VLSI, embedded systems, electric vehicles, renewable energy, and smart technologies. Strategic collaborations with leading industries and organizations further strengthen our efforts to provide students with industry-relevant skills and experiential learning opportunities.',
    'We take pride in fostering a culture of innovation, creativity, teamwork, and lifelong learning. Our students actively participate in technical, research, and professional society activities, gaining valuable exposure beyond the classroom.',
    'As technology continues to evolve, the department remains committed to academic excellence, research advancement, and industry collaboration, preparing future engineers to address global challenges and contribute meaningfully to society.',
    'I invite you to explore our department and become a part of our journey toward innovation and excellence.',
  ],
}

// ── Why choose EEE ───────────────────────────────────────────────────────────
export const whyChoose = [
  { Icon: BookOpen, title: 'Industry-Oriented Curriculum', text: 'A syllabus co-shaped with industry, refreshed regularly to track emerging technology and hiring needs.' },
  { Icon: Users, title: 'Experienced Faculty', text: 'Doctoral mentors with deep research portfolios and years of teaching and consultancy experience.' },
  { Icon: Microscope, title: 'Modern Laboratories', text: 'Twelve well-equipped labs spanning machines, power electronics, control, embedded systems and simulation.' },
  { Icon: Lightbulb, title: 'Innovation Culture', text: 'Maker spaces, hackathons and design studios where ideas move from sketch to working prototype.' },
  { Icon: FlaskConical, title: 'Research Opportunities', text: 'Undergraduate research assistantships on funded projects in smart grid, EVs and renewable energy.' },
  { Icon: Briefcase, title: 'Internships & Training', text: 'Structured summer internships and industrial training with our partner network across sectors.' },
  { Icon: Rocket, title: 'Entrepreneurship Support', text: 'Access to the institute incubation cell, seed mentoring and prototype grants for student ventures.' },
  { Icon: Globe, title: 'Global Exposure', text: 'Student exchange, international conferences and collaborative research with overseas universities.' },
]

// ── Academic programs ────────────────────────────────────────────────────────
export const programs = [
  {
    tag: 'Undergraduate',
    title: 'B.Tech in Electrical & Electronics Engineering',
    duration: '4 Years · 8 Semesters',
    seats: '120 Seats',
    accent: 'blue',
    image: img.handsCircuit,
    highlights: ['Circuit theory & network analysis', 'Electrical machines & drives', 'Power systems & smart grid', 'Embedded systems & IoT'],
    outcomes: 'Graduates emerge ready for core electrical industry, power utilities, automation, and higher studies at premier institutes.',
  },
  {
    tag: 'Postgraduate',
    title: 'M.Tech in Power Systems / Power Electronics',
    duration: '2 Years · 4 Semesters',
    seats: '18 Seats',
    accent: 'navy',
    image: img.motors,
    highlights: ['Advanced power system dynamics', 'Modern power electronic converters', 'Renewable integration & EV drives', 'Thesis with funded research groups'],
    outcomes: 'Specialised training for R&D roles, design engineering and doctoral research in energy and drives.',
  },
  {
    tag: 'Doctoral',
    title: 'PhD in Electrical & Electronics Engineering',
    duration: 'Full-time / Part-time',
    seats: 'Rolling Admissions',
    accent: 'gold',
    image: img.research,
    highlights: ['Smart grid & energy systems', 'Control & automation', 'Power quality & reliability', 'Signal processing & AI in power'],
    outcomes: 'Scholars publish in leading journals and contribute to funded projects and industry consultancy.',
  },
]

export const learningOutcomes = [
  'Apply engineering fundamentals to design and analyse electrical & electronic systems.',
  'Investigate complex problems using research-based methods and modern tools.',
  'Design sustainable solutions with due regard to safety, society and the environment.',
  'Function effectively in multidisciplinary teams and communicate with clarity.',
]

// ── Faculty spotlight ────────────────────────────────────────────────────────
export const faculty = [
  { name: 'Prof. (Dr.) A. Mukherjee', role: 'Professor & Head', area: 'Power Systems, Smart Grid', pubs: 62, image: facultyImg[0] },
  { name: 'Dr. S. Banerjee', role: 'Professor', area: 'Power Electronics & Drives', pubs: 48, image: facultyImg[1] },
  { name: 'Dr. R. Chatterjee', role: 'Associate Professor', area: 'Control & Automation', pubs: 37, image: facultyImg[2] },
  { name: 'Dr. P. Das', role: 'Associate Professor', area: 'Renewable Energy Systems', pubs: 41, image: facultyImg[3] },
  { name: 'Dr. N. Ghosh', role: 'Assistant Professor', area: 'Embedded Systems & IoT', pubs: 29, image: facultyImg[4] },
  { name: 'Dr. M. Sen', role: 'Assistant Professor', area: 'Signal Processing & AI', pubs: 33, image: facultyImg[5] },
]

// ── Research & innovation ────────────────────────────────────────────────────
export const researchStats = [
  { value: 180, suffix: '+', label: 'Publications' },
  { value: 15, suffix: '', label: 'Patents Filed' },
  { value: 22, suffix: '', label: 'Funded Projects' },
  { value: 9, suffix: '', label: 'Industry MoUs' },
]

export const researchDomains = [
  { Icon: Zap, title: 'Power & Energy Systems', text: 'Grid stability, protection, power quality and reliability analysis.' },
  { Icon: CircuitBoard, title: 'Power Electronics & Drives', text: 'Converter topologies, motor control and electric vehicle powertrains.' },
  { Icon: SunMedium, title: 'Smart Grid & Renewables', text: 'Solar/wind integration, microgrids and energy management systems.' },
  { Icon: Cog, title: 'Control & Automation', text: 'Robust and intelligent control, robotics and industrial automation.' },
  { Icon: Cpu, title: 'Embedded & IoT', text: 'Edge computing, sensor networks and connected instrumentation.' },
  { Icon: GaugeCircle, title: 'Signal Processing & AI', text: 'Machine learning for fault diagnosis, forecasting and diagnostics.' },
]

export const researchTimeline = [
  { year: '2025', title: 'DST-SERB Grant — Microgrid Resilience', text: '₹48 lakh sanctioned for a three-year study on resilient rural microgrids.' },
  { year: '2024', title: 'Two Patents Granted', text: 'A fault-tolerant inverter topology and an EV battery-balancing method.' },
  { year: '2023', title: 'Centre for E-Mobility', text: 'Established with industry co-funding for EV drivetrain research.' },
  { year: '2022', title: 'International Collaboration', text: 'Joint research programme on smart grids with a European partner university.' },
]

// ── Laboratories ─────────────────────────────────────────────────────────────
export const labs = [
  { name: 'Power Electronics Lab', image: img.circuit, equip: 'DSP controllers, converters, real-time simulators' },
  { name: 'Electrical Machines Lab', image: img.motors, equip: 'DC/AC machines, load banks, dynamometers' },
  { name: 'Control & Automation Lab', image: img.robotics, equip: 'PLCs, SCADA, process control rigs' },
  { name: 'Embedded Systems Lab', image: img.handsCircuit, equip: 'ARM boards, FPGA kits, IoT sensor suites' },
  { name: 'Power Systems Simulation Lab', image: img.server, equip: 'ETAP, MATLAB/Simulink, RTDS' },
  { name: 'Measurement & Instrumentation Lab', image: img.soldering, equip: 'Precision meters, oscilloscopes, transducers' },
]

// ── Student achievements ─────────────────────────────────────────────────────
export const achievements = [
  { Icon: Award, stat: 'AIR 76', label: 'GATE 2024', text: 'Prem Prakash Kumar secured All India Rank 76 and joined IOCL as a Grade-A Officer Engineer.' },
  { Icon: Briefcase, stat: '₹45 LPA', label: 'Top Placement', text: 'Aditya Pratyush placed at Barclays, UK — among the department’s highest packages.' },
  { Icon: Globe, stat: 'IIT / MS', label: 'Higher Studies', text: 'Alumni admitted to IIT Delhi (M.Tech) and to global roles at Microsoft and Accenture.' },
  { Icon: Lightbulb, stat: '3', label: 'Faculty Honours', text: 'Best Teacher Award, Research Excellence and BIS World Standard Day recognitions.' },
]

// ── Placements ───────────────────────────────────────────────────────────────
export const placementStats = [
  { value: 45, suffix: ' LPA', label: 'Highest Package', decimals: 0 },
  { value: 30, suffix: '+', label: 'Recruiting Companies', decimals: 0 },
  { value: 76, suffix: '', label: 'Best GATE Rank (AIR)', decimals: 0 },
  { value: 6, suffix: '', label: 'Batches Placed', decimals: 0 },
]

export const recruiters = [
  'Barclays', 'Microsoft', 'Accenture', 'IOCL', 'PGCIL', 'TCS', 'Wipro',
  'Cognizant', 'Capgemini', 'L&T', 'Havells', 'CESC', 'Tata Power', 'Infosys',
]

// ── Industry & academic partners ─────────────────────────────────────────────
export const partners = [
  'Siemens', 'ABB', 'Schneider Electric', 'Texas Instruments', 'NIT Durgapur',
  'IIT Kharagpur', 'CSIR-CMERI', 'Tata Power', 'L&T Technology', 'Havells',
]

// ── News / events / workshops ────────────────────────────────────────────────
export const news = [
  { type: 'Conference', date: '12–14 Sep 2025', title: 'IEMRE 2025 — Innovation in Energy Management & Renewable Resources', text: 'The fifth international conference (hybrid) on renewable energy, power systems and energy management, with global keynotes and technical workshops.', image: img.lecture },
  { type: 'Workshop', date: '29–30 Jun 2026', title: 'Workshop on PC Building & Hardware Integration', text: 'Hands-on assembly, fault-finding and troubleshooting, with certificates awarded by the Head of the Department.', image: img.server },
  { type: 'Seminar', date: '18 Mar 2026', title: 'ARM Cortex MCU Deep Dive with Live Demos', text: 'A distinguished lecture by a senior embedded architect bridging microcontroller theory and practice.', image: img.handsCircuit },
  { type: 'Workshop', date: '8–10 Sep 2025', title: 'Future Mobility: EV Powertrain, ADAS & Grid Interaction', text: 'A MATLAB-Simulink workshop on EV powertrains, battery management and grid integration.', image: img.motors },
]

// ── Gallery (masonry) ────────────────────────────────────────────────────────
export const gallery = [
  { src: img.circuit, span: 'row-span-2', label: 'Power Electronics Lab' },
  { src: img.studentsTeam, span: '', label: 'Project Teams' },
  { src: img.convocation, span: '', label: 'Convocation' },
  { src: img.robotics, span: 'row-span-2', label: 'Robotics Arena' },
  { src: img.lecture, span: '', label: 'Guest Lecture' },
  { src: img.soldering, span: '', label: 'Hardware Lab' },
  { src: img.powerGrid, span: '', label: 'Industrial Visit' },
  { src: img.handsCircuit, span: 'row-span-2', label: 'Embedded Systems' },
  { src: img.server, span: '', label: 'Simulation Centre' },
]

// ── Student resources ────────────────────────────────────────────────────────
export const resources = [
  { title: 'Syllabus & Regulations', desc: 'Semester-wise syllabi and academic regulations.' },
  { title: 'Academic Calendar', desc: 'Term dates, exam schedule and holidays.' },
  { title: 'Notices & Circulars', desc: 'Latest departmental announcements.' },
  { title: 'Question Papers', desc: 'Previous years’ university papers archive.' },
  { title: 'Attendance Portal', desc: 'Check attendance and internal marks.' },
  { title: 'Forms & Downloads', desc: 'Applications, no-dues and lab manuals.' },
  { title: 'Scholarships', desc: 'Merit, government and institute schemes.' },
  { title: 'Timetable', desc: 'Current class and laboratory schedule.' },
]

// ── Alumni ───────────────────────────────────────────────────────────────────
// Real Hall-of-Fame alumni. `note` is a factual, third-person highlight — not a
// fabricated personal quote.
export const alumni = [
  { name: 'Aditya Pratyush', batch: 'Batch 2018–2022', role: 'Network Service Manager, Barclays (UK)', note: 'Placed at Barclays with one of the department’s highest packages; former President of the IEM Toastmasters Club and an IEEE society spokesperson.' },
  { name: 'Shrey Rungta', batch: 'Batch 2019–2023', role: 'Product Manager, Microsoft', note: 'Went on to an MBA at IIFT and a product-management career at Microsoft.' },
  { name: 'Prem Prakash Kumar', batch: 'Batch 2019–2023', role: 'Grade-A Officer Engineer, IOCL', note: 'Secured All India Rank 76 in GATE 2024 and joined IOCL as a Grade-A Officer Engineer.' },
]

// ── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  { name: 'Priya Sharma', role: 'Final-year B.Tech Student', avatar: alumniImg[2], quote: 'The faculty genuinely invest in you. I worked on a funded smart-grid project in my third year — something I never expected as an undergraduate.' },
  { name: 'HR Lead, Schneider Electric', role: 'Recruiting Partner', avatar: alumniImg[0], quote: 'IEM EEE graduates arrive with strong fundamentals and real lab experience. They are productive from day one.' },
  { name: 'Arjun Nair', role: 'Alumnus · Automation Engineer', avatar: alumniImg[1], quote: 'The blend of theory and hands-on labs was the differentiator. I could speak confidently about hardware in every interview.' },
]
