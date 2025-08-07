import PrivacyPolicyPage from '../../src/pages/PrivacyPolicyPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Multi Run',
  description: 'Learn how Multi Run protects your privacy and handles your data.',
  alternates: {
    canonical: 'https://multirun.space/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />
}
