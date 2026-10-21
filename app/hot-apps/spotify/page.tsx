import SiteShell from '../../../src/components/site/SiteShell';
import ProductVisual from '../../../src/components/site/ProductVisual';
import React from 'react';
import Link from 'next/link';
import Container from '../../../src/components/layout/Container';
import styles from '../../../src/components/app-pages/AppPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spotify Multiple Accounts | Multi Run - Music Streaming Management',
  description: 'Manage multiple Spotify accounts seamlessly with Multi Run. Perfect for music lovers, families, and content creators.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps/spotify',
  },
};

const SpotifyPage: React.FC = () => {
  return (
    <SiteShell variant="detail-page-shell"><div className={styles.appPage}>
      
      {/* Hero Section */}
      <section className={styles.heroSection} >
        <Container>
          <div className={styles.heroContent}>
            <Link href="/hot-apps" className={styles.backLink}>
              ← Back to Apps
            </Link>
            
            
            
            <h1 className={styles.appTitle}>Spotify</h1>
            <p className={styles.appSubtitle}>
              Use multiple Spotify accounts for different music preferences, family sharing, and personalized experiences
            </p>
            
            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Entertainment</span>
              <span className={`${styles.badge} ${styles.featured}`}>3.2M+ Downloads</span>
              <span className={styles.badge}>Music Streaming</span>
            </div>
          </div>
        <ProductVisual app="spotify" />
</Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionGrid}>
            {/* Why Multiple Spotify Accounts */}
            <div className={styles.contentBlock} data-motion>
              <h2 className={styles.blockTitle}>Why Multiple Spotify Accounts?</h2>
              <p className={styles.blockDescription}>
                Spotify is the world's leading music streaming platform with millions of songs and podcasts. 
                Multi Run enables you to create personalized music experiences for every aspect of your life.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Separate music preferences for different moods
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Manage family accounts and shared playlists
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Keep work and personal music libraries separate
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Access region-specific content and artists
                  </span>
                </li>
              </ul>
            </div>

            {/* Multi Run Benefits */}
            <div className={styles.contentBlock} data-motion>
              <h2 className={styles.blockTitle}>Multi Run Advantages</h2>
              <p className={styles.blockDescription}>
                Experience seamless music streaming with Multi Run's powerful features 
                designed for music enthusiasts and families.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Switch between music libraries instantly
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Maintain separate listening histories
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Access multiple premium subscriptions
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">↗</span>
                  <span className={styles.featureText}>
                    Keep recommendations algorithm separate
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard} data-motion>
              
              <h3 className={styles.useCaseTitle}>Genre Separation</h3>
              <p className={styles.useCaseDescription}>
                Keep different music genres in separate accounts for pure 
                discovery and personalized recommendations.
              </p>
            </div>

            <div className={styles.useCaseCard} data-motion>
              
              <h3 className={styles.useCaseTitle}>Family Sharing</h3>
              <p className={styles.useCaseDescription}>
                Manage family members' accounts and create shared family 
                playlists for different occasions.
              </p>
            </div>

            <div className={styles.useCaseCard} data-motion>
              
              <h3 className={styles.useCaseTitle}>Work & Focus</h3>
              <p className={styles.useCaseDescription}>
                Maintain a dedicated account for work music and 
                concentration playlists.
              </p>
            </div>

            <div className={styles.useCaseCard} data-motion>
              
              <h3 className={styles.useCaseTitle}>Activity-Based</h3>
              <p className={styles.useCaseDescription}>
                Create accounts for specific activities like workout, 
                study, or relaxation sessions.
              </p>
            </div>

            <div className={styles.useCaseCard} data-motion>
              
              <h3 className={styles.useCaseTitle}>Regional Content</h3>
              <p className={styles.useCaseDescription}>
                Access different regional music libraries and discover 
                local artist content worldwide.
              </p>
            </div>

            <div className={styles.useCaseCard} data-motion>
              
              <h3 className={styles.useCaseTitle}>Audio Quality Testing</h3>
              <p className={styles.useCaseDescription}>
                Test different subscription tiers and audio quality 
                settings for optimal listening.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} >
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Amplify Your Music Experience</h2>
            <p className={styles.ctaDescription}>
              Download Multi Run and enjoy seamless access to multiple Spotify accounts. 
              Create the perfect soundtrack for every moment of your life.
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href="https://play.google.com/store/apps/details?id=com.dong.multirun" 
                className={styles.ctaButton}
                aria-label="Download Multi Run from Google Play Store"
              >
                Get Multi Run
              </a>
              <Link 
                href="/hot-apps" 
                className={`${styles.ctaButton} ${styles.secondary}`}
                aria-label="View more supported apps"
              >
                Explore More Apps
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div></SiteShell>
  );
};

export default SpotifyPage;