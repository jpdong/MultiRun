import TermsOfUsePage from '../../src/pages/TermsOfUsePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - Multi Run',
  description: 'Read the terms and conditions for using Multi Run app and services.',
  alternates: {
    canonical: 'https://multirun.space/terms-of-use',
  },
}

export default function TermsOfUse() {
  return <TermsOfUsePage />
}
