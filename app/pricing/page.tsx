import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PricingContent from '@/components/PricingContent'

export const metadata: Metadata = {
  title: 'Pricing - Comainter',
  description:
    'Comainter pricing for AI issue triage, smart labeling, duplicate detection, owner assignment, and project-aware answers across Git platforms.',
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <PricingContent />
      <Footer />
    </>
  )
}
