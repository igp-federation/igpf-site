import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Business Services',
  description: 'Meet the business services team supporting Islington GP Federation operations.',
}

const businessTeam = [
  {
    name: 'Finance Director',
    role: 'Finance Director',
    bio: 'Manages financial planning, reporting and compliance for the federation.',
  },
  {
    name: 'HR Manager',
    role: 'Human Resources Manager',
    bio: 'Leads recruitment, employee relations and workforce development.',
  },
  {
    name: 'IT Manager',
    role: 'IT & Systems Manager',
    bio: 'Manages technology infrastructure and digital solutions.',
  },
  {
    name: 'Governance Lead',
    role: 'Governance & Compliance Lead',
    bio: 'Ensures regulatory compliance and corporate governance.',
  },
]

export default function BusinessServicesPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Business Services</h1>
      <p className={styles.intro}>
        Our business services team provides essential support functions that enable the federation
        to operate effectively and deliver high-quality healthcare services.
      </p>

      <div className={styles.teamGrid}>
        {businessTeam.map((member) => (
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
