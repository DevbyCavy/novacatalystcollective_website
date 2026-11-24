import { Link } from 'react-router-dom'
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
        eyebrow="Our Work and Experience"
        title="Strategy in Action."
        intro="Selected assignments that show how strategic thinking, communications and market development translate into visible, commercial results."
      />

      <section aria-label="Selected work" className="bg-ink pb-24 text-white sm:pb-32">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {work.map((w, i) => (
              <div key={w.id} className={i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}>
                <WorkCard item={w} index={i} detailed />
              </div>
            ))}
            <Reveal className="flex flex-col justify-between border border-dashed border-white/15 p-8 sm:p-10">
              <p className="eyebrow text-accent">Your organisation</p>
              <div className="mt-10">
                <p className="font-display text-3xl leading-tight">Could your story be next?</p>
                <Link to="/contact?type=project" className="mt-6 inline-block border-b border-accent pb-1 text-[0.75rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  Discuss a project
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand primary={{ label: 'Discuss a Project', to: '/contact?type=project' }} />
    </>
  )
}
