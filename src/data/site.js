/**
 * Central site configuration.
 *
 * Values left as `null` are company details not supplied yet. Fill them in here
 * and they appear across the navigation, contact page, footer and WhatsApp button.
 */
export const site = {
  name: 'Nova Catalyst Collective',
  shortName: 'Nova Catalysts',
  tagline: 'Clarity. Credibility. Impact.',
  strapline: 'Connecting strategy, influence and opportunity.',
  disciplines: ['Strategic Growth', 'Corporate Advisory', 'Communications', 'Market Development'],
  description:
    'A strategic growth and corporate advisory firm helping organisations strengthen their competitive position, build influence and unlock commercial opportunities.',

  // Public URL of the live site, e.g. 'https://www.novacatalystcollective.com'
  url: null,

  contact: {
    email: null, // e.g. 'hello@novacatalystcollective.com'
    phone: null, // e.g. '+263 00 000 0000'
    address: null, // e.g. ['Street address', 'Harare, Zimbabwe']
  },

  // WhatsApp enquiries: international format, digits only, e.g. '263771234567'.
  // The floating WhatsApp button and contact-page link appear once this is set.
  whatsapp: '263719694235',
  whatsappMessage: "Hello Nova Catalyst Collective, I'd like to discuss a growth opportunity.",

  social: {
    linkedin: 'https://www.linkedin.com/company/nova-catalyst-collective/',
    facebook: null,
    instagram: null,
  },

  // Digital Bae — the founder's thought leadership platform (external site).
  digitalBae: {
    url: 'https://www.digitalbae.online',
    label: 'digitalbae.online',
  },

  // Downloadable company credentials profile (PDF). Put the file in /public and set
  // e.g. '/nova-catalyst-collective-profile.pdf'. Download buttons appear once set.
  credentialsProfile: null,

  // Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'. Loaded only when set.
  gaMeasurementId: null,

  forms: {
    // Web3Forms access key (public by design: it only lets visitors send to the inbox it was
    // created for). When set, every form is delivered by email through Web3Forms, in dev too.
    web3formsKey: '445b1fe6-90ff-4a3b-b1e6-fe7c2962a1f8',
    // Fallback when no key is set: forms POST JSON here (handler: public/api/contact.php),
    // and `npm run dev` only simulates delivery.
    endpoint: `${import.meta.env.BASE_URL}api/contact.php`,
    minSecondsToSubmit: 3, // bot time-trap
  },
}

export const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Digital Bae', to: '/digital-bae' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]
