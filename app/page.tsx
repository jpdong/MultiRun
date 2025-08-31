import MultipleAccountsPage from '../src/pages/MultipleAccountsPage'
import { getAllBlogPosts } from '../src/lib/blog'
import { BlogPost } from '../src/lib/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi Run - Clone Apps & Multiple Accounts',
  description: 'Clone apps and run multiple accounts on one device. Support for WhatsApp, Facebook, Instagram, games and more.',
  alternates: {
    canonical: 'https://multirun.space/',
  },
}

export default function Home() {
  // Fetch blog posts on the server side
  let blogPosts: BlogPost[] = []
  try {
    blogPosts = getAllBlogPosts().slice(0, 3)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    blogPosts = []
  }
  
  return <MultipleAccountsPage blogPosts={blogPosts} />
}
