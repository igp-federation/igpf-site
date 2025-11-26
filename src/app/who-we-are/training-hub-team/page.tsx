import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Training Hub Team',
  description: 'Meet the Islington Training Hub team supporting workforce development.',
}

export default function TrainingHubTeamPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Training Hub Team</h1>
      <p className={styles.intro}>
        The Islington Training Hub team supports workforce development across primary care,
        delivering training programmes and career development opportunities.
      </p>

      <section className={styles.section}>
        <h2>Our Team</h2>
        <p>
          Our Training Hub team includes training coordinators, programme managers, and education
          specialists who work to develop and support the primary care workforce in Islington.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What We Do</h2>
        <ul>
          <li>Coordinate training programmes for practice staff</li>
          <li>Support apprenticeships and new roles</li>
          <li>Deliver leadership development programmes</li>
          <li>Facilitate clinical skills training</li>
          <li>Provide career pathway guidance</li>
          <li>Support workforce retention initiatives</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Working with Partners</h2>
        <p>
          We work closely with Health Education England, local universities, and other training
          providers to ensure our programmes meet the needs of the primary care workforce and
          support career development.
        </p>
      </section>
    </div>
  )
}
