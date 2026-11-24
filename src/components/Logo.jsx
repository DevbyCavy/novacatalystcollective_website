/**
 * Nova Catalyst Collective logo, redrawn as SVG from the supplied artwork
 * (src/assets/brand/logo-original.jpeg) so it stays crisp and can be recoloured
 * for dark backgrounds. Replace with the designer's vector file when available.
 */
export function LogoMark({ className = 'h-10 w-10', arc = 'currentColor', mark = 'currentColor' }) {
  // Geometry in a 0–100 box: open "C" ring with an inner hairline, an N-form arrow and a dot.
  const cx = 50
  const cy = 50
  const pt = (r, deg) => {
    const a = (deg * Math.PI) / 180
    return `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy - r * Math.sin(a)).toFixed(2)}`
  }
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      {/* outer ring: from 40° round the left side to -40° */}
      <path d={`M ${pt(45, 40)} A 45 45 0 1 0 ${pt(45, -40)}`} fill="none" stroke={arc} strokeWidth="6" strokeLinecap="round" />
      {/* inner hairlines */}
      <path d={`M ${pt(39.5, 150)} A 39.5 39.5 0 0 1 ${pt(39.5, 50)}`} fill="none" stroke={arc} strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
      <path d={`M ${pt(39.5, -50)} A 39.5 39.5 0 0 1 ${pt(39.5, -150)}`} fill="none" stroke={arc} strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
      {/* N-form arrow */}
      <path d="M31.4 27.7 L67.6 63.4 L67.6 74.4 L40.4 47.2 L40.4 59.8 L31.4 68.8 Z" fill={mark} />
      {/* dot */}
      <circle cx="62.7" cy="33.3" r="4.4" fill={mark} />
    </svg>
  )
}

/**
 * Full lockup. tone="light" for dark backgrounds (white + lilac),
 * tone="dark" for light backgrounds (original purple + grey).
 */
export default function Logo({ tone = 'light', className = '', compact = false }) {
  const light = tone === 'light'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark
        className={compact ? 'h-9 w-9' : 'h-11 w-11'}
        arc={light ? '#ffffff' : '#441E6B'}
        mark={light ? '#B9A2DC' : '#441E6B'}
      />
      <span className="flex flex-col font-brand leading-none">
        <span className={`text-[0.95rem] font-extrabold tracking-[0.02em] ${compact ? '' : 'sm:text-[1.05rem]'}`}>
          <span className={light ? 'text-white' : 'text-brand'}>NOVA </span>
          <span className={light ? 'text-white/70' : 'text-grey'}>CATALYST</span>
        </span>
        <span className={`mt-1 text-[0.82rem] font-light tracking-[0.04em] ${light ? 'text-accent' : 'text-brand'}`}>
          Collective
        </span>
      </span>
    </span>
  )
}
