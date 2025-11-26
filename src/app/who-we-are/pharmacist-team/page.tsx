import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Practice Based Pharmacist Team',
  description: 'Meet our team of clinical pharmacists working in GP practices across Islington.',
}

export default function PharmacistTeamPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Practice Based Pharmacist Team</h1>
      <p className={styles.intro}>
        Our team of clinical pharmacists and pharmacy technicians works within GP practices across
        Islington, providing expert medication advice and improving patient care.
      </p>

      <section className={styles.section}>
        <h2>Our Team</h2>
        <p>
          The Practice Based Pharmacist Team includes qualified clinical pharmacists and pharmacy
          technicians who are embedded within GP surgeries. They work alongside GPs and practice
          staff to provide comprehensive pharmaceutical care.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What We Do</h2>
        <ul>
          <li>Medication reviews with patients</li>
          <li>Supporting prescribing decisions</li>
          <li>Medicines reconciliation</li>
          <li>Repeat prescription management</li>
          <li>Clinical audits and quality improvement</li>
          <li>Training and education for practice staff</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Benefits for Patients</h2>
        <p>
          Having pharmacists in practices means patients can receive expert medication advice,
          structured medication reviews, and help managing multiple medicines. This improves safety
          and helps ensure medications are working effectively.
        </p>
      </section>
    </div>
  )
}
