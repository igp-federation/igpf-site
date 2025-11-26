import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Executive Team',
  description: 'Meet the executive leadership team of Islington GP Federation.',
}

const executives = [
  {
    name: 'Chief Executive',
    role: 'Chief Executive Officer',
    bio: 'Provides overall leadership and strategic direction for the organisation.',
  },
  {
    name: 'Medical Director',
    role: 'Medical Director',
    bio: 'Leads on clinical strategy, quality and safety across all services.',
  },
  {
    name: 'Operations Director',
    role: 'Director of Operations',
    bio: 'Oversees day-to-day operational delivery and service management.',
  },
  {
    name: 'Finance Director',
    role: 'Director of Finance',
    bio: 'Manages financial strategy, planning and organisational sustainability.',
  },
]

export default function ExecutiveTeamPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Executive Team</h1>
      <p className={styles.intro}>
        Our executive team provides strategic leadership, ensuring the federation delivers on its
        mission to support primary care and improve patient outcomes in Islington.
      </p>

      <div className={styles.teamGrid}>
        {executives.map((member) => (
          <div key={member.name} className={styles.memberCard}>
            <div className={styles.memberImage}>Photo</div>
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
