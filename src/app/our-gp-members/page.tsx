import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Our GP Members',
  description: 'The 25 Islington GP practices that are members of the Islington GP Federation.',
}

const practices = [
  { name: 'Amwell Group Practice', hasWebsite: true },
  { name: 'Andover Medical Centre', hasWebsite: false },
  { name: 'Archway Medical Centre', hasWebsite: false },
  { name: 'Clerkenwell Medical Centre', hasWebsite: true },
  { name: 'Elizabeth Avenue Group Practice', hasWebsite: true },
  { name: 'Highbury Grange Health Centre', hasWebsite: true },
  { name: 'Islington Central Medical Centre', hasWebsite: true },
  { name: 'Killick Street Health Centre', hasWebsite: true },
  { name: 'Mildmay Medical Practice', hasWebsite: true },
  { name: 'New North Health Centre', hasWebsite: false },
  { name: 'Partnership Primary Care Centre', hasWebsite: true },
  { name: 'Pine Street Medical Practice', hasWebsite: true },
  { name: 'Ritchie Street Group Practice', hasWebsite: true },
  { name: 'River Place Health Centre', hasWebsite: true },
  { name: 'Roman Way Medical Centre', hasWebsite: true },
  { name: 'Sobell Medical Centre', hasWebsite: true },
  { name: "St John's Way Medical Centre", hasWebsite: false },
  { name: "St Peter's Street Medical Practice", hasWebsite: true },
  { name: 'The Beaumont Practice', hasWebsite: true },
  { name: 'The Goodinge Group Practice', hasWebsite: true },
  { name: 'The Junction Practice', hasWebsite: true },
  { name: 'The Medical Centre', hasWebsite: true },
  { name: 'The Miller Practice', hasWebsite: true },
  { name: 'The Rise Group Practice', hasWebsite: true },
  { name: 'The Village Practice', hasWebsite: true },
]

export default function OurGPMembersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Our GP Members</h1>

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
          <h2>Member Practices</h2>
          <div className={styles.practiceGrid}>
            {practices.map((practice) => (
              <div key={practice.name} className={styles.practiceCard}>
                <h3>{practice.name}</h3>
                {practice.hasWebsite && (
                  <span className={styles.websiteIndicator}>Website available</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.info}>
          <h2>Finding Your GP</h2>
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
