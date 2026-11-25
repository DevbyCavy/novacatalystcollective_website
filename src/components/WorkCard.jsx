import { motion } from 'framer-motion'
import GlowCard from './GlowCard'
import CountUp from './CountUp'
import { easeOut } from './Reveal'

const caseFields = [
  ['challenge', 'The challenge'],
  ['response', 'The strategic response'],
  ['contribution', 'Our contribution'],
  ['outcome', 'The outcome'],
]

/** Selected engagement on a glow card. Case-study fields render once filled in (content.js). */
export default function WorkCard({ item, index = 0, featured = false, detailed = false, className = '' }) {
  const caseStudy = caseFields.filter(([k]) => item[k])
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: easeOut }}
      className={className}
    >
      <GlowCard as="article" className="h-full">
        <div className="flex h-full flex-col">
          <span className="font-geo text-xs tracking-[0.18em] text-glow uppercase">{item.sector}</span>
          <h3 className={`mt-6 tracking-[-0.02em] ${featured ? 'text-4xl' : 'text-2xl'}`}>{item.client}</h3>
          <p className="mt-1 text-haze">{item.project}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {item.scope.map((s) => (
              <li key={s} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-white/80">{s}</li>
            ))}
          </ul>
          {detailed && caseStudy.length > 0 && (
            <dl className="mt-8 space-y-5 border-t border-white/10 pt-8">
              {caseStudy.map(([k, label]) => (
                <div key={k}>
                  <dt className="font-geo text-xs tracking-[0.14em] text-haze uppercase">{label}</dt>
                  <dd className="mt-2 leading-relaxed text-white/80">{item[k]}</dd>
                </div>
              ))}
            </dl>
          )}
          {item.highlight && (
            <div className="mt-auto pt-10">
              <CountUp value={item.highlight.value} className="font-geo text-6xl font-semibold tracking-[-0.03em] text-glow" />
              <p className="mt-1 text-sm text-haze">{item.highlight.label}</p>
            </div>
          )}
        </div>
      </GlowCard>
    </motion.div>
  )
}
