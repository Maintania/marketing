'use client'

import dynamic from 'next/dynamic'

const DashboardPreview = dynamic(() => import('@/components/DashboardPreview'), {
  loading: () => (
    <section id="dashboard" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto h-[34rem] max-w-7xl animate-pulse rounded-lg border border-white/10 bg-white/[0.03]" />
    </section>
  ),
})

export default function LazyDashboardPreview() {
  return <DashboardPreview />
}
