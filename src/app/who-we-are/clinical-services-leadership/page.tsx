import type { Metadata } from 'next'
import styles from '../team.module.scss'

export const metadata: Metadata = {
  title: 'Clinical Services Leadership',
  description:
    'Meet the clinical leaders overseeing healthcare services at Islington GP Federation.',
}

const clinicalLeaders = [
  {
    name: 'Clinical Director',
    role: 'Clinical Director',
    bio: 'Oversees clinical quality and service development across the federation.',
  },
  {
    name: 'Community ENT Lead',
    role: 'Community ENT Clinical Lead',
    bio: 'Leads our community ear, nose and throat service.',
  },
  {
    name: 'Gynaecology Lead',
    role: 'Gynaecology Collaborative Lead',
    bio: "Leads women's health and gynaecology services.",
  },
  {
    name: 'Mental Health Lead',
    role: 'SMI Service Lead',
    bio: 'Leads our severe mental illness service in partnership with C&I Trust.',
  },
  {
    name: 'Nursing Lead',
    role: 'Nursing Hub Lead',
    bio: 'Leads nursing services and development across practices.',
  },
]

export default function ClinicalServicesLeadershipPage() {
  return (
    <div className={styles.teamPage}>
      <h1>Clinical Services Leadership</h1>
      <p className={styles.intro}>
        Our clinical leaders ensure the highest standards of care across all federation services,
        bringing expertise and dedication to patient care.
      </p>

      <div className={styles.teamGrid}>
        {clinicalLeaders.map((member) => (
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
