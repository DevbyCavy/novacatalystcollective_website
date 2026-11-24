import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/)
    el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

/** Per-page title, description, Open Graph tags and canonical URL. */
export function useSeo({ title, description }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Strategic Growth & Corporate Advisory`
    document.title = fullTitle
    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    if (site.url) {
      const url = site.url.replace(/\/$/, '') + pathname
      setMeta('meta[property="og:url"]', 'content', url)
      let link = document.head.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = url
    }
  }, [title, description, pathname])
}

/** Loads Google Analytics 4 once, only when a measurement ID is configured. */
export function Analytics() {
  const { pathname } = useLocation()
  useEffect(() => {
    const id = site.gaMeasurementId
    if (!id || window.gtag) return
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments) // eslint-disable-line prefer-rest-params
    }
    window.gtag('js', new Date())
    window.gtag('config', id, { send_page_view: false })
  }, [])
  useEffect(() => {
    if (site.gaMeasurementId && window.gtag) {
      window.gtag('event', 'page_view', { page_path: pathname, page_title: document.title })
    }
  }, [pathname])
  return null
}
