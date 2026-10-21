import ProductVisual from '@/src/components/site/ProductVisual';
import SiteShell from '@/src/components/site/SiteShell';
import React, { Suspense } from 'react';
import BlogCard from '@/src/components/blog/BlogCard';
import { getAllBlogPosts } from '@/src/lib/blog';
import { BlogList } from '@/src/components/blog/BlogList';
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
    <SiteShell variant="blog-shell">
      <div className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1 className="blog-hero-title">
                Multi Run Blog
              </h1>
              <p className="blog-hero-description">
                Explore the latest technical insights, usage tips, and industry trends to enhance your multi-account experience
              </p>
            </div>
            <ProductVisual image="/multi_run_2.webp" />
          </div>
        </section>

        {/* Blog Content */}
        <section className="blog-content">
          <div className="container">
            <div className="blog-layout-no-sidebar">
              {/* Main Content - Full Width */}
              <div className="blog-main-full">
                <Suspense fallback={<div className="blog-grid">{allPosts.slice(0, 9).map(post => <BlogCard key={post.slug} post={post} />)}</div>}>
                  <BlogList posts={allPosts} searchParams={{}} />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
