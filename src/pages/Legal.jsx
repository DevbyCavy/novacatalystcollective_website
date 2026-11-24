import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useSeo } from '../components/Seo'
import { site } from '../data/site'

const pages = {
  privacy: {
    title: 'Privacy Policy',
    intro: `${site.name} respects your privacy. Our full Privacy Policy is being finalised and will be published here.`,
  },
  terms: {
    title: 'Terms of Use',
    intro: 'These Terms of Use govern your use of this website. Our complete terms are being finalised and will be published here.',
  },
}

export default function Legal({ kind }) {
  const page = pages[kind]
  useSeo({ title: page.title, description: page.intro })

  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} />
      <section className="bg-ivory py-20 sm:py-28">
        <Reveal className="container-x max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
          <p>{page.intro}</p>
          <p>
            Questions in the meantime?{' '}
            <Link to="/contact" className="text-ink underline decoration-brand underline-offset-4">Contact us</Link>.
          </p>
        </Reveal>
      </section>
    </>
  )
}
