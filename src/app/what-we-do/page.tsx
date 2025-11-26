import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'Discover the enhanced primary care services provided by Islington GP Federation throughout Islington and surrounding areas.',
}

const services = [
  {
    href: '/what-we-do/gynaecology-collaborative',
    title: 'The Gynaecology Collaborative',
    description: 'Integrated community gynaecology service for women in Haringey and Islington.',
  },
  {
    href: '/what-we-do/womens-health-hub',
    title: "Women's Health Hub",
    description: "Comprehensive women's health services as part of the North Central London pilot.",
  },
  {
    href: '/what-we-do/community-ent',
    title: 'Community ENT',
    description: 'Fast and efficient community based ear, nose and throat treatments.',
  },
  {
    href: '/what-we-do/severe-mental-illness',
    title: 'Severe Mental Illness',
    description: 'Partnership service with Camden and Islington Mental Health Trust.',
  },
  {
    href: '/what-we-do/islington-training-hub',
    title: 'Islington Training Hub',
    description: 'Training and development for primary care workforce.',
  },
  {
    href: '/what-we-do/islington-health-outreach',
    title: 'Islington Health Outreach',
    description: 'Hostel Outreach Team supporting homeless healthcare.',
  },
  {
    href: '/what-we-do/pharmacy',
    title: 'Pharmacy',
    description: 'Clinical pharmacy services supporting GP practices.',
  },
  {
    href: '/what-we-do/practices-we-run',
    title: 'Practices We Run',
    description: 'GP practices directly operated by the federation.',
  },
  {
    href: '/what-we-do/ihub',
    title: 'I:HUB',
    description: 'Enhanced Access Service providing weekday evening and Saturday appointments.',
  },
  {
    href: '/what-we-do/primary-care-networks',
    title: 'Primary Care Networks',
    description: 'Supporting 4 of 5 PCNs in Islington with integrated healthcare services.',
  },
  {
    href: '/what-we-do/nursing-hub',
    title: 'Nursing Hub',
    description: 'Coordinated nursing services across Islington practices.',
  },
  {
    href: '/what-we-do/spirometry',
    title: 'Spirometry',
    description: 'Lung function testing services in community settings.',
  },
  {
    href: '/what-we-do/automation-in-primary-care',
    title: 'Automation in Primary Care',
    description: 'Digital innovation to improve efficiency and patient care.',
  },
  {
    href: '/what-we-do/vaccination-support-team',
    title: 'Vaccination Support Team',
    description: 'Supporting vaccination campaigns across Islington.',
  },
  {
    href: '/what-we-do/pcarp',
    title: 'PCARP',
    description: 'Primary Care Access Recovery Plan services.',
  },
  {
    href: '/what-we-do/clinical-governance-quality',
    title: 'Clinical Governance & Quality',
    description: 'Ensuring high standards of clinical care and safety.',
  },
]

export default function WhatWeDoPage() {
  return (
    <div className={styles.page}>
      <h1>What we do</h1>
      <p className={styles.intro}>
        The Islington GP Federation provides enhanced primary care services throughout Islington and
        surrounding areas. We work in partnership with local NHS trusts, community organisations,
        and our 25 member GP practices to deliver high-quality healthcare.
      </p>

      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <Link key={service.href} href={service.href} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
