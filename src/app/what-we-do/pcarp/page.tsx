import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'PCARP',
  description:
    'Primary Care Access Recovery Plan services improving patient access to GP appointments.',
}

export default function PCARPPage() {
  return (
    <div className={styles.servicePage}>
      <h1>PCARP</h1>

      <section className={styles.section}>
        <h2>Primary Care Access Recovery Plan</h2>
        <p>
          PCARP (Primary Care Access Recovery Plan) is a national initiative to improve patient
          access to GP services. The Islington GP Federation is working with local practices to
          implement PCARP and ensure patients can get the appointments they need.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key Objectives</h2>
        <ul>
          <li>Improve patient access to appointments</li>
          <li>Reduce waiting times for GP services</li>
          <li>Enhance patient experience</li>
          <li>Optimise use of clinical and administrative capacity</li>
          <li>Implement modern access solutions</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>What We&apos;re Doing</h2>
        <ul>
          <li>Working with practices to improve appointment availability</li>
          <li>Implementing digital solutions for easier access</li>
          <li>Supporting practices with workforce and capacity planning</li>
          <li>Monitoring and improving patient experience</li>
          <li>Sharing best practice across practices</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>For Patients</h2>
        <p>
          If you need to see your GP, please contact your practice to book an appointment. Many
          practices now offer online booking, telephone consultations, and same-day urgent
          appointments.
        </p>
      </section>
    </div>
  )
}
