import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const variants = {
  // Solid ink — primary action
  primary: 'border border-transparent bg-white text-night hover:bg-brand',
  light: 'border border-transparent bg-white text-night hover:bg-brand',
  // Brand purple
  brand: 'border border-transparent bg-brand text-snow hover:bg-brand-soft',
  // Quiet outline
  ghost: 'border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.04]',
  outlineLight: 'border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.04]',
  outlineDark: 'border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.04]',
}

/**
 * Squared button (6px corners). With an arrow, the arrow sits in its own cell
 * behind a hairline divider: [ Label │ → ].
 * Colour transitions 200ms; press scale 0.97 (160ms ease-out); arrow nudges on hover.
 */
export default function Button({ to, href, variant = 'primary', arrow = false, size = 'md', className = '', children, ...rest }) {
  const pad = size === 'sm' ? 'px-4 py-2.5 text-sm' : 'px-5 py-3.5 text-[0.95rem]'
  const classes = `press group inline-flex items-stretch justify-center whitespace-nowrap rounded-md font-geo font-medium transition-[background-color,border-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant] ?? variants.primary} ${className}`
  const content = (
    <>
      <span className={`flex items-center ${pad}`}>{children}</span>
      {arrow && (
        <span aria-hidden="true" className={`flex items-center border-l border-current/20 ${size === 'sm' ? 'px-3' : 'px-3.5'}`}>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5" strokeWidth={1.75} />
        </span>
      )}
    </>
  )
  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>
  return <button className={classes} {...rest}>{content}</button>
}

/** Quiet text link with a diagonal arrow. `external` opens in a new tab. */
export function TextLink({ to, href, external = false, children, className = '' }) {
  const cls = `press group inline-flex items-center gap-1.5 font-geo text-sm font-medium text-glow ${className}`
  const inner = (
    <>
      <span className="underline decoration-glow/40 underline-offset-4 transition-colors duration-200 group-hover:decoration-glow">{children}</span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  )
}
