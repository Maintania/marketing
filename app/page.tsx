import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import IssueStream from '@/components/IssueStream'
import HowItWorks from '@/components/HowItWorks'
import PerformanceSection from '@/components/PerformanceSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import LazyDashboardPreview from '@/components/LazyDashboardPreview'
import StatsBar from '@/components/StatsBar'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <Navbar />
      <Hero />
      <IssueStream />
      <HowItWorks />
      <PerformanceSection />
      <FeaturesGrid />
      <LazyDashboardPreview />
      <StatsBar />
      <CtaSection />
      <Footer />
    </main>
  )
}
