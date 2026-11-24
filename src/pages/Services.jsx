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
        eyebrow="What We Do"
        title="Strategic Expertise. Commercial Perspective. Meaningful Impact."
      >
        <nav aria-label="Services" className="mt-12 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="border border-white/15 px-4 py-2.5 text-xs tracking-[0.08em] text-white/75 transition-colors hover:border-accent hover:text-accent"
            >
              <span className="mr-2 text-accent">{s.number}</span>
              {s.shortTitle}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="bg-ivory">
        {services.map((s, i) => {
          const Icon = s.icon
          const alt = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className={`border-b border-mist py-20 sm:py-28 ${alt ? 'bg-white' : 'bg-ivory'}`}
            >
              <div className="container-x grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Reveal className="flex items-center gap-5">
                    <span className="font-display text-6xl leading-none text-brand/30 italic sm:text-7xl">{s.number}</span>
                    <span className="flex h-14 w-14 items-center justify-center border border-brand/20 text-brand">
                      <Icon className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" />
                    </span>
                  </Reveal>
                  <Reveal as="h2" id={`${s.id}-title`} delay={0.06} className="mt-8 text-4xl leading-[1.05] text-ink sm:text-5xl">
                    {s.title}
                  </Reveal>
                  <Reveal as="p" delay={0.1} className="mt-6 text-lg leading-relaxed text-slate">
                    {s.summary}
                  </Reveal>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
                  <Reveal as="p" className="eyebrow text-brand">{s.listLabel}</Reveal>
                  <ul className="mt-6 border-t border-ink/10">
                    {s.offerings.map((o, j) => (
                      <Reveal as="li" key={o} delay={j * 0.04} className="flex items-center gap-4 border-b border-ink/10 py-4 text-charcoal">
                        <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} aria-hidden="true" />
                        {o}
                      </Reveal>
                    ))}
                  </ul>
                  <Reveal className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-display text-2xl leading-snug text-ink italic">{s.outcome}</p>
                    <Button to={`/contact?interest=${encodeURIComponent(s.title)}`} variant="outlineDark" className="shrink-0">
                      Enquire
                    </Button>
                  </Reveal>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <CtaBand
        title="Need an integrated approach across disciplines?"
        text="Our services work best together. Tell us where you want to go and we'll shape the right combination."
        primary={{ label: 'Discuss a Project', to: '/contact?type=project' }}
      />
    </>
  )
}
