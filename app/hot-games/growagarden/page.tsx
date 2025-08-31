import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import styles from '../../../src/components/app-pages/AppPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Multiple Accounts | Multi Run - Virtual Gardening',
  description: 'Cultivate multiple virtual gardens with unique identities and creative styles using Multi Run.',
  alternates: {
    canonical: 'https://multirun.space/hot-games/growagarden',
  },
};

const GrowGardenPage: React.FC = () => {
  return (
    <div className={styles.appPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)'
      }}>
        <Container>
          <div className={styles.heroContent}>
            <Link href="/hot-games" className={styles.backLink}>
              ← Back to Games
            </Link>
            
            <div className={styles.appIcon}>🌱</div>
            
            <h1 className={styles.appTitle}>Grow a Garden</h1>
            <p className={styles.appSubtitle}>
              Cultivate multiple virtual gardens with unique identities and creative styles
            </p>
            
            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Simulation</span>
              <span className={`${styles.badge} ${styles.featured}`}>3M+ Downloads</span>
              <span className={styles.badge}>Relaxing</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionGrid}>
            {/* Why Multiple Garden Accounts */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Why Multiple Garden Accounts?</h2>
              <p className={styles.blockDescription}>
                Grow a Garden is a peaceful yet engaging simulation game where creativity meets strategy. 
                Multi Run allows you to explore unlimited gardening possibilities and create distinct botanical masterpieces.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Create gardens with completely different themes
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Test various plant combinations and strategies
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Focus on different seasons and events
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Maximize rewards across multiple gardens
                  </span>
                </li>
              </ul>
            </div>

            {/* Multi Run Benefits */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Multi Run Advantages</h2>
              <p className={styles.blockDescription}>
                Experience seamless garden management with Multi Run's powerful features 
                designed for virtual gardening enthusiasts and creative minds.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🎨</span>
                  <span className={styles.featureText}>
                    Design gardens without compromising your vision
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🌸</span>
                  <span className={styles.featureText}>
                    Specialize each account for different seasons
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🔄</span>
                  <span className={styles.featureText}>
                    Create plant trading and resource networks
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🏆</span>
                  <span className={styles.featureText}>
                    Maximize achievements across specialized gardens
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🧘</span>
              <h3 className={styles.useCaseTitle}>Zen Paradise</h3>
              <p className={styles.useCaseDescription}>
                Focus on peaceful, meditative garden designs with traditional 
                elements like bonsai and water features.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🌺</span>
              <h3 className={styles.useCaseTitle}>Tropical Oasis</h3>
              <p className={styles.useCaseDescription}>
                Create lush tropical gardens with exotic plants, vibrant colors, 
                and year-round blooming paradise.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🔬</span>
              <h3 className={styles.useCaseTitle}>Modern Botanical</h3>
              <p className={styles.useCaseDescription}>
                Design contemporary gardens with cutting-edge plant technology 
                and sustainable eco-friendly designs.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🌹</span>
              <h3 className={styles.useCaseTitle}>Rose Collection</h3>
              <p className={styles.useCaseDescription}>
                Master every rose variety and create stunning specialized 
                rose gardens with different themes.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🥕</span>
              <h3 className={styles.useCaseTitle}>Vegetable Paradise</h3>
              <p className={styles.useCaseDescription}>
                Focus on growing rare vegetables and maximizing harvest 
                yields with optimal farming strategies.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🦋</span>
              <h3 className={styles.useCaseTitle}>Butterfly Sanctuary</h3>
              <p className={styles.useCaseDescription}>
                Create gardens specifically designed to attract rare 
                butterflies and beneficial insects.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} style={{
        background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)'
      }}>
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Grow Your Garden Empire?</h2>
            <p className={styles.ctaDescription}>
              Transform your gardening experience with Multi Run. Create multiple gardens, 
              explore endless creative possibilities, and become the ultimate virtual gardener!
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href="https://play.google.com/store/apps/details?id=com.dong.multirun" 
                className={styles.ctaButton}
                aria-label="Download Multi Run from Google Play Store"
              >
                Start Gardening
              </a>
              <Link 
                href="/hot-games" 
                className={`${styles.ctaButton} ${styles.secondary}`}
                aria-label="View more supported games"
              >
                Explore More Games
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default GrowGardenPage;