import { ChevronDown } from 'lucide-react'
import PageShell, { Band, SectionTitle, StatCard, InfoCard } from '../PageShell'
import Reveal from '../../common/Reveal'
import { img } from '../../../data/images'

const crumb = [
  { label: 'Research', to: '/research/departmental-publications' },
  { label: 'Departmental Publications' },
]

const stats = [
  { value: '89+', label: 'Publications' },
  { value: '9', label: 'Publishing Faculty' },
  { value: '10+', label: 'Research Areas' },
  { value: 'Springer', label: 'Indexed Proceedings' },
]

const contributions = [
  { tag: '20 papers', title: 'Prof. Dr. Swati Chowdhuri', text: 'Wireless networking and biomedical signal analysis — MIMO-based MANETs, EEG signal processing, blockchain-based routing and AI-driven examination systems.' },
  { tag: '13 papers', title: 'Prof. Arijita Das', text: 'Signal processing and embedded systems — IoT-based health monitoring, brain-computer interfaces, gesture recognition and ML for arrhythmia detection from ECG.' },
  { tag: '12 papers', title: 'Prof. Dr. Arpita Mandal', text: 'RF/microwave filter design and cognitive radio — compact low-pass filters, spectrum sensing and antennas for satellite applications.' },
  { tag: '11 papers', title: 'Prof. Dr. Nirban Chakroborty', text: 'Power systems and renewable integration — rooftop solar PV analysis, fuzzy-logic motor control and energy-management optimisation.' },
  { tag: '10 papers', title: 'Prof. Dr. Rajat Shubhra Pal', text: 'Electromagnetics — ferroresonance in transformers, wind-turbine modelling, core-saturation effects and finite-element field analysis.' },
  { tag: '8 papers', title: 'Prof. Neeta Sahay', text: 'Robotics and mechanical design — robotic-arm dynamics, microgripper design and kinematic analysis of manipulators.' },
  { tag: '7 papers', title: 'Prof. Dr. Tanmay Sinha Roy', text: 'EEG-driven mental-state detection and circuit analysis using machine-learning approaches.' },
  { tag: '5 papers', title: 'Prof. Pratik De Sarkar', text: 'Solar-cell technology and perovskite materials with simulation-based design optimisation.' },
  { tag: '3 papers', title: 'Prof. Suman Sarkar', text: 'Computational materials science — density-functional theory for SF₆-decomposition gas sensing.' },
]

