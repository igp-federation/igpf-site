import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'The Gynaecology Collaborative',
  description:
    'Integrated community gynaecology service for women registered with GPs in Haringey or Islington.',
}

const locations = [
  {
    name: 'Hornsey Central Neighbourhood Health Centre',
    address: '151 Park Road, N8 8JD',
    parking: 'Free onsite parking',
  },
  {
    name: 'Bingfield Medical Centre',
    address: '8 Bingfield Street, N1 0AL',
    parking: 'No free parking',
  },
  {
    name: 'Lordship Lane',
    address: '239 Lordship Lane, N17 6AA',
    parking: 'Free onsite parking',
  },
  {
    name: 'Archway Sexual Health Clinic',
    address: '681-689 Holloway Road, N19 5SE',
    parking: 'No free parking',
  },
]

export default function GynaecologyCollaborativePage() {
  return (
    <div className={styles.servicePage}>
      <h1>The Gynaecology Collaborative</h1>

      <section className={styles.section}>
        <h2>What is the Gynaecology Collaborative?</h2>
        <p>
          An integrated community gynaecology service for women registered with GPs in Haringey or
          Islington. It&apos;s a collaboration between Islington GP Federation and hospital trusts
          (Whittington, North Middlesex, UCLH), piloting Women&apos;s Health Hubs in North Central
          London.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Services Provided</h2>
        <ul>
          <li>Menstrual problems (heavy, painful, irregular bleeding; endometriosis; PCOS)</li>
          <li>Menopause assessment and treatment</li>
          <li>Contraceptive counselling and emergency hormonal contraception</li>
          <li>Incontinence and prolapse assessment</li>
          <li>Pessary fitting and removal</li>
          <li>Cervical screening</li>
          <li>STI and HIV screening and treatment</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Clinical Leadership</h2>
        <p>
          <strong>Clinical Leads:</strong> Dr Karin Schachinger and Dr Laila Morris
        </p>
      </section>

      <section className={styles.section}>
        <h2>Service Locations</h2>
        <div className={styles.locationGrid}>
          {locations.map((location) => (
            <div key={location.name} className={styles.locationCard}>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <span className={styles.parking}>{location.parking}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Contact Us</h2>
        <div className={styles.contactInfo}>
          <p>
            <strong>Phone:</strong> 0203 915 8800 (Monday-Friday, 9:30am - 4:30pm)
          </p>
          <p>
            <strong>Routine enquiries:</strong>{' '}
            <a href="mailto:igpf.gynaecollab@nhs.net">igpf.gynaecollab@nhs.net</a>
          </p>
          <p>
            <strong>Feedback/complaints:</strong>{' '}
            <a href="mailto:igpf.feedback@nhs.net">igpf.feedback@nhs.net</a>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Referral Information</h2>
        <p>
          Referrals are triaged within five working days; urgent cases are addressed within 48
          hours. Most appointments are offered within six weeks.
        </p>
      </section>
    </div>
  )
}
