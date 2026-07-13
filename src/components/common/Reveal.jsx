import { useEffect, useRef, useState } from 'react'

// Lightweight scroll-into-view reveal. Wraps children, adds `.is-visible`
// once the element enters the viewport (one-shot). Honors reduced-motion via
// the CSS in index.css. `delay` staggers grids of cards.
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
