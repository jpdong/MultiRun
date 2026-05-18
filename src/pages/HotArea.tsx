import React from 'react';
import Link from 'next/link';
import Container from '../components/layout/Container';

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
    <section className="py-24 px-6 relative overflow-hidden bg-white border-t border-border-light font-sans" id="hot-content">
      <Container>
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight m-0">Popular Apps &amp; Games</h2>
          <p className="text-lg text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
            Discover the most popular applications and games that work seamlessly with Multi Run
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Apps Section */}
          <div className="bg-bg-lighter rounded-3xl p-8 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-primary/10 text-primary border border-primary/20 shadow-[0_4px_12px_rgba(0,98,255,0.1)]">📱</div>
              <h3 className="text-2xl font-bold text-dark m-0 tracking-tight">Popular Apps</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {appsData.map((app) => (
                <Link
                  key={app.name}
                  href={app.href}
                  className="flex flex-col items-center py-6 px-4 bg-white rounded-2xl no-underline text-text transition-all duration-200 border border-border-light hover:border-primary hover:shadow-[0_8px_24px_rgba(0,98,255,0.12)] hover:-translate-y-1 group"
                  aria-label={`Learn more about ${app.name}`}
                >
                  <div className="text-3xl mb-3 transition-transform duration-200 group-hover:scale-110">{app.icon}</div>
                  <span className="text-sm font-bold text-center leading-snug m-0 group-hover:text-primary transition-colors">{app.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Games Section */}
          <div className="bg-bg-lighter rounded-3xl p-8 border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-primary/10 text-primary border border-primary/20 shadow-[0_4px_12px_rgba(0,98,255,0.1)]">🎮</div>
              <h3 className="text-2xl font-bold text-dark m-0 tracking-tight">Popular Games</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {gamesData.map((game) => (
                <Link
                  key={game.name}
                  href={game.href}
                  className="flex flex-col items-center py-6 px-4 bg-white rounded-2xl no-underline text-text transition-all duration-200 border border-border-light hover:border-primary hover:shadow-[0_8px_24px_rgba(0,98,255,0.12)] hover:-translate-y-1 group"
                  aria-label={`Learn more about ${game.name}`}
                >
                  <div className="text-3xl mb-3 transition-transform duration-200 group-hover:scale-110">{game.icon}</div>
                  <span className="text-sm font-bold text-center leading-snug m-0 group-hover:text-primary transition-colors">{game.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Discover More Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link
            href="/hot-apps"
            className="flex items-center gap-5 p-6 bg-dark rounded-2xl no-underline text-white transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-white/10 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_32px_rgba(0,98,255,0.25)] group"
            aria-label="Discover all supported apps"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl border border-white/10 shrink-0">📱</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mt-0 mb-1 tracking-tight text-white group-hover:text-primary transition-colors">Explore All Apps</h4>
              <p className="text-sm text-text-lighter m-0 leading-relaxed">Browse our complete collection of supported applications</p>
            </div>
            <div className="text-xl transition-transform duration-200 group-hover:translate-x-1 text-primary">&rarr;</div>
          </Link>

          <Link
            href="/hot-games"
            className="flex items-center gap-5 p-6 bg-primary rounded-2xl no-underline text-white transition-all duration-300 shadow-[0_8px_24px_rgba(0,98,255,0.25)] hover:-translate-y-1 hover:bg-primary-hover hover:shadow-[0_12px_32px_rgba(0,98,255,0.35)] group"
            aria-label="Discover all supported games"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shrink-0">🎮</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mt-0 mb-1 tracking-tight text-white">Explore All Games</h4>
              <p className="text-sm text-white/80 m-0 leading-relaxed">Discover games that work perfectly with multiple accounts</p>
            </div>
            <div className="text-xl transition-transform duration-200 group-hover:translate-x-1 text-white">&rarr;</div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HotArea;
