import { CalendarDays } from 'lucide-react'
import PageShell, { Band, InfoCard } from '../PageShell'
import { img } from '../../../data/images'
import { asset } from '../../../data/assets'

const crumb = [
  { label: 'Events', to: '/events/events-organised' },
  { label: 'Events Organised' },
]

const events = [
  { tag: 'Workshop', date: '29–30 Jun 2026', title: 'PC Building & Hardware Integration', text: 'Hands-on dismantling and reassembly of CPUs, followed by PC fault identification and troubleshooting; certificates awarded by Prof. Dr. Rajat Shubhra Pal.' },
  { tag: 'Distinguished Lecture', date: '18 Mar 2026', title: 'ARM Cortex MCU Deep Dive with Live Demos', text: 'Online session by Mr. Turjasu Pyne, Sr. Embedded Architect, on ARM Cortex microcontrollers — bridging theory and practice for EE/EEE students.' },
  { tag: 'Workshop', date: '10–12 Mar 2026', title: 'Soft Computing on Power Systems', text: 'Three-day workshop exposing students to advanced soft-computing techniques and their power-system applications, fostering research-oriented thinking.' },
  { tag: 'Workshop', date: '8–12 Dec 2025', title: 'VLSI Design & FPGA Training', text: 'With IEEE SSCS IEM SBC and MSME Tool Room, Kolkata — logic-gate design, IC conversion, MOSFET applications and an industrial facility tour.' },
  { tag: 'Hackathon', date: '17 Sep 2025', title: 'Online Coding Hackathon', text: 'A HackerRank-based coding contest focused on placement preparation and skill-building.' },
  { tag: 'Workshop', date: '8–10 Sep 2025', title: 'Future Mobility: EV Powertrain, ADAS & Grid', text: 'MATLAB-Simulink workshop on EV powertrains, battery management, autonomous-driving modules and grid integration.' },
  { tag: 'Workshop', date: '28–30 Jul 2025', title: 'Robo Spark: Engineering the Future', text: 'With MSME Tool Room, Kolkata — Arduino programming, sensor/actuator interfacing and Bluetooth-controlled robotics.' },
  { tag: 'Workshop', date: '26–27 Aug 2023', title: 'MATLAB-Based Modern Control & Signal Processing', text: 'Featuring Dr. Jayati Dey (NIT Durgapur) with Dr. J. N. Bera and Dr. Susanta Ray on the role of control systems across industry.' },
]

export default function EventsOrganised() {
  return (
    <PageShell
      eyebrow="Events"
      title="Events Organised"
      lead="Workshops, distinguished lectures, hackathons and hands-on training run by the department through the year."
      image={img.robotics}
      crumb={crumb}
    >
      <Band>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <InfoCard key={e.title} tag={e.tag} date={e.date} title={e.title} text={e.text} image={asset(`event${i + 1}.png`)} Icon={CalendarDays} />
          ))}
        </div>
      </Band>
    </PageShell>
  )
}
