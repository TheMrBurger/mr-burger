// app/page.tsx
import Hero from '@/components/Hero'
import PromoBar from '@/components/PromoBar'
import Menu from '@/components/Menu'
import Locations from '@/components/Locations'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'
import ContactBar from '@/components/ContactBar'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoBar />
      <Menu />
      <Locations />
      <About />
      <Reviews />
      <Gallery />
      <ContactBar />
    </>
  )
}
