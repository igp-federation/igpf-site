import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Operations Team',
  description: 'Meet the operations team managing day-to-day services at Islington GP Federation.',
}

export default function OperationsTeamPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Operations Team</h1>
      <p className={styles.intro}>
        Our operations team of 25-30 dedicated staff manages the day-to-day running of federation
        services, ensuring smooth delivery and excellent patient experience.
      </p>

      <section className={styles.section}>
        <h2>What we do</h2>
        <ul>
          <li>Service coordination and delivery</li>
          <li>Clinic management and scheduling</li>
          <li>Patient liaison and support</li>
          <li>Quality monitoring and improvement</li>
          <li>Staff coordination and deployment</li>
          <li>Facilities and resource management</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Our approach</h2>
        <p>
          We work closely with clinical teams, GP practices, and partner organisations to ensure
          services run efficiently and patients receive the care they need. Our team is committed to
          continuous improvement and responsive, patient-centred service delivery.
        </p>
      </section>
    </div>
  )
}
