import { Quote } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import { testimonials } from '../../data/content'
import { asset } from '../../data/assets'

// Student / recruiter faces: drop testimonial1.png … in src/assets/images to
// use department photos; otherwise the curated portrait fallback is shown.
export default function Testimonials() {
  return (
    <section id="voices" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Voices"
          title="What our students & partners say"
          lead="Hear from the people who learn, teach and recruit here — in their own words."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="card card-hover flex flex-col p-7">
              <Quote size={28} className="text-brand-blue/20" />
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-600">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3.5 border-t border-surface-line pt-5">
                <img
                  src={asset(`testimonial${i + 1}.png`) || t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-full object-cover object-top ring-4 ring-brand-skysoft"
                />
                <div className="min-w-0">
                  <p className="font-display text-[14.5px] font-bold leading-tight text-ink-900">{t.name}</p>
                  <p className="mt-0.5 text-[12.5px] font-medium text-brand-blue">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
