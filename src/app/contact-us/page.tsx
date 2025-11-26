import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Islington GP Federation for enquiries, feedback or complaints about our NHS services.',
}

export default function ContactUsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Contact us</h1>

        <div className={styles.grid}>
          <section className={styles.contactInfo}>
            <h2>Get in touch</h2>

            <div className={styles.contactCard}>
              <h3>General enquiries</h3>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:igpf.islingtongp@nhs.net">igpf.islingtongp@nhs.net</a>
              </p>
            </div>

            <div className={styles.contactCard}>
              <h3>Patient Advice & Liaison</h3>
              <p>
                <strong>Phone:</strong> 020 3859 4959
              </p>
              <p className={styles.hours}>12 noon to 2pm, weekdays only</p>
            </div>

            <div className={styles.contactCard}>
              <h3>Patient feedback & complaints</h3>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:igpf.feedback@nhs.net">igpf.feedback@nhs.net</a>
              </p>
            </div>

            <div className={styles.contactCard}>
              <h3>Our address</h3>
              <address>
                Unit 16-18, The Studios
                <br />
                8 Hornsey Street
                <br />
                London N7 8EG
              </address>
            </div>
          </section>

          <section className={styles.feedback}>
            <h2>Feedback & complaints</h2>
            <p>
              We welcome your feedback including compliments, comments, concerns or complaints about
              our NHS services. Your feedback helps us improve our services.
            </p>

            <h3>Our commitment</h3>
            <ul>
              <li>We will acknowledge complaints within three working days</li>
              <li>We will provide investigation outcomes within 28 working days</li>
              <li>
                If we cannot meet this timeframe, we will agree an alternative schedule with you
              </li>
            </ul>

            <h3>How to complain</h3>
            <p>
              Please email your complaint to{' '}
              <a href="mailto:igpf.feedback@nhs.net">igpf.feedback@nhs.net</a>. Include as much
              detail as possible about your concern, including dates, locations, and the names of
              any staff involved if known.
            </p>
          </section>
        </div>

        <section className={styles.companyInfo}>
          <h2>Company information</h2>
          <p>
            <strong>Registered Name:</strong> The Islington GP Group Limited
          </p>
          <p>
            <strong>Company Number:</strong> 07384595
          </p>
          <p>
            <strong>Registered Office:</strong> Unit 16-18 The Studios, 8 Hornsey Street, London, N7
            8EG
          </p>
        </section>
      </div>
    </div>
  )
}
