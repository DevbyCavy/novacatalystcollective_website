import Hero from '../components/home/Hero'
import {
  Introduction,
  Expertise,
  WhyNova,
  IndustriesPreview,
  WorkPreview,
  DigitalBaeTeaser,
  InsightsPreview,
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
      <Introduction />
      <Expertise />
      <WhyNova />
      <IndustriesPreview />
      <WorkPreview />
      <DigitalBaeTeaser />
      <InsightsPreview />
      <CtaBand />
    </>
  )
}
