'use client';

import React from 'react';
import Link from 'next/link';
import NavBar from '@/src/components/elements/NavBar';
import Footer from '@/src/components/elements/Footer';

export default function BlogPostNotFound() {
  return (
    <>
      <NavBar />
      <main className="blog-not-found">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon">📝</div>
            <h1 className="not-found-title">Article Not Found</h1>
            <p className="not-found-description">
              Sorry, the article you are looking for does not exist or has been removed.
            </p>
            <div className="not-found-actions">
              <Link href="/blog" className="btn btn-primary">
                Back to Blog
              </Link>
              <Link href="/" className="btn btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <style jsx>{`
        .blog-not-found {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
        }
        
        .not-found-content {
          text-align: center;
          max-width: 500px;
          padding: 3rem 2rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .not-found-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }
        
        .not-found-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        
        .not-found-description {
          color: #6b7280;
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .not-found-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 480px) {
          .not-found-content {
            margin: 1rem;
            padding: 2rem 1.5rem;
          }
          
          .not-found-title {
            font-size: 1.5rem;
          }
          
          .not-found-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}