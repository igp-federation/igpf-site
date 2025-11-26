import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'I:HUB - Enhanced Access Service',
  description:
    'Extended GP appointments including weekday evenings and Saturdays across Islington.',
}

export default function IHubPage() {
  return (
    <div className={styles.servicePage}>
      <h1>I:HUB</h1>

      <div className={styles.infoBox}>
        <h3>Enhanced Access Service</h3>
        <p>GP appointments available weekday evenings and Saturdays</p>
      </div>

      <section className={styles.section}>
        <h2>About I:HUB</h2>
        <p>
          I:HUB is our Enhanced Access Service, providing extended GP appointments for patients
          registered with Islington GP practices. The service operates from three locations across
          Islington, offering appointments outside of normal surgery hours.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Appointment Times</h2>
        <ul>
          <li>
            <strong>Weekday evenings:</strong> Extended hours after normal surgery times
          </li>
          <li>
            <strong>Saturdays:</strong> Morning and afternoon appointments available
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Services Available</h2>
        <ul>
          <li>GP consultations</li>
          <li>Routine health checks</li>
          <li>Medication reviews</li>
          <li>Minor illness and injury</li>
          <li>Follow-up appointments</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How to Book</h2>
        <p>
          To book an I:HUB appointment, please contact your registered GP practice. They will be
          able to book you into an available slot at one of our three Islington locations.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Locations</h2>
        <p>
          I:HUB operates from three convenient locations across Islington. Your GP practice will
          advise which location is most suitable for your appointment.
        </p>
      </section>
    </div>
  )
}
