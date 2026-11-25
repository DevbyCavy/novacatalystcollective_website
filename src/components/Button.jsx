import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const variants = {
  // White pill — primary action
  primary: 'bg-white text-night hover:bg-glow',
  light: 'bg-white text-night hover:bg-glow',
  // Brand purple pill
  brand: 'bg-brand text-white hover:bg-brand-soft',
  // Quiet outline
  ghost: 'border border-white/15 text-white hover:border-white/40 hover:bg-white/[0.04]',
  outlineLight: 'border border-white/15 text-white hover:border-white/40 hover:bg-white/[0.04]',
  outlineDark: 'border border-white/15 text-white hover:border-white/40 hover:bg-white/[0.04]',
}

/**
 * Pill button. Colour transitions 200ms; press scale 0.97 (160ms ease-out);
 * arrow nudges on hover (Tailwind v4 gates hover to pointer devices).
 */
export default function Button({ to, href, variant = 'primary', arrow = true, size = 'md', className = '', children, ...rest }) {
  const sizes = size === 'sm' ? 'px-4 py-2.5 text-sm' : 'px-6 py-3.5 text-[0.95rem]'
  const classes = `press group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-geo font-medium transition-[background-color,border-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${sizes} ${variants[variant] ?? variants.primary} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5" strokeWidth={1.75} />}
    </>
  )
  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>
  return <button className={classes} {...rest}>{content}</button>
}

/** Quiet text link with a diagonal arrow. */
export function TextLink({ to, href, children, className = '' }) {
  const cls = `press group inline-flex items-center gap-1.5 font-geo text-sm font-medium text-haze transition-colors duration-200 hover:text-white ${className}`
  const inner = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </>
  )
  return to ? <Link to={to} className={cls}>{inner}</Link> : <a href={href} className={cls}>{inner}</a>
}
