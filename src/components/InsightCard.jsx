import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { easeOut } from './Reveal'

/** Insight card on dark. Forthcoming entries render without a link. */
const InsightCard = forwardRef(function InsightCard({ article }, ref) {
  const published = article.status === 'published' && article.url
  const Wrapper = published ? 'a' : 'div'
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      exit={{ opacity: 0, transition: { duration: 0.12 } }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <Wrapper
        {...(published ? { href: article.url } : {})}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-night-2 transition-colors duration-300 hover:border-white/20"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-night-3">
          <img
            src={article.image.src}
            srcSet={article.image.srcSet}
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
            alt={article.image.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-80 transition-[transform,opacity] duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night-2 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-night/70 px-3 py-1 font-geo text-xs text-glow backdrop-blur">
            {published ? 'Article' : 'Coming soon'}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="font-geo text-xs tracking-[0.16em] text-haze uppercase">{article.category}</p>
          <h3 className="mt-3 text-xl leading-snug tracking-[-0.02em] sm:text-[1.4rem]">{article.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-haze">{article.excerpt}</p>
          {published && (
            <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-geo text-sm font-medium text-glow">
              Read perspective <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          )}
        </div>
      </Wrapper>
    </motion.article>
  )
})

export default InsightCard
