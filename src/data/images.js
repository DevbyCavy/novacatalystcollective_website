/**
 * Image library. Every photo is stored in the project (src/assets) so the site never depends
 * on a third-party image server; stock photos came from Unsplash (free licence).
 * Each photo ships at 960px and 1920px wide; components read `src`, `srcSet` and `alt` only.
 */
import aboutBoardroom from '../assets/about-boardroom.jpg'

const files = import.meta.glob('../assets/photos/*.jpg', { eager: true, import: 'default' })

const photo = (name) => {
  const small = files[`../assets/photos/${name}-960.jpg`]
  const large = files[`../assets/photos/${name}-1920.jpg`]
  return { src: large, srcSet: `${small} 960w, ${large} 1920w` }
}

export const images = {
  hero: {
    ...photo('hero'),
    alt: 'Glass office towers rising toward an overcast sky in a financial district',
  },
  aboutPrimary: {
    src: aboutBoardroom,
    alt: 'A strategy session in a boardroom: a leader presents plans across a glass table to four colleagues, with data dashboards on the wall behind',
    position: '58% center',
  },
  aboutSecondary: {
    ...photo('office-meeting'),
    alt: 'A leadership team meeting in a glass-walled boardroom in the evening',
  },
  africa: {
    ...photo('cape-town'),
    alt: 'Aerial view of Cape Town with Table Mountain behind the city and coastline',
  },
  johannesburg: {
    ...photo('johannesburg'),
    alt: 'The Johannesburg skyline with the Hillbrow Tower under a dramatic sky',
  },
  speakingAudience: {
    ...photo('conference-audience'),
    alt: 'A conference audience seated in a dark auditorium',
  },
  speakingStage: {
    ...photo('speaker-stage'),
    alt: 'A speaker presenting on stage in front of a large screen and audience',
  },
  insightVisibility: {
    ...photo('stage-microphone'),
    alt: 'A microphone on stage in front of a blurred audience',
  },
  insightAi: {
    ...photo('tech-professional'),
    alt: 'A technology professional with a laptop standing beside server racks',
  },
  insightReputation: {
    ...photo('handshake'),
    alt: 'Two business people shaking hands across a desk',
  },
  insightComms: {
    ...photo('boardroom-presentation'),
    alt: 'A team gathered around a boardroom table during a presentation',
  },
  insightAfrica: {
    ...photo('johannesburg'),
    alt: 'The Johannesburg skyline with the Hillbrow Tower under a dramatic sky',
  },
}
