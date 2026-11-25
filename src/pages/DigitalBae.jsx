import { motion } from 'framer-motion'
import { Mic, Sparkles } from 'lucide-react'
import Reveal, { RevealImage, easeOut } from '../components/Reveal'
import Button, { TextLink } from '../components/Button'
import GlowCard from '../components/GlowCard'
import EnquiryForm from '../components/EnquiryForm'
import { useSeo } from '../components/Seo'
import { images } from '../data/images'
import { digitalBae } from '../data/content'
import { site } from '../data/site'

const speakingFields = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'organisation', label: 'Organisation', type: 'text', required: true, autoComplete: 'organization' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Telephone number', type: 'tel', autoComplete: 'tel' },
  { name: 'eventName', label: 'Event name', type: 'text', required: true },
  { name: 'eventDate', label: 'Event date', type: 'date' },
  { name: 'format', label: 'Engagement type', type: 'select', required: true, options: [...digitalBae.formats, 'Media contribution', 'Other'] },
  { name: 'location', label: 'Location / virtual', type: 'text' },
  { name: 'message', label: 'Tell us about the event and audience', type: 'textarea', required: true, minLength: 20 },
]

export default function DigitalBae() {
  useSeo({
    title: 'Digital Bae',
    description:
      'Digital Bae is the thought leadership and personal brand platform of Taffy L. Gotora, exploring digital innovation, AI, marketing, business growth and leadership. Invite Digital Bae to speak.',
  })

  return (
    <>
      {/* Sub-brand hero */}
      <section aria-labelledby="db-hero-title" className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
        <img src={images.speakingAudience.src} srcSet={images.speakingAudience.srcSet} sizes="100vw" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-brand/15" />
        <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }} className="inline-flex items-center gap-2.5 font-geo text-[0.72rem] font-semibold tracking-[0.18em] text-glow uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-glow" /><Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Personal brand platform
          </motion.p>
          <h1 id="db-hero-title" className="mt-6 overflow-hidden pb-2 font-brand text-[3.6rem] leading-[0.92] font-black tracking-tight sm:text-8xl lg:text-[9.5rem]">
            <motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: easeOut }}>
              DIGITAL <span className="text-glow">BAE</span>
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: easeOut }} className="mt-5 font-geo text-haze">
            Digital intelligence. Strategic influence. Business impact.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: easeOut }} className="mt-12 grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-12 lg:items-end">
            <p className="font-geo text-3xl leading-tight font-medium tracking-[-0.03em] sm:text-[2.6rem] lg:col-span-7">
              The future is digital. <span className="text-glow">The opportunity is yours.</span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button href="#speaking-enquiry">Invite Digital Bae to speak</Button>
              <Button href={site.digitalBae.url} target="_blank" rel="noopener noreferrer" variant="ghost" arrow={false}>
                Visit {site.digitalBae.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The platform */}
      <section aria-labelledby="db-about-title" className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" className="eyebrow">The platform</Reveal>
            <Reveal as="h2" id="db-about-title" delay={0.05} className="mt-3 font-brand text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              Think differently. Adapt confidently.
            </Reveal>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-haze lg:col-span-6 lg:col-start-7">
            <Reveal as="p" className="text-white/85">
              Digital Bae is a thought leadership and personal brand platform exploring the intersection of
              digital innovation, artificial intelligence, marketing, business growth and leadership.
            </Reveal>
            <Reveal as="p" delay={0.06}>
              It is a platform for challenging conventional thinking, making technology accessible and
              empowering individuals and organisations to embrace the opportunities of the digital economy.
            </Reveal>
            <Reveal as="p" delay={0.12}>
              Through speaking engagements, masterclasses, media contributions and strategic conversations,
              Digital Bae inspires audiences to think differently, adapt confidently and use digital tools to
              create meaningful impact.
            </Reveal>
            <Reveal delay={0.16}>
              <TextLink href={site.digitalBae.url} external className="text-glow! hover:text-white!">
                Explore the platform at {site.digitalBae.label}
              </TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Digital Bae stands for */}
      <section aria-labelledby="db-pillars-title" className="pb-24 sm:pb-32">
        <div className="container-x">
          <Reveal as="h2" id="db-pillars-title" className="font-brand text-4xl font-extrabold tracking-tight sm:text-5xl">
            What Digital Bae stands for
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {digitalBae.pillars.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 0.05}>
                <GlowCard className="h-full" innerClassName="flex min-h-48 flex-col p-6!">
                  <span className="font-brand text-4xl font-black text-glow/60">0{i + 1}</span>
                  <p className="mt-auto pt-8 text-[1.05rem] leading-snug font-semibold">{p}</p>
                </GlowCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Speaking & masterclasses */}
      <section aria-labelledby="db-speaking-title" className="pb-24 sm:pb-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal as="p" className="eyebrow inline-flex items-center gap-2"><Mic className="h-4 w-4" aria-hidden="true" /> Speaking and masterclasses</Reveal>
            <Reveal as="h2" id="db-speaking-title" delay={0.05} className="mt-3 font-brand text-4xl font-extrabold tracking-tight sm:text-5xl">Available for</Reveal>
            <ul className="mt-10 border-t border-white/10">
              {digitalBae.formats.map((f, i) => (
                <Reveal as="li" key={f} delay={i * 0.04} className="group flex items-baseline gap-5 border-b border-white/10 py-4">
                  <span className="font-geo text-xs text-glow">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-geo text-[1.35rem] font-medium transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1">{f}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <RevealImage image={images.speakingStage} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section aria-labelledby="db-founder-title" className="border-y border-white/[0.07] bg-night-2 py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal as="p" className="eyebrow">About the founder</Reveal>
            <Reveal as="h2" id="db-founder-title" delay={0.05} className="mt-3 text-5xl leading-tight">Taffy L. Gotora</Reveal>
            <Reveal as="p" delay={0.1} className="mt-2 text-haze">Founder, Nova Catalyst Collective</Reveal>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-haze lg:col-span-7 lg:col-start-6">
            <Reveal as="p">
              Digital Bae is the personal brand of Nova Catalyst Collective&rsquo;s founder, Taffy L. Gotora, a strategic
              marketing and communications professional, speaker and business leader.
            </Reveal>
            <Reveal as="p" delay={0.06}>
              Her work centres on helping organisations and individuals understand the power of digital
              innovation, strategic communication and purposeful brand positioning.
            </Reveal>
            <Reveal as="blockquote" delay={0.12} className="border-l-2 border-glow pl-6 font-geo text-[1.45rem] leading-snug font-medium text-white">
              Her perspective combines professional experience, practical insight and a passion for helping
              people and businesses thrive in a changing world.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Speaking enquiry */}
      <section id="speaking-enquiry" aria-labelledby="db-form-title" className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal as="p" className="eyebrow">Speaking enquiry</Reveal>
            <Reveal as="h2" id="db-form-title" delay={0.05} className="mt-3 font-brand text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              Invite Digital Bae to speak.
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-5 leading-relaxed text-haze">
              Conferences, leadership programmes, masterclasses, workshops and institutional engagements.
              Share a few details and we&rsquo;ll be in touch about availability.
            </Reveal>
          </div>
          <Reveal delay={0.08} className="glass rounded-[28px] p-6 sm:p-10 lg:col-span-7 lg:col-start-6">
            <EnquiryForm
              formName="speaking"
              fields={speakingFields}
              submitLabel="Send speaking enquiry"
              successText="Thank you for your speaking enquiry. We'll review the details and respond about availability."
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
