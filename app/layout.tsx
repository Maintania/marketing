import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.comainter.com'),
  title: 'Comainter - AI Co-maintainer for Open Source',
  description:
    'Comainter is AI automation for open source issue triage across GitHub, GitLab, Bitbucket, and self-hosted Git platforms, with smart labeling, assignment, duplicate detection, and knowledge-based answers.',
  keywords: [
    'AI Git automation',
    'issue triage',
    'open source tooling',
    'GitHub issue automation',
    'GitLab issue automation',
    'Bitbucket issue automation',
    'self-hosted Git automation',
    'AI maintainer',
    'smart issue labeling',
    'issue assignment',
    'duplicate detection',
  ],
  openGraph: {
    title: 'Comainter - AI Co-maintainer for Open Source',
    description:
      'AI issue automation for GitHub, GitLab, Bitbucket, and self-hosted Git platforms that suggests labels, assigns owners, detects duplicates, and answers from project knowledge.',
    url: 'https://www.comainter.com',
    siteName: 'Comainter',
    images: [
      {
        url: '/icon.jpg',
        width: 1200,
        height: 630,
        alt: 'Comainter AI co-maintainer for open source projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comainter - AI Co-maintainer for Open Source',
    description:
      'AI issue automation for triage, smart labeling, assignment, duplicate detection, and project-aware answers.',
    images: ['/icon.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
