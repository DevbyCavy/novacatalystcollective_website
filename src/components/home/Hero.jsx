import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../Button'
import { easePremium } from '../Reveal'
import { images } from '../../data/images'
import { site } from '../../data/site'

const headline = ['We Turn Strategic', 'Ambition Into', 'Commercial Impact.']

export default function Hero() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 900], [0, 140])

  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <motion.div aria-hidden="true" style={{ y: imageY }} className="absolute inset-0 -top-10 -bottom-40">
        <motion.img
          src={images.hero.src}
          srcSet={images.hero.srcSet}
          sizes="100vw"
          alt=""
          fetchpriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[60%_40%] opacity-55 grayscale"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: easePremium }}
        />
      </motion.div>
      {/* Aubergine tint + legibility gradients */}
      <div aria-hidden="true" className="absolute inset-0 bg-brand/40 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      {/* Architectural guide lines */}
      <div aria-hidden="true" className="container-x pointer-events-none absolute inset-0 hidden lg:block">
        <div className="relative h-full">
          {[0.6, 0.8].map((left, i) => (
            <motion.span
              key={left}
              className="absolute top-0 h-full w-px origin-top bg-white/[0.07]"
              style={{ left: `${left * 100}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.8, delay: 0.3 + i * 0.2, ease: easePremium }}
            />
          ))}
        </div>
      </div>

      <div className="container-x relative flex flex-1 flex-col justify-center pt-32 pb-16 lg:pt-36">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow flex items-center gap-4 text-accent"
        >
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
          {site.tagline}
        </motion.p>

        <h1
          id="hero-title"
          aria-label={headline.join(' ')}
          className="mt-8 max-w-5xl font-display text-[2.9rem] leading-[0.98] font-medium sm:text-6xl lg:text-[5.4rem] xl:text-[6.2rem]"
        >
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className={`block ${i === headline.length - 1 ? 'text-accent italic' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.35 + i * 0.13, ease: easePremium }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <motion.p
            className="max-w-xl text-lg leading-relaxed text-white/75 lg:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: easePremium }}
          >
            Strategic advisory, corporate communications and market development for organisations
            ready to grow, lead and compete.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: easePremium }}
          >
            <Button to="/contact" variant="light">Discuss Your Growth Ambitions</Button>
            <Button to="/services" variant="outlineLight" arrow={false}>Our Expertise</Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative border-t border-white/10"
      >
        <div className="container-x flex items-center justify-between gap-6 py-5">
          <ul className="hidden flex-wrap gap-x-8 gap-y-2 text-[0.68rem] tracking-[0.2em] text-white/50 uppercase md:flex">
            {site.disciplines.map((d, i) => (
              <li key={d} className="flex items-center gap-3">
                <span className="text-accent">0{i + 1}</span>
                {d}
              </li>
            ))}
          </ul>
          <a
            href="#introduction"
            className="group ml-auto flex items-center gap-3 text-[0.7rem] tracking-[0.25em] text-white/60 uppercase transition-colors hover:text-accent"
          >
            Scroll
            <span className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors group-hover:border-accent">
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              </motion.span>
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
