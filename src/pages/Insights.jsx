import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
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
        title={<>Ideas that move <span className="text-glow">business forward.</span></>}
        intro="Perspectives on the ideas, opportunities and developments shaping business, technology and leadership. Our first pieces are in preparation."
      />

      <section aria-label="Articles" className="py-16 sm:py-24">
        <div className="container-x">
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div role="group" aria-label="Filter insights by category" className="flex w-max gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 sm:w-auto sm:flex-wrap sm:rounded-3xl">
              {['All', ...insightCategories].map((c) => {
                const active = c === category
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(c)}
                    className={`press relative rounded-full px-4 py-2 font-geo text-sm whitespace-nowrap transition-colors duration-200 ${active ? 'text-night' : 'text-haze hover:text-white'}`}
                  >
                    {active && <motion.span layoutId="insight-pill" aria-hidden="true" className="absolute inset-0 rounded-full bg-white" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />}
                    <span className="relative">{c}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-12 min-h-[18rem]" aria-live="polite">
            {filtered.length ? (
              <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filtered.map((a) => (
                    <InsightCard key={a.id} article={a} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="glass rounded-[24px] p-10 sm:p-14">
                <p className="eyebrow">{category}</p>
                <p className="mt-3 font-geo text-3xl font-semibold tracking-[-0.02em]">Perspectives on this topic are coming soon.</p>
                <p className="mt-2 text-haze">Subscribe below to hear when they&rsquo;re published.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="newsletter-title" className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="relative grid gap-10 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-brand/60 to-night-2 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative lg:col-span-6">
              <Reveal as="p" className="eyebrow">Newsletter</Reveal>
              <Reveal as="h2" id="newsletter-title" delay={0.05} className="mt-3 text-4xl sm:text-5xl">Perspectives, delivered.</Reveal>
              <Reveal as="p" delay={0.1} className="mt-3 max-w-md leading-relaxed text-haze">
                Be the first to read new insights on growth, communications, AI and African markets.
              </Reveal>
            </div>
            <Reveal delay={0.12} className="relative lg:col-span-5 lg:col-start-8">
              <NewsletterForm idPrefix="insights-newsletter" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
