import { Header } from '@/components/layouts/Header'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const noto = Noto_Sans_JP({
  display: 'swap',
  preload: false,
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'Inventrack',
  description: 'Inventory Management System.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={noto.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
