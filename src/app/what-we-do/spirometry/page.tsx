import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Spirometry',
  description: 'Lung function testing services provided in community settings across Islington.',
}

export default function SpirometryPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Spirometry</h1>

      <section className={styles.section}>
        <h2>About spirometry</h2>
        <p>
          Spirometry is a lung function test that measures how much air you can breathe out in one
          breath and how quickly you can blow it out. It is used to diagnose and monitor conditions
          such as asthma and chronic obstructive pulmonary disease (COPD).
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our service</h2>
        <p>
          The Islington GP Federation provides spirometry testing in community settings, making it
          easier for patients to access this important diagnostic test without having to travel to
          hospital.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What to expect</h2>
        <ul>
          <li>The test takes about 15-30 minutes</li>
          <li>You will be asked to blow into a mouthpiece connected to a machine</li>
          <li>You may need to repeat the test several times</li>
          <li>Results are sent to your GP for review</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Referral</h2>
        <p>
          Your GP can refer you for spirometry if they think you may have a lung condition that
          requires investigation. Please speak to your GP practice for more information.
        </p>
      </section>
    </div>
  )
}
