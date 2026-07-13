import { Camera } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import { gallery } from '../../data/content'
import { asset } from '../../data/assets'

// Bento spans cycled across the tiles. `grid-flow-dense` backfills the gaps so
// the mosaic stays tidy regardless of how many photos are present. Drop
// gallery1.png … in src/assets/images to override the default photography.
const bento = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-2',
  '',
  '',
  'sm:row-span-2',
  'sm:col-span-2',
  '',
  'sm:col-span-2',
  '',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-soft py-20 sm:py-24">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Gallery"
          title="Life in the department, in pictures"
          lead="Laboratories, events, industrial visits and student activities — a glimpse of the everyday energy on campus."
        />

        <div className="mt-14 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[175px] sm:grid-cols-4 sm:gap-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.label + i}
              delay={(i % 4) * 60}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${bento[i % bento.length]}`}
            >
              <img
                src={asset(`gallery${i + 1}.png`) || g.src}
                alt={g.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy2/80 via-brand-navy2/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-[13px] font-semibold text-white">
                  <Camera size={14} className="text-brand-sky" />
                  {g.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
