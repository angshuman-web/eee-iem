import {
  Building2, BookOpen, Users, Newspaper, Award, GraduationCap, FlaskConical,
  Briefcase, FileText,
} from 'lucide-react'
import { img } from './images'

// Primary navigation with hover mega-menus. Routed pages use React Router
// paths like `/about/…` (see App.jsx); in-page anchors use plain `#section`
// and are handled by SmartLink. Top-level parents link to their first child page.
export const menu = [
  { label: 'Home', href: '#top' },
  {
    label: 'About',
    href: '/about/vision-mission',
    mega: {
      image: img.campus,
      columns: [
        {
          title: 'About the Department',
          Icon: Building2,
          links: [
            { label: 'Vision & Mission of the Department', href: '/about/vision-mission' },
            { label: 'Message from HOD', href: '/about/message-from-hod' },
            { label: 'PO, PSO & PEO', href: '/about/po-pso-peo' },
            { label: 'Advisory Board', href: '/about/advisory-board' },
            { label: 'Awards & Achievements', href: '/about/awards-achievements' },
          ],
        },
      ],
    },
  },
  {
    label: 'Academics',
    href: '/academics/faculty-profile',
    mega: {
      wide: true,
      image: img.lecture,
      columns: [
        {
          title: 'Curriculum',
          Icon: BookOpen,
          links: [
            { label: 'Routine', href: '/academics/routine' },
            { label: 'Syllabus', href: '/academics/syllabus' },
            { label: 'Academic Calendar', href: '/academics/academic-calendar' },
            { label: 'Holiday List', href: '/academics/holiday-list' },
          ],
        },
        {
          title: 'Department',
          Icon: Users,
          links: [
            { label: 'Faculty Profile', href: '/academics/faculty-profile' },
            { label: 'Laboratory & Infrastructure', href: '/academics/laboratory-infrastructure' },
            { label: 'Memorandum of Understanding', href: '/academics/mou' },
          ],
        },
      ],
    },
  },
  {
    label: 'Events',
    href: '/events/events-organised',
    mega: {
      wide: true,
      image: img.robotics,
      columns: [
        {
          title: 'Activities',
          Icon: Newspaper,
          links: [
            { label: 'Events Organised', href: '/events/events-organised' },
            { label: 'Conferences Organized', href: '/events/conference-organized' },
            { label: 'FDP Conducted', href: '/events/fdp-conducted' },
          ],
        },
        {
          title: 'Community & Media',
          Icon: Award,
          links: [
            { label: 'Professional Societies', href: '/events/professional-societies' },
            { label: 'IET Student Branch', href: '/events/professional-societies/iet' },
            { label: 'IEEE Student Branch', href: '/events/professional-societies/ieee' },
            { label: 'BIS Standard Club of IEM', href: '/events/professional-societies/bis' },
            { label: 'Magazine', href: '/events/magazine' },
            { label: 'Newsletter', href: '/events/newsletter' },
          ],
        },
      ],
    },
  },
  {
    label: 'Student Corner',
    href: '/student-corner/placement',
    mega: {
      wide: true,
      image: img.convocation,
      columns: [
        {
          title: 'Learning',
          Icon: GraduationCap,
          links: [
            { label: 'Industrial Visit', href: '/student-corner/industrial-visit' },
            { label: 'Assignment', href: '/student-corner/assignment' },
            { label: 'Placement', href: '/student-corner/placement', highlight: true },
          ],
        },
        {
          title: 'Recognition & Resources',
          Icon: Award,
          links: [
            { label: 'Hall of Fame', href: '/student-corner/hall-of-fame' },
            { label: 'Library Catalog', href: 'https://iemmanagement-opac.l2c2.co.in/', external: true },
            { label: 'IEM COE', href: 'https://iemcoe.wixsite.com/iemcoe', external: true },
          ],
        },
      ],
    },
  },
  {
    label: 'Research',
    href: '/research/departmental-publications',
    mega: {
      align: 'right',
      image: img.circuit,
      columns: [
        {
          title: 'Research & Innovation',
          Icon: FlaskConical,
          links: [
            { label: 'Departmental Publications', href: '/research/departmental-publications' },
            { label: 'Research Grant-in-Progress', href: '/research/research-grants' },
            { label: 'Patent Details', href: '/research/patent-details' },
          ],
        },
      ],
    },
  },
  { label: 'Contact Us', href: '/contact-us' },
]

// Quick-access shortcut chips (used by any surface that wants them).
export const quickLinks = [
  { label: 'Admissions', href: 'https://exam.iem.edu.in/', external: true, Icon: GraduationCap },
  { label: 'Placements', href: '/student-corner/placement', Icon: Briefcase },
  { label: 'Faculty', href: '/academics/faculty-profile', Icon: Users },
  { label: 'Syllabus', href: '/academics/syllabus', Icon: FileText },
  { label: 'Events', href: '/events/events-organised', Icon: Newspaper },
  { label: 'Contact', href: '#contact', Icon: Building2 },
]
