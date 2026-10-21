import AppCatalog from '../../src/components/site/AppCatalog';
import SiteShell from '../../src/components/site/SiteShell';
import ProductVisual from '../../src/components/site/ProductVisual';
import React from 'react';
import Link from 'next/link';
import Container from '../../src/components/layout/Container';
import styles from '../../src/components/app-listing/AppListing.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Games for Multiple Accounts | Multi Run - Gaming Revolution',
  description: 'Discover the most popular games for multiple account management. Clone Roblox, simulation games and more with Multi Run for enhanced gaming experience.',
  alternates: {
    canonical: 'https://multirun.space/hot-games',
  },
};

interface Game {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  downloads: string;
  rating: string;
  featured?: boolean;
}

const hotGames: Game[] = [
  {
    id: 'roblox',
    name: 'Roblox',
    description: 'Create multiple Roblox accounts to explore different games, communities, and experiences without mixing your progress and achievements.',
    icon: '🧱',
    category: 'Metaverse',
    downloads: '10M+',
    rating: '4.2★',
    featured: true
  },
  {
    id: 'growagarden',
    name: 'Grow a Garden',
    description: 'Cultivate multiple virtual gardens with separate accounts to experiment with different plant combinations and landscaping styles.',
    icon: '🌱',
    category: 'Simulation',
    downloads: '3M+',
    rating: '4.6★'
  }
];

const gameCategories = ['All', 'Metaverse', 'Simulation', 'Strategy', 'Battle Royale'];

const HotGamesPage: React.FC = () => {
  return (
    <SiteShell variant="directory-shell"><div className={styles.appListingPage}>

      {/* Hero Section */}
      <section className={styles.heroSection} >
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Popular Games</h1>
            <p className={styles.heroSubtitle}>
              Discover the most popular games that support multiple accounts.
              Level up your gaming experience with Multi Run's seamless account management.
            </p>

            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Supported Games</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15M+</span>
                <span className={styles.statLabel}>Gaming Sessions</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.7★</span>
                <span className={styles.statLabel}>Gamer Rating</span>
              </div>
            </div>
          </div>
        <ProductVisual app="roblox" image="/multi_run_3.webp" />
</Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Games</h2>
            <p className={styles.sectionDescription}>
              Explore our curated collection of the most popular games for multiple account gaming
            </p>
          </div>

          <AppCatalog items={hotGames} categories={gameCategories} kind="games" />

          {/* Gaming Benefits Section */}
          <div className="gaming-benefits">
            <h3 >
              Why Multiple Gaming Accounts?
            </h3>
            <p >
              Unlock new gaming possibilities with separate accounts for different strategies,
              play styles, and gaming communities.
            </p>

            <div >
              <div >
                
                <h4 >
                  Strategy Testing
                </h4>
                <p >
                  Test different strategies without affecting your main progress
                </p>
              </div>

              <div >
                
                <h4 >
                  Community Separation
                </h4>
                <p >
                  Join different gaming communities with separate identities
                </p>
              </div>

              <div >
                
                <h4 >
                  Competitive Edge
                </h4>
                <p >
                  Maintain multiple ranks and achievements simultaneously
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection} >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Level Up Your Gaming</h2>
              <p className={styles.ctaDescription}>
                Download Multi Run now and start managing multiple gaming accounts like a pro.
                Unlock new strategies and dominate your favorite games.
              </p>
              <div className={styles.ctaButtons}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className={styles.ctaButton}
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Start Gaming
                </a>
                <Link
                  href="/hot-apps"
                  className={`${styles.ctaButton} ${styles.secondary}`}
                  aria-label="Explore popular apps"
                >
                  Explore Apps
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div></SiteShell>
  );
};

export default HotGamesPage;