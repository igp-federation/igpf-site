'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './SideNav.module.scss'

interface NavItem {
  href: string
  label: string
}

interface SideNavProps {
  items: NavItem[]
  title?: string
}

export default function SideNav({ items, title }: SideNavProps) {
  const pathname = usePathname()

  return (
    <nav className={styles.sideNav}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
