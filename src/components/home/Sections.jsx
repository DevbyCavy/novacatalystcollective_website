import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Mic } from 'lucide-react'
import Reveal, { RevealImage, easeOut } from '../Reveal'
import SectionHeading from '../SectionHeading'
import Button, { TextLink } from '../Button'
import GlowCard from '../GlowCard'
import WorkCard from '../WorkCard'
import InsightCard from '../InsightCard'
import { images } from '../../data/images'
import digitalBaeHero from '../../assets/digitalbae-hero.jpg'
import { services } from '../../data/services'
import { industries, work, philosophy } from '../../data/content'
import { insights } from '../../data/insights'
import { site } from '../../data/site'

/* ───────── Introduction ───────── */
export function Introduction() {
  return (
    <section aria-labelledby="intro-title" className="py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading id="intro-title" eyebrow="Introduction" title="Growth requires more than ambition." />
          <Reveal as="p" delay={0.1} className="mt-6 text-lg leading-relaxed text-white/80">
            It requires clarity of direction, credibility in the marketplace, meaningful relationships and
            the ability to recognise and act on opportunity.
          </Reveal>
          <Reveal as="p" delay={0.14} className="mt-4 leading-relaxed text-haze">
            Nova Catalyst Collective partners with ambitious organisations to strengthen their market
            position, elevate their influence and unlock new pathways for growth, bringing together
            strategic thinking, communications expertise, commercial insight and relationship capital.
          </Reveal>
          <Reveal delay={0.18} className="mt-9 flex flex-wrap items-center gap-6">
            <Button to="/about">About the firm</Button>
            <TextLink to="/our-work">See our work</TextLink>
          </Reveal>
        </div>
        <div className="relative lg:col-span-5 lg:col-start-8">
          <RevealImage image={images.aboutSecondary} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[4/5]" />
          {/* Purple frosted glass: the photo shows through, blurred and tinted */}
          <Reveal
            delay={0.4}
            className="absolute -bottom-6 -left-4 rounded-2xl border border-snow/20 bg-brand/65 px-5 py-4 text-snow shadow-[0_16px_40px_-16px_rgba(68,30,107,0.6)] backdrop-blur-xl backdrop-saturate-150 sm:-left-8"
          >
            <p className="font-geo text-sm text-snow/75">Our philosophy</p>
            <p className="mt-1 font-geo text-lg font-medium text-snow">{philosophy.map((p) => p.word).join(' · ')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ───────── Services: pinned scroll story (desktop) / cards (mobile) ───────── */
export function PinnedServices() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [active, setActive] = useState(0)
  const bar = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })
  useEffect(
    () =>
      scrollYProgress.on('change', (v) => {
        setActive(Math.min(services.length - 1, Math.max(0, Math.floor(v * services.length))))
      }),
    [scrollYProgress],
  )
  const s = services[active]
  const Icon = s.icon

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="relative">
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${services.length * 75}vh` }}>
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
          <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
          <div className="container-x relative grid grid-cols-12 gap-10">
            <div className="col-span-5">
              <p className="eyebrow">Our expertise</p>
              <h2 id="expertise-title" className="mt-4 text-5xl leading-[1.05]">Five disciplines. One growth partner.</h2>
              <ol className="mt-10 space-y-1.5">
                {services.map((item, i) => (
                  <li key={item.id} className={`flex items-center gap-4 font-geo text-[0.95rem] transition-colors duration-300 ${i === active ? 'text-white' : 'text-haze'}`}>
                    <span className={`h-px transition-[width,background-color] duration-500 ease-[var(--ease-out)] ${i === active ? 'w-10 bg-glow' : 'w-4 bg-white/25'}`} />
                    {item.shortTitle}
                  </li>
                ))}
              </ol>
              <div className="mt-10 h-px w-full bg-white/10">
                <motion.div className="h-px origin-left bg-glow" style={{ scaleX: bar }} />
              </div>
            </div>
            <div className="col-span-7">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(6px)', transition: { duration: 0.15 } }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="glass rounded-[28px] p-10 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-glow/15 text-glow">
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="font-geo text-7xl font-semibold text-white/[0.07]">{s.number}</span>
                  </div>
                  <h3 className="mt-8 text-4xl tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-haze">{s.summary}</p>
                  <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
                    {s.offerings.map((o) => (
                      <li key={o} className="font-geo font-medium text-white after:ml-3 after:font-normal after:text-glow after:content-['/'] last:after:content-none text-[0.95rem]">{o}</li>
                    ))}
                  </ul>
                  <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                    <p className="max-w-sm text-sm text-glow">{s.outcome}</p>
                    <TextLink to={`/services#${s.id}`}>Learn more</TextLink>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="container-x py-24 lg:hidden">
        <SectionHeading id="expertise-title-m" eyebrow="Our expertise" title="Five disciplines. One growth partner." />
        <ul className="mt-10 space-y-4">
          {services.map((item, i) => {
            const I = item.icon
            return (
              <Reveal as="li" key={item.id} delay={(i % 2) * 0.05}>
                <Link to={`/services#${item.id}`} className="press glass block rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow/15 text-glow"><I className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" /></span>
                    <span className="font-geo text-sm text-white/40">{item.number}</span>
                  </div>
                  <h3 className="mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-2 text-haze">{item.summary}</p>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ───────── Statement that lights up word by word ───────── */
function LitWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return <motion.span style={{ opacity }}>{children} </motion.span>
}

export function ScrollLitStatement() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const text = 'We connect strategy with execution, visibility with credibility and relationships with commercial opportunity.'
  const parts = text.split(' ')
  return (
    <section aria-labelledby="why-title" className="px-5 py-28 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <h2 id="why-title" className="eyebrow">Why Nova Catalysts?</h2>
        <p ref={ref} className="mt-6 font-geo text-[2rem] leading-[1.15] font-medium tracking-[-0.025em] sm:text-5xl lg:text-[3.6rem]">
          {reduce
            ? text
            : parts.map((w, i) => (
                <LitWord key={i} progress={scrollYProgress} range={[i / parts.length, (i + 1) / parts.length]}>
                  {w}
                </LitWord>
              ))}
        </p>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {philosophy.map((p, i) => (
            <Reveal key={p.word} delay={i * 0.06} className="glass rounded-2xl p-6">
              <p className="font-geo text-sm text-glow">0{i + 1}</p>
              <p className="mt-3 font-geo text-2xl font-semibold">{p.word}</p>
              <p className="mt-1 text-sm text-haze">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Industries on glow cards ───────── */
export function IndustriesGrid() {
  return (
    <section aria-labelledby="industries-title" className="pb-28 sm:pb-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="industries-title" eyebrow="Industries we serve" title="Sector knowledge. Cross-market perspective." />
          <Reveal delay={0.1}><TextLink to="/industries">All industries</TextLink></Reveal>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <Reveal as="li" key={ind.id} delay={(i % 3) * 0.06}>
                <Link to={`/industries#${ind.id}`} className="block h-full">
                  <GlowCard className="h-full">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow/15 text-glow"><Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" /></span>
                      <ArrowUpRight className="h-4 w-4 text-haze transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-[1.4rem] leading-snug">{ind.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-haze">{ind.focus.join(' · ')}</p>
                  </GlowCard>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ───────── Selected work ───────── */
export function WorkPreview() {
  return (
    <section aria-labelledby="work-title" className="pb-28 sm:pb-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="work-title" eyebrow="Selected work" title="Strategy in action." />
          <Reveal delay={0.1}><TextLink to="/our-work">All work</TextLink></Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <WorkCard key={w.id} item={w} index={i} featured={i === 0} className={i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Digital Bae band ───────── */
export function DigitalBaeBand() {
  return (
    <section aria-labelledby="db-title" className="pb-28 sm:pb-36">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-brand/10 via-night-2 to-night-2 lg:grid-cols-2">
          <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative p-8 sm:p-12 lg:p-14">
            <Reveal as="p" className="inline-flex items-center gap-2.5 font-geo text-[0.72rem] font-semibold tracking-[0.18em] text-glow uppercase">
              <Mic className="h-3.5 w-3.5" aria-hidden="true" /> Available to speak
            </Reveal>
            <Reveal as="h2" id="db-title" delay={0.05} className="mt-6 font-brand text-5xl font-black tracking-tight sm:text-6xl">
              DIGITAL <span className="text-glow">BAE</span>
            </Reveal>
            <Reveal as="p" delay={0.08} className="mt-3 font-geo text-sm text-haze">Digital intelligence. Strategic influence. Business impact.</Reveal>
            <Reveal as="p" delay={0.12} className="mt-6 font-geo text-2xl leading-snug font-medium">
              The future is digital. <span className="text-glow">The opportunity is yours.</span>
            </Reveal>
            <Reveal as="p" delay={0.16} className="mt-4 max-w-md leading-relaxed text-haze">
              The thought leadership platform of our founder, exploring digital innovation, artificial
              intelligence, marketing, business growth and leadership.
            </Reveal>
            <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-5">
              <Button to="/digital-bae">Discover Digital Bae</Button>
              <TextLink to="/digital-bae#speaking-enquiry">Invite to speak</TextLink>
              <TextLink href={site.digitalBae.url} external>{site.digitalBae.label}</TextLink>
            </Reveal>
          </div>
          {/* Live-site preview: digitalbae.online hero in a browser frame */}
          <div className="relative flex items-center px-6 pb-8 sm:px-10 sm:pb-12 lg:py-12 lg:pr-12 lg:pl-0">
            <motion.a
              href={site.digitalBae.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${site.digitalBae.label} (opens in a new tab)`}
              initial={{ opacity: 0, y: 24, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              className="group block w-full overflow-hidden rounded-xl border border-white/10 bg-[#1b1218] shadow-[0_30px_60px_-24px_rgba(29,20,40,0.45)] transition-transform duration-500 ease-[var(--ease-out)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 border-b border-snow/10 bg-[#241a22] px-4 py-2.5">
                <span aria-hidden="true" className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </span>
                <span className="flex-1 truncate rounded-md bg-snow/10 px-3 py-1 text-center font-geo text-xs text-snow/70">
                  {site.digitalBae.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-snow/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </div>
              <img
                src={digitalBaeHero}
                alt="Preview of the digitalbae.online homepage: Bold ideas. Digital influence. Meaningful impact. — with Taffy L. Gotora"
                width="1568"
                height="753"
                loading="lazy"
                decoding="async"
                className="block aspect-[1568/753] w-full object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.02]"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── Insights preview ───────── */
export function InsightsPreview() {
  return (
    <section aria-labelledby="insights-title" className="pb-10">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="insights-title" eyebrow="Insights" title="Ideas that move business forward." />
          <Reveal delay={0.1}><TextLink to="/insights">All insights</TextLink></Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 3).map((a) => (
            <InsightCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
