import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MergeMind — AI for Open Source Maintainers',
  description: 'Stop drowning in GitHub noise. MergeMin triages issues, catches duplicates, and builds knowledge so your team can focus on shipping.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
