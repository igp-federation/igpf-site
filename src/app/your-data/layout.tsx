import SideNav from '@/components/SideNav'
import styles from './layout.module.scss'

const dataNavItems = [
  { href: '/your-data', label: 'Overview' },
  { href: '/your-data/information-we-hold', label: 'What Information We Hold' },
  { href: '/your-data/how-info-used', label: 'How Your Information is Used' },
  { href: '/your-data/keeping-info-safe', label: 'Keeping Your Information Safe' },
  { href: '/your-data/site-details', label: 'Site Details & ODS Numbers' },
  { href: '/your-data/modern-slavery', label: 'Modern Slavery Statement' },
]

export default function YourDataLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <SideNav items={dataNavItems} title="Your Data" />
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
