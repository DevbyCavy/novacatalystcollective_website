import { motion } from 'framer-motion'

export const easePremium = [0.22, 1, 0.36, 1]

/** Fades and lifts its children into view once, when scrolled into the viewport. */
export default function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: easePremium }}
      {...rest}
    >
      {children}
    </Component>
  )
}

/** Image reveal: a curtain wipes away while the photo settles from a slight zoom. */
export function RevealImage({ image, className = '', imgClassName = '', sizes, eager = false, delay = 0 }) {
  return (
    <div className={`relative overflow-hidden bg-plum ${className}`}>
      <motion.img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 1.6, delay, ease: easePremium }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 origin-top bg-ink"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 1.1, delay, ease: easePremium }}
      />
    </div>
  )
}
