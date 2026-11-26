import Reveal from './Reveal'

/**
 * Section heading: geometric title + optional intro.
 * `eyebrow` is accepted for backwards compatibility but never rendered: kickers above
 * headings are banned by the design system (DESIGN.md, Impeccable craft floor).
 */
export default function SectionHeading({ eyebrow, title, intro, align = 'left', as = 'h2', id, className = '' }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <Reveal as={as} id={id} delay={0.05} className="text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
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
