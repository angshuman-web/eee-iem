// Centralized image sources. Images are bundled from src/assets/images so the
// site has no external CDN dependency. Swap any file for the department's own
// photo (keep the same filename) and it flows through automatically.

import heroLab from '../assets/images/heroLab.jpg'
import campus from '../assets/images/campus.jpg'
import lecture from '../assets/images/lecture.jpg'
import studentsTeam from '../assets/images/studentsTeam.jpg'
import powerGrid from '../assets/images/powerGrid.jpg'
import circuit from '../assets/images/circuit.jpg'
import server from '../assets/images/server.jpg'
import soldering from '../assets/images/soldering.jpg'
import robotics from '../assets/images/robotics.jpg'
import microscope from '../assets/images/microscope.jpg'
import research from '../assets/images/research.jpg'
import handsCircuit from '../assets/images/handsCircuit.jpg'
import motors from '../assets/images/motors.jpg'
import library from '../assets/images/library.jpg'
import convocation from '../assets/images/convocation.jpg'
import hodStock from '../assets/images/hodStock.jpg'

import facultyA from '../assets/images/facultyA.jpg'
import facultyB from '../assets/images/facultyB.jpg'
import facultyC from '../assets/images/facultyC.jpg'
import facultyD from '../assets/images/facultyD.jpg'
import facultyE from '../assets/images/facultyE.jpg'
import facultyF from '../assets/images/facultyF.jpg'

import alumni1 from '../assets/images/alumni1.jpg'
import alumni2 from '../assets/images/alumni2.jpg'
import alumni3 from '../assets/images/alumni3.jpg'

export const img = {
  heroLab,
  campus,
  lecture,
  studentsTeam,
  powerGrid,
  circuit,
  server,
  soldering,
  robotics,
  microscope,
  research,
  handsCircuit,
  motors,
  library,
  convocation,
  hod: hodStock,
}

// Faculty portraits (professional headshots).
export const facultyImg = [facultyA, facultyB, facultyC, facultyD, facultyE, facultyF]

// Alumni portraits.
export const alumniImg = [alumni1, alumni2, alumni3]
