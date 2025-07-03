import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-74Q8HLBVL9" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
