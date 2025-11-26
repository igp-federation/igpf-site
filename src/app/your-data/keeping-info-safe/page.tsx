import type { Metadata } from 'next'
import styles from '../data.module.scss'

export const metadata: Metadata = {
  title: 'Keeping Your Information Safe',
  description: 'How Islington GP Federation protects your personal information and data security.',
}

export default function KeepingInfoSafePage() {
  return (
    <div className={styles.dataPage}>
      <h1>Keeping your information safe</h1>

      <section className={styles.section}>
        <h2>Our commitment to security</h2>
        <p>
          We take the security of your personal information seriously and have implemented robust
          measures to protect your data from unauthorised access, loss, or misuse.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Security measures</h2>
        <h3>Technical controls</h3>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Secure access controls and authentication</li>
          <li>Regular security updates and patching</li>
          <li>Firewalls and intrusion detection systems</li>
          <li>Regular security testing and audits</li>
        </ul>

        <h3>Organisational controls</h3>
        <ul>
          <li>Staff training on data protection and confidentiality</li>
          <li>Clear policies and procedures for handling data</li>
          <li>Restricted access on a need-to-know basis</li>
          <li>Confidentiality agreements for all staff</li>
          <li>Regular audits of data access</li>
        </ul>

        <h3>Physical security</h3>
        <ul>
          <li>Secure premises with controlled access</li>
          <li>Secure storage of paper records</li>
          <li>Secure disposal of confidential waste</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Data retention</h2>
        <p>
          We retain your personal information in accordance with NHS guidelines and legal
          requirements. Medical records are typically retained for a minimum period after your last
          contact with our services.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Reporting concerns</h2>
        <div className={styles.contactBox}>
          <h3>If you have concerns about data security</h3>
          <p>
            Please contact our Data Protection Officer at{' '}
            <a href="mailto:igpf.dpo@nhs.net">igpf.dpo@nhs.net</a>
          </p>
        </div>
      </section>
    </div>
  )
}
