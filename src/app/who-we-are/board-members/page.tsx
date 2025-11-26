import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Board Members',
  description: 'Meet the board members of Islington GP Federation providing strategic direction.',
}

const boardMembers = [
  {
    name: 'Board Chair',
    role: 'Chair',
    bio: 'Provides strategic leadership and governance oversight for the federation.',
  },
  {
    name: 'Medical Director',
    role: 'Medical Director',
    bio: 'Leads on clinical strategy and quality across federation services.',
  },
  {
    name: 'Non-Executive Director',
    role: 'Non-Executive Director',
    bio: 'Provides independent oversight and strategic guidance.',
  },
  {
    name: 'GP Director',
    role: 'GP Director',
    bio: 'Represents member practices and provides clinical perspective.',
  },
]

export default function BoardMembersPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Board Members</h1>
      <p className={styles.intro}>
        Our board provides strategic direction and governance for the Islington GP Federation,
        ensuring we deliver on our mission to support primary care in Islington.
      </p>

      <div className={styles.teamGrid}>
        {boardMembers.map((member) => (
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
