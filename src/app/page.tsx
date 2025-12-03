import Image from 'next/image'
import Link from 'next/link'
import { featuredServices, partners } from '@/data'
import styles from './page.module.scss'

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
            alt="Healthcare professionals collaborating to provide primary care services in Islington"
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
          <h2>Our services</h2>
          <div className={styles.serviceGrid}>
            {featuredServices.map((service) => (
              <Link key={service.href} href={service.href} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className={styles.container}>
          <h2>Working in partnership</h2>
          <p className={styles.partnersIntro}>
            We collaborate with key NHS and community partners to deliver integrated healthcare
            services.
          </p>
          <div className={styles.partnerList}>
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                className={styles.partnerCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
