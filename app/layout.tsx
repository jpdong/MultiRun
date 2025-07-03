import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'antd/dist/reset.css'
import CookieConsent from '../src/components/elements/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MultiRun - Multiple Accounts Manager',
  description: 'Clone and run multiple instances of the same app with separate data storage.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookieConsent />
        {children}
      </body>
    </html>
  )
}
