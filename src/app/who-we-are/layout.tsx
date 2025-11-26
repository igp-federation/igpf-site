import SideNav from '@/components/SideNav'
import styles from './layout.module.scss'

const teamNavItems = [
  { href: '/who-we-are', label: 'Overview' },
  { href: '/who-we-are/board-members', label: 'Board Members' },
  { href: '/who-we-are/clinical-services-leadership', label: 'Clinical Services Leadership' },
  { href: '/who-we-are/business-services', label: 'Business Services' },
  { href: '/who-we-are/executive-team', label: 'Executive Team' },
  { href: '/who-we-are/operations-team', label: 'Operations Team' },
  { href: '/who-we-are/pcn-team', label: 'Primary Care Network Team' },
  { href: '/who-we-are/pharmacist-team', label: 'Practice Based Pharmacist Team' },
  { href: '/who-we-are/training-hub-team', label: 'Training Hub Team' },
]

export default function WhoWeAreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <SideNav items={teamNavItems} title="Our People" />
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
