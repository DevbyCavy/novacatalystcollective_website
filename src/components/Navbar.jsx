import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { easePremium } from './Reveal'
import { navItems, site } from '../data/site'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change; lock scroll + Escape to close while open.
  useEffect(() => setOpen(false), [pathname])
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

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          solid ? 'border-b border-white/10 bg-ink/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className={`container-x flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? 'h-[4.5rem]' : 'h-20 lg:h-24'
          }`}
        >
          <Link to="/" aria-label={`${site.name} — home`}>
            <Logo compact={scrolled} />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 xl:flex">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative py-2 text-[0.75rem] font-medium tracking-[0.12em] uppercase transition-colors ${
                        isActive ? 'text-white' : 'text-white/65 hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 bg-white px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors duration-300 hover:bg-accent"
            >
              Let&rsquo;s Talk
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile / tablet toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-white xl:hidden"
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu — outside <header>, whose backdrop-filter would otherwise contain this fixed overlay. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto bg-ink pt-24 xl:hidden"
          >
            <ul className="container-x flex flex-col">
              {[{ label: 'Home', to: '/' }, ...navItems].map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: easePremium }}
                  className="border-b border-white/10"
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `flex items-baseline gap-5 py-4 ${isActive ? 'text-accent' : 'text-white'}`}
                  >
                    <span className="eyebrow text-accent/80">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-[2rem] leading-tight">{item.label}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="container-x mt-auto pt-10 pb-10"
            >
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold tracking-[0.16em] text-ink uppercase"
              >
                Let&rsquo;s Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="eyebrow mt-6 text-center text-white/50">{site.tagline}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
