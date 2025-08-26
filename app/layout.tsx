// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mr. Burger | San Bernardino',
  description: 'Proudly serving San Bernardino — real burgers, made fresh, no shortcuts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
