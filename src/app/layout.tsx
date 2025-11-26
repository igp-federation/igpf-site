import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: {
    default: 'Islington GP Federation',
    template: '%s | Islington GP Federation',
  },
  description:
    'Working with Islington General Practice for Islington patients. Providing NHS primary care services across Islington.',
  keywords: ['GP', 'NHS', 'Islington', 'healthcare', 'primary care', 'medical'],
  openGraph: {
    title: 'Islington GP Federation',
    description:
      'Working with Islington General Practice for Islington patients. Providing NHS primary care services across Islington.',
    url: 'https://www.islingtongpfederation.org',
    siteName: 'Islington GP Federation',
    locale: 'en_GB',
    type: 'website',
  },
  metadataBase: new URL('https://www.islingtongpfederation.org'),
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Islington GP Federation',
  alternateName: 'The Islington GP Group Limited',
  url: 'https://www.islingtongpfederation.org',
  logo: 'https://www.islingtongpfederation.org/images/igpgroup-logo.webp',
  description:
    'NHS GP Federation providing primary care services across Islington, working with GP practices to deliver enhanced healthcare.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 16-18, The Studios, 8 Hornsey Street',
    addressLocality: 'London',
    postalCode: 'N7 8EG',
    addressCountry: 'GB',
  },
  email: 'igpf.islingtongp@nhs.net',
  telephone: '020 3859 4959',
  areaServed: {
    '@type': 'City',
    name: 'Islington',
  },
  medicalSpecialty: ['PrimaryCare', 'CommunityHealth'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