const publications = [
  {
    name: 'Prof. Dr. Rajat Shubhra Pal',
    papers: [
      'Study and verification of ferroresonance simulated with Rudenburg’s method',
      'Investigation on the Occurrence of Ferroresonance with the Variation of Core Loss of a Transformer using Nonlinear Dynamic Model of the Transformer',
      'Verification of Period-Doubling Behavior of Ferroresonance Circuit with the Jacobian Matrix and Eigenvalues',
      'Investigation on the Occurrence of Ferroresonance with the Variation of Degree of Transformer Core Saturation',
      'Variation Of Magnetic Flux On The Occurrence Of Ferroresonance In A Transformer Using Finite Element Method',
      'Modelling of Wind Turbine and Study its Operation at Various Input Parameters',
      'Investigation on the Stability of an Electric Power Circuit under Ferroresonance Based on Nonlinear Dynamic Model of Transformer',
      'Analysis of Ferroresonance in a Transformer with BH Loop Having Variable Core Loss',
      'Application of Finite Element Method in Electromagnetic Field Calculation',
      'Study of Different Numerical Methods in Computation of Partial Differential Equation in Electromagnetic Field Problems',
    ],
  },
  {
    name: 'Prof. Arijita Das',
    papers: [
      'Application of association rule: Apriori algorithm in E-Commerce',
      'Development of Home Intruder Tracking System using Face Recognition',
      'Leaves of Vallisneria finds source to anti dermatitis: enriching wetland ecosystem',
      'A Study on the Development and Deployment of IoT Based Remote Health Monitoring System Utilizing ECG Signal',
      '“Intelligent Stress-Buster” – A LabVIEW Based Real-Time Embedded System for Thought Control Using Brain Computer Interface',
      'DC Motor Movement Controlled by Gesture Orientation using Arduino',
      'Development of Home Intruder Tracking System Using Face Recognition',
      'Approach of Designing a PID Temperature Controller using RTD',
      'Detection of Underground Cable Fault Applying the Concept of Ohm’s Law',
      'Measurement and Analysis of Temperature using Raspberry Pi',
      'Development of Obstacle Detection Technology with Remote Telemetering using GSM Module',
      'Gesture Following DC Motor Control',
      'Development of Automated Agricultural Process Monitoring and Control Technology in an Enclosed System',
      'A Study on the Detection and Different Methods of Classification of Arrhythmia Utilizing ECG Signal',
      'Real-Time Sign Language Detection Using CNN',
    ],
  },
  {
    name: 'Prof. Dr. Swati Chowdhuri',
    papers: [
      'Rough Set Based Ad Hoc Network: A Review',
      'Recent Research on Multi Input Multi Output (MIMO) Based Mobile Ad Hoc Network: A Review',
      'Secure Minimum Loss Route Selection of MIMO-Based MANET in Combined (Indoor, Outdoor, and Forest) Terrain',
      'Rigid Image Registration Using Parallel Processing',
      'Implementation of a New Packet Broadcasting Algorithm for MIMO Equipped Mobile Ad-Hoc Network',
      'Propagation Analysis of MIMO Ad Hoc Network in Hybrid Propagation Model and Implement Less Propagation Loss Algorithm to Find the Minimum Loss Route',
      'Propagation Analysis of Hybrid Model of MIMO Ad Hoc Network and Implement Less Propagation Loss Algorithm to Find the Minimum Loss Route',
      'Analysis of Performance of MIMO Ad Hoc Network in Terms of Information Efficiency',
      'Implementation of MIMO–OFDM System in Mobile Ad-Hoc Networks',
      'Concentration Level Detection for Left/Right Brain Dominance Using Electroencephalogram Signal',
      'Dynamics of Cardiovascular Muscle Using a Non-linear Symmetric Oscillator',
      'Postpandemic EdTech (Educational Technology) on Perspectives of Green Society',
      'Implementation of a Novel Minimum Energy Consume Secure Routing Protocol for Reliable and Energy Efficient Rescue Operation of FANET',
      'Fragment-Based Transmission Using Minimum Power Consumed Routing (FBTMPCR) Algorithm of a MIMO Integrated MANET',
      'Relay Node Selection Algorithm Consuming Minimum Power of MIMO Integrated MANET',
      'Implementing Packet Broadcasting Algorithm of MIMO Based Mobile Ad-Hoc Networks to Exploit Diversity',
      'Realization of Different Diversity Technique for MIMO Based Mobile Ad Hoc Network Using Space Time Block Codes',
      'Relevance of Color Spaces and Color Channels in Performing Image Dehazing',
      'Mechanism to Disinfect Money to Prevent COVID-19',
      'Minimum Power Consuming Algorithm to Select Relay Node of MIMO Integrated Mobile Ad Hoc Network',
      'Real-Time Classification of EEG Signals Using Machine Learning Deployment',
      'Machine Learning Approach to Recognition Human Mental State from EEG Signal',
      'ABCD: Advanced Blockchain DSR Algorithm for MANET to Mitigate the Different Security Threats',
      'Chapter 14: Advancements in Examination Systems: IP-Based Robo Invigilator Technique',
    ],
  },
  {
    name: 'Prof. Dr. Arpita Mandal',
    papers: [
      'A Comprehensive Study on Spectrum Sensing and Resource Allocation for Cognitive Cellular Network',
      'Compact Low-Pass Filter (LPF) with Wide Harmonic Suppression Using Interdigital Capacitor',
      'Stepped Impedance Hairpin Resonator (SIHR) Based Compact Low-Pass Filter with Wide Attenuation Band',
      'Designing and Validation of Miniaturized CPW Based Microwave Notch Filter Using Loaded Modified Multiple Split Ring Resonator (MSRR)',
      'Design of Coplanar Waveguide LPFs Using Open Stub and Defected Ground Structure (DGS)',
      'Compact Low-Pass Filtering-Response Wilkinson Power Divider with Wide Harmonic Suppression',
      'A Comparative Study on Different Types of Spectrum Sensing Techniques in Centralized Cognitive Cellular Network',
      'A Compact Filtering Power Divider with Low-Pass Response and Wide Harmonic Suppression',
      'Stub Resonator Based Compact Low-Pass Filter (LPF) with Wide Harmonic Suppression',
      'Design of High-Gain Antenna Incorporated with Left-Handed Material for Satellite Applications',
      'Modeling and Performance Enhancement of Compact FSS Based Low-Profile Broadband Monopole Antenna',
      'Area-Time-Energy Efficient Architecture of CBNS-Based Fast Fourier Transform',
      'Watson-Crick Grammar and Its Label Languages',
    ],
  },
  {
    name: 'Prof. Nirban Chakraborty',
    papers: [
      'Profit Maximization of Retailers with Intermittent Renewable Sources and Energy Storage Systems in Deregulated Electricity Market with Modern Optimization Techniques: A Review',
      'Comparison Between Net Metering and Battery Storage in Reference to Rooftop Solar',
      'Application of Association Rule: Apriori Algorithm in E-Commerce',
      'Comparative Study Between PI and Fuzzy Logic Speed Controller in Vector Controlled PMSM Drive',
      'A New Approach Based on Sinusoidal PWM Inverter with PI Controller for Vector Control of Induction Motor',
      'Review on Power Quality Issues and Its Solution for Better Electrical Reliability in Power System',
      'Profit Maximization for the Consumers in a Smart Irrigation System in the Presence of Renewables',
      'Renewable Resources and Energy Management: Proceedings of the International Conference on Innovation in Energy Management & Renewable Resources (IEMRE 2022)',
      'Electricity Bill Saving Using Solar Rooftop PV Cell for a Residential Complex in Our Locality — A Case Study',
      'Comparative Analysis of Different Optimization Techniques in Automatic Voltage Regulator System',
      'A Review of Detailed Performance Analysis of Different Ventilation Systems, Case Studies and Approaches for Modifying Existing Ventilators',
      'Direct Vector Control of Induction Motor Based on Sinusoidal PWM Inverter with Fuzzy Logic Controller',
    ],
  },
  {
    name: 'Prof. Neeta Sahay',
    papers: [
      'Simulation of Robot Arm Dynamics Using NE Method of 2-Link Manipulator',
      'Design Analysis of a Fish-Shaped PVDF Compliance Microgripper',
      'Dynamic Modeling of Three Link Finger Manipulator',
      'Dynamic Modeling of Step Climbing Wheeled Robot',
      'An Alternate Approach for Implementation of Electric Long Board',
      'Design and Analysis of Robotic Microgripper Using ABS and PLA',
      'Robot Kinematic of Three-Link Manipulator and Computation of Joint Torque by Phase Variable Method',
      'Characteristic Behavior of PVDF-Compliant Structure as an End Effector Using Creo Element/Pro Release 5.0',
    ],
  },
  {
    name: 'Prof. Suman Sarkar',
    papers: [
      'DFT Based Approach to Sense SF₆ Decomposed Gases (SO₂, SOF₂, SO₂F₂) Using Ni-Doped WS₂ Monolayer',
      'A DFT Based Approach to Sense the SF₆ Decomposed Gases Using Ni-Doped WS₂ Monolayer',
      'A DFT Based Approach for NO₂ Sensing Using Vander Wall Hetero Monolayer',
    ],
  },
  {
    name: 'Prof. Pratik De Sarkar',
    papers: [
      'Thin Film Dichalcogenide MoSe₂ Solar Cell with Optimized Design Parameters',
      'Performance Analysis of Perovskite Solar Cell in Presence and Absence of Defects',
      'Unveiling Optimal Design and Performance of Perovskite Solar Cells Through Genetic Algorithm',
      'Enhanced Efficiency of Perovskite Solar Cells with Reduced Graphene Oxide as an HTL: A Simulation Analysis Using SCAPS-1D',
      'Design and Simulation of Higher Efficiency Perovskite Heterojunction Solar Cell Based on a Comparative Study of the Cell Performances with Different Standard HTLs',
    ],
  },
  {
    name: 'Dr. Tanmay Sinha Roy',
    papers: [
      'Prediction of Responsivity for Organic Tin-Based Perovskites',
      'EEG-Driven Mental State Detection Using Residual Networks',
      'Performance Analysis of Differential Amplifiers Using Cadence with GPDK45, GPDK90, and GPDK180',
      'EMG Signal Analysis and Classification Using Residual Network',
      'Comparison of Different Machine Learning Algorithms for EEG Signal Analysis',
      'Modeling of Laboratory Scale Electrically Heater Boiler Using Artificial Neural Network',
      'EEG Based Mental State Classification Using AdaBoost Model',
    ],
  },
]

