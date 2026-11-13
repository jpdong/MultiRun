import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  buildHomeMetadata,
  defaultHomeLocale,
  getHomeLocale,
  homeLocaleConfig,
  type HomeLocale,
} from '../../src/i18n/home/config';
import { getAllBlogPosts } from '../../src/lib/blog';
import type { BlogPost } from '../../src/lib/types';
import MultipleAccountsPage from '../../src/views/MultipleAccountsPage';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return Object.keys(homeLocaleConfig)
    .filter((locale) => locale !== defaultHomeLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const entry = getHomeLocale(locale);
  if (!entry || locale === defaultHomeLocale) {
    notFound();
  }
  return buildHomeMetadata(locale as HomeLocale);
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params;
  const entry = getHomeLocale(locale);
  if (!entry || locale === defaultHomeLocale) {
    notFound();
  }

  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = getAllBlogPosts().slice(0, 3);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    blogPosts = [];
  }

  return (
    <MultipleAccountsPage
      blogPosts={blogPosts}
      locale={locale as HomeLocale}
    />
  );
}
