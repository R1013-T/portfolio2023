import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import Header from './_components/header'
import Nav from './_components/nav'
import { LINESeedJP } from './_utils/fonts'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: {
    template: '%s | RYU PORTFOLIO',
    default: 'RYU PORTFOLIO',
  },
  description: 'RYUのポートフォリオサイトです。',
  keywords: ['RYU', 'ポートフォリオ', 'portfolio', 'Next.js', 'web'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.ryu-tech.tokyo/',
    title: 'RYU PORTFOLIO',
    description: 'RYUのポートフォリオサイトです。',
    images: [
      {
        url: 'https://www.ryu-tech.tokyo/_next/image?url=/images/icon.png&w=256&q=75',
        width: 256,
        height: 256,
        alt: 'RYU PORTFOLIO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RYU PORTFOLIO',
    description: 'RYUのポートフォリオサイトです。',
    site: '@rtjob2023',
    creator: '@rtjob2023',
    images: [
      'https://www.ryu-tech.tokyo/_next/image?url=/images/icon.png&w=256&q=75',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  redirect('https://www.ryu1013.com/')

  return (
    <html lang="ja">
      <body className={`${LINESeedJP.className} bg text-white-1`}>
        <Header />
        <div className="h-dvh overflow-hidden pt-0 lg:pt-20">
          <main className="h-full">{children}</main>
        </div>
        <Nav />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
