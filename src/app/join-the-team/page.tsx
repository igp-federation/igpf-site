import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Join The Team',
  description:
    'Career opportunities at Islington GP Federation. Join over 300 talented healthcare professionals.',
}

const roles = [
  'Doctors',
  'Nurses',
  'Pharmacists',
  'Physiotherapists',
  'Care Coordinators',
  'Paramedics',
  'Healthcare Assistants',
  'Administrative Staff',
]

export default function JoinTheTeamPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Join the Team</h1>

        <section className={styles.intro}>
          <p>
            We are still a young business that employs over 300 talented individuals from all areas
            of health and social care. Our operations team consists of 25-30 people, while our
            broader workforce includes clinical and support professionals across a wide range of
            roles.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Workforce</h2>
          <p>We employ professionals across many disciplines including:</p>
          <div className={styles.roleGrid}>
            {roles.map((role) => (
              <div key={role} className={styles.roleCard}>
                {role}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Working in Partnership</h2>
          <p>
            We collaborate with key NHS and community providers including Whittington Health NHS
            Trust, Camden & Islington NHS Foundation Trust, and Age UK Islington. Joining us means
            being part of a wider network committed to improving healthcare in Islington.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Work With Us?</h2>
          <ul>
            <li>Be part of a growing, innovative healthcare organisation</li>
            <li>Work across a variety of community-based services</li>
            <li>Access to training and professional development</li>
            <li>Collaborative, supportive working environment</li>
            <li>Opportunity to make a real difference to patient care</li>
          </ul>
        </section>

        <section className={styles.contactBox}>
          <h2>Current Vacancies</h2>
          <p>
            For information about current vacancies and how to apply, please contact us at{' '}
            <a href="mailto:igpf.islingtongp@nhs.net">igpf.islingtongp@nhs.net</a>
          </p>
        </section>
      </div>
    </div>
  )
}
