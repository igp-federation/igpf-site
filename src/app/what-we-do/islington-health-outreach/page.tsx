import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Islington Health Outreach',
  description:
    'Hostel Outreach Team providing healthcare services for homeless and vulnerably housed people in Islington.',
}

export default function IslingtonHealthOutreachPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Islington Health Outreach</h1>

      <section className={styles.section}>
        <h2>About the service</h2>
        <p>
          The Islington Hostel Outreach Team (IHOT) provides primary healthcare services to homeless
          and vulnerably housed people living in hostels and temporary accommodation across
          Islington. We bring healthcare directly to those who face barriers to accessing
          traditional GP services.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What we provide</h2>
        <ul>
          <li>GP consultations at hostel locations</li>
          <li>Health assessments and screening</li>
          <li>Wound care and minor procedures</li>
          <li>Mental health support</li>
          <li>Substance misuse support</li>
          <li>Help registering with a GP practice</li>
          <li>Vaccinations and immunisations</li>
          <li>Referrals to specialist services</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Who we help</h2>
        <p>
          Our service is available to anyone living in a hostel or temporary accommodation in
          Islington, including those who are not currently registered with a GP. We work with people
          experiencing homelessness, rough sleeping, or housing instability.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our approach</h2>
        <p>
          We understand that people experiencing homelessness often face multiple complex health
          needs and may have had difficult experiences with healthcare in the past. Our team takes a
          compassionate, non-judgmental approach and works flexibly to meet people where they are.
        </p>
      </section>
    </div>
  )
}
