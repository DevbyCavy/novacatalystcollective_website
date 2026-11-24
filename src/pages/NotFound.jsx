import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { LogoMark } from '../components/Logo'
import { useSeo } from '../components/Seo'

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'The page you are looking for does not exist.' })

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink pt-32 pb-24 text-white">
      <LogoMark className="pointer-events-none absolute -right-32 -bottom-32 h-[30rem] w-[30rem] opacity-[0.05]" arc="#fff" mark="#fff" />
      <div className="container-x relative">
        <p className="eyebrow flex items-center gap-4 text-accent">
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
          Error 404
        </p>
        <h1 className="mt-8 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">
          This page has <span className="text-accent italic">moved on.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-white/70">
          The page you&rsquo;re looking for doesn&rsquo;t exist or is no longer available.
        </p>
        <Link
          to="/"
          className="group mt-12 inline-flex items-center gap-3 bg-white px-7 py-4 text-[0.78rem] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:bg-accent"
        >
          Return Home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
