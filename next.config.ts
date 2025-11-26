import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // What We Do - Service pages (old flat URLs to new nested)
      {
        source: '/the-gynaecology-collaborative',
        destination: '/what-we-do/gynaecology-collaborative',
        permanent: true,
      },
      {
        source: '/womenshealthhub',
        destination: '/what-we-do/womens-health-hub',
        permanent: true,
      },
      {
        source: '/community-ent',
        destination: '/what-we-do/community-ent',
        permanent: true,
      },
      {
        source: '/severe-mental',
        destination: '/what-we-do/severe-mental-illness',
        permanent: true,
      },
      {
        source: '/training-hub',
        destination: '/what-we-do/islington-training-hub',
        permanent: true,
      },
      {
        source: '/health-outreach',
        destination: '/what-we-do/islington-health-outreach',
        permanent: true,
      },
      {
        source: '/pharmacy',
        destination: '/what-we-do/pharmacy',
        permanent: true,
      },
      {
        source: '/barnsbury-and-northern',
        destination: '/what-we-do/practices-we-run',
        permanent: true,
      },
      {
        source: '/ihub',
        destination: '/what-we-do/ihub',
        permanent: true,
      },
      {
        source: '/primary-care-networks',
        destination: '/what-we-do/primary-care-networks',
        permanent: true,
      },
      {
        source: '/nursing-hub',
        destination: '/what-we-do/nursing-hub',
        permanent: true,
      },
      {
        source: '/spirometry',
        destination: '/what-we-do/spirometry',
        permanent: true,
      },
      {
        source: '/automation-in-primary-care',
        destination: '/what-we-do/automation-in-primary-care',
        permanent: true,
      },
      {
        source: '/vaccination-support-team',
        destination: '/what-we-do/vaccination-support-team',
        permanent: true,
      },
      {
        source: '/pcarp',
        destination: '/what-we-do/pcarp',
        permanent: true,
      },
      {
        source: '/clinical-governance',
        destination: '/what-we-do/clinical-governance-quality',
        permanent: true,
      },

      // Who We Are - Team pages (old Squarespace URLs to new nested)
      {
        source: '/primary-care-networks-new',
        destination: '/who-we-are/board-members',
        permanent: true,
      },
      {
        source: '/clinical-services-leadership',
        destination: '/who-we-are/clinical-services-leadership',
        permanent: true,
      },
      {
        source: '/business-services',
        destination: '/who-we-are/business-services',
        permanent: true,
      },
      {
        source: '/executive-team-copy',
        destination: '/who-we-are/executive-team',
        permanent: true,
      },
      {
        source: '/operations-team-2',
        destination: '/who-we-are/operations-team',
        permanent: true,
      },
      {
        source: '/primary-care-network-pcn',
        destination: '/who-we-are/pcn-team',
        permanent: true,
      },
      {
        source: '/practice-based-pharmacist-team-new',
        destination: '/who-we-are/pharmacist-team',
        permanent: true,
      },
      {
        source: '/islington-training-hub-team',
        destination: '/who-we-are/training-hub-team',
        permanent: true,
      },

      // Your Data - Privacy pages (old flat URLs to new nested)
      {
        source: '/what-information-we-hold',
        destination: '/your-data/information-we-hold',
        permanent: true,
      },
      {
        source: '/how-your-information-is-used',
        destination: '/your-data/how-info-used',
        permanent: true,
      },
      {
        source: '/keeping-your-information-safe',
        destination: '/your-data/keeping-info-safe',
        permanent: true,
      },
      {
        source: '/site-details-ods-numbers',
        destination: '/your-data/site-details',
        permanent: true,
      },
      {
        source: '/modern-slavery-statement',
        destination: '/your-data/modern-slavery',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
