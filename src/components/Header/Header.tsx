'use client'

import { useState } from 'react'
import Link from 'next/link'
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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/igpgroup-logo.webp"
            alt="Islington GP Federation"
            height={50}
          />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
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
