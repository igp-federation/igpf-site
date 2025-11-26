import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Pharmacy Services',
  description: 'Clinical pharmacy services supporting GP practices across Islington.',
}

export default function PharmacyPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Pharmacy Services</h1>

      <section className={styles.section}>
        <h2>About our pharmacy services</h2>
        <p>
          The Islington GP Federation provides clinical pharmacy services to support GP practices
          across Islington. Our team of pharmacists and pharmacy technicians work within practices
          to improve medication safety, efficiency, and patient outcomes.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What we provide</h2>
        <ul>
          <li>Medication reviews and optimisation</li>
          <li>Repeat prescription management</li>
          <li>Medicines reconciliation</li>
          <li>Clinical medication queries</li>
          <li>Support with prescribing audits</li>
          <li>Training for practice staff</li>
          <li>Cost-effective prescribing initiatives</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Practice based pharmacists</h2>
        <p>
          Our Practice Based Pharmacist Team works directly within GP surgeries, providing expert
          advice on medications and supporting clinicians with prescribing decisions. This helps to
          free up GP time while ensuring patients receive the best possible pharmaceutical care.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Benefits for patients</h2>
        <ul>
          <li>Expert medication advice from qualified pharmacists</li>
          <li>Structured medication reviews</li>
          <li>Help managing multiple medications</li>
          <li>Improved medication safety</li>
        </ul>
      </section>
    </div>
  )
}
