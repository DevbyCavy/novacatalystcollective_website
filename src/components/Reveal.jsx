import { motion } from 'framer-motion'

/** Strong ease-out (Emil): instant feedback, long settle. */
export const easeOut = [0.23, 1, 0.32, 1]
export const easeInOut = [0.77, 0, 0.175, 1]
export const easePremium = easeOut

const viewport = { once: true, margin: '0px 0px -10% 0px' }

/** Fades content in with a short lift (12–14px reads as a fade, not a slide). */
export default function Reveal({ as = 'div', delay = 0, y = 14, className, children, ...rest }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </Component>
  )
}

/**
 * Editorial image reveal: the frame unclips from the bottom while the photo settles
 * from a 4% zoom. clip-path + transform only — both stay on the compositor.
 */
export function RevealImage({ image, className = '', imgClassName = '', sizes, eager = false, delay = 0, rounded = 'rounded-[24px]', overlay }) {
  return (
    <motion.div
      className={`relative isolate overflow-hidden bg-night-3 ${rounded} ${className}`}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={viewport}
      transition={{ duration: 1.1, delay, ease: easeInOut }}
    >
      <motion.img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.6, delay, ease: easeOut }}
      />
      {overlay}
    </motion.div>
  )
}

/**
 * Word-by-word blur-to-clear headline reveal (inspired by 21st.dev "kinetic typography").
 * Non-uniform stagger keeps it from feeling mechanical. Screen readers get the full string.
 * Pass `accentFrom` to style the words from that index onwards.
 */
export function WordReveal({ text, as = 'h1', className = '', accentFrom = -1, accentClass = '', delay = 0, inView = false, id }) {
  const words = text.split(' ')
  const Component = motion[as]
  const trigger = inView ? { whileInView: 'show', viewport } : { animate: 'show' }
  return (
    <Component id={id} className={className} aria-label={text} initial="hidden" {...trigger}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          aria-hidden="true"
          className={`inline-block will-change-[filter,transform] ${accentFrom > -1 && i >= accentFrom ? accentClass : ''}`}
          variants={{
            hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
            show: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.8, delay: delay + i * 0.055 + (i % 3) * 0.012, ease: easeOut }}
        >
          {w}
          {i < words.length - 1 && ' '}
        </motion.span>
      ))}
    </Component>
  )
}
