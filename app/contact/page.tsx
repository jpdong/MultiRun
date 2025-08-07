import ContactUsPage from '../../src/pages/ContactUsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Multi Run',
  description: 'Get in touch with the Multi Run team for support, feedback, or business inquiries.',
  alternates: {
    canonical: 'https://multirun.space/contact',
  },
}

export default function Contact() {
  return <ContactUsPage />
}
