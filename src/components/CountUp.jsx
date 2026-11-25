import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts a figure up once when scrolled into view ("1.3M"). Prefix/suffix are kept,
 * decimals follow the source string. Reduced motion shows the final value immediately.
 */
export default function CountUp({ value, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduce = useReducedMotion()
  const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/)
  const [display, setDisplay] = useState(reduce || !match ? value : `${match[1]}0${match[3]}`)

  useEffect(() => {
    if (!inView || reduce || !match) return
    const [, pre, num, post] = match
    const target = parseFloat(num)
    const decimals = (num.split('.')[1] || '').length
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(`${pre}${v.toFixed(decimals)}${post}`),
    })
    return () => controls.stop()
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={String(value)}>
      <span aria-hidden="true">{display}</span>
    </span>
  )
}
