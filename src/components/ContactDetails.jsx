import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../data/site'
import { whatsappUrl, WhatsAppGlyph } from './WhatsAppButton'

/** Contact details from site.js. Unknown values show a neutral "to be confirmed" placeholder. */
export default function ContactDetails({ compact = false }) {
  const { email, phone, address } = site.contact
  const rows = [
    { icon: Mail, label: 'Email', value: email, href: email && `mailto:${email}` },
    { icon: Phone, label: 'Telephone', value: phone, href: phone && `tel:${phone.replace(/[^\d+]/g, '')}` },
    { icon: MapPin, label: 'Office', value: address && [].concat(address).join(', ') },
  ]
  return (
    <ul className={compact ? 'space-y-4' : 'space-y-7'}>
      {rows.map(({ icon: Icon, label, value, href }) => (
        <li key={label} className="flex items-start gap-4">
          {!compact && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 text-accent">
              <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </span>
          )}
          <div>
            <p className="eyebrow text-white/50">{label}</p>
            {value ? (
              href ? (
                <a href={href} className="mt-1.5 block text-white transition-colors hover:text-accent">{value}</a>
              ) : (
                <p className="mt-1.5 text-white">{value}</p>
              )
            ) : (
              <p className="mt-1.5 text-white/50">Details to be confirmed</p>
            )}
          </div>
        </li>
      ))}
      {whatsappUrl && (
        <li className="flex items-start gap-4">
          {!compact && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 text-accent">
              <WhatsAppGlyph className="h-4 w-4" />
            </span>
          )}
          <div>
            <p className="eyebrow text-white/50">WhatsApp</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1.5 block text-white transition-colors hover:text-accent">
              Message us on WhatsApp
            </a>
          </div>
        </li>
      )}
    </ul>
  )
}
