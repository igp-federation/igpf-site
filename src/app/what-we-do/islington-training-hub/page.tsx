import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Islington Training Hub',
  description: 'Training and development programmes for primary care workforce in Islington.',
}

export default function IslingtonTrainingHubPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Islington Training Hub</h1>

      <section className={styles.section}>
        <h2>About the training hub</h2>
        <p>
          The Islington Training Hub provides training and development opportunities for the primary
          care workforce across Islington. We support the development of clinical and non-clinical
          staff working in general practice and related services.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What we offer</h2>
        <ul>
          <li>Training programmes for practice staff</li>
          <li>Professional development courses</li>
          <li>Clinical skills training</li>
          <li>Leadership development</li>
          <li>Apprenticeship support</li>
          <li>Career pathway guidance</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Our focus areas</h2>
        <ul>
          <li>Supporting new roles in primary care (ARRS roles)</li>
          <li>Retention and wellbeing of existing workforce</li>
          <li>Building capacity in general practice</li>
          <li>Developing future leaders in primary care</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Contact the training hub</h2>
        <p>
          For more information about training opportunities, please contact us through the main
          federation contact channels.
        </p>
      </section>
    </div>
  )
}
