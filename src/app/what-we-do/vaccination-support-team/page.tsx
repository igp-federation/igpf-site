import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Vaccination Support Team',
  description: 'Supporting vaccination campaigns across Islington GP practices.',
}

export default function VaccinationSupportTeamPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Vaccination Support Team</h1>

      <section className={styles.section}>
        <h2>About the Team</h2>
        <p>
          The Vaccination Support Team helps coordinate and deliver vaccination programmes across
          Islington. We work with GP practices to ensure patients have access to important
          vaccinations and support the delivery of seasonal and targeted vaccination campaigns.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Vaccination Programmes</h2>
        <ul>
          <li>Seasonal flu vaccination</li>
          <li>COVID-19 vaccination</li>
          <li>Childhood immunisation support</li>
          <li>Shingles vaccination</li>
          <li>Pneumococcal vaccination</li>
          <li>Travel vaccinations</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How We Help</h2>
        <ul>
          <li>Coordination of vaccination clinics</li>
          <li>Staff training and support</li>
          <li>Vaccine supply management</li>
          <li>Patient outreach and engagement</li>
          <li>Data analysis and reporting</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Getting Vaccinated</h2>
        <p>
          To receive a vaccination, please contact your registered GP practice. They will be able to
          advise which vaccinations you are eligible for and book you into an appropriate clinic.
        </p>
      </section>
    </div>
  )
}
