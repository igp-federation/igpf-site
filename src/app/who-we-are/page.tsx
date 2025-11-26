import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Learn about Islington GP Group Limited, the GP-owned organisation providing NHS primary care services in Islington.',
}

const teams = [
  {
    href: '/who-we-are/board-members',
    title: 'Board Members',
    description: 'The board providing strategic direction and governance.',
  },
  {
    href: '/who-we-are/clinical-services-leadership',
    title: 'Clinical Services Leadership',
    description: 'Clinical leaders overseeing our healthcare services.',
  },
  {
    href: '/who-we-are/business-services',
    title: 'Business Services',
    description: 'Finance, HR, and business support functions.',
  },
  {
    href: '/who-we-are/executive-team',
    title: 'Executive Team',
    description: 'Senior leadership driving organisational strategy.',
  },
  {
    href: '/who-we-are/operations-team',
    title: 'Operations Team',
    description: 'Day-to-day operational management and support.',
  },
  {
    href: '/who-we-are/pcn-team',
    title: 'Primary Care Network Team',
    description: 'Supporting PCN delivery across Islington.',
  },
  {
    href: '/who-we-are/pharmacist-team',
    title: 'Practice Based Pharmacist Team',
    description: 'Clinical pharmacists working in GP practices.',
  },
  {
    href: '/who-we-are/training-hub-team',
    title: 'Training Hub Team',
    description: 'Supporting workforce development and training.',
  },
]

export default function WhoWeArePage() {
  return (
    <div className={styles.page}>
      <h1>Who we are</h1>

      <section className={styles.intro}>
        <p>
          We are <strong>Islington GP Group Limited</strong>, an organisation jointly owned by the
          GP practices of Islington. We trade as <strong>The Islington GP Federation</strong>.
        </p>
        <p>
          Our vision is to provide all Islington registered patients with free and equitable access
          to good, safe and cost effective primary care, while maintaining business profitability
          for sustainability and growth.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our History</h2>
        <p>
          Established in December 2015, we were founded to support general practice sustainability
          in Islington and enhance patient health outcomes. The federation now employs over 300
          staff members in clinical and support roles across various positions.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Teams</h2>
        <div className={styles.teamGrid}>
          {teams.map((team) => (
            <Link key={team.href} href={team.href} className={styles.teamCard}>
              <h3>{team.title}</h3>
              <p>{team.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
