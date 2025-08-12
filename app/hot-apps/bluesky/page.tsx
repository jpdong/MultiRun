import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import styles from '../../../src/components/app-pages/AppPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BlueSky Multiple Accounts | Multi Run - Decentralized Social Media',
  description: 'Manage multiple BlueSky accounts seamlessly with Multi Run. Perfect for content creators, professionals, and community managers on the decentralized social platform.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps/bluesky',
  },
};

const BlueskyPage: React.FC = () => {
  return (
    <div className={styles.appPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <Link href="/hot-apps" className={styles.backLink}>
              ← Back to Apps
            </Link>

            <div className={styles.appIcon}>🦋</div>

            <h1 className={styles.appTitle}>BlueSky</h1>
            <p className={styles.appSubtitle}>
              Manage multiple accounts on the decentralized social network that puts you in control
            </p>

            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Social Media</span>
              <span className={`${styles.badge} ${styles.featured}`}>Decentralized</span>
              <span className={styles.badge}>Growing Fast</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionGrid}>
            {/* Why Clone BlueSky */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Why Multiple BlueSky Accounts?</h2>
              <p className={styles.blockDescription}>
                BlueSky represents the future of social media with its decentralized approach.
                Multi Run enables you to harness this platform's full potential across multiple identities.
              </p>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Separate personal and professional presence
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Engage with different communities and interests
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Test content strategies across niches
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Build multiple brand identities
                  </span>
                </li>
              </ul>
            </div>

            {/* Key Features */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Platform Advantages</h2>
              <p className={styles.blockDescription}>
                Experience the next generation of social networking with BlueSky's innovative features
                and decentralized architecture.
              </p>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🌐</span>
                  <span className={styles.featureText}>
                    Built on AT Protocol for true decentralization
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>📝</span>
                  <span className={styles.featureText}>
                    Custom feeds tailored to your interests
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🔍</span>
                  <span className={styles.featureText}>
                    Advanced discovery and connection tools
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🔒</span>
                  <span className={styles.featureText}>
                    Enhanced privacy and user control
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>👤</span>
              <h3 className={styles.useCaseTitle}>Personal & Professional</h3>
              <p className={styles.useCaseDescription}>
                Maintain distinct identities for personal connections and professional networking
                on this emerging platform.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎨</span>
              <h3 className={styles.useCaseTitle}>Content Creation</h3>
              <p className={styles.useCaseDescription}>
                Manage specialized accounts for different content themes, audiences,
                and creative projects.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🏢</span>
              <h3 className={styles.useCaseTitle}>Brand Presence</h3>
              <p className={styles.useCaseDescription}>
                Establish early brand presence on BlueSky while maintaining personal accounts
                for authentic engagement.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🌍</span>
              <h3 className={styles.useCaseTitle}>Community Building</h3>
              <p className={styles.useCaseDescription}>
                Create and manage communities around different topics, interests,
                and causes you care about.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>📊</span>
              <h3 className={styles.useCaseTitle}>Strategy Testing</h3>
              <p className={styles.useCaseDescription}>
                Experiment with different posting strategies, content types,
                and engagement approaches.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🔄</span>
              <h3 className={styles.useCaseTitle}>Cross-Platform Management</h3>
              <p className={styles.useCaseDescription}>
                Coordinate content across multiple BlueSky accounts and other
                social media platforms.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Join the Future?</h2>
            <p className={styles.ctaDescription}>
              Start managing multiple BlueSky accounts today and be part of the decentralized social media revolution.
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

      <Footer />
    </div>
  );
};

export default BlueskyPage;