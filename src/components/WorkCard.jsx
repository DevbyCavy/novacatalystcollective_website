import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GlowCard from './GlowCard'
import { easeOut } from './Reveal'

const caseFields = [
  ['challenge', 'The challenge'],
  ['response', 'The strategic response'],
  ['contribution', 'Our contribution'],
  ['outcome', 'The outcome'],
]

/**
 * Selected engagement on a glow card. Case-study fields render once filled in (content.js).
 * `to` makes the whole card a link; `showHighlight` controls the result figure (static text).
 */
export default function WorkCard({ item, index = 0, featured = false, detailed = false, to, showHighlight = true, className = '' }) {
  const caseStudy = caseFields.filter(([k]) => item[k])
  const card = (
    <GlowCard as="article" className="h-full">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="font-geo text-xs tracking-[0.18em] text-glow uppercase">{item.sector}</span>
          {to && <ArrowUpRight className="h-4 w-4 text-haze transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden="true" />}
        </div>
        <h3 className={`mt-6 tracking-[-0.02em] ${featured ? 'text-4xl' : 'text-2xl'}`}>{item.client}</h3>
        <p className="mt-1 text-haze">{item.project}</p>
        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {item.scope.map((s) => (
            <li key={s} className="font-geo font-medium text-white after:ml-3 after:font-normal after:text-glow after:content-['/'] last:after:content-none text-sm">{s}</li>
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
        {showHighlight && item.highlight && (
          <div className="mt-auto pt-10">
            <p className="font-geo text-6xl font-semibold tracking-[-0.03em] text-glow">{item.highlight.value}</p>
            <p className="mt-1 text-sm text-haze">{item.highlight.label}</p>
          </div>
        )}
      </div>
    </GlowCard>
  )
  return (
    <motion.div
      id={detailed ? item.id : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: easeOut }}
      className={className}
    >
      {to ? (
        <Link to={to} className="block h-full" aria-label={`${item.client}: ${item.project}`}>
          {card}
        </Link>
      ) : (
        card
      )}
    </motion.div>
  )
}
