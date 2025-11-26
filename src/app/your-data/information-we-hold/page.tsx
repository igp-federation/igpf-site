import type { Metadata } from 'next'
import styles from '../data.module.scss'

export const metadata: Metadata = {
  title: 'What Information We Hold',
  description: 'Details about the types of personal data collected by Islington GP Federation.',
}

export default function InformationWeHoldPage() {
  return (
    <div className={styles.dataPage}>
      <h1>What information we hold</h1>

      <section className={styles.section}>
        <h2>Types of information</h2>
        <p>
          When you use our services, we may collect and hold the following types of personal
          information:
        </p>

        <h3>Personal details</h3>
        <ul>
          <li>Your name, date of birth, and NHS number</li>
          <li>Contact details including address, phone number, and email</li>
          <li>Emergency contact information</li>
          <li>Next of kin details</li>
        </ul>

        <h3>Health information</h3>
        <ul>
          <li>Medical history and current conditions</li>
          <li>Medications and allergies</li>
          <li>Test results and clinical notes</li>
          <li>Referral and appointment information</li>
          <li>Treatment plans and outcomes</li>
        </ul>

        <h3>Administrative information</h3>
        <ul>
          <li>GP registration details</li>
          <li>Appointment history</li>
          <li>Correspondence with healthcare providers</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Where information comes from</h2>
        <ul>
          <li>Information you provide directly to us</li>
          <li>Your registered GP practice</li>
          <li>Hospital and specialist services</li>
          <li>Other healthcare providers involved in your care</li>
          <li>NHS systems and registries</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Legal basis for processing</h2>
        <p>
          We process your personal data under several legal bases including the provision of health
          care services, compliance with legal obligations, and where we have your explicit consent.
        </p>
      </section>
    </div>
  )
}
