import type { Metadata } from 'next'
import { gpPractices } from '@/data'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Our GP Members',
  description: 'The 25 Islington GP practices that are members of the Islington GP Federation.',
}

export default function OurGPMembersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Our GP members</h1>

        <section className={styles.intro}>
          <p>
            Our members are the 25 Islington GP practices listed below. Through the sharing of
            resources and best practice, we aim to ensure:
          </p>
          <ul>
            <li>The strength and resilience of individual practices across Islington</li>
            <li>
              The ability to invest in new, enhanced or innovative primary care services for our
              patients
            </li>
            <li>
              That more people are able to access health care in a way, and place, that is
              appropriate and convenient for them
            </li>
          </ul>
        </section>

        <section className={styles.practiceList}>
          <h2>Member practices</h2>
          <div className={styles.practiceGrid}>
            {gpPractices.map((practice) =>
              practice.website ? (
                <a
                  key={practice.name}
                  href={practice.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.practiceCard}
                >
                  <h3>{practice.name}</h3>
                  <span className={styles.websiteIndicator}>Visit website →</span>
                </a>
              ) : (
                <div key={practice.name} className={styles.practiceCard}>
                  <h3>{practice.name}</h3>
                </div>
              )
            )}
          </div>
        </section>

        <section className={styles.info}>
          <h2>Finding your GP</h2>
          <p>
            To find a GP practice near you or to register with a practice, you can use the{' '}
            <a
              href="https://www.nhs.uk/service-search/find-a-gp"
              target="_blank"
              rel="noopener noreferrer"
            >
              NHS Find a GP service
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
