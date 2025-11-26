import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

const services = [
  {
    title: 'Community ENT',
    description: 'Fast and efficient community based ear, nose and throat treatments.',
    href: '/what-we-do/community-ent',
  },
  {
    title: 'Gynaecology Services',
    description: 'Comprehensive gynaecology services available across Islington and Haringey.',
    href: '/what-we-do/gynaecology-collaborative',
  },
  {
    title: 'Enhanced Access',
    description: 'Weekday evening and Saturday GP appointments for your convenience.',
    href: '/what-we-do/ihub',
  },
  {
    title: 'Mental Health Support',
    description:
      'Severe Mental Illness service in partnership with Camden and Islington Mental Health Trust.',
    href: '/what-we-do/severe-mental-illness',
  },
  {
    title: 'Health Outreach',
    description: 'Islington Hostel Outreach Team supporting homeless healthcare.',
    href: '/what-we-do/islington-health-outreach',
  },
  {
    title: 'Practice Support',
    description: 'Workforce development, pharmacy services, and vaccination campaigns.',
    href: '/what-we-do/pharmacy',
  },
]

const partners = [
  {
    name: 'Whittington Health NHS Trust',
    url: 'https://www.whittington.nhs.uk',
  },
  {
    name: 'Age UK Islington',
    url: 'https://www.ageuk.org.uk/islington',
  },
  {
    name: 'Camden & Islington NHS Foundation Trust',
    url: 'https://www.candi.nhs.uk',
  },
  {
    name: 'Federated4Health',
    url: 'https://www.federated4health.co.uk',
  },
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
          <h2>Our services</h2>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
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
