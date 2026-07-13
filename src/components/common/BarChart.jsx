import { useEffect, useState } from 'react'

// A lightweight animated horizontal bar chart (no chart library). Bars grow
// from 0 to their value on mount — give the chart a `key` that changes with the
// dataset (e.g. the selected year) so it re-animates on every switch.
export default function BarChart({ data, unit = '', note }) {
  const [grow, setGrow] = useState(false)
  const max = Math.max(...data.map((d) => d.value), 1)

  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setGrow(true)))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="space-y-4">
      {data.map((d, i) => (
        <div key={d.label}>
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <span className="truncate text-[13.5px] font-semibold text-ink-900">{d.label}</span>
            <span className="shrink-0 text-[12.5px] font-medium text-ink-500">
              {d.value}{unit}
              {d.sub && <span className="ml-2 text-ink-400">{d.sub}</span>}
            </span>
          </div>
          <div className="h-3.5 w-full overflow-hidden rounded-full bg-surface-soft">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-sky transition-[width] duration-700 ease-out"
              style={{ width: grow ? `${(d.value / max) * 100}%` : '0%', transitionDelay: `${i * 70}ms` }}
            />
          </div>
        </div>
      ))}
      {note && <p className="pt-1 text-[12px] text-ink-400">{note}</p>}
    </div>
  )
}
