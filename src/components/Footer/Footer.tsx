import Link from 'next/link'
import styles from './Footer.module.scss'

const navItems = [
  { href: '/what-we-do', label: 'What we do' },
  { href: '/who-we-are', label: 'Who we are' },
  { href: '/our-gp-members', label: 'Our GP members' },
  { href: '/join-the-team', label: 'Join the team' },
  { href: '/contact-us', label: 'Contact us' },
  { href: '/your-data', label: 'Your data' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.branding}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/igpgroup-logo.webp"
              alt="Islington GP Federation"
              height={50}
              className={styles.logo}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Providing+NHS+Services+RGB+BLUE.webp"
              alt="Providing NHS Services"
              height={40}
              className={styles.nhsBadge}
            />
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <div className={styles.info}>
            <p>
              <strong>Registered Office:</strong> Unit 16-18 The Studios, 8 Hornsey Street, London,
              N7 8EG
            </p>
            <p>
              <strong>Company Number:</strong> 07384595
            </p>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} The Islington GP Group Limited
          </p>
        </div>
      </div>
    </footer>
  )
}
