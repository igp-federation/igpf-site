import type { Metadata } from 'next'
import styles from '../service.module.scss'

export const metadata: Metadata = {
  title: 'Primary Care Networks',
  description:
    'Islington GP Federation supports 4 of 5 PCNs in Islington, providing integrated healthcare services.',
}

const services = [
  {
    title: 'Human Resources Support',
    items: [
      'Recruitment for Additional Roles Reimbursement Scheme (ARRS) positions',
      'Employee assistance programs',
      'HR regulatory compliance',
    ],
  },
  {
    title: 'Analytics & IT',
    items: [
      'Performance dashboards tracking Investment and Impact Fund, pharmacy services, cancer diagnosis, and extended access',
      'Daily technical support and clinical software training',
    ],
  },
  {
    title: 'Governance',
    items: [
      'Caldicott Guardian, Medical Director, and Data Protection Officer roles',
      'Patient information security and ethical handling',
    ],
  },
  {
    title: 'Financial Services',
    items: [
      'Claims processing and financial reporting',
      'Auditing, budgeting, and risk management',
    ],
  },
  {
    title: 'Enhanced Access Service',
    items: [
      'Extended clinical services through iHUB across three Islington locations',
      'Operations team and clinical workforce support',
    ],
  },
  {
    title: 'PCN Operations',
    items: [
      'Day-to-day management and project coordination',
      'Workforce planning and stakeholder collaboration',
    ],
  },
]

export default function PrimaryCareNetworksPage() {
  return (
    <div className={styles.servicePage}>
      <h1>Primary Care Networks</h1>

      <section className={styles.section}>
        <h2>Overview</h2>
        <p>
          The Islington GP Federation supports <strong>4 of 5 PCNs</strong> in Islington, providing
          integrated healthcare services through groups of general practices collaborating with
          community services, secondary care, pharmacies, and local authorities.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Services we provide to PCNs</h2>
        {services.map((service) => (
          <div key={service.title} style={{ marginBottom: '1.5rem' }}>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Future direction</h2>
        <p>
          PCNs will emphasize neighborhood collaboration, service integration, digital
          transformation, and preventive care approaches.
        </p>
      </section>
    </div>
  )
}
