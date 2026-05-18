import { getBlogPostBySlug, getRelatedBlogPosts, getAllBlogPosts } from '@/src/lib/blog';
import BlogPost from '@/src/components/blog/BlogPost';
import RelatedPosts from '@/src/components/blog/RelatedPosts';
import NavBar from '@/src/components/elements/NavBar';
import Footer from '@/src/components/elements/Footer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// 生成静态路径
export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found - Multi Run Blog',
    };
  }

  return {
    title: `${post.title} - Multi Run Blog`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : ['Multi Run Team'],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://multirun.space/blog/${slug}`,
    },
  };
}

// 页面组件
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post, 3);

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-bg-lighter">
        <article className="py-8 pb-16">
          <div className="max-w-6xl mx-auto px-5 max-md:px-4">
            <BlogPost post={post} />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="py-16 bg-bg-lighter">
            <div className="max-w-6xl mx-auto px-5 max-md:px-4">
              <RelatedPosts posts={relatedPosts} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
