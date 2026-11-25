import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import WorkCard from '../components/WorkCard'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../components/Seo'
import { work } from '../data/content'

export default function OurWork() {
  useSeo({
    title: 'Our Work',
    description:
      'Selected assignments from Nova Catalyst Collective across sport, aviation, energy and corporate positioning, including Team Zimbabwe, Air Zimbabwe, Rimu Turf, Rimu Power and TrekStar.',
  })

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={<>Strategy <span className="text-glow">in action.</span></>}
        intro="Selected assignments that show how strategic thinking, communications and market development translate into visible, commercial results."
      />

      <section aria-label="Selected work" className="py-20 sm:py-28">
        <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <WorkCard key={w.id} item={w} index={i} featured={i === 0} detailed className={i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''} />
          ))}
          <Reveal className="flex flex-col justify-between rounded-[24px] border border-dashed border-white/15 p-8">
            <p className="font-geo text-xs tracking-[0.18em] text-glow uppercase">Your organisation</p>
            <div className="mt-12">
              <p className="font-geo text-2xl font-semibold tracking-[-0.02em]">Could your story be next?</p>
              <Link to="/contact?type=project" className="press group mt-5 inline-flex items-center gap-2 font-geo text-sm font-medium text-glow">
                Discuss a project <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand primary={{ label: 'Discuss a project', to: '/contact?type=project' }} />
    </>
  )
}
