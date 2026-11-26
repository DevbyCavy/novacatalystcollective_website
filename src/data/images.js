/**
 * Image library. Photography is served from Unsplash (free licence) as interim
 * imagery. To switch to brand photography, replace `src` / `srcSet` with imported
 * assets from src/assets — components only read these fields.
 */
import aboutBoardroom from '../assets/about-boardroom.jpg'

const unsplash = (id) => {
  const base = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75`
  return {
    src: `${base}&w=1600`,
    srcSet: [640, 960, 1280, 1600, 2200].map((w) => `${base}&w=${w} ${w}w`).join(', '),
  }
}

export const images = {
  hero: {
    ...unsplash('1486406146926-c627a92ad1ab'),
    alt: 'Glass office towers rising toward an overcast sky in a financial district',
  },
  aboutPrimary: {
    src: aboutBoardroom,
    alt: 'A strategy session in a boardroom: a leader presents plans across a glass table to four colleagues, with data dashboards on the wall behind',
    position: '58% center',
  },
  aboutSecondary: {
    ...unsplash('1541746972996-4e0b0f43e02a'),
    alt: 'A leadership team meeting in a glass-walled boardroom in the evening',
  },
  africa: {
    ...unsplash('1580060839134-75a5edca2e99'),
    alt: 'Aerial view of Cape Town with Table Mountain behind the city and coastline',
  },
  johannesburg: {
    ...unsplash('1577948000111-9c970dfe3743'),
    alt: 'The Johannesburg skyline with the Hillbrow Tower under a dramatic sky',
  },
  speakingAudience: {
    ...unsplash('1540575467063-178a50c2df87'),
    alt: 'A conference audience seated in a dark auditorium',
  },
  speakingStage: {
    ...unsplash('1505373877841-8d25f7d46678'),
    alt: 'A speaker presenting on stage in front of a large screen and audience',
  },
  insightVisibility: {
    ...unsplash('1475721027785-f74eccf877e2'),
    alt: 'A microphone on stage in front of a blurred audience',
  },
  insightAi: {
    ...unsplash('1573164713988-8665fc963095'),
    alt: 'A technology professional with a laptop standing beside server racks',
  },
  insightReputation: {
    ...unsplash('1521791136064-7986c2920216'),
    alt: 'Two business people shaking hands across a desk',
  },
  insightComms: {
    ...unsplash('1542744173-8e7e53415bb0'),
    alt: 'A team gathered around a boardroom table during a presentation',
  },
  insightAfrica: {
    ...unsplash('1577948000111-9c970dfe3743'),
    alt: 'The Johannesburg skyline with the Hillbrow Tower under a dramatic sky',
  },
}
