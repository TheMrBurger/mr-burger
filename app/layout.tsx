import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mr. Burger | San Bernardino',
  description: 'Proudly serving San Bernardino — real burgers, made fresh, no shortcuts.',
  openGraph: {
    title: 'Mr. Burger | San Bernardino',
    description: 'Real burgers made fresh to order. No microwaves. No shortcuts.',
    url: 'https://www.themrburger.com',
    siteName: 'Mr. Burger',
    images: [{ url: '/images/hero-poster.jpg', width: 1200, height: 630, alt: 'Burgers on the grill' }],
    locale: 'en_US',
    type: 'website'
  },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL('https://www.themrburger.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mr. Burger',
    image: 'https://www.themrburger.com/images/hero-poster.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '170 E 40th St',
      addressLocality: 'San Bernardino',
      addressRegion: 'CA',
      postalCode: '92404',
      addressCountry: 'US'
    },
    telephone: '+1-909-000-0000',
    url: 'https://www.themrburger.com',
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '10:30',
      closes: '24:00'
    }],
    servesCuisine: 'Burgers, American',
    priceRange: '$'
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
