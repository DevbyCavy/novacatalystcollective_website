import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Reveal, { easePremium } from '../components/Reveal'
import InsightCard from '../components/InsightCard'
import NewsletterForm from '../components/NewsletterForm'
import { useSeo } from '../components/Seo'
import { insights, insightCategories } from '../data/insights'

export default function Insights() {
  useSeo({
    title: 'Insights',
    description:
      'Ideas shaping business, technology and leadership: growth, AI and the digital economy, strategic communications, leadership and African markets.',
  })
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? insights : insights.filter((a) => a.category === category)

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas That Move Business Forward."
        intro="Our insights platform explores the ideas, opportunities and developments shaping business, technology and leadership. Our first perspectives are in preparation."
      />

      <section aria-label="Articles" className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div role="group" aria-label="Filter insights by category" className="flex w-max gap-1 border-b border-mist sm:w-auto sm:flex-wrap">
              {['All', ...insightCategories].map((c) => {
                const active = c === category
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(c)}
                    className={`relative px-4 py-3 text-[0.8rem] font-medium whitespace-nowrap transition-colors ${active ? 'text-ink' : 'text-slate hover:text-ink'}`}
                  >
                    {c}
                    {active && (
                      <motion.span layoutId="insight-tab" aria-hidden="true" className="absolute inset-x-0 -bottom-px h-[2px] bg-brand" transition={{ duration: 0.5, ease: easePremium }} />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-14 min-h-[18rem]" aria-live="polite">
            {filtered.length ? (
              <motion.div layout className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filtered.map((a) => (
                    <InsightCard key={a.id} article={a} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="flex flex-col items-start gap-3 border border-mist bg-ivory p-10 sm:p-14">
                <p className="eyebrow text-brand">{category}</p>
                <p className="font-display text-3xl text-ink">Perspectives on this topic are forthcoming.</p>
                <p className="text-slate">Subscribe below to hear when they&rsquo;re published.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="newsletter-title" className="bg-plum py-20 text-white sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal className="eyebrow flex items-center gap-4 text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent" /> Newsletter
            </Reveal>
            <Reveal as="h2" id="newsletter-title" delay={0.06} className="mt-6 text-4xl leading-tight sm:text-5xl">
              Perspectives, delivered.
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-4 max-w-md leading-relaxed text-white/70">
              Be the first to read new insights on growth, communications, AI and African markets.
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <NewsletterForm idPrefix="insights-newsletter" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
