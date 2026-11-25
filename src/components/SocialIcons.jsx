import { site } from '../data/site'

// Brand glyphs drawn inline (lucide no longer ships brand logos).
const glyphs = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75v5.7h-4v-5.05c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.95 1.3-1.95 2.66v5.14h-4z" />
  ),
  facebook: (
    <path d="M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8v8h3.4z" />
  ),
  instagram: (
    <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1zM17 5.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM21.95 8.1c-.07-1.5-.4-2.83-1.5-3.92-1.1-1.1-2.42-1.43-3.92-1.5C14.98 2.6 9.02 2.6 7.47 2.68c-1.5.07-2.82.4-3.92 1.5S2.12 6.6 2.05 8.1c-.09 1.55-.09 6.25 0 7.8.07 1.5.4 2.83 1.5 3.92 1.1 1.1 2.42 1.43 3.92 1.5 1.55.09 7.5.09 9.06 0 1.5-.07 2.83-.4 3.92-1.5 1.1-1.1 1.43-2.42 1.5-3.92.09-1.55.09-6.24 0-7.8z" />
  ),
}

const labels = { linkedin: 'LinkedIn', facebook: 'Facebook', instagram: 'Instagram' }

/** Lists configured social profiles. Renders nothing for profiles not yet set in site.js. */
export default function SocialIcons({ className = '' }) {
  const entries = Object.entries(site.social).filter(([, url]) => url)
  if (!entries.length) return null
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {entries.map(([key, url]) => (
        <li key={key}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on ${labels[key]}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/70 transition-colors hover:border-glow hover:text-glow"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              {glyphs[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

export const hasSocials = Object.values(site.social).some(Boolean)
