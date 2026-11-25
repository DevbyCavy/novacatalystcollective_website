import { Link } from 'react-router-dom'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { easeOut } from './Reveal'
import { LogoMark } from './Logo'

/**
 * Inner-page hero: dark grid with a soft cursor spotlight, breadcrumb,
 * blur-in headline, intro and optional actions (children).
 */
export default function PageHero({ eyebrow, title, intro, children }) {
  const mx = useMotionValue(-1000)
  const my = useMotionValue(-1000)
  const sx = useSpring(mx, { stiffness: 120, damping: 24 })
  const sy = useSpring(my, { stiffness: 120, damping: 24 })
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${sx}px ${sy}px, rgba(185,156,240,0.14), transparent 70%)`
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <section onPointerMove={onMove} className="relative overflow-hidden border-b border-white/[0.06] pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand/35 blur-[130px]" />
      <LogoMark className="pointer-events-none absolute -right-28 -bottom-40 h-[30rem] w-[30rem] opacity-[0.05]" arc="#fff" mark="transparent" />

      <div className="container-x relative">
        <motion.nav aria-label="Breadcrumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ol className="flex items-center gap-1.5 font-geo text-sm text-haze">
            <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
            <li aria-current="page" className="text-glow">{eyebrow}</li>
          </ol>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
          className="mt-6 max-w-4xl text-[2.7rem] leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.6rem]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: easeOut }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-haze"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: easeOut }} className="mt-10">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
