import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import styles from '../../../src/components/app-pages/AppPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roblox Multiple Accounts | Multi Run - Metaverse Gaming',
  description: 'Manage multiple Roblox accounts seamlessly with Multi Run. Perfect for creators, gamers, and metaverse enthusiasts.',
  alternates: {
    canonical: 'https://multirun.space/hot-games/roblox',
  },
};

const RobloxPage: React.FC = () => {
  return (
    <div className={styles.appPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        background: 'linear-gradient(135deg, #00a2ff 0%, #0078d4 100%)'
      }}>
        <Container>
          <div className={styles.heroContent}>
            <Link href="/hot-games" className={styles.backLink}>
              ← Back to Games
            </Link>
            
            <div className={styles.appIcon}>🧱</div>
            
            <h1 className={styles.appTitle}>Roblox</h1>
            <p className={styles.appSubtitle}>
              Explore infinite worlds with multiple creative identities in the ultimate metaverse platform
            </p>
            
            <div className={styles.badgeContainer}>
              <span className={styles.badge}>Metaverse</span>
              <span className={`${styles.badge} ${styles.featured}`}>10M+ Downloads</span>
              <span className={styles.badge}>Creator Platform</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionGrid}>
            {/* Why Multiple Roblox Accounts */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Why Multiple Roblox Accounts?</h2>
              <p className={styles.blockDescription}>
                Roblox is the ultimate metaverse platform where imagination meets creation. 
                Multi Run opens up unlimited possibilities for exploration, creativity, and social interaction.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Diverse gaming experiences across genres
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Separate creator and player identities
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Build different social circles and communities
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span className={styles.featureText}>
                    Maximize achievements and trading opportunities
                  </span>
                </li>
              </ul>
            </div>

            {/* Multi Run Benefits */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Multi Run Advantages</h2>
              <p className={styles.blockDescription}>
                Experience seamless Roblox gaming with Multi Run's powerful features 
                designed for creators, gamers, and metaverse enthusiasts.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🌍</span>
                  <span className={styles.featureText}>
                    Access different Roblox experiences simultaneously
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>🎨</span>
                  <span className={styles.featureText}>
                    Separate accounts for development and gameplay
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>👥</span>
                  <span className={styles.featureText}>
                    Join different communities without mixing identities
                  </span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon}>💰</span>
                  <span className={styles.featureText}>
                    Optimize trading and marketplace activities
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎮</span>
              <h3 className={styles.useCaseTitle}>Game Developer</h3>
              <p className={styles.useCaseDescription}>
                Focus on creating and publishing your own Roblox games 
                with dedicated development accounts.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>👥</span>
              <h3 className={styles.useCaseTitle}>Social Gamer</h3>
              <p className={styles.useCaseDescription}>
                Connect with friends and explore popular games together 
                in different social circles.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🏆</span>
              <h3 className={styles.useCaseTitle}>Competitive Player</h3>
              <p className={styles.useCaseDescription}>
                Master competitive games and climb leaderboards 
                with specialized gaming accounts.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🐾</span>
              <h3 className={styles.useCaseTitle}>Pet Collector</h3>
              <p className={styles.useCaseDescription}>
                Maximize pet collection and trading in games like 
                Adopt Me! and Pet Simulator X.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>🎭</span>
              <h3 className={styles.useCaseTitle}>Role Player</h3>
              <p className={styles.useCaseDescription}>
                Build different character roles and storylines 
                in roleplay games like Brookhaven RP.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>⚔️</span>
              <h3 className={styles.useCaseTitle}>Combat Specialist</h3>
              <p className={styles.useCaseDescription}>
                Master different fighting styles and strategies 
                in combat games like Blox Fruits.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} style={{
        background: 'linear-gradient(135deg, #00a2ff 0%, #0078d4 100%)'
      }}>
        <Container>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Explore Infinite Worlds?</h2>
            <p className={styles.ctaDescription}>
              Transform your Roblox experience with Multi Run. Create multiple identities, 
              explore endless possibilities, and become a master of the metaverse!
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

export default RobloxPage;