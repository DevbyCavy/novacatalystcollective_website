import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { easePremium } from './Reveal'

const InsightCard = forwardRef(function InsightCard({ article, featured = false }, ref) {
  const published = article.status === 'published' && article.url
  const Wrapper = published ? 'a' : 'div'

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: easePremium }}
    >
      <Wrapper {...(published ? { href: article.url } : {})} className="group block h-full">
        <div className={`relative overflow-hidden bg-plum ${featured ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[16/10]'}`}>
          <img
            src={article.image.src}
            srcSet={article.image.srcSet}
            sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw'}
            alt={article.image.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-premium)] group-hover:scale-[1.04]"
          />
          <span className="eyebrow absolute top-4 left-4 bg-ink/85 px-3 py-2 text-accent backdrop-blur-sm">
            {published ? 'Article' : 'Forthcoming'}
          </span>
        </div>
        <div className="pt-6">
          <p className="eyebrow text-brand">{article.category}</p>
          <h3 className={`mt-3 leading-tight text-ink ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[1.65rem]'}`}>
            {article.title}
          </h3>
          <p className="mt-3 leading-relaxed text-slate">{article.excerpt}</p>
          {published && (
            <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.16em] text-brand uppercase">
              Read Perspective
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          )}
        </div>
      </Wrapper>
    </motion.article>
  )
})

export default InsightCard
