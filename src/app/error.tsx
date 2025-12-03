'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './error.module.scss'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className={styles.errorPage}>
      <div className={styles.container}>
        <h1>Something went wrong</h1>
        <p>We apologise for the inconvenience. An unexpected error has occurred.</p>
        <div className={styles.actions}>
          <button onClick={reset} className={styles.retryButton}>
            Try again
          </button>
          <Link href="/" className={styles.homeLink}>
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
