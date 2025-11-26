'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'

const navItems = [
  { href: '/what-we-do', label: 'What we do' },
  { href: '/who-we-are', label: 'Who we are' },
  { href: '/our-gp-members', label: 'Our GP members' },
  { href: '/join-the-team', label: 'Join the team' },
  { href: '/contact-us', label: 'Contact us' },
  { href: '/your-data', label: 'Your data' },
]

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
            alt="Islington GP Federation - Home"
            width={150}
            height={30}
            priority
          />
        </Link>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={styles.menuIcon}></span>
        </button>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList} role="list">
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
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
