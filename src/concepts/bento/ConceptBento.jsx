import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CalendarCheck, Briefcase, Mic, MessageCircle, X, Plus } from 'lucide-react'
import Logo, { LogoMark } from '../../components/Logo'
import CountUp from '../../components/CountUp'
import { whatsappUrl, WhatsAppGlyph } from '../../components/WhatsAppButton'
import { useSeo } from '../../components/Seo'
import { images } from '../../data/images'
import { services } from '../../data/services'
import { industries, work, philosophy } from '../../data/content'
import { navItems, site } from '../../data/site'

const ease = [0.23, 1, 0.32, 1]
const view = { once: true, margin: '0px 0px -10% 0px' }

/* ───────── Tile primitive: staggered scale-in (choreographed, 40ms steps) ───────── */
function Tile({ i = 0, className = '', children, as = 'div', ...rest }) {
  const C = motion[as]
  return (
    <C
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={view}
      transition={{ duration: 0.6, delay: i * 0.04 + (i % 2) * 0.01, ease }}
      className={`relative overflow-hidden rounded-[28px] ${className}`}
      {...rest}
    >
      {children}
    </C>
  )
}

/* ───────── Header + full-screen bento menu ───────── */
function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', k)
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[22px] bg-white/80 py-2 pr-2 pl-4 shadow-[0_8px_30px_-12px_rgba(29,20,40,0.25)] ring-1 ring-black/5 backdrop-blur-xl">
          <Link to="/concept-d" aria-label={`${site.name} — home`} className="press"><Logo tone="dark" compact /></Link>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="press hidden rounded-2xl px-4 py-2.5 font-inter text-sm font-medium text-plum-ink transition-colors hover:bg-black/5 sm:block">Contact</Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="bento-menu"
              className="press flex items-center gap-2 rounded-2xl bg-plum-ink px-4 py-2.5 font-inter text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Menu <span className="grid h-4 w-4 grid-cols-2 gap-0.5" aria-hidden="true">{[0, 1, 2, 3].map((n) => <span key={n} className="rounded-[2px] bg-white/80" />)}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="bento-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-canvas/95 p-3 backdrop-blur-xl sm:p-6"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center justify-between px-2 pt-[env(safe-area-inset-top)] pb-4">
                <Logo tone="dark" compact />
                <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="press flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-plum-ink ring-1 ring-black/5"><X className="h-5 w-5" aria-hidden="true" /></button>
              </div>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[{ label: 'Home', to: '/concept-d' }, ...navItems].map((n, i) => (
                  <motion.li
                    key={n.to}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.04 + i * 0.03, ease }}
                    className={i === 0 ? 'col-span-2 md:row-span-2' : ''}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className={`press group flex h-full min-h-28 flex-col justify-between rounded-[24px] p-5 transition-colors duration-200 ${i === 0 ? 'bg-brand text-white md:min-h-full' : 'bg-white text-plum-ink ring-1 ring-black/5 hover:bg-plum-ink hover:text-white'}`}
                    >
                      <span className="font-inter text-xs opacity-60">{String(i).padStart(2, '0')}</span>
                      <span className="flex items-end justify-between">
                        <span className={`font-play ${i === 0 ? 'text-5xl' : 'text-2xl'}`}>{n.label}</span>
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ───────── Bento hero ───────── */
function BentoHero() {
  const reduce = useReducedMotion()
  const [w, setW] = useState(0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setW((n) => (n + 1) % philosophy.length), 2400)
    return () => clearInterval(t)
  }, [reduce])
  const stat = work.find((x) => x.highlight)

  return (
    <section aria-labelledby="d-hero" className="px-3 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto grid max-w-7xl auto-rows-[minmax(9rem,auto)] grid-cols-2 gap-3 md:grid-cols-4">
        {/* Headline */}
        <Tile i={0} className="col-span-2 row-span-2 flex flex-col justify-between bg-white p-7 ring-1 ring-black/5 sm:p-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-canvas px-3 py-1 font-inter text-xs font-medium text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand motion-safe:animate-pulse" /> Strategic advisory · Africa &amp; international
          </span>
          <h1 id="d-hero" className="mt-8 font-play text-[2.7rem] leading-[1.02] font-medium tracking-[-0.02em] text-plum-ink sm:text-6xl lg:text-[4.4rem]">
            We turn strategic ambition into <em className="text-brand">commercial impact.</em>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="press group inline-flex items-center gap-2 rounded-2xl bg-plum-ink px-5 py-3.5 font-inter text-sm font-medium text-white transition-colors hover:bg-brand">
              Start a conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a href="#d-services" className="press rounded-2xl px-5 py-3.5 font-inter text-sm font-medium text-plum-ink ring-1 ring-black/10 transition-colors hover:bg-canvas">Our expertise</a>
          </div>
        </Tile>

        {/* Tall image */}
        <Tile i={1} className="row-span-2 min-h-72 bg-brand">
          <img src={images.aboutPrimary.src} srcSet={images.aboutPrimary.srcSet} sizes="(min-width: 768px) 25vw, 50vw" alt={images.aboutPrimary.alt} fetchpriority="high" className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-plum-ink/80 to-transparent" />
          <p className="absolute right-5 bottom-5 left-5 font-play text-xl leading-snug text-white">{site.strapline}</p>
        </Tile>

        {/* Stat */}
        {stat && (
          <Tile i={2} className="flex flex-col justify-between bg-brand p-6 text-white">
            <span className="font-inter text-xs text-white/70">{stat.client}</span>
            <div>
              <CountUp value={stat.highlight.value} className="font-play text-5xl" />
              <p className="mt-1 font-inter text-xs text-white/75">{stat.highlight.label}</p>
            </div>
          </Tile>
        )}

        {/* Cycling philosophy word */}
        <Tile i={3} className="flex flex-col justify-between bg-plum-ink p-6 text-white">
          <span className="font-inter text-xs text-white/60">Our philosophy</span>
          <div className="relative h-12 overflow-hidden" aria-label={philosophy.map((p) => p.word).join(', ')}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={philosophy[w].word}
                aria-hidden="true"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.45, ease }}
                className="absolute inset-0 font-play text-4xl text-accent italic"
              >
                {philosophy[w].word}.
              </motion.p>
            </AnimatePresence>
          </div>
        </Tile>

        {/* Services list */}
        <Tile i={4} className="col-span-2 bg-white p-6 ring-1 ring-black/5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-inter text-xs text-black/50">Five disciplines</span>
            <a href="#d-services" className="font-inter text-xs font-medium text-brand">View all ↓</a>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.id} className="rounded-full bg-canvas px-3 py-1.5 font-inter text-sm text-plum-ink">{s.shortTitle}</li>
            ))}
          </ul>
        </Tile>

        {/* Digital Bae */}
        <Tile i={5} as="div" className="bg-[#d9cdef]">
          <Link to="/digital-bae" className="group flex h-full flex-col justify-between p-6">
            <Mic className="h-5 w-5 text-brand" aria-hidden="true" />
            <span className="flex items-end justify-between">
              <span className="font-brand text-xl leading-tight font-black text-brand">DIGITAL<br />BAE</span>
              <ArrowUpRight className="h-5 w-5 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </Link>
        </Tile>

        {/* Logo mark */}
        <Tile i={6} className="flex items-center justify-center bg-white ring-1 ring-black/5">
          <LogoMark className="animate-slow-spin h-24 w-24" arc="#441E6B" mark="#441E6B" />
        </Tile>
      </div>
    </section>
  )
}

