# Nova Catalyst Collective — Website

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide + React Router.

## Commands

```bash
npm install          # first time only
npm run dev          # local development at http://localhost:5173
npm run build        # production build to dist/ (served from a domain root)
npm run build:xampp  # build for http://localhost/novacatalystcollective/dist/
npm run preview      # preview the production build
```

## Pages

Home · About · Services (What We Do) · Industries · Our Work · Digital Bae · Insights · Contact · Privacy · Terms · 404

## Where to edit content

| What | File |
| --- | --- |
| Name, contact details, WhatsApp, socials, company profile PDF, Google Analytics, form endpoint | `src/data/site.js` |
| Services and offerings | `src/data/services.js` |
| Industries, philosophy, approach, Our Work entries, Digital Bae pillars/formats | `src/data/content.js` |
| Insight articles + categories (CMS-ready shape) | `src/data/insights.js` |
| Photography | `src/data/images.js` |
| Colours, fonts | `src/styles/index.css` (`@theme`) |
| Logo (SVG redraw of the supplied artwork) | `src/components/Logo.jsx` |
| Default title / meta / Open Graph / Search Console tag | `index.html` |

Unset values in `site.js` stay hidden or show "Details to be confirmed":
- `whatsapp` → floating WhatsApp button + contact-page link
- `social.linkedin / facebook / instagram` → social icons
- `credentialsProfile` → "Download Company Profile" buttons (put the PDF in `public/`)
- `gaMeasurementId` → Google Analytics 4

## Forms

Contact enquiry, Digital Bae speaking enquiry and newsletter sign-up all have
client-side validation, a honeypot field and a minimum time-on-page check.

- In `npm run dev`, submissions are **simulated** (logged to the browser console).
- In production they POST JSON to `public/api/contact.php`, which re-validates,
  rate-limits per IP and emails the submission. Set `NC_CONTACT_TO` / `NC_CONTACT_FROM`
  in that file (or as environment variables) and configure PHP mail/SMTP on the server.
  Until a recipient is set, forms show a clear error.

## Our Work

Entries in `src/data/content.js` support full case studies: fill in `challenge`,
`response`, `contribution`, `outcome` and they render on the Our Work page.
Only publish results that can be substantiated.

## Before launch

- Set the live domain in `site.js` (`url`), `index.html`, `public/sitemap.xml`, `public/robots.txt`.
- Replace placeholder Privacy Policy / Terms text in `src/pages/Legal.jsx`.
- Add a founder photograph for Digital Bae and brand photography to replace interim Unsplash images.
- Swap the SVG logo redraw for the designer's vector file if available.
