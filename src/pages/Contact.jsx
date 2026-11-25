import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import ContactDetails from '../components/ContactDetails'
import SocialIcons, { hasSocials } from '../components/SocialIcons'
import { LogoMark } from '../components/Logo'
import { useSeo } from '../components/Seo'
import { services } from '../data/services'
import { site } from '../data/site'

const enquiryTypes = [
  { value: 'project', label: 'Discuss a project' },
  { value: 'partnership', label: 'Explore a partnership' },
  { value: 'consultation', label: 'Book a consultation' },
]

const interests = [...services.map((s) => s.title), 'Digital Bae speaking engagement', 'General enquiry']

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description:
      'Start a conversation with Nova Catalyst Collective about strategic growth, communications, digital transformation, executive education or market development.',
  })
  const [params] = useSearchParams()
  const typeParam = enquiryTypes.some((t) => t.value === params.get('type')) ? params.get('type') : undefined
  const interestParam = interests.includes(params.get('interest')) ? params.get('interest') : ''

  const fields = [
    { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
    { name: 'organisation', label: 'Organisation', type: 'text', autoComplete: 'organization' },
    { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
    { name: 'phone', label: 'Telephone number', type: 'tel', autoComplete: 'tel' },
    { name: 'interest', label: 'Area of interest', type: 'select', required: true, options: interests, full: true },
    { name: 'message', label: 'Tell us about your business needs', type: 'textarea', required: true, minLength: 20 },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s create <span className="text-glow">what&rsquo;s next.</span></>}
        intro="We welcome conversations with organisations, business leaders, investors and partners looking to explore strategic growth opportunities."
      />

      <section aria-labelledby="form-title" className="py-16 sm:py-24">
        <div className="container-x grid gap-6 lg:grid-cols-12">
          <Reveal className="glass rounded-[28px] p-6 sm:p-10 lg:col-span-8">
            <h2 id="form-title" className="text-3xl sm:text-4xl">Let&rsquo;s start a conversation.</h2>
            <p className="mt-2 text-haze">Tell us a little about your organisation and what you would like to achieve.</p>
            <div className="mt-10">
              <EnquiryForm
                key={`${typeParam}-${interestParam}`}
                formName="enquiry"
                fields={fields}
                types={enquiryTypes}
                initialType={typeParam}
                initialValues={{ interest: interestParam }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} as="aside" aria-label="Contact details" className="lg:col-span-4">
            <div style={{ '--color-white': '#ffffff', '--color-haze': '#ddd3ec', '--color-glow': '#cdbdf0' }} className="relative overflow-hidden rounded-[28px] bg-brand p-8 text-white sm:p-10 lg:sticky lg:top-32">
              <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
              <LogoMark className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 opacity-[0.1]" arc="#fff" mark="#fff" />
              <p className="eyebrow relative">Get in touch</p>
              <p className="relative mt-3 font-geo text-[1.9rem] leading-tight font-semibold tracking-[-0.03em]">
                Clarity. Credibility. <span className="text-glow">Impact.</span>
              </p>
              <div className="relative mt-8 border-t border-white/10 pt-8">
                <ContactDetails enquiryTo="/contact#form-title" />
              </div>
              {hasSocials && <SocialIcons className="relative mt-8" />}
              {site.credentialsProfile && (
                <a href={site.credentialsProfile} download className="relative mt-8 inline-block font-geo text-sm font-medium text-glow hover:text-white">
                  Download company profile ↗
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
