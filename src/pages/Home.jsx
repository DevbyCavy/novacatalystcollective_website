import Hero from '../components/home/Hero'
import {
  ProofStrip,
  FounderBlock,
  AudienceRoutes,
  Introduction,
  PinnedServices,
  IndustriesGrid,
  WorkPreview,
  DigitalBaeBand,
} from '../components/home/Sections'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../components/Seo'

export default function Home() {
  useSeo({
    description:
      'Nova Catalyst Collective: strategic advisory, corporate communications and market development for organisations ready to grow, lead and compete.',
  })
  return (
    <>
      <Hero />
      <ProofStrip />
      <FounderBlock />
      <AudienceRoutes />
      <Introduction />
      <PinnedServices />
      <IndustriesGrid />
      <WorkPreview />
      <DigitalBaeBand />
      <CtaBand />
    </>
  )
}
