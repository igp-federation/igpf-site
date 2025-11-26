import SideNav from '@/components/SideNav'
import styles from './layout.module.scss'

const serviceNavItems = [
  { href: '/what-we-do', label: 'Overview' },
  { href: '/what-we-do/gynaecology-collaborative', label: 'The Gynaecology Collaborative' },
  { href: '/what-we-do/womens-health-hub', label: "Women's Health Hub" },
  { href: '/what-we-do/community-ent', label: 'Community ENT' },
  { href: '/what-we-do/severe-mental-illness', label: 'Severe Mental Illness' },
  { href: '/what-we-do/islington-training-hub', label: 'Islington Training Hub' },
  { href: '/what-we-do/islington-health-outreach', label: 'Islington Health Outreach' },
  { href: '/what-we-do/pharmacy', label: 'Pharmacy' },
  { href: '/what-we-do/practices-we-run', label: 'Practices We Run' },
  { href: '/what-we-do/ihub', label: 'I:HUB' },
  { href: '/what-we-do/primary-care-networks', label: 'Primary Care Networks' },
  { href: '/what-we-do/nursing-hub', label: 'Nursing Hub' },
  { href: '/what-we-do/spirometry', label: 'Spirometry' },
  { href: '/what-we-do/automation-in-primary-care', label: 'Automation in Primary Care' },
  { href: '/what-we-do/vaccination-support-team', label: 'Vaccination Support Team' },
  { href: '/what-we-do/pcarp', label: 'PCARP' },
  { href: '/what-we-do/clinical-governance-quality', label: 'Clinical Governance & Quality' },
]

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <SideNav items={serviceNavItems} title="Our Services" />
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
