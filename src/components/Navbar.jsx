import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Logo from './Logo'
import { easeOut } from './Reveal'
import { navItems, site } from '../data/site'
import { insights } from '../data/insights'

// Until an article is published, Insights stays out of the main navigation (footer keeps it).
const hasInsights = insights.some((a) => a.status === 'published' && a.url)
const visibleNav = navItems.filter((n) => hasInsights || n.to !== '/insights')

const primaryLinks = [{ label: 'Home', to: '/' }, ...visibleNav.filter((n) => n.to !== '/contact')]

/**
 * Full-width header bar.
 * - Transparent over the hero; solid with a hairline once scrolled.
 * - Slides away while scrolling down, returns on any scroll up (drawer curve, 300ms).
 * - A soft highlight glides between links on hover and rests on the active page.
 * - Below xl: menu button + full-screen menu.
 */
export default function Navbar() {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const toggleRef = useRef(null)
  const lastY = useRef(0)

  useEffect(() => {
    const on = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      // Hide after the first screen when scrolling down; show on any upward scroll.
      if (y > 400 && y > lastY.current + 4) setHidden(true)
      else if (y < lastY.current - 4 || y <= 400) setHidden(false)
      lastY.current = y
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    setOpen(false)
    setHidden(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const activeTo = primaryLinks.find((n) => (n.to === '/' ? pathname === '/' : pathname.startsWith(n.to)))?.to
  const highlight = hovered ?? activeTo
  const isHidden = hidden && !open

  return (
    <>
      <header
        // Keyboard users always get the bar back when focus moves into it.
        onFocusCapture={() => setHidden(false)}
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[transform,background-color,border-color] duration-300 ease-[var(--ease-drawer)] ${
          isHidden && !reduce ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled || open ? 'border-b border-white/[0.08] bg-night/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`}
      >
        <nav aria-label="Primary" className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <Link to="/" aria-label={`${site.name} — home`} className="press shrink-0">
            <Logo tone="dark" compact />
          </Link>

          <ul className="hidden items-center xl:flex" onMouseLeave={() => setHovered(null)}>
            {primaryLinks.map((n) => {
              const isActive = n.to === activeTo
              return (
                <li key={n.to} className="relative">
                  <NavLink
                    to={n.to}
                    onMouseEnter={() => setHovered(n.to)}
                    onFocus={() => setHovered(n.to)}
                    onBlur={() => setHovered(null)}
                    className={`relative block px-3.5 py-2 font-geo text-[0.9rem] transition-colors duration-200 ${isActive || hovered === n.to ? 'text-white' : 'text-haze'}`}
                  >
                    {n.label}
                    {/* Underline only: rests on the active page, glides to the hovered link */}
                    {highlight === n.to && (
                      <motion.span
                        layoutId="nav-underline"
                        aria-hidden="true"
                        className="absolute inset-x-3.5 -bottom-px h-[2px] bg-glow"
                        transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                      />
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact?type=consultation"
              className="press group hidden items-stretch overflow-hidden rounded-md bg-white font-geo text-[0.9rem] font-medium text-night transition-colors duration-200 hover:bg-brand sm:inline-flex"
            >
              <span className="flex items-center px-4 py-2.5">Book a consultation</span>
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="press -mr-2 flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/[0.06] xl:hidden"
            >
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span className={`absolute left-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ease-[var(--ease-out)] ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ease-[var(--ease-out)] ${open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto overscroll-contain bg-night/95 pt-[calc(5.5rem+env(safe-area-inset-top))] backdrop-blur-xl xl:hidden"
          >
            <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/45 blur-[110px]" />
            <ul className="container-x relative flex flex-col">
              {[{ label: 'Home', to: '/' }, ...visibleNav].map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.05 + i * 0.035, duration: 0.45, ease: easeOut }}
                  className="border-b border-white/[0.07]"
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `press flex items-center justify-between py-4 font-geo text-[1.9rem] font-medium tracking-[-0.03em] ${isActive ? 'text-glow' : 'text-white'}`}
                  >
                    {item.label}
                    <span className="font-geo text-sm text-white/30">{String(i + 1).padStart(2, '0')}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="container-x relative mt-auto pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]"
            >
              <Link to="/contact?type=consultation" className="press flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-4 font-geo font-medium text-night">
                Book a consultation
              </Link>
              <p className="mt-6 text-center font-geo text-sm text-haze">{site.tagline}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
