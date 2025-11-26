import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Community ENT',
  description:
    'Islington Community Ear, Nose and Throat Service providing specialist ENT appointments in community settings.',
}

const clinicLocations = [
  'Bingfield Health Centre',
  'Hornsey Rise Health Centre',
  'Islington Central Medical Centre',
  'West Green Surgery on Green Lanes (partnership with The Whittington Hospital)',
]

export default function CommunityENTPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Community ENT</h1>

      <section className={styles.section}>
        <h2>About the Service</h2>
        <p>
          Islington Community Ear, Nose and Throat Service is the longest running service that
          Islington GP Federation (IGPF) manages. It provides specialist ear, nose and throat (ENT)
          appointments in community settings, helping patients avoid hospital appointments by
          offering specialized ENT care in their local area.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Clinical Staff</h2>
        <ul>
          <li>
            <strong>General Practitioners with Extended Roles (GPwER):</strong> GPs with additional
            ENT training
          </li>
          <li>
            <strong>Audiologists:</strong> Conduct hearing tests and microsuction clinics for earwax
            removal
          </li>
          <li>
            <strong>Physician Associates:</strong> Supervised medical professionals running
            microsuction clinics
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Leadership</h2>
        <p>
          <strong>Clinical Lead:</strong> Dr Bengi Beyzade (ENT GPwER and IGPF Executive)
        </p>
        <p>
          <strong>Clinical Supervision:</strong> Mr Alam Hannan (Consultant Otorhinolaryngologist,
          Royal National ENT Hospital)
        </p>
      </section>

      <section className={styles.section}>
        <h2>Clinic Locations</h2>
        <ul>
          {clinicLocations.map((location) => (
            <li key={location}>{location}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Contact Us</h2>
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> <a href="mailto:nclicb.icents@nhs.net">nclicb.icents@nhs.net</a>
          </p>
          <p>
            <strong>Telephone:</strong> 020 3148 1513
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Patient Resources</h2>
        <p>
          For more information about ENT conditions and procedures, visit{' '}
          <a
            href="https://www.entuk.org/ent-conditions-and-procedures"
            target="_blank"
            rel="noopener noreferrer"
          >
            ENT UK conditions and procedures
          </a>
          .
        </p>
      </section>
    </div>
  )
}
