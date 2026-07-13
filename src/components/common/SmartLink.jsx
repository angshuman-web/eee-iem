import { useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Navigation helpers that bridge React Router routes with in-page section
// scrolling on the home page.
//
// Link conventions used across the site:
//   '/about/vision-mission'  → an in-app route (React Router <Link>)
//   '#programs' / '#top'     → scroll to a section id on the home page
//   'https://…' / 'mailto:'  → external link (new tab)
//   '#' or empty             → inert placeholder link

// Returns a function that scrolls to a section id, first navigating to the
// home route if we're currently on a subpage (so the section exists to scroll to).
export function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()
  return useCallback(
    (id) => {
      const scroll = () => {
        if (!id || id === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for the home sections to mount before scrolling.
        requestAnimationFrame(() => requestAnimationFrame(scroll))
      } else {
        scroll()
      }
    },
    [navigate, location.pathname],
  )
}

const isExternal = (href) => /^(https?:|mailto:|tel:)/.test(href || '')

// A drop-in replacement for <a>. Picks the right behaviour from `href`:
// routes render a <Link>, section hashes scroll, external links open a new tab.
export default function SmartLink({ href, external, onClick, children, ...rest }) {
  const sectionNav = useSectionNav()

  if (external || isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  if (!href || href === '#') {
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          onClick?.(e)
        }}
        {...rest}
      >
        {children}
      </a>
    )
  }

  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault()
          onClick?.(e)
          sectionNav(href.slice(1))
        }}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} onClick={onClick} {...rest}>
      {children}
    </Link>
  )
}
