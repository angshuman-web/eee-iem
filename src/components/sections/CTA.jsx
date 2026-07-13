import { ArrowRight, Phone } from 'lucide-react'
import Reveal from '../common/Reveal'
import SmartLink from '../common/SmartLink'
import { img } from '../../data/images'

export default function CTA() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl">
          <img src={img.campus} alt="IEM campus" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy2/95 via-brand-navy/85 to-brand-blue/70" />
          <div className="relative px-8 py-14 text-center sm:px-16 sm:py-20">
            <p className="eyebrow justify-center !text-brand-sky">
              <span className="h-px w-6 bg-current opacity-60" />
              Join the Department of EEE
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-[40px]">
              Ready to build the future of electrical engineering?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">
              Admissions for 2026 are now open. Explore our programmes, visit our laboratories, and
              take the first step towards a distinguished engineering career.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="https://exam.iem.edu.in/" target="_blank" rel="noopener noreferrer" className="group btn-primary !bg-white !text-brand-blue hover:!bg-white/90">
                Apply for Admission
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <SmartLink href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10">
                <Phone size={16} />
                Talk to the Department
              </SmartLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
