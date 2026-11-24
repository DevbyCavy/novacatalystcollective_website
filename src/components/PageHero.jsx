import { motion } from 'framer-motion'
import { easePremium } from './Reveal'
import { LogoMark } from './Logo'

/** Header band for inner pages: dark aubergine, eyebrow, large serif title, intro. */
export default function PageHero({ eyebrow, title, intro, image, children }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-white sm:pt-44 sm:pb-28">
      {image && (
        <>
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="100vw"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        </>
      )}
      <LogoMark
        className="pointer-events-none absolute -right-24 -bottom-32 h-[28rem] w-[28rem] opacity-[0.05] sm:h-[34rem] sm:w-[34rem]"
        arc="#ffffff"
        mark="#ffffff"
      />
      <div className="container-x relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow flex items-center gap-4 text-accent"
        >
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
          {eyebrow}
        </motion.p>
        <h1 className="mt-7 max-w-4xl overflow-hidden pb-2 text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-7xl">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: easePremium }}
          >
            {title}
          </motion.span>
        </h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easePremium }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {intro}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  )
}
