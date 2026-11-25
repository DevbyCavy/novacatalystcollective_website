import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp, CalendarCheck, Mail, Mic } from 'lucide-react'
import { whatsappUrl, WhatsAppGlyph } from './WhatsAppButton'
import { site } from '../data/site'

const iconBtn =
  'press relative flex h-10 w-10 items-center justify-center rounded-full text-haze transition-colors duration-200 hover:bg-white/10 hover:text-white'

/** Small tooltip that appears on hover/focus (pointer devices), 125ms ease-out. */
function Tip({ label }) {
  return (
    <span
      role="tooltip"
      className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-95 rounded-md border border-white/10 bg-night-3 px-2.5 py-1 font-geo text-xs whitespace-nowrap text-white opacity-0 transition-[opacity,transform] duration-150 ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  )
}

/**
 * Floating glass action bar, bottom-centre.
 * Appears after half a screen of scrolling; a line along its bottom tracks reading progress.
 */
export default function ActionBar() {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })
  const onContact = pathname === '/contact'

  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.5)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [pathname])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96, transition: { duration: 0.15 } }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-30 -translate-x-1/2"
        >
          <div role="toolbar" aria-label="Quick actions" className="relative flex items-center gap-1 rounded-full border border-white/12 bg-night/80 p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl">
            {!onContact && (
              <Link to="/contact?type=consultation" className="press inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-geo text-sm font-medium whitespace-nowrap text-night transition-colors duration-200 hover:bg-glow">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" /> <span className="hidden sm:inline">Book a</span> consultation
              </Link>
            )}
            {pathname !== '/digital-bae' && (
              <Link to="/digital-bae#speaking-enquiry" aria-label="Invite Digital Bae to speak" className={`group ${iconBtn}`}>
                <Mic className="h-4 w-4" aria-hidden="true" />
                <Tip label="Invite to speak" />
              </Link>
            )}
            {whatsappUrl && (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={`group ${iconBtn}`}>
                <WhatsAppGlyph className="h-4 w-4" />
                <Tip label="WhatsApp" />
              </a>
            )}
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} aria-label="Email us" className={`group ${iconBtn}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                <Tip label="Email us" />
              </a>
            )}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
              aria-label="Back to top"
              className={`group ${iconBtn}`}
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              <Tip label="Back to top" />
            </button>
            <motion.span aria-hidden="true" className="absolute inset-x-5 bottom-0 h-[2px] origin-left rounded-full bg-glow" style={{ scaleX: progress }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
