import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import ContactDetails from '../components/ContactDetails'
import SocialIcons, { hasSocials } from '../components/SocialIcons'
import { useSeo } from '../components/Seo'
import { services } from '../data/services'
import { site } from '../data/site'

const enquiryTypes = [
  { value: 'project', label: 'Discuss a Project' },
  { value: 'partnership', label: 'Explore a Partnership' },
  { value: 'consultation', label: 'Book a Consultation' },
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
        eyebrow="Contact Us"
        title="Let's Create What's Next."
        intro="We welcome conversations with organisations, business leaders, investors and partners looking to explore strategic growth opportunities."
      />

      <section aria-labelledby="form-title" className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal as="h2" id="form-title" className="text-4xl text-ink sm:text-5xl">
              Let&rsquo;s start a conversation.
            </Reveal>
            <Reveal delay={0.08} className="mt-12">
              <EnquiryForm
                key={`${typeParam}-${interestParam}`}
                formName="enquiry"
                tone="light"
                fields={fields}
                types={enquiryTypes}
                initialType={typeParam}
                initialValues={{ interest: interestParam }}
              />
            </Reveal>
          </div>

          <Reveal delay={0.12} as="aside" aria-label="Contact details" className="lg:col-span-4 lg:col-start-9">
            <div className="bg-ink p-8 text-white sm:p-10">
              <p className="eyebrow text-accent">Get in touch</p>
              <p className="mt-4 font-display text-3xl leading-tight">{site.tagline}</p>
              <div className="mt-10 border-t border-white/10 pt-10">
                <ContactDetails />
              </div>
              {hasSocials && <SocialIcons className="mt-10" />}
              {site.credentialsProfile && (
                <a href={site.credentialsProfile} download className="mt-10 inline-block border-b border-accent pb-1 text-[0.75rem] font-semibold tracking-[0.14em] text-accent uppercase">
                  Download Company Profile
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
