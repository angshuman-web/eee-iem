import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'

// Floating "back to top" button, shown once the user scrolls down.
function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand-blue text-white shadow-pill transition-all duration-300 hover:bg-brand-bluedark ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}

// App chrome shared by every route: utility bar, primary nav, footer and the
// back-to-top button, with the routed page rendered into <main> via <Outlet>.
export default function Layout() {
  const { pathname } = useLocation()

  // Jump to the top of the page whenever the route changes.
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
