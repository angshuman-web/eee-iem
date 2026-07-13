import { Mail, Phone, MapPin } from 'lucide-react'
import SmartLink from '../common/SmartLink'

// Portal links on the right. External destinations open in a new tab; the
// News link scrolls to the on-page news section.
const topLinks = [
  { label: 'Students', href: 'https://www.iemcrp.com/', external: true },
  { label: 'Alumni', href: 'https://alumni.iem.edu.in/', external: true },
  { label: 'Careers', href: 'https://recruitment.iem.edu.in/', external: true },
  { label: 'News & Events', href: '#news', external: false },
]

// Thin utility strip above the main navigation: contact details on the left,
// quick portal links on the right.
export default function TopBar() {
  return (
    <div className="hidden bg-brand-navy text-white md:block">
      <div className="container-x flex h-9 items-center justify-between text-[12px]">
        <div className="flex items-center gap-5">
          <a href="mailto:eee@iem.edu.in" className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-white">
            <Mail size={13} className="text-brand-gold" />
            eee@iem.edu.in
          </a>
          <span className="h-3 w-px bg-white/20" />
          <a href="tel:+913323572059" className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-white">
            <Phone size={13} className="text-brand-gold" />
            +91 33 2357 2059
          </a>
          <span className="hidden h-3 w-px bg-white/20 lg:block" />
          <span className="hidden items-center gap-1.5 text-white/70 lg:flex">
            <MapPin size={13} className="text-brand-gold" />
            Salt Lake, Kolkata 700091
          </span>
        </div>
        <nav className="flex items-center gap-5">
          {topLinks.map((item) => (
            <SmartLink
              key={item.label}
              href={item.href}
              external={item.external}
              className="group relative text-white/85 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-gold transition-transform duration-300 group-hover:scale-x-100" />
            </SmartLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
