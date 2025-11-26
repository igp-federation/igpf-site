import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Practices We Run',
  description: 'GP practices directly operated by the Islington GP Federation.',
}

export default function PracticesWeRunPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Practices We Run</h1>

      <section className={styles.section}>
        <h2>About Our Practices</h2>
        <p>
          In addition to supporting our 25 member practices, the Islington GP Federation directly
          operates a number of GP practices. These practices provide high-quality primary care
          services to their registered patient populations.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Commitment</h2>
        <p>
          The practices we run are committed to providing excellent patient care, with a focus on:
        </p>
        <ul>
          <li>Accessible appointments</li>
          <li>Continuity of care</li>
          <li>High clinical standards</li>
          <li>Patient-centred service delivery</li>
          <li>Integration with local health and social care services</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Registering with Our Practices</h2>
        <p>
          If you live within the catchment area of one of our practices, you may be able to register
          as a patient. Please contact the practice directly or visit our{' '}
          <a href="/our-gp-members">GP Members page</a> for more information.
        </p>
      </section>
    </div>
  )
}
