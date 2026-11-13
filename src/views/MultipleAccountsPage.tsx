import React from 'react';

import Footer from '../components/elements/Footer';
import NavBar from '../components/elements/NavBar';
import HomeBadges from '../components/home/HomeBadges';
import HomeBlog from '../components/home/HomeBlog';
import HomeDocumentLang from '../components/home/HomeDocumentLang';
import HomeDownload from '../components/home/HomeDownload';
import HomeFaq from '../components/home/HomeFaq';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeHero from '../components/home/HomeHero';
import HomePopular from '../components/home/HomePopular';
import HomeTestimonials from '../components/home/HomeTestimonials';
import { GOOGLE_PLAY_DOWNLOAD_URL } from '../data/home-content';
import {
  defaultHomeLocale,
  homeLocaleConfig,
  type HomeLocale,
} from '../i18n/home/config';
import type { BlogPost } from '../lib/types';
import './home.css';

export default function MultipleAccountsPage({
  blogPosts,
  locale = defaultHomeLocale,
}: {
  blogPosts: BlogPost[];
  locale?: HomeLocale;
}) {
  const entry = homeLocaleConfig[locale];
  const copy = entry.dictionary;

  return (
    <div
      className="home-page"
      lang={entry.htmlLang}
      dir={entry.direction}
    >
      <HomeDocumentLang lang={entry.htmlLang} dir={entry.direction} />
      <NavBar
        locale={locale}
        copy={copy.nav}
        showLanguageSwitcher={true}
      />
      <main>
        <HomeHero
          copy={copy.hero}
          featuresCopy={copy.features.items}
          downloadUrl={GOOGLE_PLAY_DOWNLOAD_URL}
          locale={locale}
        />
        <HomeFeatures copy={copy.features} />
        <HomePopular copy={copy.popular} />
        <HomeTestimonials copy={copy.testimonials} />
        <HomeFaq copy={copy.faq} />
        <HomeBlog
          blogPosts={blogPosts}
          copy={copy.blog}
          htmlLang={entry.htmlLang}
        />
        <HomeDownload
          copy={copy.download}
          downloadUrl={GOOGLE_PLAY_DOWNLOAD_URL}
        />
        <HomeBadges />
      </main>
      <Footer locale={locale} copy={copy.footer} />
    </div>
  );
}
