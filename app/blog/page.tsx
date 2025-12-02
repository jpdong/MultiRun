import React from 'react';
import { getAllBlogPosts } from '@/src/lib/blog';
import { BlogList } from '@/src/components/blog/BlogList';
import NavBar from '@/src/components/elements/NavBar';
import Footer from '@/src/components/elements/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Multi Run',
  description: 'Explore the latest technical articles, usage tips, and industry insights from Multi Run',
  alternates: {
    canonical: `https://multirun.space/blog`,
  },
};

export default async function BlogPage() {
  // Get data on the server side
  const allPosts = getAllBlogPosts();

  return (
    <>
      <NavBar />
      <main className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1 className="blog-hero-title">
                Multi Run <span className="gradient-text">Blog</span>
              </h1>
              <p className="blog-hero-description">
                Explore the latest technical insights, usage tips, and industry trends to enhance your multi-account experience
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="blog-content">
          <div className="container">
            <div className="blog-layout-no-sidebar">
              {/* Main Content - Full Width */}
              <div className="blog-main-full">
                <BlogList
                  posts={allPosts}
                  searchParams={{}}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
