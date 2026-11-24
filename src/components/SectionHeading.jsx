import Reveal from './Reveal'

/**
 * Editorial section heading: eyebrow with a thin accent rule,
 * a large serif title and an optional intro paragraph.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = 'light', // background tone: 'light' or 'dark'
  align = 'left',
  as = 'h2',
  id,
  className = '',
}) {
  const dark = tone === 'dark'
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Reveal
          className={`eyebrow flex items-center gap-4 ${centered ? 'justify-center' : ''} ${dark ? 'text-accent' : 'text-brand'}`}
        >
          {index && <span>{index}</span>}
          <span aria-hidden="true" className={`h-px w-10 ${dark ? 'bg-accent' : 'bg-brand'}`} />
          <span>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal
        as={as}
        id={id}
        delay={0.08}
        className={`mt-6 text-[2.5rem] leading-[1.04] sm:text-5xl lg:text-[3.75rem] ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </Reveal>
      {intro && (
        <Reveal
          as="p"
          delay={0.16}
          className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${centered ? 'mx-auto' : ''} ${dark ? 'text-white/70' : 'text-slate'}`}
        >
          {intro}
        </Reveal>
      )}
    </div>
  )
}
