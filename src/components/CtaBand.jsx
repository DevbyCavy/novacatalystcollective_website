import Reveal from './Reveal'
import Button from './Button'
import { site } from '../data/site'

/** Closing call to action used at the foot of each page. */
export default function CtaBand({
  eyebrow = "Let's start a conversation",
  title = "Let's Discuss Your Growth Ambitions.",
  text = 'We welcome conversations with organisations, business leaders, investors and partners looking to explore strategic growth opportunities.',
  primary = { label: 'Book a Consultation', to: '/contact?type=consultation' },
  secondary = { label: 'Explore a Partnership', to: '/contact?type=partnership' },
  showProfile = true,
}) {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,162,220,0.25),transparent_60%)]" />
      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal className="eyebrow flex items-center gap-4 text-accent">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            {eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.08} className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </Reveal>
          {text && (
            <Reveal as="p" delay={0.14} className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {text}
            </Reveal>
          )}
        </div>
        <Reveal delay={0.2} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col lg:items-end xl:flex-row xl:justify-end">
          <Button to={primary.to} variant="light">{primary.label}</Button>
          {secondary && (
            <Button to={secondary.to} variant="outlineLight" arrow={false}>{secondary.label}</Button>
          )}
          {showProfile && site.credentialsProfile && (
            <Button href={site.credentialsProfile} variant="outlineLight" arrow={false} download>
              Download Company Profile
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  )
}
