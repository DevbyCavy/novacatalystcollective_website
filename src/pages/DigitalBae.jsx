import { motion } from 'framer-motion'
import { Mic, Sparkles } from 'lucide-react'
import Reveal, { RevealImage, easePremium } from '../components/Reveal'
import Button from '../components/Button'
import EnquiryForm from '../components/EnquiryForm'
import { useSeo } from '../components/Seo'
import { images } from '../data/images'
import { digitalBae } from '../data/content'

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
      {/* Hero — bolder, more expressive sub-brand treatment */}
      <section aria-labelledby="db-hero-title" className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink pt-36 pb-16 text-white sm:pb-24">
        <img
          src={images.speakingAudience.src}
          srcSet={images.speakingAudience.srcSet}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-brand/60" />
        <div className="container-x relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="eyebrow flex items-center gap-3 text-accent"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" /> Personal brand platform
          </motion.p>
          <h1 id="db-hero-title" className="mt-6 overflow-hidden font-brand text-[3.8rem] leading-[0.9] font-black tracking-tight sm:text-8xl lg:text-[10rem]">
            <motion.span
              className="block"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: easePremium }}
            >
              DIGITAL <span className="text-accent">BAE</span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: easePremium }}
            className="eyebrow mt-6 text-white/70"
          >
            Digital intelligence. Strategic influence. Business impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: easePremium }}
            className="mt-12 grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-12 lg:items-end"
          >
            <p className="font-display text-3xl leading-tight sm:text-4xl lg:col-span-7">
              The Future Is Digital. <span className="text-accent italic">The Opportunity Is Yours.</span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button href="#speaking-enquiry" variant="light">Invite Digital Bae to Speak</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the platform */}
      <section aria-labelledby="db-about-title" className="bg-white py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="eyebrow flex items-center gap-4 text-brand">
              <span aria-hidden="true" className="h-px w-10 bg-brand" /> The platform
            </Reveal>
            <Reveal as="h2" id="db-about-title" delay={0.06} className="mt-6 font-brand text-4xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-5xl">
              Think differently. Adapt confidently.
            </Reveal>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate lg:col-span-6 lg:col-start-7">
            <Reveal as="p">
              Digital Bae is a thought leadership and personal brand platform exploring the
              intersection of digital innovation, artificial intelligence, marketing, business growth
              and leadership.
            </Reveal>
            <Reveal as="p" delay={0.06}>
              It is a platform for challenging conventional thinking, making technology accessible and
              empowering individuals and organisations to embrace the opportunities of the digital
              economy.
            </Reveal>
            <Reveal as="p" delay={0.12}>
              Through speaking engagements, masterclasses, media contributions and strategic
              conversations, Digital Bae inspires audiences to think differently, adapt confidently and
              use digital tools to create meaningful impact.
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Digital Bae stands for */}
      <section aria-labelledby="db-pillars-title" className="bg-brand py-24 text-white sm:py-32">
        <div className="container-x">
          <Reveal as="h2" id="db-pillars-title" className="font-brand text-4xl font-extrabold tracking-tight sm:text-5xl">
            What Digital Bae Stands For
          </Reveal>
          <ul className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {digitalBae.pillars.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 0.06} className="flex flex-col bg-brand p-7 transition-colors duration-500 hover:bg-brand-soft">
                <span className="font-brand text-5xl font-black text-accent/60">0{i + 1}</span>
                <p className="mt-8 text-lg leading-snug font-medium">{p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Speaking & masterclasses */}
      <section aria-labelledby="db-speaking-title" className="bg-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="container-x py-20 sm:py-28 lg:max-w-none lg:px-16 xl:px-24">
            <Reveal className="eyebrow flex items-center gap-3 text-brand">
              <Mic className="h-4 w-4" aria-hidden="true" /> Speaking and Masterclasses
            </Reveal>
            <Reveal as="h2" id="db-speaking-title" delay={0.06} className="mt-6 font-brand text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Available for
            </Reveal>
            <ul className="mt-10 border-t border-ink/10">
              {digitalBae.formats.map((f, i) => (
                <Reveal as="li" key={f} delay={i * 0.04} className="flex items-baseline gap-5 border-b border-ink/10 py-5">
                  <span className="text-xs font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-2xl text-ink">{f}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[22rem]">
            <div className="absolute inset-0">
              <RevealImage image={images.speakingStage} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section aria-labelledby="db-founder-title" className="bg-white py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="eyebrow flex items-center gap-4 text-brand">
              <span aria-hidden="true" className="h-px w-10 bg-brand" /> About the Founder
            </Reveal>
            <Reveal as="h2" id="db-founder-title" delay={0.06} className="mt-6 text-5xl leading-tight text-ink">
              Taffy L. Gotora
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-3 text-slate">Founder, Nova Catalyst Collective</Reveal>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate lg:col-span-7 lg:col-start-6">
            <Reveal as="p">
              Digital Bae is the personal brand of Nova Catalysts&rsquo; founder, Taffy L. Gotora, a
              strategic marketing and communications professional, speaker and business leader.
            </Reveal>
            <Reveal as="p" delay={0.06}>
              Her work centres on helping organisations and individuals understand the power of
              digital innovation, strategic communication and purposeful brand positioning.
            </Reveal>
            <Reveal as="p" delay={0.12} className="border-l-2 border-brand pl-6 font-display text-2xl leading-snug text-ink italic">
              Her perspective combines professional experience, practical insight and a passion for
              helping people and businesses thrive in a changing world.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Speaking enquiry form */}
      <section id="speaking-enquiry" aria-labelledby="db-form-title" className="bg-ink py-24 text-white sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="eyebrow flex items-center gap-4 text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent" /> Speaking enquiry
            </Reveal>
            <Reveal as="h2" id="db-form-title" delay={0.06} className="mt-6 font-brand text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              Invite Digital Bae to Speak.
            </Reveal>
            <Reveal as="p" delay={0.12} className="mt-6 leading-relaxed text-white/70">
              Conferences, leadership programmes, masterclasses, workshops and institutional
              engagements. Share a few details and we&rsquo;ll be in touch about availability.
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm
              formName="speaking"
              fields={speakingFields}
              submitLabel="Send Speaking Enquiry"
              successText="Thank you for your speaking enquiry. We'll review the details and respond about availability."
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