function FacultyPublications({ name, papers, defaultOpen }) {
  return (
    <Reveal>
      <details open={defaultOpen} className="group overflow-hidden rounded-2xl border border-surface-line bg-white shadow-soft">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-4">
          <span className="font-display text-[15px] font-bold text-ink-900">{name}</span>
          <span className="flex items-center gap-2 text-[12px] font-medium text-ink-400">
            {papers.length} papers
            <ChevronDown size={16} className="transition-transform duration-300 group-open:rotate-180" />
          </span>
        </summary>
        <ol className="list-decimal space-y-2 border-t border-surface-line px-10 py-5 text-[13.5px] leading-relaxed text-ink-600 marker:text-brand-blue marker:font-semibold">
          {papers.map((p, i) => (
            <li key={i} className="pl-1">{p}</li>
          ))}
        </ol>
      </details>
    </Reveal>
  )
}

export default function DepartmentalPublications() {
  return (
    <PageShell
      eyebrow="Research"
      title="Departmental Publications"
      lead="Faculty research spans power systems, power electronics, signal processing, VLSI, robotics and applied machine learning — with a growing portfolio of peer-reviewed work."
      image={img.circuit}
      crumb={crumb}
    >
      <Band>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 60} />
          ))}
        </div>
      </Band>

      <Band tone="soft">
        <SectionTitle heading="Research contributions by faculty" />
        <div className="grid gap-5 md:grid-cols-2">
          {contributions.map((c) => (
            <InfoCard key={c.title} tag={c.tag} title={c.title} text={c.text} />
          ))}
        </div>
      </Band>

      <Band>
        <SectionTitle heading="Publication list" lead="Faculty-wise list of published research. Click a name to expand." />
        <div className="space-y-4">
          {publications.map((f, i) => (
            <FacultyPublications key={f.name} name={f.name} papers={f.papers} defaultOpen={i === 0} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
