import React from 'react';
import { getAllBlogPosts, getAllTags } from '@/src/lib/blog';
import { BlogList } from '@/src/components/blog/BlogList';
import { BlogSearch } from '@/src/components/blog/BlogSearch';
import { BlogTags } from '@/src/components/blog/BlogTags';
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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Get data on the server side
  const allPosts = getAllBlogPosts();
  const allTags = getAllTags();
  
  const searchParamsData = await searchParams;
  const query = typeof searchParamsData.query === 'string' ? searchParamsData.query : '';
  const tag = typeof searchParamsData.tag === 'string' ? searchParamsData.tag : '';
  const page = typeof searchParamsData.page === 'string' ? parseInt(searchParamsData.page) : 1;

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
            <div className="blog-layout">
              {/* Sidebar */}
              <aside className="blog-sidebar">
                <div className="sidebar-sticky">
                  <BlogSearch initialQuery={query} />
                  <BlogTags tags={allTags} selectedTag={tag} />
                </div>
              </aside>

              {/* Main Content */}
              <div className="blog-main">
                <BlogList 
                  posts={allPosts}
                  searchParams={{ query, tag, page }}
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
