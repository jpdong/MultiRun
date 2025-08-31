import React from 'react';
import Link from 'next/link';
import Container from '../components/layout/Container';
import styles from '../components/hot/HotArea.module.css';

// App and game data structure
const appsData = [
  { name: 'Instagram', icon: '📸', href: '/hot-apps/instagram' },
  { name: 'Facebook', icon: '👥', href: '/hot-apps/facebook' },
  { name: 'Twitter (X)', icon: '🐦', href: '/hot-apps/twitter' },
  { name: 'Spotify', icon: '🎶', href: '/hot-apps/spotify' },
  { name: 'BlueSky', icon: '🦋', href: '/hot-apps/bluesky' },
];

const gamesData = [
  { name: 'Roblox', icon: '🧱', href: '/hot-games/roblox' },
  { name: 'Grow a Garden', icon: '🌱', href: '/hot-games/growagarden' },
];

const HotArea: React.FC = () => {
  return (
    <section className={styles.hotSection} id="hot-content">
      <Container>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Popular Apps & Games</h2>
          <p className={styles.sectionSubtitle}>
            Discover the most popular applications and games that work seamlessly with Multi Run
          </p>
        </header>

        <div className={styles.categoriesGrid}>
          {/* Apps Section */}
          <div className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>📱</div>
              <h3 className={styles.categoryTitle}>Popular Apps</h3>
            </div>
            <div className={styles.appsGrid}>
              {appsData.map((app) => (
                <Link
                  key={app.name}
                  href={app.href}
                  className={styles.appCard}
                  aria-label={`Learn more about ${app.name}`}
                >
                  <div className={styles.appIcon}>{app.icon}</div>
                  <span className={styles.appName}>{app.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Games Section */}
          <div className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>🎮</div>
              <h3 className={styles.categoryTitle}>Popular Games</h3>
            </div>
            <div className={styles.appsGrid}>
              {gamesData.map((game) => (
                <Link
                  key={game.name}
                  href={game.href}
                  className={styles.appCard}
                  aria-label={`Learn more about ${game.name}`}
                >
                  <div className={styles.appIcon}>{game.icon}</div>
                  <span className={styles.appName}>{game.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Discover More Section */}
        <div className={styles.discoverSection}>
          <Link
            href="/hot-apps"
            className={styles.discoverCard}
            aria-label="Discover all supported apps"
          >
            <div className={styles.discoverIcon}>📱</div>
            <div className={styles.discoverContent}>
              <h4 className={styles.discoverTitle}>Explore All Apps</h4>
              <p className={styles.discoverDescription}>
                Browse our complete collection of supported applications
              </p>
            </div>
            <div className={styles.discoverArrow}>→</div>
          </Link>

          <Link
            href="/hot-games"
            className={`${styles.discoverCard} ${styles.games}`}
            aria-label="Discover all supported games"
          >
            <div className={styles.discoverIcon}>🎮</div>
            <div className={styles.discoverContent}>
              <h4 className={styles.discoverTitle}>Explore All Games</h4>
              <p className={styles.discoverDescription}>
                Discover games that work perfectly with multiple accounts
              </p>
            </div>
            <div className={styles.discoverArrow}>→</div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HotArea;