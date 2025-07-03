import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Multi Run - Parallel Dual App',
  description: 'Multi Run​​ is a powerful tool that allows you to run multiple accounts or applications simultaneously on a single device.',
  keywords: 'Multi Run,Parallel Space,Dual App,Multiple Accounts',
  icons: {
    icon: '/logo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
