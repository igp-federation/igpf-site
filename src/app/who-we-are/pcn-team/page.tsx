import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Primary Care Network Team',
  description: 'Meet the team supporting Primary Care Networks across Islington.',
}

export default function PCNTeamPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Primary Care Network Team</h1>
      <p className={styles.intro}>
        Our PCN team supports 4 of 5 Primary Care Networks in Islington, providing essential
        services and coordination to help practices work together effectively.
      </p>

      <section className={styles.section}>
        <h2>Team Roles</h2>
        <ul>
          <li>PCN Managers - coordinating network operations</li>
          <li>Clinical Directors support</li>
          <li>ARRS role coordination</li>
          <li>Project coordinators</li>
          <li>Administrative support</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>What We Provide</h2>
        <ul>
          <li>Day-to-day PCN management and coordination</li>
          <li>Workforce planning and ARRS recruitment</li>
          <li>Financial management and claims processing</li>
          <li>Performance monitoring and reporting</li>
          <li>Stakeholder engagement and communication</li>
          <li>Project delivery and service development</li>
        </ul>
      </section>
    </div>
  )
}
