import { Link } from 'react-router-dom'
import Logo from './Logo'
import SocialIcons, { hasSocials } from './SocialIcons'
import ContactDetails from './ContactDetails'
import NewsletterForm from './NewsletterForm'
import { navItems, site } from '../data/site'
import { services } from '../data/services'

function Column({ title, children }) {
  return (
    <div>
      <h2 className="eyebrow font-sans text-accent">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  )
}

const linkClass = 'text-sm text-white/65 transition-colors hover:text-white'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-white">
      <div className="container-x">
        {/* Brand statement + newsletter */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Link to="/" aria-label={`${site.name} — home`}>
              <Logo />
            </Link>
            <p className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
              {site.tagline.split(' ').map((w, i) => (
                <span key={w} className={i === 2 ? 'text-accent italic' : ''}>{w} </span>
              ))}
            </p>
            <p className="eyebrow mt-6 text-white/50">{site.disciplines.join('  ·  ')}</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="eyebrow font-sans text-accent">Insights newsletter</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Perspectives on growth, communications, AI and African markets.
            </p>
            <div className="mt-5">
              <NewsletterForm idPrefix="footer-newsletter" />
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-relaxed text-white/60">{site.description}</p>
            <p className="mt-6 font-display text-xl text-white/80 italic">{site.strapline}</p>
            {hasSocials && <SocialIcons className="mt-8" />}
            {site.credentialsProfile && (
              <a href={site.credentialsProfile} download className="mt-8 inline-block border-b border-accent pb-1 text-[0.75rem] font-semibold tracking-[0.14em] text-accent uppercase">
                Download Company Profile
              </a>
            )}
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
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

        <div className="flex flex-col gap-4 py-8 text-xs tracking-wide text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <ul className="flex gap-8">
            <li><Link to="/privacy" className="transition-colors hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-accent">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