/* ───────── Services: vertical scroll drives a horizontal track (desktop) ───────── */
function HorizontalServices() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-62%'])
  return (
    <section id="d-services" aria-labelledby="d-services-title" className="mt-3">
      <div ref={ref} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="mx-auto mb-8 flex w-full max-w-7xl items-end justify-between px-6">
            <h2 id="d-services-title" className="font-play text-6xl font-medium text-plum-ink">Our <em className="text-brand">expertise</em></h2>
            <p className="max-w-sm font-inter text-black/60">Scroll to move through five integrated disciplines.</p>
          </div>
          <motion.ul style={{ x }} className="flex gap-4 pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <li key={s.id} className={`flex h-[58vh] w-[34rem] shrink-0 flex-col justify-between rounded-[32px] p-10 ${i % 2 ? 'bg-plum-ink text-white' : 'bg-white text-plum-ink ring-1 ring-black/5'}`}>
                  <div className="flex items-start justify-between">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${i % 2 ? 'bg-white/10 text-accent' : 'bg-canvas text-brand'}`}><Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" /></span>
                    <span className="font-play text-6xl opacity-15">{s.number}</span>
                  </div>
                  <div>
                    <h3 className="font-play text-4xl leading-tight font-medium">{s.title}</h3>
                    <p className={`mt-4 font-inter leading-relaxed ${i % 2 ? 'text-white/70' : 'text-black/60'}`}>{s.summary}</p>
                    <Link to={`/services#${s.id}`} className={`group mt-6 inline-flex items-center gap-1.5 font-inter text-sm font-medium ${i % 2 ? 'text-accent' : 'text-brand'}`}>
                      Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </li>
              )
            })}
          </motion.ul>
        </div>
      </div>

      {/* Mobile: native horizontal snap */}
      <div className="px-3 py-16 lg:hidden">
        <h2 className="px-2 font-play text-4xl font-medium text-plum-ink">Our <em className="text-brand">expertise</em></h2>
        <ul className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none]">
          {services.map((s, i) => (
            <li key={s.id} className={`w-[82%] shrink-0 snap-start rounded-[28px] p-7 ${i % 2 ? 'bg-plum-ink text-white' : 'bg-white text-plum-ink ring-1 ring-black/5'}`}>
              <span className="font-play text-3xl opacity-25">{s.number}</span>
              <h3 className="mt-6 font-play text-2xl font-medium">{s.title}</h3>
              <p className={`mt-3 font-inter text-sm leading-relaxed ${i % 2 ? 'text-white/70' : 'text-black/60'}`}>{s.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ───────── Industries: tabs with a sliding indicator ───────── */
function IndustryTabs() {
  const [active, setActive] = useState(0)
  const ind = industries[active]
  const Icon = ind.icon
  return (
    <section aria-labelledby="d-ind" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 id="d-ind" className="font-play text-4xl font-medium text-plum-ink sm:text-6xl">Sectors we <em className="text-brand">know</em></h2>
        <div role="tablist" aria-label="Industries" className="mt-8 flex gap-1 overflow-x-auto rounded-[20px] bg-white p-1.5 ring-1 ring-black/5 [scrollbar-width:none]">
          {industries.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              id={`d-tab-${x.id}`}
              aria-selected={i === active}
              aria-controls="d-ind-panel"
              onClick={() => setActive(i)}
              className={`press relative shrink-0 rounded-2xl px-4 py-2.5 font-inter text-sm font-medium whitespace-nowrap transition-colors duration-200 ${i === active ? 'text-white' : 'text-black/55 hover:text-plum-ink'}`}
            >
              {i === active && <motion.span layoutId="d-tab" aria-hidden="true" className="absolute inset-0 rounded-2xl bg-plum-ink" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />}
              <span className="relative">{x.title.split(' and ')[0]}</span>
            </button>
          ))}
        </div>
        <div id="d-ind-panel" role="tabpanel" aria-labelledby={`d-tab-${ind.id}`} className="mt-3 grid gap-3 md:grid-cols-3">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -6, filter: 'blur(4px)', transition: { duration: 0.12 } }}
              transition={{ duration: 0.28, ease }}
              className="rounded-[28px] bg-brand p-8 text-white md:col-span-2 sm:p-10"
            >
              <Icon className="h-7 w-7 text-accent" strokeWidth={1.4} aria-hidden="true" />
              <h3 className="mt-10 font-play text-4xl font-medium">{ind.title}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {ind.focus.map((f) => <li key={f} className="rounded-full bg-white/15 px-3.5 py-1.5 font-inter text-sm">{f}</li>)}
              </ul>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col justify-between rounded-[28px] bg-white p-8 ring-1 ring-black/5">
            <p className="font-inter text-black/60">Our expertise is relevant across industries where reputation, strategic positioning, relationships and growth are critical.</p>
            <Link to="/industries" className="press group mt-8 inline-flex items-center gap-1.5 font-inter text-sm font-medium text-brand">All industries <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── Work bento ───────── */
function WorkBento() {
  return (
    <section aria-labelledby="d-work" className="px-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <h2 id="d-work" className="font-play text-4xl font-medium text-plum-ink sm:text-6xl">Strategy in <em className="text-brand">action</em></h2>
          <Link to="/our-work" className="hidden font-inter text-sm font-medium text-brand sm:block">All work ↗</Link>
        </div>
        <div className="mt-8 grid auto-rows-[minmax(11rem,auto)] gap-3 md:grid-cols-4">
          {work.map((w, i) => (
            <Tile key={w.id} i={i} className={`flex flex-col justify-between p-7 ${i === 0 ? 'bg-plum-ink text-white md:col-span-2 md:row-span-2' : i === 3 ? 'bg-[#d9cdef] text-plum-ink md:col-span-2' : 'bg-white text-plum-ink ring-1 ring-black/5'}`}>
              <span className={`font-inter text-xs ${i === 0 ? 'text-accent' : 'text-brand'}`}>{w.sector}</span>
              <div>
                <h3 className={`font-play font-medium ${i === 0 ? 'text-5xl' : 'text-2xl'}`}>{w.client}</h3>
                <p className={`mt-1 font-inter text-sm ${i === 0 ? 'text-white/65' : 'text-black/55'}`}>{w.scope.join(' · ')}</p>
                {w.highlight && (
                  <p className="mt-8"><CountUp value={w.highlight.value} className="font-play text-6xl text-accent" /> <span className="font-inter text-sm text-white/65">{w.highlight.label}</span></p>
                )}
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Statement + closing ───────── */
function Closing() {
  return (
    <section className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
        <Tile className="flex items-center bg-white p-8 ring-1 ring-black/5 sm:p-12 md:col-span-2">
          <p className="font-play text-3xl leading-snug text-plum-ink sm:text-[2.6rem]">
            &ldquo;We connect strategy with execution, visibility with credibility and relationships with <em className="text-brand">commercial opportunity.</em>&rdquo;
          </p>
        </Tile>
        <Tile i={1} className="flex flex-col justify-between bg-brand p-8 text-white sm:p-10">
          <LogoMark className="h-12 w-12" arc="#fff" mark="#CDBDF0" />
          <div>
            <h2 className="mt-10 font-play text-4xl leading-tight font-medium">Let&rsquo;s discuss your growth ambitions.</h2>
            <Link to="/contact?type=consultation" className="press group mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 font-inter text-sm font-medium text-plum-ink transition-colors hover:bg-accent">
              Book a consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </Tile>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 px-2 font-inter text-xs text-black/50 sm:flex-row sm:justify-between">
        <span>&copy; {new Date().getFullYear()} {site.name}</span>
        <span>{site.disciplines.join(' · ')}</span>
      </div>
    </section>
  )
}

/* ───────── Floating island: pill that morphs into a card ───────── */
function TalkIsland() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()
  const spring = reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }

  useEffect(() => {
    const on = () => setShow(window.scrollY > 300)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    if (!open) return
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open])

  const actions = [
    { label: 'Book a consultation', to: '/contact?type=consultation', icon: CalendarCheck },
    { label: 'Discuss a project', to: '/contact?type=project', icon: Briefcase },
    { label: 'Invite Digital Bae to speak', to: '/digital-bae#speaking-enquiry', icon: Mic },
  ]

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16, transition: { duration: 0.15 } }}
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 sm:right-6"
        >
          <motion.div
            layout
            transition={spring}
            style={{ borderRadius: open ? 28 : 999 }}
            className="overflow-hidden bg-plum-ink text-white shadow-[0_20px_50px_-15px_rgba(29,20,40,0.55)]"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {open ? (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)', transition: { duration: 0.1 } }}
                  transition={{ duration: 0.25, delay: 0.08 }}
                  className="w-[19rem] p-5"
                  role="dialog"
                  aria-label="Talk to us"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-play text-2xl">Let&rsquo;s talk.</p>
                      <p className="mt-1 font-inter text-xs text-white/60">Pick a starting point.</p>
                    </div>
                    <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="press flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><X className="h-4 w-4" aria-hidden="true" /></button>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {actions.map((a) => {
                      const I = a.icon
                      return (
                        <li key={a.label}>
                          <Link to={a.to} className="press group flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3 font-inter text-sm transition-colors hover:bg-white/[0.12]">
                            <span className="flex items-center gap-3"><I className="h-4 w-4 text-accent" aria-hidden="true" />{a.label}</span>
                            <ArrowRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                          </Link>
                        </li>
                      )
                    })}
                    {whatsappUrl && (
                      <li>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-3 rounded-2xl bg-[#25D366]/15 px-4 py-3 font-inter text-sm"><WhatsAppGlyph className="h-4 w-4" /> WhatsApp</a>
                      </li>
                    )}
                  </ul>
                </motion.div>
              ) : (
                <motion.button
                  key="pill"
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-expanded={false}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.08 } }}
                  className="press flex items-center gap-2.5 py-3 pr-5 pl-3 font-inter text-sm font-medium"
                >
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-plum-ink" />
                  </span>
                  Let&rsquo;s talk <Plus className="h-4 w-4 opacity-60" aria-hidden="true" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/** Concept D — "Bento Atelier" preview (homepage only). */
