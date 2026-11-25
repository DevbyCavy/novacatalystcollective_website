import { motion } from 'framer-motion'
import { LogoMark } from '../components/Logo'
import Button from '../components/Button'
import { easeOut } from '../components/Reveal'
import { useSeo } from '../components/Seo'

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'The page you are looking for does not exist.' })

  return (
    <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden px-5 pt-32 pb-24 text-center">
      <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/40 blur-[140px]" />
      <LogoMark className="animate-slow-spin pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" arc="#fff" mark="transparent" />
      <div className="relative">
        <p className="eyebrow">Error 404</p>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="mt-4 text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl"
        >
          This page has <span className="text-glow">moved on.</span>
        </motion.h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-haze">The page you&rsquo;re looking for doesn&rsquo;t exist or is no longer available.</p>
        <Button to="/" className="mt-10">Return home</Button>
      </div>
    </section>
  )
}
