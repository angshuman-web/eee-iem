import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../common/Logo'
import MegaMenu from './MegaMenu'
import SmartLink from '../common/SmartLink'
import { menu } from '../../data/menu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openIdx, setOpenIdx] = useState(null) // mobile accordion
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')
  const [activeId, setActiveId] = useState('top') // scroll-spy: currently visible section
  const { pathname } = useLocation()
  const searchRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isRoutedPage = pathname !== '/'

  // Which top-level menu item owns the current routed sub-link.
  const activeParentLabel = useMemo(() => {
    if (!isRoutedPage) return null
    for (const item of menu) {
      if (item.href === pathname) return item.label
      if (item.mega?.columns.some((col) => col.links.some((l) => l.href === pathname))) {
        return item.label
      }
    }
    return null
  }, [pathname, isRoutedPage])

  // Scroll-spy: highlight the nav item whose section is currently in view.
  useEffect(() => {
    const ids = menu
      .map((m) => m.href)
      .filter((h) => h?.startsWith('#') && h.length > 1)
      .map((h) => h.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
    // Re-observe when returning from a routed page (sections remount).
  }, [pathname])

  // Broadcast the search term to the Programs section and jump to it.
  const runSearch = (term) => {
    window.dispatchEvent(new CustomEvent('iem:search', { detail: term.trim() }))
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
  }

  const onSearchClick = () => {
    if (!searchOpen) {
      setSearchOpen(true)
      requestAnimationFrame(() => searchRef.current?.focus())
    } else if (q.trim()) {
      runSearch(q)
      setSearchOpen(false)
    } else {
      setSearchOpen(false)
    }
  }

  const onSearchKey = (e) => {
    if (e.key === 'Enter' && q.trim()) {
      runSearch(q)
      setSearchOpen(false)
    } else if (e.key === 'Escape') {
      setSearchOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-soft' : 'shadow-[0_1px_0_rgba(15,23,42,0.06)]'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Logo className="shrink-0" />

        {/* Desktop nav — centered so links never overlap the logo or actions. */}
        <nav className="hidden h-full flex-1 items-center justify-center gap-x-0.5 xl:flex">
          {menu.map((item) => {
            const isActive = isRoutedPage
              ? item.label === activeParentLabel
              : item.href?.length > 1 && item.href.slice(1) === activeId
            return (
              <div key={item.label} className="group relative flex h-full items-center">
                <SmartLink
                  href={item.href}
                  className={`relative flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-brand-blue' : 'text-ink-700 hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                  {item.mega && (
                    <ChevronDown
                      size={13}
                      className={`mt-0.5 transition-all duration-200 group-hover:rotate-180 group-hover:text-brand-blue ${
                        isActive ? 'text-brand-blue' : 'text-ink-400'
                      }`}
                    />
                  )}
                  {/* Animated underline — fills on hover, stays lit when active */}
                  <span
                    className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-brand-blue transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </SmartLink>
                {item.mega && <MegaMenu mega={item.mega} label={item.label} />}
              </div>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Working search — expands inline, submits to the Programs section */}
          <div className="flex items-center">
            <div
              className={`flex items-center overflow-hidden rounded-full bg-surface-muted transition-all duration-300 ${
                searchOpen ? 'mr-1 w-40 px-3.5 py-2 ring-1 ring-surface-line sm:w-52' : 'w-0'
              }`}
            >
              <input
                ref={searchRef}
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onSearchKey}
                placeholder="Search programs…"
                className="w-full bg-transparent text-[13px] text-ink-700 outline-none placeholder:text-ink-400"
              />
            </div>
            <button
              aria-label="Search"
              onClick={onSearchClick}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-700 transition-colors hover:bg-surface-muted hover:text-brand-blue"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Admissions CTA — restrained, premium (no flashy animation) */}
          <a
            href="https://exam.iem.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-pill transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-bluedark sm:inline-flex"
          >
            Admissions Open
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md text-ink-900 xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-surface-line bg-white xl:hidden">
          <nav className="container-x flex flex-col py-2">
            {menu.map((item, i) =>
              item.mega ? (
                <div key={item.label} className="border-b border-surface-line/70">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-ink-700"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`text-ink-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIdx === i && (
                    <div className="pb-3">
                      {item.mega.columns.map((col) => (
                        <div key={col.title} className="mb-2">
                          <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                            {col.title}
                          </p>
                          {col.links.map((link) => (
                            <SmartLink
                              key={link.label}
                              href={link.href}
                              external={link.external}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-3 py-2 text-[13px] text-ink-600 hover:bg-surface-soft hover:text-brand-blue"
                            >
                              {link.label}
                            </SmartLink>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <SmartLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-surface-line/70 py-3 text-sm font-medium text-ink-700"
                >
                  {item.label}
                </SmartLink>
              ),
            )}
            <a
              href="https://exam.iem.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Admissions Open
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
