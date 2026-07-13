import { ChevronRight } from 'lucide-react'
import SmartLink from '../common/SmartLink'

// Hover dropdown "card" rendered under a nav item. Every dropdown shares the
// same layout — link columns on the left, one image on the right — so the
// menus look consistent across the navbar.
export default function MegaMenu({ mega, label }) {
  return (
    <div
      className={`absolute top-full z-50 ${mega.wide ? 'w-[760px]' : 'w-[560px]'} pt-3 transition-all duration-200 ease-out ${
        mega.force
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100'
      } ${mega.align === 'right' ? 'right-0' : 'left-0'}`}
    >
      <div className="overflow-hidden rounded-2xl border border-surface-line bg-white shadow-card ring-1 ring-black/[0.02]">
        {/* top accent */}
        <div className="h-0.5 w-full bg-brand-blue" />

        <div className="flex min-h-[210px] items-stretch gap-5 p-5">
          {/* Link columns */}
          <div className="flex min-w-0 flex-1 gap-6">
            {mega.columns.map((col) => (
              <div key={col.title} className="min-w-0 flex-1">
                <div className="mb-3 flex items-center gap-2">
                  {col.Icon && (
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-surface-soft text-brand-blue">
                      <col.Icon size={15} />
                    </span>
                  )}
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                    {col.title}
                  </h4>
                </div>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <SmartLink
                        href={link.href}
                        external={link.external}
                        className={
                          link.highlight
                            ? 'group/link flex items-center justify-between gap-2 rounded-lg border border-brand-gold/40 bg-brand-gold/[0.08] px-2.5 py-2 text-[13px] font-semibold text-brand-bluedark transition-colors hover:bg-brand-gold/[0.16]'
                            : 'group/link flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium text-ink-600 transition-colors hover:bg-surface-soft hover:text-brand-blue'
                        }
                      >
                        <span className="whitespace-nowrap">{link.label}</span>
                        <ChevronRight
                          size={13}
                          className="shrink-0 -translate-x-1 text-brand-blue opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100"
                        />
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Image */}
          {mega.image && (
            <div className="relative hidden w-[180px] shrink-0 overflow-hidden rounded-xl lg:block">
              <img
                src={mega.image}
                alt={label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
              <span className="absolute inset-x-3 bottom-3 text-[13px] font-semibold leading-tight text-white">
                {label}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
