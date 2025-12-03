import Link from 'next/link'
import Image from 'next/image'
import { mainNavItems, siteConfig } from '@/config'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.branding}>
            <Image
              src="/images/igpgroup-logo.webp"
              alt="Islington GP Group logo"
              width={150}
              height={50}
              className={styles.logo}
            />
            <Image
              src="/images/Providing+NHS+Services+RGB+BLUE.webp"
              alt="NHS badge - Providing NHS Services"
              width={120}
              height={40}
              className={styles.nhsBadge}
            />
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <ul className={styles.navList} role="list">
              {mainNavItems.map((item) => (
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
              <strong>Registered Office:</strong> {siteConfig.address.street},{' '}
              {siteConfig.address.city}, {siteConfig.address.postcode}
            </p>
            <p>
              <strong>Company Number:</strong> {siteConfig.companyNumber}
            </p>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {siteConfig.companyName}
          </p>
        </div>
      </div>
    </footer>
  )
}
