import { Landmark, Plane, Zap, Pickaxe, Wheat, Cpu } from 'lucide-react'

export const industries = [
  {
    id: 'financial-services',
    title: 'Financial Services and Capital Markets',
    icon: Landmark,
    focus: ['Corporate positioning', 'Investor communications', 'Stakeholder engagement', 'Market visibility'],
  },
  {
    id: 'aviation-tourism',
    title: 'Aviation, Tourism and Hospitality',
    icon: Plane,
    focus: ['Brand positioning', 'Destination marketing', 'Corporate reputation', 'Market development'],
  },
  {
    id: 'energy-infrastructure',
    title: 'Energy and Infrastructure',
    icon: Zap,
    focus: ['Stakeholder communications', 'Corporate positioning', 'Strategic partnerships'],
  },
  {
    id: 'mining',
    title: 'Mining and Natural Resources',
    icon: Pickaxe,
    focus: ['Corporate storytelling', 'Reputation', 'Market positioning', 'Stakeholder engagement'],
  },
  {
    id: 'agribusiness',
    title: 'Agribusiness and Distribution',
    icon: Wheat,
    focus: ['Market development', 'Commercial partnerships', 'Brand strategy', 'Channel development'],
  },
  {
    id: 'technology',
    title: 'Technology and Digital Innovation',
    icon: Cpu,
    focus: ['Digital strategy', 'AI enablement', 'Thought leadership', 'Business transformation'],
  },
]

export const philosophy = [
  { word: 'Clarity', text: 'Clarity in strategy and direction.' },
  { word: 'Credibility', text: 'Credibility in reputation and relationships.' },
  { word: 'Impact', text: 'Impact through meaningful business outcomes.' },
]

// "We listen, assess, identify opportunities and develop practical strategies…"
export const approachSteps = [
  { number: '01', title: 'Listen', text: "We start with your ambitions, your market and the challenges in front of you." },
  { number: '02', title: 'Assess', text: 'We examine your position, reputation and relationships with a commercial lens.' },
  { number: '03', title: 'Identify', text: 'We pinpoint the opportunities with the greatest potential to move you forward.' },
  { number: '04', title: 'Develop', text: "We build practical strategies aligned with our clients' ambitions — and help deliver them." },
]

/**
 * Selected work. Client names published with the owner's confirmation.
 * Each entry can grow into a full case study: fill in challenge / response /
 * contribution / outcome and they render automatically. Only publish results
 * that can be substantiated.
 */
export const work = [
  {
    id: 'team-zimbabwe-african-games-2024',
    client: 'Team Zimbabwe',
    project: 'African Games 2024',
    sector: 'Sport',
    scope: ['National sports marketing strategy', 'Brand development'],
    highlight: { value: '1.3M', label: 'reported impressions' },
    challenge: null,
    response: null,
    contribution: null,
    outcome: null,
  },
  {
    id: 'air-zimbabwe',
    client: 'Air Zimbabwe',
    project: 'Aviation communications',
    sector: 'Aviation',
    scope: ['Aviation communications', 'Marketing', 'Route sustenance campaigns'],
    highlight: null,
    challenge: null,
    response: null,
    contribution: null,
    outcome: null,
  },
  {
    id: 'rimu-turf',
    client: 'Rimu Turf',
    project: 'Brand launch',
    sector: 'Brand & Corporate',
    scope: ['Brand launch', 'Corporate visibility'],
    highlight: null,
    challenge: null,
    response: null,
    contribution: null,
    outcome: null,
  },
  {
    id: 'rimu-power',
    client: 'Rimu Power',
    project: 'Dealer strategy',
    sector: 'Energy',
    scope: ['Dealer strategy', 'Market development'],
    highlight: null,
    challenge: null,
    response: null,
    contribution: null,
    outcome: null,
  },
  {
    id: 'trekstar',
    client: 'TrekStar',
    project: 'Corporate positioning',
    sector: 'Corporate',
    scope: ['Corporate positioning', 'Stadium-related communications'],
    highlight: null,
    challenge: null,
    response: null,
    contribution: null,
    outcome: null,
  },
]

export const digitalBae = {
  pillars: [
    'Digital literacy and innovation',
    'Artificial intelligence and emerging technologies',
    'Strategic marketing and brand building',
    'Leadership, influence and personal positioning',
    'Entrepreneurship and business growth',
  ],
  formats: [
    'Corporate conferences',
    'Executive leadership programmes',
    'Business masterclasses',
    'AI and digital literacy workshops',
    'Women in business events',
    'University and institutional engagements',
  ],
}
