import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Clinical Governance & Quality',
  description:
    'Ensuring high standards of clinical care and patient safety across Islington GP Federation services.',
}

export default function ClinicalGovernancePage() {
  return (
    <div className={styles.servicePage}>
      <h1>Clinical Governance & Quality</h1>

      <section className={styles.section}>
        <h2>Our Commitment to Quality</h2>
        <p>
          The Islington GP Federation is committed to providing safe, effective, and high-quality
          healthcare. Our clinical governance framework ensures that all our services meet the
          highest standards of care and comply with regulatory requirements.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key Elements</h2>
        <ul>
          <li>Clinical leadership and oversight</li>
          <li>Patient safety monitoring</li>
          <li>Incident reporting and learning</li>
          <li>Clinical audit and quality improvement</li>
          <li>Staff training and competency</li>
          <li>Policy and procedure management</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Leadership</h2>
        <p>
          Our clinical governance is overseen by experienced clinical leaders including our Medical
          Director, Caldicott Guardian, and clinical service leads. This ensures clinical expertise
          is at the heart of our governance arrangements.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Regulation</h2>
        <p>
          We are registered with the Care Quality Commission (CQC) and comply with all relevant NHS
          standards and regulations. We work continuously to maintain and improve the quality of our
          services.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Patient Feedback</h2>
        <p>
          Patient feedback is an important part of our quality improvement work. We welcome
          comments, compliments, and complaints, which help us learn and improve our services.
          Please visit our <a href="/contact-us">Contact Us</a> page to share your feedback.
        </p>
      </section>
    </div>
  )
}
