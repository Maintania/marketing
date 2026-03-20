import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import HowItWorks from '@/components/HowItWorks'
import TerminalDemo from '@/components/TerminalDemo'
import FeaturesGrid from '@/components/FeaturesGrid'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <TerminalDemo />
      <FeaturesGrid />
      <Testimonials />
      <Pricing />
      <CtaSection />
      <Footer />
    </main>
  )
}
