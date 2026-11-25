import PageHero from '../components/PageHero'
import Reveal, { RevealImage } from '../components/Reveal'
import Button from '../components/Button'
import GlowCard from '../components/GlowCard'
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
        eyebrow="Industries"
        title={<>Sector knowledge. <span className="text-glow">Cross-market perspective.</span></>}
        intro="Our expertise is relevant across industries where reputation, strategic positioning, relationships and growth are critical."
      />

      <section aria-label="Industries" className="py-20 sm:py-28">
        <div className="container-x">
          <RevealImage image={images.johannesburg} sizes="(min-width: 1216px) 1150px, 100vw" className="aspect-[16/9] sm:aspect-[21/8]" />

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <Reveal as="li" key={ind.id} id={ind.id} delay={(i % 2) * 0.06}>
                  <GlowCard className="h-full" innerClassName="sm:p-10">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-glow/15 text-glow"><Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" /></span>
                      <span className="font-geo text-sm text-white/30">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="mt-10 text-[1.8rem] leading-tight sm:text-[2.1rem]">{ind.title}</h2>
                    <p className="mt-6 font-geo text-sm text-haze">How we help</p>
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                      {ind.focus.map((f) => (
                        <li key={f} className="font-geo font-medium text-white after:ml-3 after:font-normal after:text-glow after:content-['/'] last:after:content-none text-[0.95rem]">{f}</li>
                      ))}
                    </ul>
                  </GlowCard>
                </Reveal>
              )
            })}
          </ul>

          <Reveal className="glass mt-6 flex flex-col items-start justify-between gap-6 rounded-[28px] p-8 sm:flex-row sm:items-center sm:p-10">
            <p className="max-w-xl font-geo text-2xl font-medium tracking-[-0.02em]">Operating in a sector not listed here?</p>
            <Button to="/contact">Talk to us</Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
