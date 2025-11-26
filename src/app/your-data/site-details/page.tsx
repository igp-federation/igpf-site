import type { Metadata } from 'next'
import styles from '../data.module.scss'

export const metadata: Metadata = {
  title: 'Site Details & ODS Numbers',
  description: 'Registered locations and NHS organisation codes for Islington GP Federation.',
}

export default function SiteDetailsPage() {
  return (
    <div className={styles.dataPage}>
      <h1>Site details & ODS numbers</h1>

      <section className={styles.section}>
        <h2>Organisation details</h2>
        <div className={styles.infoBox}>
          <h3>The Islington GP Group Limited</h3>
          <p>
            <strong>Trading as:</strong> Islington GP Federation
          </p>
          <p>
            <strong>Company Number:</strong> 07384595
          </p>
          <p>
            <strong>CQC Registration:</strong> Registered with the Care Quality Commission
          </p>
          <p>
            <strong>ICO Registration:</strong> ZA147095
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Registered office</h2>
        <address className={styles.infoBox}>
          Unit 16-18, The Studios
          <br />
          8 Hornsey Street
          <br />
          London
          <br />
          N7 8EG
        </address>
      </section>

      <section className={styles.section}>
        <h2>Service locations</h2>
        <p>
          We operate services from multiple locations across Islington. For details of specific
          service locations, please see the relevant service pages under{' '}
          <a href="/what-we-do">What We Do</a>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>NHS Organisation Data Service (ODS) Codes</h2>
        <p>
          ODS codes are unique identifiers assigned to NHS organisations. These codes are used for
          administrative purposes and to ensure accurate recording of healthcare activity.
        </p>
        <p>For specific ODS codes relating to our services, please contact our main office.</p>
      </section>
    </div>
  )
}
