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
      <main className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] relative">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] before:bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] before:bg-[radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.2)_0%,transparent_50%)]" />

        {/* Hero Section */}
        <section className="pt-[120px] pb-20 relative z-10 max-md:pt-20 max-md:pb-16">
          <div className="max-w-6xl mx-auto px-5 max-md:px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
                Multi Run <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl mx-auto max-md:text-base">
                Explore the latest technical insights, usage tips, and industry trends to enhance your multi-account experience
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="bg-bg-lighter min-h-screen relative z-10 rounded-t-4xl -mt-8 py-16 max-md:py-8">
          <div className="max-w-6xl mx-auto px-5 max-md:px-4">
            <div className="max-w-6xl mx-auto px-8 max-md:px-4">
              {/* Main Content - Full Width */}
              <div className="w-full">
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
