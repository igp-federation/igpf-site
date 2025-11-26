import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Our GP Members',
  description: 'The 25 Islington GP practices that are members of the Islington GP Federation.',
}

const practices = [
  { name: 'Amwell Group Practice', website: 'https://www.amwellgrouppractice.co.uk/' },
  { name: 'Andover Medical Centre' },
  { name: 'Archway Medical Centre' },
  { name: 'Clerkenwell Medical Centre', website: 'https://www.clerkenwellmedicalpractice.org.uk/' },
  { name: 'Elizabeth Avenue Group Practice', website: 'https://www.elizabethavenue.org.uk/' },
  {
    name: 'Highbury Grange Health Centre',
    website: 'https://www.highburygrangemedicalpractice.co.uk/',
  },
  {
    name: 'Islington Central Medical Centre',
    website: 'https://www.islingtoncentralmedicalcentre.org/',
  },
  { name: 'Killick Street Health Centre', website: 'https://www.killickstreet.co.uk/' },
  { name: 'Mildmay Medical Practice', website: 'https://www.mildmaymedicalpractice.co.uk/' },
  { name: 'New North Health Centre' },
  {
    name: 'Partnership Primary Care Centre',
    website: 'https://www.partnershipprimarycarecentre.co.uk/',
  },
  { name: 'Pine Street Medical Practice', website: 'https://www.pinestreetpractice.co.uk/' },
  { name: 'Ritchie Street Group Practice', website: 'https://www.ritchiestreetgp.co.uk/' },
  { name: 'River Place Health Centre', website: 'https://www.riverplacegrouppractice.co.uk/' },
  { name: 'Roman Way Medical Centre', website: 'https://www.romanwaymedicalcentre.co.uk/' },
  { name: 'Sobell Medical Centre', website: 'https://www.sobellmedicalcentre.nhs.uk/' },
  { name: "St John's Way Medical Centre" },
  {
    name: "St Peter's Street Medical Practice",
    website: 'https://www.stpetersstreetmedicalpractice.co.uk/',
  },
  { name: 'The Beaumont Practice', website: 'https://www.thebeaumontpractice.co.uk/' },
  { name: 'The Goodinge Group Practice', website: 'https://www.goodingegrouppractice.com/' },
  { name: 'The Junction Practice', website: 'https://junctionmedicalpractice.co.uk/' },
  { name: 'The Medical Centre', website: 'https://www.themedicalcentreislington.co.uk/' },
  { name: 'The Miller Practice', website: 'https://www.millerpractice.nhs.uk/' },
  { name: 'The Rise Group Practice', website: 'https://www.therisegrouppractice.co.uk/' },
  { name: 'The Village Practice', website: 'https://www.thevillagepractice.org/' },
]

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
            {practices.map((practice) =>
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
