import Reveal from './Reveal'

// Consistent editorial section header: eyebrow → title → lead paragraph.
// `align="center"` centers and constrains the lead width.
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  light = false,
  className = '',
}) {
  const centered = align === 'center'
  return (
    <Reveal
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? '!text-brand-sky' : ''} ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-extrabold leading-[1.12] sm:text-[34px] ${
          light ? '!text-white' : ''
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-[15px] leading-relaxed ${light ? 'text-white/70' : 'text-ink-600'}`}>
          {lead}
        </p>
      )}
    </Reveal>
  )
}
