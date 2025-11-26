import Image from 'next/image'
import styles from './page.module.scss'

const partners = [
  'Whittington Health NHS Trust',
  'Age UK Islington',
  'Camden & Islington NHS Foundation Trust',
  'Federated4Health Limited',
]

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Working with Islington General Practice for Islington patients</h1>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/banner.webp"
            alt="Islington GP Federation"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className={styles.welcome}>
        <div className={styles.container}>
          <h2>Welcome to Islington GP Federation</h2>
          <p>
            We exist to ensure Islington residents get free and fair access to good, safe and cost
            effective primary care. Our operations are managed by GP-owned practices focused on
            protecting general practice excellence.
          </p>
          <p>
            The Islington GP Federation provides enhanced primary care services throughout Islington
            and surrounding areas, working in partnership with local NHS trusts and community
            organisations.
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Community ENT</h3>
              <p>Fast and efficient community based ear, nose and throat treatments.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Gynaecology Services</h3>
              <p>Comprehensive gynaecology services available across Islington and Haringey.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Enhanced Access</h3>
              <p>Weekday evening and Saturday GP appointments for your convenience.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Mental Health Support</h3>
              <p>
                Severe Mental Illness service in partnership with Camden and Islington Mental Health
                Trust.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Health Outreach</h3>
              <p>Islington Hostel Outreach Team supporting homeless healthcare.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Practice Support</h3>
              <p>Workforce development, pharmacy services, and vaccination campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className={styles.container}>
          <h2>Working in Partnership</h2>
          <p className={styles.partnersIntro}>
            We collaborate with key NHS and community partners to deliver integrated healthcare
            services.
          </p>
          <div className={styles.partnerList}>
            {partners.map((partner) => (
              <div key={partner} className={styles.partnerCard}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
