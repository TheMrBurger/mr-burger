// app/layout.tsx
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
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Mr. Burger grill' }],
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
    image: 'https://www.themrburger.com/images/hero.jpg',
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
    priceRange: '$',
    sameAs: ['https://www.instagram.com/yourhandle','https://www.facebook.com/yourpage']
  }

  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Mr. Burger Menu',
    hasMenuSection: [{
      '@type': 'MenuSection',
      name: 'Combos',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Double Combo', description: 'Double patty, fries, medium drink' },
        { '@type': 'MenuItem', name: 'Cheeseburger Combo', description: 'Cheese, fries, medium drink' },
        { '@type': 'MenuItem', name: 'Hamburger Combo', description: 'Fries, medium drink' },
        { '@type': 'MenuItem', name: 'Chili Dog Combo', description: 'Chili dog, fries, medium drink' },
        { '@type': 'MenuItem', name: 'Hot Dog Combo', description: 'Hot dog, fries, medium drink' }
      ]
    }, {
      '@type': 'MenuSection',
      name: 'Shakes',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Vanilla Shake' },
        { '@type': 'MenuItem', name: 'Strawberry Shake' },
        { '@type': 'MenuItem', name: 'Chocolate Shake' }
      ]
    }, {
      '@type': 'MenuSection',
      name: 'Fries & Sides',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Fries' },
        { '@type': 'MenuItem', name: 'Chili Cheese Fries' }
      ]
    }]
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}