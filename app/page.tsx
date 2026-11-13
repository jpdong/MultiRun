import type { Metadata } from 'next';
import { buildHomeMetadata } from '../src/i18n/home/config';
import { getAllBlogPosts } from '../src/lib/blog';
import type { BlogPost } from '../src/lib/types';
import MultipleAccountsPage from '../src/views/MultipleAccountsPage';

export const metadata: Metadata = buildHomeMetadata('en');

export default function Home() {
  // Fetch blog posts on the server side
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = getAllBlogPosts().slice(0, 3);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    blogPosts = [];
  }

  return <MultipleAccountsPage blogPosts={blogPosts} locale="en" />;
}
