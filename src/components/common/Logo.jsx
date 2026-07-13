import SmartLink from './SmartLink'
import iemLogo from '../../assets/images/iem_logo.png'

// Department lockup: the IEM logo mark + wordmark. `variant="light"` renders for
// dark backgrounds (footer) — the logo is turned white via a filter so it reads
// cleanly on the navy footer.
export default function Logo({ variant = 'dark', className = '' }) {
  const light = variant === 'light'
  return (
    <SmartLink href="#top" className={`flex items-center gap-3 ${className}`} aria-label="IEM EEE — home">
      <img
        src={iemLogo}
        alt="IEM logo"
        className={`h-11 w-auto shrink-0 ${light ? 'brightness-0 invert' : ''}`}
      />
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-ink-900'
          }`}
        >
          Electrical &amp; Electronics
        </span>
        <span
          className={`block text-[11px] font-medium tracking-wide ${
            light ? 'text-white/60' : 'text-ink-400'
          }`}
        >
          Engineering · IEM Kolkata
        </span>
      </span>
    </SmartLink>
  )
}
