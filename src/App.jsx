import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ActionBar from './components/ActionBar'
import { Analytics } from './components/Seo'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import OurWork from './pages/OurWork'
import DigitalBae from './pages/DigitalBae'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import ConceptBento from './concepts/bento/ConceptBento'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait for the target to mount when arriving from another route.
      const id = decodeURIComponent(hash.slice(1))
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const skipLink = (
    <a
      href="#main"
      className="sr-only z-[100] bg-accent px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      Skip to content
    </a>
  )

  // Design concept preview: renders standalone with its own header and floating island.
  if (pathname.startsWith('/concept-d')) {
    return (
      <MotionConfig reducedMotion="user">
        <ScrollManager />
        {skipLink}
        <ConceptBento />
      </MotionConfig>
    )
  }

  return (
    // reducedMotion="user": visitors who prefer reduced motion get gentle fades only.
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <Analytics />
      {skipLink}
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/digital-bae" element={<DigitalBae />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ActionBar />
    </MotionConfig>
  )
}
