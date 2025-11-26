import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Nursing Hub',
  description: 'Coordinated nursing services supporting GP practices across Islington.',
}

export default function NursingHubPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Nursing Hub</h1>

      <section className={styles.section}>
        <h2>About the nursing hub</h2>
        <p>
          The Nursing Hub provides coordinated nursing services across Islington GP practices. We
          support practices with nursing capacity and help ensure high-quality nursing care is
          available to all patients.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Services provided</h2>
        <ul>
          <li>Practice nursing support</li>
          <li>Chronic disease management</li>
          <li>Health checks and screening</li>
          <li>Wound care</li>
          <li>Vaccinations and immunisations</li>
          <li>Cervical screening</li>
          <li>Travel health advice</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Supporting practices</h2>
        <p>
          We help practices maintain nursing capacity by providing flexible nursing support. This
          includes covering absences, supporting with high-demand periods, and helping practices
          develop their nursing services.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Training and development</h2>
        <p>
          The Nursing Hub also supports the professional development of nurses working in primary
          care, providing training opportunities and clinical supervision.
        </p>
      </section>
    </div>
  )
}
