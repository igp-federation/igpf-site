import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './not-found.module.scss'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <h1>Page not found</h1>
        <p>Sorry, we could not find the page you were looking for.</p>
        <p>The page may have been moved or no longer exists.</p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeLink}>
            Return to homepage
          </Link>
          <Link href="/contact-us" className={styles.contactLink}>
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
