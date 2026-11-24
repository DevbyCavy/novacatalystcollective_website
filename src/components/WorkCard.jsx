import Reveal from './Reveal'

const caseFields = [
  ['challenge', 'The challenge'],
  ['response', 'The strategic response'],
  ['contribution', 'Our contribution'],
  ['outcome', 'The outcome'],
]

/** A selected engagement. Case-study fields render only once they are filled in. */
export default function WorkCard({ item, index = 0, detailed = false, tone = 'dark' }) {
  const dark = tone === 'dark'
  const caseStudy = caseFields.filter(([k]) => item[k])
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 0.08}
      className={`group relative flex h-full flex-col border p-8 transition-colors duration-500 sm:p-10 ${
        dark ? 'border-white/10 hover:border-accent/50 hover:bg-white/[0.03]' : 'border-mist bg-white hover:border-brand/30'
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <p className={`eyebrow ${dark ? 'text-accent' : 'text-brand'}`}>{item.sector}</p>
        <span className={`font-display text-2xl italic ${dark ? 'text-white/25' : 'text-ink/20'}`}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className={`mt-8 text-3xl leading-tight sm:text-[2.1rem] ${dark ? 'text-white' : 'text-ink'}`}>{item.client}</h3>
      <p className={`mt-2 ${dark ? 'text-white/60' : 'text-slate'}`}>{item.project}</p>

      <ul className="mt-8 flex flex-wrap gap-2">
        {item.scope.map((s) => (
          <li key={s} className={`border px-3 py-1.5 text-xs ${dark ? 'border-white/15 text-white/75' : 'border-ink/10 text-charcoal'}`}>
            {s}
          </li>
        ))}
      </ul>

      {detailed && caseStudy.length > 0 && (
        <dl className={`mt-8 space-y-5 border-t pt-8 ${dark ? 'border-white/10' : 'border-mist'}`}>
          {caseStudy.map(([k, label]) => (
            <div key={k}>
              <dt className={`eyebrow ${dark ? 'text-white/50' : 'text-slate'}`}>{label}</dt>
              <dd className={`mt-2 leading-relaxed ${dark ? 'text-white/80' : 'text-charcoal'}`}>{item[k]}</dd>
            </div>
          ))}
        </dl>
      )}

      {item.highlight && (
        <div className={`mt-auto pt-10`}>
          <div className={`flex items-baseline gap-3 border-t pt-6 ${dark ? 'border-white/10' : 'border-mist'}`}>
            <span className={`font-display text-5xl ${dark ? 'text-accent' : 'text-brand'}`}>{item.highlight.value}</span>
            <span className={`text-sm ${dark ? 'text-white/60' : 'text-slate'}`}>{item.highlight.label}</span>
          </div>
        </div>
      )}
    </Reveal>
  )
}
