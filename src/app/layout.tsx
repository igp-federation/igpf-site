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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
