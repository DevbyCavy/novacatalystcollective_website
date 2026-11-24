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
  whatsapp: null,
  whatsappMessage: "Hello Nova Catalyst Collective, I'd like to discuss a growth opportunity.",

  social: {
    linkedin: null, // full profile/company URL
    facebook: null,
    instagram: null,
  },

  // Downloadable company credentials profile (PDF). Put the file in /public and set
  // e.g. '/nova-catalyst-collective-profile.pdf'. Download buttons appear once set.
  credentialsProfile: null,

  // Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'. Loaded only when set.
  gaMeasurementId: null,

  forms: {
    // Enquiry, speaking and newsletter forms POST JSON here (handler: public/api/contact.php).
    // During `npm run dev` submissions are simulated so the UI can be tested.
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
