import type { Metadata } from 'next'
import styles from '../data.module.scss'

export const metadata: Metadata = {
  title: 'Modern Slavery Statement',
  description: 'Islington GP Federation Modern Slavery and Human Trafficking Statement.',
}

export default function ModernSlaveryPage() {
  return (
    <div className={styles.dataPage}>
      <h1>Modern slavery statement</h1>

      <section className={styles.section}>
        <h2>Our commitment</h2>
        <p>
          The Islington GP Group Limited (trading as Islington GP Federation) is committed to
          preventing slavery and human trafficking in our business and supply chains. We are
          committed to acting ethically and with integrity in all our business relationships.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our organisation</h2>
        <p>
          We are an NHS healthcare provider operating in Islington, London. We provide primary care
          services and employ over 300 staff across clinical and support roles.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our policies</h2>
        <p>We have policies and procedures in place to ensure that:</p>
        <ul>
          <li>We conduct our business in an ethical manner</li>
          <li>We comply with all relevant laws and regulations</li>
          <li>We treat all staff fairly and with respect</li>
          <li>We do not tolerate any form of forced labour or exploitation</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Our supply chains</h2>
        <p>
          We are committed to ensuring that our suppliers adhere to the same high standards. We
          expect all suppliers to comply with relevant laws and ethical standards.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Due diligence</h2>
        <p>As part of our commitment, we:</p>
        <ul>
          <li>Review our supply chains to assess risks</li>
          <li>Include modern slavery clauses in contracts where appropriate</li>
          <li>Train relevant staff on identifying signs of modern slavery</li>
          <li>Report any concerns through appropriate channels</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Reporting concerns</h2>
        <p>
          If you have any concerns about modern slavery or human trafficking in our organisation or
          supply chains, please contact us at{' '}
          <a href="mailto:igpf.islingtongp@nhs.net">igpf.islingtongp@nhs.net</a>.
        </p>
      </section>
    </div>
  )
}
