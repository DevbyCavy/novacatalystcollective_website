import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { site } from '../data/site'
import { whatsappUrl, WhatsAppGlyph } from './WhatsAppButton'

/**
 * Contact details from site.js. Only channels that are actually configured are shown;
 * nothing ever reads "to be confirmed". The confirmed base (Zimbabwe) always appears, and
 * the enquiry form is offered as the channel until an email or phone number is set.
 */
export default function ContactDetails({ compact = false, enquiryTo = '/contact?type=consultation' }) {
  const { email, phone, address } = site.contact
  const rows = [
    email && { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    phone && { icon: Phone, label: 'Telephone', value: phone, href: `tel:${phone.replace(/[^\d+]/g, '')}` },
    whatsappUrl && { glyph: true, label: 'WhatsApp', value: 'Message us on WhatsApp', href: whatsappUrl, external: true },
    {
      icon: MapPin,
      label: 'Based in',
      value: address ? [].concat(address).join(', ') : 'Zimbabwe · serving Africa & international markets',
    },
    !email && !phone && { icon: MessageSquare, label: 'Enquiries', value: 'Send us an enquiry', to: enquiryTo },
  ].filter(Boolean)

  return (
    <ul className={compact ? 'space-y-4' : 'space-y-7'}>
      {rows.map(({ icon: Icon, glyph, label, value, href, to, external }) => (
        <li key={label} className="flex items-start gap-4">
          {!compact && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 text-glow">
              {glyph ? <WhatsAppGlyph className="h-4 w-4" /> : <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
            </span>
          )}
          <div>
            <p className="eyebrow text-haze">{label}</p>
            {to ? (
              <Link to={to} className="mt-1.5 block text-white underline decoration-glow/50 underline-offset-4 transition-colors hover:text-glow">
                {value}
              </Link>
            ) : href ? (
              <a
                href={href}
                className="mt-1.5 block text-white transition-colors hover:text-glow"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {value}
              </a>
            ) : (
              <p className="mt-1.5 text-white">{value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
