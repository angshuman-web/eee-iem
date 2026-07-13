import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import { whyChoose } from '../../data/content'

export default function WhyChoose() {
  return (
    <section id="why" className="bg-surface-soft py-20 sm:py-24">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Why Choose EEE"
          title="Everything you need to build a distinguished engineering career"
          lead="From an industry-aligned curriculum to research assistantships and entrepreneurship support, the department is designed to help every student find and pursue their strength."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 70}
              className="group card card-hover p-6 transition-colors hover:!border-brand-navy2 hover:!bg-brand-navy2"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-skysoft text-brand-blue transition-all duration-400 ease-spring group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-white group-hover:text-brand-blue">
                <item.Icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-[16px] font-bold text-ink-900 transition-colors duration-300 group-hover:text-white">{item.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600 transition-colors duration-300 group-hover:text-white/80">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
