/**
 * Card whose 1px border glows where the cursor is (21st.dev-inspired).
 * The CSS variables are set on the card itself (not a parent) to avoid
 * recalculating styles for the whole tree (Emil: CSS variables are inheritable).
 */
export default function GlowCard({ children, className = '', innerClassName = '', as: Tag = 'div', ...rest }) {
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Tag
      onPointerMove={onMove}
      className={`group relative rounded-[24px] bg-white/[0.07] p-px [background-image:radial-gradient(360px_circle_at_var(--mx,-300px)_var(--my,-300px),rgba(185,156,240,0.55),transparent_60%)] ${className}`}
      {...rest}
    >
      <div className={`relative h-full rounded-[23px] bg-night-2 p-7 sm:p-8 ${innerClassName}`}>{children}</div>
    </Tag>
  )
}
