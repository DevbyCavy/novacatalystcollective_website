import Reveal from './Reveal'

/** Section heading: lilac eyebrow, geometric title, optional intro. */
export default function SectionHeading({ eyebrow, title, intro, align = 'left', as = 'h2', id, className = '' }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>}
      <Reveal as={as} id={id} delay={0.05} className="mt-3 text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.1} className={`mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-haze ${centered ? 'mx-auto' : ''}`}>
          {intro}
        </Reveal>
      )}
    </div>
  )
}
