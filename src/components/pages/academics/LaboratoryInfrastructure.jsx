import { CircuitBoard } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Academics', to: '/academics/faculty-profile' },
  { label: 'Laboratory & Infrastructure' },
]

const labs = [
  { title: 'Analog & Digital Electronics Laboratory', text: 'Amplifiers, oscillators, combinational and sequential logic design and testing.' },
  { title: 'Circuit Theory Laboratory', text: 'Verification of network theorems, transient and steady-state circuit analysis.' },
  { title: 'Digital Communication Laboratory', text: 'Modulation, coding and baseband/passband communication experiments.' },
  { title: 'Digital Signal Processing Laboratory', text: 'DSP processors and software tools for signal analysis and filtering.' },
  { title: 'Control System Laboratory', text: 'Time and frequency response, stability and controller design experiments.' },
  { title: 'Electrical Measurement Laboratory', text: 'Precision measurement of electrical quantities with modern instrumentation.' },
  { title: 'Microprocessor Laboratory', text: 'Assembly programming, interfacing and microcontroller-based systems.' },
  { title: 'Electrical Machine Laboratory', text: 'DC/AC machines, transformers and drives with load testing rigs.' },
  { title: 'Power System Laboratory', text: 'Transmission, protection and power-system simulation studies.' },
  { title: 'Power Electronics Laboratory', text: 'Converters, inverters and power semiconductor device characterisation.' },
  { title: 'VLSI Design Laboratory', text: 'Digital and analog IC design, simulation and FPGA prototyping.' },
  { title: 'Renewable Energy Laboratory', text: 'Solar PV, storage and renewable-integration experiments.' },
]

export default function LaboratoryInfrastructure() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Laboratory & Infrastructure"
      lead="Twelve well-equipped laboratories support hands-on learning across circuits, machines, power systems, electronics, control and emerging technologies."
      image={img.circuit}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((l, i) => (
            <InfoCard key={l.title} title={l.title} text={l.text} image={asset(`lab${i + 1}.png`)} Icon={CircuitBoard} premium />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
