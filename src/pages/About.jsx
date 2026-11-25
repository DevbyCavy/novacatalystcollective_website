import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal, { RevealImage, easeOut, easeInOut } from '../components/Reveal'
import { TextLink } from '../components/Button'
import GlowCard from '../components/GlowCard'
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
        eyebrow="About us"
        title={<>Strategy that moves <span className="text-glow">business forward.</span></>}
        intro="A strategic growth and corporate advisory firm working with organisations seeking to strengthen their competitive position, build influence and unlock commercial opportunities."
      />

      {/* Who we are */}
      <section aria-labelledby="who-title" className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading id="who-title" eyebrow="Who we are" title="Where strategy, reputation and opportunity work together." />
            <Reveal as="p" delay={0.1} className="mt-6 text-lg leading-relaxed text-white/80">
              We believe that sustainable growth happens when strategy, reputation, relationships and
              opportunity work together.
            </Reveal>
            <Reveal as="p" delay={0.14} className="mt-4 leading-relaxed text-haze">
              Our approach is collaborative, commercially minded and grounded in an understanding of the
              business environment in which our clients operate. We operate as a senior-led advisory
              business, bringing together specialist expertise and strategic partners to deliver the right
              solutions.
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <RevealImage image={images.aboutPrimary} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[4/5]" imgClassName="opacity-85" />
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section aria-label="Vision and mission" className="pb-24 sm:pb-32">
        <div className="container-x grid gap-4 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-brand/70 to-night-2 p-8 sm:p-12">
            <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
            <p className="eyebrow relative">Our vision</p>
            <p className="relative mt-6 font-geo text-[1.7rem] leading-snug font-medium tracking-[-0.02em] sm:text-[2.1rem]">
              To become a leading African-origin strategic advisory firm connecting businesses, markets and
              opportunities across Africa and internationally.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="glass rounded-[28px] p-8 sm:p-12">
            <p className="eyebrow">Our mission</p>
            <p className="mt-6 font-geo text-[1.5rem] leading-snug font-medium tracking-[-0.02em] sm:text-[1.8rem]">
              To empower organisations with strategic insight, communications expertise and meaningful
              connections that translate ambition into measurable progress.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-title" className="pb-24 sm:pb-32">
        <div className="container-x">
          <SectionHeading id="philosophy-title" eyebrow="Our philosophy" title="Clarity. Credibility. Impact." />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal as="li" key={p.word} delay={i * 0.06}>
                <GlowCard className="h-full">
                  <span className="font-geo text-sm text-glow">0{i + 1}</span>
                  <h3 className="mt-10 text-4xl">{p.word}</h3>
                  <p className="mt-3 leading-relaxed text-haze">{p.text}</p>
                </GlowCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach timeline */}
      <section aria-labelledby="approach-title" className="relative overflow-hidden border-y border-white/[0.07] bg-night-2 py-24 sm:py-32">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-x relative">
          <SectionHeading
            id="approach-title"
            eyebrow="Our approach"
            title="Practical strategy, aligned with your ambition."
            intro="We listen, assess, identify opportunities and develop practical strategies aligned with our clients' ambitions."
          />
          <motion.ol className="relative mt-16 grid lg:mt-20 lg:grid-cols-4 lg:gap-10" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -15% 0px' }}>
            <span aria-hidden="true" className="absolute top-[7px] right-0 left-0 hidden h-px bg-white/10 lg:block" />
            <motion.span aria-hidden="true" className="absolute top-[7px] right-0 left-0 hidden h-px origin-left bg-glow lg:block" variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} transition={{ duration: 1.6, ease: easeInOut }} />
            <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 lg:hidden" />
            <motion.span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-glow lg:hidden" variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} transition={{ duration: 1.6, ease: easeInOut }} />
            {approachSteps.map((step, i) => (
              <motion.li
                key={step.number}
                className="relative pb-12 pl-12 last:pb-0 lg:pb-0 lg:pl-0"
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.16, ease: easeOut }}
              >
                <span aria-hidden="true" className="absolute top-0 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-glow bg-night-2 shadow-[0_0_16px_rgba(185,156,240,0.6)]">
                  <span className="h-[5px] w-[5px] rounded-full bg-glow" />
                </span>
                <div className="lg:pt-12">
                  <span className="font-geo text-5xl font-semibold text-white/15">{step.number}</span>
                  <h3 className="mt-4 text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-haze">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="founder-title" className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionHeading id="founder-title" eyebrow="Leadership" title="Senior-led by design." />
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-haze">
              Nova Catalyst Collective was founded by <strong className="font-semibold text-white">Taffy L. Gotora</strong>, a
              strategic marketing and communications professional, speaker and business leader. Her work
              centres on helping organisations and individuals understand the power of digital innovation,
              strategic communication and purposeful brand positioning.
            </p>
            <TextLink to="/digital-bae" className="mt-6">Discover Digital Bae</TextLink>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
