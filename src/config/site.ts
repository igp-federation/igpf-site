export const siteConfig = {
  name: 'Islington GP Federation',
  shortName: 'IGPF',
  description:
    'Working with Islington General Practice for Islington patients. Enhanced primary care services throughout Islington and surrounding areas.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.islingtongpfederation.org',
  companyName: 'The Islington GP Group Limited',
  companyNumber: '07384595',
  address: {
    street: 'Unit 16-18 The Studios, 8 Hornsey Street',
    city: 'London',
    postcode: 'N7 8EG',
  },
  contact: {
    phone: '020 7527 1000',
    email: 'info@islingtongpfederation.org',
  },
} as const

export type SiteConfig = typeof siteConfig
