import { motion } from 'framer-motion'
import Button from '../Button'
import { LogoMark } from '../Logo'
import { easeOut } from '../Reveal'

/**
 * Home hero — deliberately quiet: one signature effect (the slowly turning logo ring)
 * over the faint blueprint grid. The headline carries the weight; no kicker above it.
 */
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[88svh] flex-col justify-center overflow-hidden pt-32 pb-16">
      <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0 opacity-80" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LogoMark className="animate-slow-spin h-[34rem] w-[34rem] opacity-[0.06] sm:h-[44rem] sm:w-[44rem]" arc="#441E6B" mark="transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.1, ease: easeOut }}
          className="text-[2.75rem] leading-[1.02] tracking-[-0.04em] sm:text-7xl lg:text-[6rem]"
        >
          We turn strategic ambition into <span className="text-glow">commercial impact.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-haze"
        >
          Strategic advisory, corporate communications and market development for organisations ready to
          grow, lead and compete.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: easeOut }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button to="/contact?type=consultation" arrow>Book a consultation</Button>
          <Button href="#expertise" variant="ghost">Explore our expertise</Button>
        </motion.div>
      </div>
    </section>
  )
}
