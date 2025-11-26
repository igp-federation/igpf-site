import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.islingtongpfederation.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/what-we-do',
    '/what-we-do/community-ent',
    '/what-we-do/gynaecology-collaborative',
    '/what-we-do/womens-health-hub',
    '/what-we-do/severe-mental-illness',
    '/what-we-do/islington-health-outreach',
    '/what-we-do/practices-we-run',
    '/what-we-do/ihub',
    '/what-we-do/nursing-hub',
    '/what-we-do/spirometry',
    '/what-we-do/automation-in-primary-care',
    '/what-we-do/vaccination-support-team',
    '/what-we-do/clinical-governance-quality',
    '/what-we-do/islington-training-hub',
    '/what-we-do/pcarp',
    '/what-we-do/pharmacy',
    '/what-we-do/primary-care-networks',
    '/who-we-are',
    '/who-we-are/board-members',
    '/who-we-are/business-services',
    '/who-we-are/executive-team',
    '/who-we-are/operations-team',
    '/who-we-are/pcn-team',
    '/who-we-are/pharmacist-team',
    '/who-we-are/training-hub-team',
    '/who-we-are/clinical-services-leadership',
    '/our-gp-members',
    '/join-the-team',
    '/contact-us',
    '/your-data',
    '/your-data/information-we-hold',
    '/your-data/how-info-used',
    '/your-data/keeping-info-safe',
    '/your-data/modern-slavery',
    '/your-data/site-details',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
