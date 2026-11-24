import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../components/Seo'
import { industries } from '../data/content'
import { images } from '../data/images'

export default function Industries() {
  useSeo({
    title: 'Industries We Serve',
    description:
      'Strategic advisory across financial services, aviation and tourism, energy, mining, agribusiness and technology — wherever reputation, positioning and relationships drive growth.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Sector Knowledge. Cross-Market Perspective."
        intro="Our expertise is relevant across industries where reputation, strategic positioning, relationships and growth are critical."
        image={images.johannesburg}
      />

      <section aria-label="Industries" className="bg-ivory py-20 sm:py-28">
        <div className="container-x">
          <ul className="grid gap-px border border-mist bg-mist md:grid-cols-2">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <Reveal as="li" key={ind.id} id={ind.id} delay={(i % 2) * 0.08} className="group relative bg-ivory p-8 transition-colors duration-500 hover:bg-white sm:p-12">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-700 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center border border-brand/20 text-brand">
                      <Icon className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" />
                    </span>
                    <span className="font-display text-3xl text-ink/15 italic">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="mt-10 text-3xl leading-tight text-ink sm:text-4xl">{ind.title}</h2>
                  <p className="eyebrow mt-8 text-brand">How we help</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {ind.focus.map((f) => (
                      <li key={f} className="border border-ink/10 bg-white px-3 py-1.5 text-sm text-charcoal">{f}</li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </ul>

          <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-mist pt-12 sm:flex-row sm:items-center">
            <p className="max-w-xl font-display text-3xl leading-snug text-ink">Operating in a sector not listed here?</p>
            <Button to="/contact" variant="brand">Talk to Us</Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
