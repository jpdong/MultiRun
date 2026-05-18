import React from 'react';
import { getAllBlogPosts } from '@/src/lib/blog';
import { BlogList } from '@/src/components/blog/BlogList';
import NavBar from '@/src/components/elements/NavBar';
import Footer from '@/src/components/elements/Footer';
import Container from '@/src/components/layout/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Multi Run | Latest News & Tutorials',
  description: 'Explore expert tips, app cloning guides, and updates on multiple account management with Multi Run.',
  alternates: {
    canonical: `https://multirun.space/blog`,
  },
};

export default async function BlogPage() {
  // Get data on the server side
  const allPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <NavBar />

      {/* Hero Section (Carbon Black) */}
      <section className="pt-36 pb-24 bg-dark text-white relative overflow-hidden border-b border-border-light/10">
        <Container>
          <div className="relative z-1 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
              <span>📝 Multi Run Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight m-0 text-white">Latest News & Tutorials</h1>
            <p className="text-lg md:text-xl text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
              Explore expert tips, app cloning guides, and updates on multiple account management.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-bg-lighter flex-1">
        <Container>
          <BlogList
            posts={allPosts}
            searchParams={{}}
          />
        </Container>
      </section>

      <Footer />
    </div>
  );
}
