import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal, { RevealImage, easePremium } from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../components/Seo'
import { images } from '../data/images'
import { philosophy, approachSteps } from '../data/content'

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'Nova Catalyst Collective is a strategic growth and corporate advisory firm helping organisations strengthen their competitive position, build influence and unlock commercial opportunities.',
  })

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Strategy That Moves Business Forward."
        intro="Nova Catalyst Collective is a strategic growth and corporate advisory firm working with organisations seeking to strengthen their competitive position, build influence and unlock commercial opportunities."
        image={images.hero}
      />

      {/* Who we are */}
      <section aria-labelledby="who-title" className="bg-ivory py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading id="who-title" eyebrow="Who we are" title="Where strategy, reputation, relationships and opportunity work together." />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate lg:col-span-5 lg:col-start-8 lg:pt-14">
            <Reveal as="p">
              We believe that sustainable growth happens when strategy, reputation, relationships and
              opportunity work together.
            </Reveal>
            <Reveal as="p" delay={0.06}>
              Our approach is collaborative, commercially minded and grounded in an understanding of
              the business environment in which our clients operate.
            </Reveal>
            <Reveal as="p" delay={0.12}>
              We operate as a senior-led advisory business, bringing together specialist expertise
              and strategic partners to deliver the right solutions.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section aria-label="Vision and mission" className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[20rem] lg:min-h-0">
            <div className="absolute inset-0">
              <RevealImage image={images.africa} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full" />
            </div>
          </div>
          <div className="container-x space-y-16 py-20 sm:py-28 lg:max-w-none lg:px-16 xl:px-24">
            <Reveal>
              <p className="eyebrow flex items-center gap-4 text-brand">
                <span aria-hidden="true" className="h-px w-10 bg-brand" /> Our Vision
              </p>
              <p className="mt-6 font-display text-3xl leading-snug text-ink sm:text-[2.4rem]">
                To become a leading African-origin strategic advisory firm connecting businesses,
                markets and opportunities across Africa and internationally.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow flex items-center gap-4 text-brand">
                <span aria-hidden="true" className="h-px w-10 bg-brand" /> Our Mission
              </p>
              <p className="mt-6 text-xl leading-relaxed text-slate">
                To empower organisations with strategic insight, communications expertise and
                meaningful connections that translate ambition into measurable progress.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-title" className="bg-plum py-24 text-white sm:py-32">
        <div className="container-x">
          <SectionHeading id="philosophy-title" tone="dark" eyebrow="Our Philosophy" title="Clarity. Credibility. Impact." />
          <ul className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal as="li" key={p.word} delay={i * 0.1} className="bg-plum p-8 sm:p-10 md:first:pl-0">
                <span className="font-display text-xl text-accent italic">0{i + 1}</span>
                <h3 className="mt-6 text-4xl">{p.word}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
        <div className="container-x">
          <SectionHeading
            id="approach-title"
            eyebrow="Our Approach"
            title="Practical strategy, aligned with your ambition."
            intro="We listen, assess, identify opportunities and develop practical strategies aligned with our clients' ambitions."
          />
          <motion.ol
            className="relative mt-16 grid lg:mt-24 lg:grid-cols-4 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          >
            <span aria-hidden="true" className="absolute top-[7px] right-0 left-0 hidden h-px bg-ink/10 lg:block" />
            <motion.span
              aria-hidden="true"
              className="absolute top-[7px] right-0 left-0 hidden h-px origin-left bg-brand lg:block"
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
              transition={{ duration: 1.8, ease: easePremium }}
            />
            <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-ink/10 lg:hidden" />
            <motion.span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-brand lg:hidden"
              variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }}
              transition={{ duration: 1.8, ease: easePremium }}
            />
            {approachSteps.map((step, i) => (
              <motion.li
                key={step.number}
                className="relative pb-12 pl-12 last:pb-0 lg:pb-0 lg:pl-0"
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.18, ease: easePremium }}
              >
                <span aria-hidden="true" className="absolute top-0 left-0 flex h-[15px] w-[15px] items-center justify-center border border-brand bg-ivory">
                  <span className="h-[5px] w-[5px] bg-brand" />
                </span>
                <div className="lg:pt-12">
                  <span className="font-display text-5xl leading-none text-brand italic">{step.number}</span>
                  <h3 className="mt-5 font-sans text-sm font-semibold tracking-[0.22em] text-ink uppercase">{step.title}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-slate">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Founder */}
      <section aria-labelledby="founder-title" className="bg-white py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading id="founder-title" eyebrow="Leadership" title="Senior-led by design." />
          </div>
          <Reveal delay={0.1} className="border-l border-brand pl-8 lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-slate">
              Nova Catalyst Collective was founded by <strong className="font-semibold text-ink">Taffy L. Gotora</strong>,
              a strategic marketing and communications professional, speaker and business leader. Her
              work centres on helping organisations and individuals understand the power of digital
              innovation, strategic communication and purposeful brand positioning.
            </p>
            <Link to="/digital-bae" className="group mt-8 inline-flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.16em] text-brand uppercase">
              Discover Digital Bae
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
