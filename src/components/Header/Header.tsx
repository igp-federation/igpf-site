'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { mainNavItems } from '@/config'
import { cn } from '@/lib'
import styles from './Header.module.scss'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevPathname, setPrevPathname] = useState<string | null>(null)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    if (prevPathname !== null && pathname !== prevPathname) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional: close menu on navigation
      setIsMenuOpen(false)
    }
    setPrevPathname(pathname)
  }, [pathname, prevPathname])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/igpf-logo.webp"
            alt="Islington GP Federation logo - Return to homepage"
            width={150}
            height={30}
            priority
          />
        </Link>

        <button
          className={cn(styles.menuToggle, isMenuOpen && styles.menuOpen)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={styles.menuIcon}></span>
        </button>

        <nav
          id="main-navigation"
          className={cn(styles.nav, isMenuOpen && styles.navOpen)}
          aria-label="Main navigation"
        >
          <ul className={styles.navList} role="list">
            {mainNavItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={cn(styles.navLink, isActive(item.href) && styles.navLinkActive)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
