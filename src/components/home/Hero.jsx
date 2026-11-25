import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import Button from '../Button'
import { LogoMark } from '../Logo'
import { easeOut } from '../Reveal'

const words = ['Clarity', 'Credibility', 'Impact']

/** Home hero: cursor spotlight, slowly turning logo ring, blur-in headline, cycling brand word. */
export default function Hero() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(-1000)
  const my = useMotionValue(-1000)
  const sx = useSpring(mx, { stiffness: 120, damping: 24 })
  const sy = useSpring(my, { stiffness: 120, damping: 24 })
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(185,156,240,0.16), transparent 70%)`
  const [w, setW] = useState(0)

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setW((i) => (i + 1) % words.length), 2600)
    return () => clearInterval(t)
  }, [reduce])

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <section aria-labelledby="hero-title" onPointerMove={onMove} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-20">
      <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0 opacity-80" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/40 blur-[160px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LogoMark className="animate-slow-spin h-[34rem] w-[34rem] opacity-[0.07] sm:h-[44rem] sm:w-[44rem]" arc="#fff" mark="transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-4 pl-4 font-geo text-sm text-haze backdrop-blur sm:pl-1.5"
        >
          <span className="hidden rounded-full bg-glow/15 px-2.5 py-1 text-xs font-medium text-glow sm:inline">Nova Catalyst Collective</span>
          Strategic advisory · Africa &amp; international
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.15, ease: easeOut }}
          className="mt-8 text-[2.75rem] leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-[6.2rem]"
        >
          We turn strategic ambition into{' '}
          <span className="bg-gradient-to-r from-white via-glow to-[#8d6bd1] bg-clip-text text-transparent">commercial impact.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: easeOut }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-haze"
        >
          Strategic advisory, corporate communications and market development for organisations ready to
          grow, lead and compete.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button to="/contact" className="px-7! py-4!">Start a conversation</Button>
          <Button href="#expertise" variant="ghost" arrow={false} className="px-7! py-4!">Explore our expertise</Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex items-center justify-center gap-3 font-geo text-sm text-haze"
          aria-label="Built on clarity, credibility and impact"
        >
          <span aria-hidden="true">Built on</span>
          <span aria-hidden="true" className="relative inline-flex h-7 w-32 overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={words[w]}
                initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)', transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="absolute inset-0 flex items-center justify-center font-medium text-glow"
              >
                {words[w]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>
      </div>
    </section>
  )
}
