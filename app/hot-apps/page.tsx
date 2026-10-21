import AppCatalog from '../../src/components/site/AppCatalog';
import SiteShell from '../../src/components/site/SiteShell';
import ProductVisual from '../../src/components/site/ProductVisual';
import React from 'react';
import Link from 'next/link';
import Container from '../../src/components/layout/Container';
import styles from '../../src/components/app-listing/AppListing.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Apps for Multiple Accounts | Multi Run - Clone & Manage',
  description: 'Discover the most popular apps for multiple account management. Clone Instagram, Facebook, Twitter, BlueSky, Spotify and more with Multi Run.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps',
  },
};

interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  downloads: string;
  featured?: boolean;
}

const hotApps: App[] = [
  {
    id: 'bluesky',
    name: 'BlueSky',
    description: 'Manage multiple accounts on the decentralized social network that puts you in control of your data and experience.',
    icon: '🦋',
    category: 'Social Media',
    downloads: 'Growing Fast',
    featured: true
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Create and manage multiple Instagram accounts for personal branding, business promotion, and content creation.',
    icon: '📸',
    category: 'Social Media',
    downloads: '5M+'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Switch seamlessly between personal and business Facebook accounts without the hassle of logging out.',
    icon: '👥',
    category: 'Social Media',
    downloads: '6M+'
  },
  {
    id: 'twitter',
    name: 'Twitter (X)',
    description: 'Manage multiple Twitter accounts for different interests, businesses, or social circles with ease.',
    icon: '🐦',
    category: 'Social Media',
    downloads: '2.5M+'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Use multiple Spotify accounts for different music preferences, family sharing, and playlist management.',
    icon: '🎶',
    category: 'Entertainment',
    downloads: '3.2M+'
  }
];

const categories = ['All', 'Social Media', 'Entertainment', 'Communication'];

const HotAppsPage: React.FC = () => {
  return (
    <SiteShell variant="directory-shell"><div className={styles.appListingPage}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Popular Apps</h1>
            <p className={styles.heroSubtitle}>
              Discover the most popular applications that users clone with Multi Run. 
              Manage multiple accounts efficiently and unlock new possibilities.
            </p>
            
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Supported Apps</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Downloads</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.5★</span>
                <span className={styles.statLabel}>User Rating</span>
              </div>
            </div>
          </div>
        <ProductVisual  />
</Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Applications</h2>
            <p className={styles.sectionDescription}>
              Explore our curated collection of the most popular apps for multiple account management
            </p>
          </div>

          <AppCatalog items={hotApps} categories={categories} kind="apps" />

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.ctaDescription}>
                Download Multi Run now and start managing multiple accounts across all your favorite apps seamlessly.
              </p>
              <div className={styles.ctaButtons}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className={styles.ctaButton}
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Download Multi Run
                </a>
                <Link
                  href="/hot-games"
                  className={`${styles.ctaButton} ${styles.secondary}`}
                  aria-label="Explore popular games"
                >
                  Explore Games
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div></SiteShell>
  );
};

export default HotAppsPage;