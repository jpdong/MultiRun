import MultipleAccountsPage from '../src/pages/MultipleAccountsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi Run - Clone Apps & Multiple Accounts',
  description: 'Clone apps and run multiple accounts on one device. Support for WhatsApp, Facebook, Instagram, games and more.',
  alternates: {
    canonical: 'https://multirun.space/',
  },
}

export default function Home() {
  return <MultipleAccountsPage />
}
