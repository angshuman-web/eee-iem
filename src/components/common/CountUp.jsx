import { useEffect, useRef, useState } from 'react'

// Counts from 0 → `value` once scrolled into view. `suffix`/`prefix` decorate
// the number (e.g. "%", "+", "₹"). Respects prefers-reduced-motion by jumping
// straight to the final value.
export default function CountUp({ value, duration = 1600, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        io.disconnect()

        if (reduce) {
          setDisplay(value)
          return
        }
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          // easeOutCubic
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(value * eased)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  const shown = decimals
    ? display.toFixed(decimals)
    : Math.round(display).toLocaleString('en-IN')

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}
