import './globals.css'

import type { Metadata } from 'next'

import Header from './_components/header'
import Nav from './_components/nav'
import { LINESeedJP } from './_utils/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | RYU PORTFOLIO',
    default: 'RYU PORTFOLIO',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${LINESeedJP.className} bg text-white-1`}>
        <Header />
        <div className="h-dvh overflow-hidden pt-0 lg:pt-20">
          <main className="h-full">{children}</main>
        </div>
        <Nav />
      </body>
    </html>
  )
}
