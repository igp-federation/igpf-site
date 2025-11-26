import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Your Data',
  description:
    'Information about how Islington GP Federation protects your privacy and handles your personal data.',
}

export default function YourDataPage() {
  return (
    <div className={styles.page}>
      <h1>Your data</h1>

      <section className={styles.intro}>
        <p className={styles.statement}>
          The Islington GP Federation is committed to protecting your privacy.
        </p>
        <p>
          We take the security and confidentiality of your personal information seriously. This
          section explains how we collect, use, and protect your data in accordance with data
          protection legislation.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key contacts</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <h3>Senior Information Risk Owner</h3>
            <p>Michael Clowes</p>
            <a href="mailto:Igpf.siro@nhs.net">Igpf.siro@nhs.net</a>
          </div>
          <div className={styles.contactCard}>
            <h3>Caldicott Guardian</h3>
            <p>Deborah Snook</p>
            <a href="mailto:Igpf.caldicott@nhs.net">Igpf.caldicott@nhs.net</a>
          </div>
          <div className={styles.contactCard}>
            <h3>Data Protection Officer</h3>
            <p>Steve Durbin</p>
            <a href="mailto:Igpf.dpo@nhs.net">Igpf.dpo@nhs.net</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Regulatory information</h2>
        <p>
          We operate under Care Quality Commission oversight and maintain registration with the
          Information Commissioner&apos;s Office as a Data Controller.
        </p>
        <p>
          <strong>ICO Registration Number:</strong> ZA147095
        </p>
      </section>

      <section className={styles.section}>
        <h2>Learn more</h2>
        <div className={styles.linkGrid}>
          <Link href="/your-data/information-we-hold" className={styles.linkCard}>
            <h3>What information we hold</h3>
            <p>Details about the types of personal data we collect and store.</p>
          </Link>
          <Link href="/your-data/how-info-used" className={styles.linkCard}>
            <h3>How your information is used</h3>
            <p>How we use your data to provide healthcare services.</p>
          </Link>
          <Link href="/your-data/keeping-info-safe" className={styles.linkCard}>
            <h3>Keeping your information safe</h3>
            <p>The security measures we use to protect your data.</p>
          </Link>
          <Link href="/your-data/site-details" className={styles.linkCard}>
            <h3>Site details & ODS numbers</h3>
            <p>Our registered locations and NHS organisation codes.</p>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Data requests</h2>
        <p>
          If you have questions about your data or wish to make a data access request, please
          contact our Data Protection Officer at{' '}
          <a href="mailto:igpf.dpo@nhs.net">igpf.dpo@nhs.net</a>.
        </p>
      </section>
    </div>
  )
}
