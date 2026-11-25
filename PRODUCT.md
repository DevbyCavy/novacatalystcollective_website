# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The site serves three audiences with equal priority (confirmed: no single primary audience):

- **Organisations and business leaders**: executives and founders of organisations that want to grow, lead and compete, including entering new markets. They come to judge whether Nova is credible and senior-level, then start a conversation or book a consultation.
- **Investors and strategic partners**: evaluating Nova as a partner, or as a route to relationships and opportunities in African markets.
- **Event and programme organisers**: conferences, executive programmes, institutions and women-in-business events looking to book the founder (as Digital Bae) to speak or run masterclasses.

When these audiences' needs conflict, no single one wins by default; resolve it per surface.

## Product Purpose

Nova Catalyst Collective is a strategic growth and corporate advisory firm. The website exists to establish credibility and turn visitors into conversations.

Success means, in order of the user's confirmation:
1. **Consultations booked**: qualified enquiries through the contact form (Discuss a project / Explore a partnership / Book a consultation).
2. **Speaking enquiries**: Digital Bae speaking and masterclass bookings through the dedicated speaking form.
3. **Credibility**: prospects and partners leave convinced the firm is senior-level and credible, even before making contact.

Newsletter growth is a supporting feature, not a primary success measure.

## Positioning

A senior-led, African-origin advisory firm that connects strategy with execution, visibility with credibility, and relationships with commercial opportunity. It combines strategic thinking, communications expertise, commercial insight and relationship capital, and brings in specialist partners as needed rather than operating as a single-discipline agency.

Headquartered in **Zimbabwe**, serving clients **across Africa and internationally** (confirmed).

Vision: to become a leading African-origin strategic advisory firm connecting businesses, markets and opportunities across Africa and internationally.
Mission: to empower organisations with strategic insight, communications expertise and meaningful connections that translate ambition into measurable progress.
Philosophy: Clarity (in strategy and direction), Credibility (in reputation and relationships), Impact (through meaningful business outcomes).

## Operating Context

Five service lines:
1. Strategic Growth Partnerships
2. Corporate Communications and Reputation
3. Digital Transformation, Marketing and AI
4. Executive Education and Corporate Training
5. Market Development and Strategic Partnerships

Sectors served: Financial Services and Capital Markets; Aviation, Tourism and Hospitality; Energy and Infrastructure; Mining and Natural Resources; Agribusiness and Distribution; Technology and Digital Innovation.

Approach (client's words): listen, assess, identify opportunities and develop practical strategies aligned with clients' ambitions.

**Digital Bae** is the founder's personal thought-leadership platform and sub-brand, with its own website at https://www.digitalbae.online. It covers digital literacy and innovation, AI and emerging technologies, strategic marketing and brand building, leadership and personal positioning, and entrepreneurship. Speaking formats: corporate conferences, executive leadership programmes, business masterclasses, AI and digital-literacy workshops, women-in-business events, and university and institutional engagements.

## Capabilities and Constraints

- Multi-page web site: Home, About, Services, Industries, Our Work, Digital Bae, Insights, Contact, Privacy, Terms.
- Enquiry, speaking and newsletter forms POST to a PHP handler (`public/api/contact.php`); the mail recipient is not yet configured.
- Configurable but **not yet provided**: email, phone, physical address, WhatsApp number, LinkedIn/Facebook/Instagram URLs, downloadable company profile PDF, GA4 ID, live domain (`src/data/site.js`).
- Requested features from the brief: SEO for African and international markets, WhatsApp enquiry, LinkedIn integration, analytics and Search Console, newsletter, downloadable credentials profile, publishing for case studies and insights, and a dedicated Digital Bae speaking form.
- Insights are a planned editorial programme; the five first articles exist as titles only (`src/data/insights.js`).

## Brand Commitments

- Name: **Nova Catalyst Collective** (logo lockup "NOVA CATALYST / Collective"); body copy sometimes uses "Nova Catalysts".
- Logo: supplied artwork in purple `#441E6B` and grey `#646369` (`src/assets/brand/logo-original.jpeg`; SVG redraw in `src/components/Logo.jsx`).
- Tagline: "Clarity. Credibility. Impact." Strapline: "Connecting strategy, influence and opportunity."
- Hero claim: "We Turn Strategic Ambition Into Commercial Impact."
- The founder's three binding directions:
  1. Don't make Nova Catalysts look like a social media agency; it must communicate strategic advisory, commercial intelligence and senior-level engagement.
  2. Don't dilute Digital Bae; it should be bold, visible, relatable and intellectually engaging.
  3. Make the website commercially useful; every page should encourage a client, partner or conference organiser to take a next step.

## Evidence on Hand

- Content master: `NOVA CATALYST COLLECTIVE=T.docx` (project root; contains internal notes, so it is kept out of git and never published).
- Client names approved for publishing: Team Zimbabwe (African Games 2024), Air Zimbabwe, Rimu Turf, Rimu Power, TrekStar, with the scopes listed in `src/data/content.js`.
- One stated result: Team Zimbabwe, **reported 1.3 million impressions**.
- Founder: Taffy L. Gotora, strategic marketing and communications professional, speaker and business leader.
- Digital Bae homepage capture used as a site preview: `src/assets/digitalbae-hero.jpg`.

Absent; must not be fabricated:
- Case-study detail (challenge, response, contribution, outcomes) beyond the scopes above, and any other metrics.
- Testimonials, awards, client logos, team members beyond the founder, and pricing.
- A licensed founder photograph for this site.
- Published insight articles.

## Product Principles

1. **Credibility before visibility**: senior, substantive and specific; never a social-media-agency look or tone.
2. **Every page leads to a next step**: a consultation, partnership, project or speaking enquiry.
3. **Three audiences, one firm**: serve leaders, partners and event organisers without diluting any of them.
4. **Digital Bae stays distinct**: bolder and more personal than the firm, while clearly connected to it.
5. **Only substantiated claims**: publish facts, client work and results that can be backed up; leave unknowns configurable.

## Accessibility & Inclusion

No client-specific requirement was stated. Working standard applied in the build so far: WCAG 2.1 AA contrast and keyboard access, visible focus, reduced-motion support, and mobile-native fixes (16px inputs, safe areas).
