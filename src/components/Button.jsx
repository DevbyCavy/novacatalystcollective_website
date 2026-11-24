import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  // Solid white on dark backgrounds
  light: 'bg-white text-ink hover:bg-accent',
  // Outline on dark backgrounds
  outlineLight: 'border border-white/35 text-white hover:border-accent hover:text-accent',
  // Solid brand purple on light backgrounds
  brand: 'bg-brand text-white hover:bg-brand-soft',
  // Outline on light backgrounds
  outlineDark: 'border border-brand/30 text-brand hover:border-brand hover:bg-brand hover:text-white',
}

/**
 * Button with a sliding arrow. Renders a router <Link> for internal `to`,
 * an <a> for `href`, otherwise a <button>.
 */
export default function Button({ to, href, variant = 'brand', arrow = true, className = '', children, ...rest }) {
  const classes = `group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      )}
    </>
  )
  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>
  return <button className={classes} {...rest}>{content}</button>
}
