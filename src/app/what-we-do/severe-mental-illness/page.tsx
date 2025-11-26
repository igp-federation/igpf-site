import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Severe Mental Illness Service',
  description:
    'Partnership service with Camden and Islington Mental Health Trust for patients with severe mental illness.',
}

export default function SevereMentalIllnessPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Severe Mental Illness Service</h1>

      <section className={styles.section}>
        <h2>About the service</h2>
        <p>
          Our Severe Mental Illness (SMI) service is delivered in partnership with Camden and
          Islington NHS Foundation Trust. This service ensures that patients with severe mental
          illness receive comprehensive physical health checks and appropriate support.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What we provide</h2>
        <ul>
          <li>Annual physical health checks for patients on the SMI register</li>
          <li>Cardiovascular risk assessment</li>
          <li>Blood pressure and weight monitoring</li>
          <li>Diabetes screening</li>
          <li>Lifestyle advice and support</li>
          <li>Medication reviews</li>
          <li>Coordination with mental health services</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Why physical health checks matter</h2>
        <p>
          People with severe mental illness are at increased risk of physical health problems. Our
          integrated approach ensures that both mental and physical health needs are addressed,
          helping to improve overall health outcomes and life expectancy.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our partners</h2>
        <p>
          We work closely with Camden and Islington NHS Foundation Trust mental health teams to
          provide coordinated care for our patients.
        </p>
      </section>
    </div>
  )
}
