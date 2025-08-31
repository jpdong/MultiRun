import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import styles from '../../../src/components/app-pages/AppPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facebook Multiple Accounts | Multi Run - Social Media Management',
  description: 'Manage multiple Facebook accounts seamlessly with Multi Run. Perfect for businesses, content creators, and social media managers.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps/facebook',
  },
};

const FacebookPage: React.FC = () => {
  return (
    <div className={styles.appPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        background: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 100%)'
      }}>
        <Container>
          <div className={styles.heroContent}>
            <Link href="/hot-apps" className={styles.backLink}>
              ← Back to Apps
            </Link>
            
            <div className={styles.appIcon}>👥</div>
            
            <h1 className={styles.appTitle}>Facebook</h1>
            <p className={styles.appSubtitle}>
              Switch between personal and business Facebook accounts seamlessly without the hassle of logging out
            </p>
            
            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Social Media</span>
              <span className={`${styles.badge} ${styles.featured}`}>6M+ Downloads</span>
              <span className={styles.badge}>Business Ready</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionGrid}>
            {/* Why Multiple Facebook Accounts */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Why Multiple Facebook Accounts?</h2>
              <p className={styles.blockDescription}>
                Facebook remains the world's largest social network with billions of users. 
                Multi Run enables you to maximize your Facebook presence across different identities and purposes.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Separate personal and business identities
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Manage multiple business pages and accounts
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Keep different social circles organized
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Test marketing strategies across accounts
                  </span>
                </li>
              </ul>
            </div>

            {/* Multi Run Benefits */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Multi Run Advantages</h2>
              <p className={styles.blockDescription}>
                Experience seamless Facebook account management with Multi Run's powerful features 
                designed for efficiency and productivity.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🚀</span>
                  <span className={styles.featureText}>
                    No more logging in and out constantly
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>⚡</span>
                  <span className={styles.featureText}>
                    Switch between accounts instantly
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🔔</span>
                  <span className={styles.featureText}>
                    Isolated notifications for each account
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🔒</span>
                  <span className={styles.featureText}>
                    Secure data separation and privacy
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
                Keep your personal life separate from your professional networking 
                and business activities.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🏢</span>
              <h3 className={styles.useCaseTitle}>Business Management</h3>
              <p className={styles.useCaseDescription}>
                Manage multiple business accounts for different ventures, 
                clients, or brand portfolios.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>📈</span>
              <h3 className={styles.useCaseTitle}>Marketing & Analytics</h3>
              <p className={styles.useCaseDescription}>
                Test different marketing strategies and track performance 
                across multiple accounts.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>👨‍👩‍👧‍👦</span>
              <h3 className={styles.useCaseTitle}>Family Management</h3>
              <p className={styles.useCaseDescription}>
                Manage family member accounts or community group pages 
                from a single device.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🌍</span>
              <h3 className={styles.useCaseTitle}>Regional Presence</h3>
              <p className={styles.useCaseDescription}>
                Maintain different accounts for different geographical 
                regions and local markets.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎭</span>
              <h3 className={styles.useCaseTitle}>Creative Projects</h3>
              <p className={styles.useCaseDescription}>
                Separate accounts for different creative projects, 
                brands, or artistic endeavors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} style={{
        background: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 100%)'
      }}>
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Master Facebook?</h2>
            <p className={styles.ctaDescription}>
              Download Multi Run and seamlessly switch between your Facebook accounts without the hassle. 
              Join millions of users who trust Multi Run for their social media management.
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

export default FacebookPage;