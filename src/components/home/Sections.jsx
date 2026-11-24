import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal, { RevealImage, easePremium } from '../Reveal'
import SectionHeading from '../SectionHeading'
import Button from '../Button'
import WorkCard from '../WorkCard'
import InsightCard from '../InsightCard'
import { LogoMark } from '../Logo'
import { images } from '../../data/images'
import { services } from '../../data/services'
import { industries, work } from '../../data/content'
import { insights } from '../../data/insights'

/* ---------------- Introduction ---------------- */
export function Introduction() {
  return (
    <section id="introduction" aria-labelledby="intro-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="relative order-2 lg:order-1 lg:col-span-5">
          <div className="relative mr-10 sm:mr-24 lg:mr-0">
            <RevealImage image={images.aboutPrimary} sizes="(min-width: 1024px) 34vw, 80vw" className="aspect-[4/5]" />
            <span aria-hidden="true" className="absolute -top-4 -left-4 h-24 w-24 border-t border-l border-brand" />
          </div>
          <div className="relative -mt-24 ml-auto w-[58%] sm:-mt-40 lg:-mr-16 lg:w-[62%]">
            <RevealImage
              image={images.aboutSecondary}
              sizes="(min-width: 1024px) 22vw, 55vw"
              className="aspect-[4/3] ring-[10px] ring-ivory"
              delay={0.2}
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7 lg:pt-8">
          <SectionHeading
            id="intro-title"
            eyebrow="Introduction"
            title="Growth requires more than ambition."
          />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate">
            <Reveal as="p">
              It requires clarity of direction, credibility in the marketplace, meaningful
              relationships and the ability to recognise and act on opportunity.
            </Reveal>
            <Reveal as="p" delay={0.06}>
              Nova Catalyst Collective partners with ambitious organisations to strengthen their
              market position, elevate their influence and unlock new pathways for growth.
            </Reveal>
            <Reveal as="p" delay={0.12}>
              We bring together strategic thinking, communications expertise, commercial insight and
              relationship capital to help businesses navigate complexity and move forward with
              purpose.
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button to="/about" variant="brand">About Us</Button>
            <Button to="/contact" variant="outlineDark" arrow={false}>Start a Conversation</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Our expertise ---------------- */
export function Expertise() {
  return (
    <section aria-labelledby="expertise-title" className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="expertise-title"
            eyebrow="Our Expertise"
            title="Strategic Expertise. Commercial Perspective."
            className="lg:col-span-7"
          />
          <Reveal as="p" delay={0.15} className="text-lg leading-relaxed text-slate lg:col-span-4 lg:col-start-9">
            Five integrated disciplines that help organisations grow, lead and compete.
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-mist lg:mt-20">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal as="li" key={s.id} delay={i * 0.05} className="border-b border-mist">
                <Link
                  to={`/services#${s.id}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-7 sm:gap-8 sm:py-9 lg:grid-cols-[5rem_1.1fr_1.4fr_auto]"
                >
                  <span className="font-display text-3xl text-brand/40 italic transition-colors duration-500 group-hover:text-brand sm:text-4xl">
                    {s.number}
                  </span>
                  <h3 className="text-2xl leading-tight text-ink transition-transform duration-500 group-hover:translate-x-1 sm:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="hidden leading-relaxed text-slate lg:block">{s.summary}</p>
                  <span className="flex h-12 w-12 items-center justify-center border border-ink/10 text-brand transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5 group-hover:hidden" strokeWidth={1.4} aria-hidden="true" />
                    <ArrowUpRight className="hidden h-5 w-5 group-hover:block" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ---------------- Why Nova Catalysts ---------------- */
const whyLines = [
  { a: 'Strategy', b: 'execution' },
  { a: 'Visibility', b: 'credibility' },
  { a: 'Relationships', b: 'commercial opportunity' },
]

export function WhyNova() {
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden bg-plum py-28 text-white sm:py-36 lg:py-44">
      <LogoMark className="pointer-events-none absolute -right-40 -bottom-40 h-[40rem] w-[40rem] opacity-[0.04]" arc="#fff" mark="#fff" />
      <div className="container-x relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal className="eyebrow flex items-center gap-4 text-accent">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            Why Nova Catalysts?
          </Reveal>
          <Reveal as="h2" id="why-title" delay={0.08} className="mt-6 text-4xl leading-tight sm:text-5xl">
            We connect what others keep apart.
          </Reveal>
          <Reveal delay={0.16} className="mt-10">
            <Button to="/contact" variant="light">Let&rsquo;s Discuss Your Growth Ambitions</Button>
          </Reveal>
        </div>
        <ul className="lg:col-span-7 lg:col-start-6">
          {whyLines.map((l, i) => (
            <li key={l.a} className="overflow-hidden border-b border-white/10 py-6 first:pt-0 sm:py-8">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 1, delay: i * 0.12, ease: easePremium }}
                className="font-display text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
              >
                {l.a} <span className="text-white/40 italic">with</span>{' '}
                <span className="text-accent italic">{l.b}.</span>
              </motion.p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------- Industries preview ---------------- */
export function IndustriesPreview() {
  return (
    <section aria-labelledby="industries-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="industries-title"
            eyebrow="Industries We Serve"
            title="Sector Knowledge. Cross-Market Perspective."
          />
          <Reveal delay={0.1}>
            <Button to="/industries" variant="outlineDark">All Industries</Button>
          </Reveal>
        </div>
        <ul className="mt-16 grid gap-px border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <Reveal as="li" key={ind.id} delay={(i % 3) * 0.06} className="bg-ivory">
                <Link to={`/industries#${ind.id}`} className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-white sm:p-10">
                  <Icon className="h-7 w-7 text-brand" strokeWidth={1.2} aria-hidden="true" />
                  <h3 className="mt-8 text-2xl leading-tight text-ink">{ind.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{ind.focus.join(' · ')}</p>
                  <span className="mt-auto flex items-center gap-2 pt-8 text-[0.72rem] font-semibold tracking-[0.16em] text-brand uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ---------------- Selected work ---------------- */
export function WorkPreview() {
  return (
    <section aria-labelledby="work-title" className="bg-ink py-24 text-white sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="work-title" tone="dark" eyebrow="Our Work" title="Strategy in Action." />
          <Reveal delay={0.1}>
            <Button to="/our-work" variant="outlineLight">View Our Work</Button>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.slice(0, 3).map((w, i) => (
            <WorkCard key={w.id} item={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Digital Bae teaser ---------------- */
export function DigitalBaeTeaser() {
  return (
    <section aria-labelledby="db-title" className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-[40rem]">
          <div className="absolute inset-0">
            <RevealImage image={images.speakingStage} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full" />
          </div>
        </div>
        <div className="container-x flex flex-col justify-center py-20 sm:py-28 lg:max-w-none lg:px-16 xl:px-24">
          <Reveal className="eyebrow flex items-center gap-4 text-brand">
            <span aria-hidden="true" className="h-px w-10 bg-brand" />
            Thought leadership platform
          </Reveal>
          <Reveal as="h2" id="db-title" delay={0.06} className="mt-6 font-brand text-5xl font-extrabold tracking-tight text-brand sm:text-6xl">
            DIGITAL BAE
          </Reveal>
          <Reveal as="p" delay={0.1} className="eyebrow mt-4 text-slate">
            Digital intelligence. Strategic influence. Business impact.
          </Reveal>
          <Reveal as="p" delay={0.14} className="mt-8 font-display text-3xl leading-snug text-ink">
            The Future Is Digital. The Opportunity Is Yours.
          </Reveal>
          <Reveal as="p" delay={0.18} className="mt-5 max-w-lg leading-relaxed text-slate">
            The personal brand platform of our founder, exploring the intersection of digital
            innovation, artificial intelligence, marketing, business growth and leadership.
          </Reveal>
          <Reveal delay={0.22} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/digital-bae" variant="brand">Discover Digital Bae</Button>
            <Button to="/digital-bae#speaking-enquiry" variant="outlineDark" arrow={false}>Invite to Speak</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Insights preview ---------------- */
export function InsightsPreview() {
  return (
    <section aria-labelledby="insights-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="insights-title" eyebrow="Insights" title="Ideas That Move Business Forward." />
          <Reveal delay={0.1}>
            <Button to="/insights" variant="outlineDark">All Insights</Button>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 3).map((a) => (
            <InsightCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
