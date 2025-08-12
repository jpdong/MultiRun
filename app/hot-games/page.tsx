import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
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
    <div className={styles.appListingPage}>
      <NavBar />
      
      {/* Hero Section */}
      <section className={styles.heroSection} style={{
        background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)'
      }}>
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

          {/* Category Filter */}
          <div className={styles.categoryFilter}>
            {gameCategories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${category === 'All' ? styles.active : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <div className={styles.appsGrid}>
            {hotGames.map((game) => (
              <Link
                key={game.id}
                href={`/hot-games/${game.id}`}
                className={`${styles.appCard} ${game.featured ? styles.featured : ''}`}
                aria-label={`Learn more about ${game.name}`}
              >
                <div className={styles.appCardHeader}>
                  <div className={styles.appIcon}>{game.icon}</div>
                  <div className={styles.appInfo}>
                    <h3 className={styles.appName}>{game.name}</h3>
                    <span className={styles.appCategory}>{game.category}</span>
                  </div>
                </div>
                
                <p className={styles.appDescription}>{game.description}</p>
                
                <div className={styles.appFooter}>
                  <div className={styles.appStats}>
                    <span className={styles.downloadCount}>{game.downloads}</span>
                    <span style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '6px',
                      fontSize: '0.875rem',
                      color: '#64748b',
                      fontWeight: '500'
                    }}>
                      ⭐ {game.rating}
                    </span>
                  </div>
                  <span className={styles.learnMore}>Learn More</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Gaming Benefits Section */}
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
            borderRadius: '24px',
            padding: '60px 40px',
            margin: '80px 0',
            border: '1px solid #f1f5f9',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: '700',
              color: '#0f172a',
              margin: '0 0 20px 0',
              letterSpacing: '-0.01em'
            }}>
              Why Multiple Gaming Accounts?
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748b',
              margin: '0 0 40px 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Unlock new gaming possibilities with separate accounts for different strategies, 
              play styles, and gaming communities.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
              marginTop: '40px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  margin: '0 auto 16px',
                  color: 'white'
                }}>
                  🎯
                </div>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#0f172a',
                  margin: '0 0 8px 0'
                }}>
                  Strategy Testing
                </h4>
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Test different strategies without affecting your main progress
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  margin: '0 auto 16px',
                  color: 'white'
                }}>
                  👥
                </div>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#0f172a',
                  margin: '0 0 8px 0'
                }}>
                  Community Separation
                </h4>
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Join different gaming communities with separate identities
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  margin: '0 auto 16px',
                  color: 'white'
                }}>
                  🏆
                </div>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#0f172a',
                  margin: '0 0 8px 0'
                }}>
                  Competitive Edge
                </h4>
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Maintain multiple ranks and achievements simultaneously
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection} style={{
            background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)'
          }}>
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

      <Footer />
    </div>
  );
};

export default HotGamesPage;