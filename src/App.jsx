import { HashRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import ContactUs from './components/pages/ContactUs'

// About
import VisionMission from './components/pages/about/VisionMission'
import MessageFromHod from './components/pages/about/MessageFromHod'
import PoPsoPeo from './components/pages/about/PoPsoPeo'
import AdvisoryBoard from './components/pages/about/AdvisoryBoard'
import AwardsAchievements from './components/pages/about/AwardsAchievements'

// Academics
import Routine from './components/pages/academics/Routine'
import Syllabus from './components/pages/academics/Syllabus'
import LaboratoryInfrastructure from './components/pages/academics/LaboratoryInfrastructure'
import FacultyProfile from './components/pages/academics/FacultyProfile'
import Mou from './components/pages/academics/Mou'
import AcademicCalendar from './components/pages/academics/AcademicCalendar'
import HolidayList from './components/pages/academics/HolidayList'

// Events
import EventsOrganised from './components/pages/events/EventsOrganised'
import ProfessionalSocieties from './components/pages/events/ProfessionalSocieties'
import IetStudentBranch from './components/pages/events/IetStudentBranch'
import IeeeStudentBranch from './components/pages/events/IeeeStudentBranch'
import BisStandardClub from './components/pages/events/BisStandardClub'
import ConferenceOrganized from './components/pages/events/ConferenceOrganized'
import FdpConducted from './components/pages/events/FdpConducted'
import Magazine from './components/pages/events/Magazine'
import Newsletter from './components/pages/events/Newsletter'

// Student Corner
import IndustrialVisit from './components/pages/student-corner/IndustrialVisit'
import Assignment from './components/pages/student-corner/Assignment'
import Placement from './components/pages/student-corner/Placement'
import HallOfFame from './components/pages/student-corner/HallOfFame'

// Research
import DepartmentalPublications from './components/pages/research/DepartmentalPublications'
import ResearchGrants from './components/pages/research/ResearchGrants'
import PatentDetails from './components/pages/research/PatentDetails'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/message-from-hod" element={<MessageFromHod />} />
          <Route path="/about/po-pso-peo" element={<PoPsoPeo />} />
          <Route path="/about/advisory-board" element={<AdvisoryBoard />} />
          <Route path="/about/awards-achievements" element={<AwardsAchievements />} />

          {/* Academics */}
          <Route path="/academics/routine" element={<Routine />} />
          <Route path="/academics/syllabus" element={<Syllabus />} />
          <Route path="/academics/laboratory-infrastructure" element={<LaboratoryInfrastructure />} />
          <Route path="/academics/faculty-profile" element={<FacultyProfile />} />
          <Route path="/academics/mou" element={<Mou />} />
          <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/academics/holiday-list" element={<HolidayList />} />

          {/* Events */}
          <Route path="/events/events-organised" element={<EventsOrganised />} />
          <Route path="/events/professional-societies" element={<ProfessionalSocieties />} />
          <Route path="/events/professional-societies/iet" element={<IetStudentBranch />} />
          <Route path="/events/professional-societies/ieee" element={<IeeeStudentBranch />} />
          <Route path="/events/professional-societies/bis" element={<BisStandardClub />} />
          <Route path="/events/conference-organized" element={<ConferenceOrganized />} />
          <Route path="/events/fdp-conducted" element={<FdpConducted />} />
          <Route path="/events/magazine" element={<Magazine />} />
          <Route path="/events/newsletter" element={<Newsletter />} />

          {/* Student Corner */}
          <Route path="/student-corner/industrial-visit" element={<IndustrialVisit />} />
          <Route path="/student-corner/assignment" element={<Assignment />} />
          <Route path="/student-corner/placement" element={<Placement />} />
          <Route path="/student-corner/hall-of-fame" element={<HallOfFame />} />

          {/* Research */}
          <Route path="/research/departmental-publications" element={<DepartmentalPublications />} />
          <Route path="/research/research-grants" element={<ResearchGrants />} />
          <Route path="/research/patent-details" element={<PatentDetails />} />

          {/* Contact */}
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Fallback → home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
