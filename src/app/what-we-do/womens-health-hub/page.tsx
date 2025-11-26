import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: "Women's Health Hub",
  description:
    "Comprehensive women's health services as part of the North Central London Women's Health Hub pilot.",
}

export default function WomensHealthHubPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Women&apos;s Health Hub</h1>

      <section className={styles.section}>
        <h2>About the Service</h2>
        <p>
          The Women&apos;s Health Hub is part of the North Central London pilot programme, providing
          comprehensive women&apos;s health services in community settings. This initiative aims to
          improve access to gynaecological care and reduce waiting times for hospital appointments.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Services Available</h2>
        <ul>
          <li>Menopause assessment and management</li>
          <li>Contraception advice and fitting</li>
          <li>Menstrual health support</li>
          <li>Sexual health screening</li>
          <li>Cervical screening</li>
          <li>General gynaecological consultations</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How to Access</h2>
        <p>
          Patients can be referred by their GP or may be able to self-refer for certain services.
          Please speak to your GP practice for more information about accessing the Women&apos;s
          Health Hub.
        </p>
      </section>
    </div>
  )
}
