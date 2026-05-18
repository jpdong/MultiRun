'use client';

import React from 'react';
import Link from 'next/link';
import NavBar from '@/src/components/elements/NavBar';
import Footer from '@/src/components/elements/Footer';

export default function BlogPostNotFound() {
  return (
    <>
      <NavBar />
      <main className="min-h-[80vh] flex items-center justify-center bg-bg-lighter">
        <div className="max-w-6xl mx-auto px-5 max-md:px-4">
          <div className="text-center max-w-[500px] py-12 px-8 bg-white rounded-2xl shadow-sm max-[480px]:mx-4 max-[480px]:py-8 max-[480px]:px-6">
            <div className="text-7xl mb-6">&#128221;</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 max-[480px]:text-3xl">Article Not Found</h1>
            <p className="text-text-lighter text-lg leading-relaxed mb-8">
              Sorry, the article you are looking for does not exist or has been removed.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-[480px]:flex-col">
              <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-primary to-blue-700 text-white no-underline rounded-lg font-semibold transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(59,130,246,0.4)]">
                Back to Blog
              </Link>
              <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary no-underline rounded-lg font-semibold bg-transparent transition-all duration-200 hover:bg-primary hover:text-white max-[480px]:w-full">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
