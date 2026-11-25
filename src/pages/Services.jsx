import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../components/Seo'
import { services } from '../data/services'

export default function Services() {
  useSeo({
    title: 'What We Do',
    description:
      'Strategic growth partnerships, corporate communications and reputation, digital transformation and AI, executive education, and market development.',
  })

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Strategic expertise. Commercial perspective. <span className="text-glow">Meaningful impact.</span></>}
      >
        <nav aria-label="Jump to a service" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="press rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-geo text-sm text-haze transition-colors duration-200 hover:border-white/30 hover:text-white">
              <span className="mr-1.5 text-glow">{s.number}</span>
              {s.shortTitle}
            </a>
          ))}
        </nav>
      </PageHero>

      {services.map((s, i) => {
        const Icon = s.icon
        return (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className={`py-20 sm:py-28 ${i > 0 ? 'border-t border-white/[0.07]' : ''}`}>
            <div className="container-x grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <Reveal className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-glow/15 text-glow">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="font-geo text-sm text-haze">Service {s.number}</span>
                  </Reveal>
                  <Reveal as="h2" id={`${s.id}-title`} delay={0.05} className="mt-7 text-[2.2rem] leading-[1.05] sm:text-5xl">
                    {s.title}
                  </Reveal>
                  <Reveal as="p" delay={0.1} className="mt-5 text-lg leading-relaxed text-haze">{s.summary}</Reveal>
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <Reveal className="glass rounded-[28px] p-7 sm:p-10">
                  <p className="eyebrow">{s.listLabel}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.offerings.map((o) => (
                      <li key={o} className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-glow" strokeWidth={2} aria-hidden="true" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col items-start gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-geo text-lg leading-snug text-glow">{s.outcome}</p>
                    <Button to={`/contact?interest=${encodeURIComponent(s.title)}`} size="sm" className="shrink-0">Enquire</Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      <CtaBand
        title={<>Need an <span className="text-glow">integrated approach?</span></>}
        text="Our services work best together. Tell us where you want to go and we'll shape the right combination."
        primary={{ label: 'Discuss a project', to: '/contact?type=project' }}
      />
    </>
  )
}