export default function ConceptBento() {
  useSeo({ title: 'Concept D — Bento Atelier', description: 'Design concept preview for Nova Catalyst Collective.' })
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]')
    const prevMeta = meta?.getAttribute('content')
    const prevBg = document.body.style.backgroundColor
    const prevScheme = document.documentElement.style.colorScheme
    meta?.setAttribute('content', '#EFECF4')
    document.body.style.backgroundColor = '#EFECF4'
    document.documentElement.style.colorScheme = 'light'
    return () => {
      if (meta && prevMeta) meta.setAttribute('content', prevMeta)
      document.body.style.backgroundColor = prevBg
      document.documentElement.style.colorScheme = prevScheme
    }
  }, [])

  return (
    <div className="min-h-screen bg-canvas font-inter text-plum-ink selection:bg-brand selection:text-white">
      <Header />
      <main id="main">
        <BentoHero />
        <HorizontalServices />
        <IndustryTabs />
        <WorkBento />
        <Closing />
      </main>
      <TalkIsland />
      <Link
        to="/"
        className="press fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-40 hidden rounded-full bg-white/90 px-3.5 py-2 font-inter text-xs text-black/60 ring-1 ring-black/10 backdrop-blur md:block"
      >
        <span className="mr-1.5 rounded-full bg-plum-ink px-2 py-0.5 font-medium text-white">Concept D</span> View live site (B)
      </Link>
    </div>
  )
}
