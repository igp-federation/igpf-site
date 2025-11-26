import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Automation in Primary Care',
  description:
    'Digital innovation and automation to improve efficiency and patient care in primary care.',
}

export default function AutomationPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Automation in primary care</h1>

      <section className={styles.section}>
        <h2>About our work</h2>
        <p>
          The Islington GP Federation is committed to using digital innovation and automation to
          improve efficiency in primary care. By automating routine tasks, we help free up clinical
          time for patient care and improve the overall experience for both patients and staff.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Areas of focus</h2>
        <ul>
          <li>Automated appointment reminders</li>
          <li>Digital prescription management</li>
          <li>Online patient services</li>
          <li>Clinical workflow optimisation</li>
          <li>Data analytics and reporting</li>
          <li>Integration between health systems</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Benefits</h2>
        <ul>
          <li>Reduced administrative burden on practice staff</li>
          <li>More time for clinicians to spend with patients</li>
          <li>Improved accuracy and consistency</li>
          <li>Better patient experience</li>
          <li>Enhanced data quality for decision-making</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Supporting digital transformation</h2>
        <p>
          We work with practices to identify opportunities for automation and provide support with
          implementing new digital solutions. This includes training, change management, and ongoing
          technical support.
        </p>
      </section>
    </div>
  )
}
