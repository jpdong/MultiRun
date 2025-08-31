import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import styles from '../../../src/components/app-pages/AppPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Twitter (X) Multiple Accounts | Multi Run - Social Media Management',
  description: 'Manage multiple Twitter accounts seamlessly with Multi Run. Perfect for professionals, businesses, and content creators.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps/twitter',
  },
};

const TwitterPage: React.FC = () => {
  return (
    <div className={styles.appPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)'
      }}>
        <Container>
          <div className={styles.heroContent}>
            <Link href="/hot-apps" className={styles.backLink}>
              ← Back to Apps
            </Link>
            
            <div className={styles.appIcon}>🐦</div>
            
            <h1 className={styles.appTitle}>Twitter (X)</h1>
            <p className={styles.appSubtitle}>
              Manage multiple Twitter accounts for different interests, businesses, and social circles
            </p>
            
            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Social Media</span>
              <span className={`${styles.badge} ${styles.featured}`}>2.5M+ Downloads</span>
              <span className={styles.badge}>Real-time</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionGrid}>
            {/* Why Multiple Twitter Accounts */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Why Multiple Twitter Accounts?</h2>
              <p className={styles.blockDescription}>
                Twitter (X) is the global platform for real-time conversations and news. 
                Multi Run enables you to engage with different communities and audiences effectively.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Separate professional and personal content
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Target different audiences with specialized content
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Manage business accounts for different brands
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Engage with different communities and interests
                  </span>
                </li>
              </ul>
            </div>

            {/* Multi Run Benefits */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Multi Run Advantages</h2>
              <p className={styles.blockDescription}>
                Experience seamless Twitter management with Multi Run's powerful features 
                designed for social media professionals and enthusiasts.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🚀</span>
                  <span className={styles.featureText}>
                    Tweet from multiple accounts simultaneously
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>📊</span>
                  <span className={styles.featureText}>
                    Monitor different timelines concurrently
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>💬</span>
                  <span className={styles.featureText}>
                    Manage DMs across all accounts
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>⚡</span>
                  <span className={styles.featureText}>
                    Quick account switching without re-login
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>💼</span>
              <h3 className={styles.useCaseTitle}>Professional Networking</h3>
              <p className={styles.useCaseDescription}>
                Build your professional brand and connect with industry 
                peers and thought leaders.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎯</span>
              <h3 className={styles.useCaseTitle}>Niche Communities</h3>
              <p className={styles.useCaseDescription}>
                Engage with specific communities around your interests, 
                hobbies, or areas of expertise.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>📢</span>
              <h3 className={styles.useCaseTitle}>Brand Marketing</h3>
              <p className={styles.useCaseDescription}>
                Promote different brands or products with dedicated 
                accounts and targeted messaging.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>📰</span>
              <h3 className={styles.useCaseTitle}>News & Commentary</h3>
              <p className={styles.useCaseDescription}>
                Share news and commentary on current events and 
                trending topics in your field.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎨</span>
              <h3 className={styles.useCaseTitle}>Creative Showcase</h3>
              <p className={styles.useCaseDescription}>
                Display your creative work, art, or projects to 
                different audiences and communities.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🤝</span>
              <h3 className={styles.useCaseTitle}>Customer Support</h3>
              <p className={styles.useCaseDescription}>
                Provide customer support and engage with customers 
                directly through dedicated support accounts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} style={{
        background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)'
      }}>
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Amplify Your Twitter Presence</h2>
            <p className={styles.ctaDescription}>
              Download Multi Run and manage multiple Twitter accounts like a social media pro. 
              Join the conversation across all your interests and communities.
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

export default TwitterPage;