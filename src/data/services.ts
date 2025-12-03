export interface Service {
  title: string
  description: string
  href: string
}

export const featuredServices: Service[] = [
  {
    title: 'Community ENT',
    description: 'Fast and efficient community based ear, nose and throat treatments.',
    href: '/what-we-do/community-ent',
  },
  {
    title: 'Gynaecology Services',
    description: 'Comprehensive gynaecology services available across Islington and Haringey.',
    href: '/what-we-do/gynaecology-collaborative',
  },
  {
    title: 'Enhanced Access',
    description: 'Weekday evening and Saturday GP appointments for your convenience.',
    href: '/what-we-do/ihub',
  },
  {
    title: 'Mental Health Support',
    description:
      'Severe Mental Illness service in partnership with Camden and Islington Mental Health Trust.',
    href: '/what-we-do/severe-mental-illness',
  },
  {
    title: 'Health Outreach',
    description: 'Islington Hostel Outreach Team supporting homeless healthcare.',
    href: '/what-we-do/islington-health-outreach',
  },
  {
    title: 'Practice Support',
    description: 'Workforce development, pharmacy services, and vaccination campaigns.',
    href: '/what-we-do/pharmacy',
  },
]
