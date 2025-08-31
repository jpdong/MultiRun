import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import styles from '../../../src/components/app-pages/AppPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Multiple Accounts | Multi Run - Visual Content Management',
  description: 'Manage multiple Instagram accounts seamlessly with Multi Run. Perfect for content creators, businesses, and influencers.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps/instagram',
  },
};

const InstagramPage: React.FC = () => {
  return (
    <div className={styles.appPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)'
      }}>
        <Container>
          <div className={styles.heroContent}>
            <Link href="/hot-apps" className={styles.backLink}>
              ← Back to Apps
            </Link>
            
            <div className={styles.appIcon}>📸</div>
            
            <h1 className={styles.appTitle}>Instagram</h1>
            <p className={styles.appSubtitle}>
              Manage multiple Instagram accounts for personal use, business promotion, and creative content
            </p>
            
            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Social Media</span>
              <span className={`${styles.badge} ${styles.featured}`}>5M+ Downloads</span>
              <span className={styles.badge}>Creator Friendly</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionGrid}>
            {/* Why Multiple Instagram Accounts */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Why Multiple Instagram Accounts?</h2>
              <p className={styles.blockDescription}>
                Instagram is the leading platform for visual storytelling and brand building. 
                Multi Run enables you to maximize your creative potential across different niches and audiences.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Personal and business content separation
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Different niche audiences and themes
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Brand management across multiple businesses
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Content testing and A/B strategies
                  </span>
                </li>
              </ul>
            </div>

            {/* Key Features */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Instagram Features</h2>
              <p className={styles.blockDescription}>
                Leverage Instagram's powerful features across multiple accounts to maximize 
                your reach, engagement, and business opportunities.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>📱</span>
                  <span className={styles.featureText}>
                    Stories & Reels for engaging content
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>💼</span>
                  <span className={styles.featureText}>
                    Business tools and analytics insights
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🛍️</span>
                  <span className={styles.featureText}>
                    Shopping features and product tagging
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🎨</span>
                  <span className={styles.featureText}>
                    Creator studio and content scheduling
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎬</span>
              <h3 className={styles.useCaseTitle}>Content Creators</h3>
              <p className={styles.useCaseDescription}>
                Separate personal life from content creation with dedicated accounts 
                for different niches and audiences.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🏪</span>
              <h3 className={styles.useCaseTitle}>Small Businesses</h3>
              <p className={styles.useCaseDescription}>
                Manage multiple business accounts for different products, 
                locations, or target markets.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>⭐</span>
              <h3 className={styles.useCaseTitle}>Influencers</h3>
              <p className={styles.useCaseDescription}>
                Test different content strategies and maintain multiple 
                brand partnerships effectively.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎨</span>
              <h3 className={styles.useCaseTitle}>Artists & Designers</h3>
              <p className={styles.useCaseDescription}>
                Showcase different art styles, projects, or creative 
                endeavors with separate portfolios.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>📈</span>
              <h3 className={styles.useCaseTitle}>Marketing Agencies</h3>
              <p className={styles.useCaseDescription}>
                Manage client accounts and test different marketing 
                strategies across various industries.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🌟</span>
              <h3 className={styles.useCaseTitle}>Personal Branding</h3>
              <p className={styles.useCaseDescription}>
                Build different aspects of your personal brand with 
                focused, theme-specific accounts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} style={{
        background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)'
      }}>
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Amplify Your Instagram?</h2>
            <p className={styles.ctaDescription}>
              Download Multi Run now and start managing multiple Instagram accounts like a pro. 
              Join thousands of creators and businesses who trust Multi Run.
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

export default InstagramPage;