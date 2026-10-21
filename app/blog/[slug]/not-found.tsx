import Link from 'next/link';
import SiteShell from '@/src/components/site/SiteShell';

export default function BlogPostNotFound() {
  return <SiteShell variant="blog-shell">
    <div className="home-container"><div className="not-found-content">
      <h1>Article Not Found</h1>
      <p className="not-found-description">Sorry, the article you are looking for does not exist or has been removed.</p>
      <div className="not-found-actions">
        <Link href="/blog" className="btn">Back to Blog</Link>
        <Link href="/" className="btn btn-outline">Back to Home</Link>
      </div>
    </div></div>
  </SiteShell>;
}
