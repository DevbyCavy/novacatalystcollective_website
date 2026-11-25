import Reveal from './Reveal'
import Button from './Button'
import { site } from '../data/site'

/** Closing call to action: centred headline over a low purple glow. */
export default function CtaBand({
  title = (
    <>
      Let&rsquo;s discuss your <span className="text-glow">growth ambitions.</span>
    </>
  ),
  text = 'We welcome conversations with organisations, business leaders, investors and partners looking to explore strategic growth opportunities.',
  primary = { label: 'Book a consultation', to: '/contact?type=consultation' },
  secondary = { label: 'Explore a partnership', to: '/contact?type=partnership' },
}) {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[58rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand/55 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal as="h2" className="text-[2.5rem] leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          {title}
        </Reveal>
        {text && (
          <Reveal as="p" delay={0.08} className="mx-auto mt-6 max-w-xl leading-relaxed text-haze">
            {text}
          </Reveal>
        )}
        <Reveal delay={0.14} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to={primary.to}>{primary.label}</Button>
          {secondary && <Button to={secondary.to} variant="ghost" arrow={false}>{secondary.label}</Button>}
          {site.credentialsProfile && (
            <Button href={site.credentialsProfile} variant="ghost" arrow={false} download>Company profile</Button>
          )}
        </Reveal>
      </div>
    </section>
  )
}
