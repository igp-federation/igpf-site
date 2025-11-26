import type { Metadata } from 'next'
import styles from '../data.module.scss'

export const metadata: Metadata = {
  title: 'How Your Information is Used',
  description: 'How Islington GP Federation uses your personal information to provide care.',
}

export default function HowInfoUsedPage() {
  return (
    <div className={styles.dataPage}>
      <h1>How Your Information is Used</h1>

      <section className={styles.section}>
        <h2>Primary Uses</h2>
        <p>We use your personal information primarily to:</p>
        <ul>
          <li>Provide you with healthcare services</li>
          <li>Coordinate your care with other healthcare providers</li>
          <li>Manage appointments and referrals</li>
          <li>Maintain accurate health records</li>
          <li>Contact you about your care</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Sharing Your Information</h2>
        <p>
          We may share your information with other healthcare providers involved in your care,
          including:
        </p>
        <ul>
          <li>Your registered GP practice</li>
          <li>Hospital and specialist services</li>
          <li>Community health services</li>
          <li>Mental health services</li>
          <li>Social care services (where relevant to your care)</li>
        </ul>
        <p>
          Information is only shared when necessary for your care or where we have a legal
          obligation to do so.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Other Uses</h2>
        <h3>Service Improvement</h3>
        <p>
          We may use anonymised data to improve our services, monitor quality, and plan future
          healthcare provision.
        </p>

        <h3>Legal and Regulatory Requirements</h3>
        <p>
          We may be required to share information with regulatory bodies such as the Care Quality
          Commission, or in response to legal requirements.
        </p>

        <h3>Research</h3>
        <p>
          With appropriate safeguards and approvals, anonymised data may be used for medical
          research to improve healthcare outcomes.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request corrections to inaccurate data</li>
          <li>Object to certain uses of your data</li>
          <li>Request restriction of processing in certain circumstances</li>
        </ul>
      </section>
    </div>
  )
}
