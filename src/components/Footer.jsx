import { Link } from 'react-router-dom'
import Logo, { LogoMark } from './Logo'
import SocialIcons, { hasSocials } from './SocialIcons'
import ContactDetails from './ContactDetails'
import NewsletterForm from './NewsletterForm'
import { navItems, site } from '../data/site'
import { services } from '../data/services'

function Column({ title, children }) {
  return (
    <div>
      <h2 className="font-geo text-sm font-medium tracking-normal text-glow">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  )
}

const linkClass = 'text-[0.93rem] text-haze transition-colors duration-200 hover:text-white'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-night-2">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <LogoMark className="pointer-events-none absolute -right-24 -bottom-32 h-[28rem] w-[28rem] opacity-[0.04]" arc="#441E6B" mark="#441E6B" />
      <div className="container-x relative">
        <div className="grid gap-12 border-b border-white/[0.07] py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-geo text-[2.4rem] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-6xl">
              Clarity. Credibility. <span className="text-glow">Impact.</span>
            </p>
            <p className="mt-5 font-geo text-sm text-haze">{site.disciplines.join('  ·  ')}</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="font-geo text-xl font-medium">Insights, in your inbox</h2>
            <p className="mt-2 text-sm leading-relaxed text-haze">Perspectives on growth, communications, AI and African markets.</p>
            <div className="mt-5">
              <NewsletterForm idPrefix="footer-newsletter" />
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" aria-label={`${site.name} — home`} className="press inline-block">
              <Logo tone="dark" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-haze">{site.description}</p>
            <a
              href={site.digitalBae.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-geo text-sm font-medium text-glow transition-colors hover:text-white"
            >
              Digital Bae · {site.digitalBae.label} ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            {hasSocials && <SocialIcons className="mt-7" />}
            {site.credentialsProfile && (
              <a href={site.credentialsProfile} download className="mt-7 inline-block font-geo text-sm font-medium text-glow hover:text-white">
                Download company profile ↗
              </a>
            )}
          </div>
          <div className="lg:col-span-2">
            <Column title="Navigate">
              <ul className="space-y-3">
                <li><Link to="/" className={linkClass}>Home</Link></li>
                {navItems.map((n) => (
                  <li key={n.to}><Link to={n.to} className={linkClass}>{n.label}</Link></li>
                ))}
              </ul>
            </Column>
          </div>
          <div className="lg:col-span-3">
            <Column title="Services">
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.id}><Link to={`/services#${s.id}`} className={linkClass}>{s.title}</Link></li>
                ))}
              </ul>
            </Column>
          </div>
          <div className="lg:col-span-3">
            <Column title="Contact">
              <ContactDetails compact />
            </Column>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.07] py-7 pb-28 text-xs text-haze sm:flex-row sm:items-center sm:justify-between sm:pb-7">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-white">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
