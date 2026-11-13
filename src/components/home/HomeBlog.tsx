import Link from 'next/link';

import type { HomeCopy } from '../../i18n/home/en';
import type { BlogPost } from '../../lib/types';
import Reveal from '../motion/Reveal';

export default function HomeBlog({
  blogPosts,
  copy,
  htmlLang,
}: {
  blogPosts: BlogPost[];
  copy: HomeCopy['blog'];
  htmlLang: string;
}) {
  if (blogPosts.length === 0) return null;

  return (
    <section className="home-blog home-container">
      <div className="blog-heading">
        <Reveal>
          <h2>{copy.heading}</h2>
          <p>{copy.description}</p>
        </Reveal>
        <Link href="/blog" className="home-text-link">
          {copy.viewAll} <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="home-articles">
        {blogPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.07}>
            <article>
              <Link href={`/blog/${post.slug}`}>
                <div className="home-article-meta">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(htmlLang, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      timeZone: 'UTC',
                    })}
                  </time>
                  <span>
                    {post.readingTime} {copy.minRead}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>
                  {post.description.length > 120
                    ? post.description.slice(0, 120).trim() + '...'
                    : post.description}
                </p>
                <div className="home-article-tags">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="home-text-link">
                  {copy.readMore} <span aria-hidden="true">↗</span>
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
