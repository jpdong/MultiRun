import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
import Container from '../../src/components/layout/Container';
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
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <NavBar />

      {/* Hero Section (Carbon Black) */}
      <section className="pt-36 pb-24 bg-dark text-white relative overflow-hidden border-b border-border-light/10">
        <Container>
          <div className="relative z-1 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
              <span>🎮 Supported Games</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight m-0 text-white">Popular Games for Multi Run</h1>
            <p className="text-lg md:text-xl text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
              Level up your gaming experience by running dual accounts, farming resources, and playing co-op with yourself.
            </p>

            <div className="flex justify-center gap-12 md:gap-16 flex-wrap pt-8 border-t border-white/10 max-w-2xl mx-auto">
              <div className="text-center space-y-1">
                <span className="block text-3xl font-bold text-white">20+</span>
                <span className="text-xs uppercase tracking-wider text-text-lighter font-medium">Supported Games</span>
              </div>
              <div className="text-center space-y-1">
                <span className="block text-3xl font-bold text-white">15M+</span>
                <span className="text-xs uppercase tracking-wider text-text-lighter font-medium">Gaming Sessions</span>
              </div>
              <div className="text-center space-y-1">
                <span className="block text-3xl font-bold text-white">4.7★</span>
                <span className="text-xs uppercase tracking-wider text-text-lighter font-medium">Gamer Rating</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-bg-lighter flex-1">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight m-0">Featured Games</h2>
            <p className="text-lg text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of the most popular games for multiple account gaming
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {gameCategories.map((category) => (
              <button
                key={category}
                className={`py-3 px-8 border rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${category === 'All' ? 'bg-primary border-primary text-white shadow-[0_4px_16px_rgba(0,98,255,0.25)]' : 'bg-white text-dark border-border-light hover:border-primary hover:text-primary hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {hotGames.map((game) => (
              <Link
                key={game.id}
                href={`/hot-games/${game.id}`}
                className={`rounded-3xl p-8 transition-all duration-300 relative group flex flex-col justify-between no-underline ${game.featured ? 'bg-dark text-white border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:border-primary/50' : 'bg-white border border-border-light text-dark shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-primary/40'} hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,98,255,0.12)]`}
                aria-label={`Learn more about ${game.name}`}
              >
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 text-3xl rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shrink-0 ${game.featured ? 'bg-white/10 border-white/20 text-white' : 'bg-primary/10 border-primary/20 text-primary'}`}>
                      {game.icon}
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className={`text-xl font-bold m-0 tracking-tight truncate ${game.featured ? 'text-white' : 'text-dark'}`}>{game.name}</h3>
                      <span className={`inline-block py-1 px-3 rounded-lg text-xs font-medium border ${game.featured ? 'bg-white/10 text-white/80 border-white/20' : 'bg-bg-code text-text-light border-border-light'}`}>{game.category}</span>
                    </div>
                  </div>

                  <p className={`leading-relaxed m-0 mb-8 text-base ${game.featured ? 'text-text-lighter' : 'text-text-light'}`}>{game.description}</p>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-border-light/50 mt-auto">
                  <div className={`flex items-center gap-4 text-sm font-medium ${game.featured ? 'text-white/60' : 'text-text-lighter'}`}>
                    <span>📊 {game.downloads}</span>
                    <span>⭐ {game.rating}</span>
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-bold transition-all duration-200 group-hover:gap-2 ${game.featured ? 'text-white group-hover:text-primary' : 'text-primary'}`}>
                    <span>Learn More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Gaming Benefits Section (Clean White Card) */}
          <div className="bg-white rounded-3xl py-16 px-8 md:px-16 my-24 border border-border-light shadow-[0_4px_24px_rgba(0,0,0,0.02)] text-center space-y-12">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-dark tracking-tight m-0">
                Why Multiple Gaming Accounts?
              </h3>
              <p className="text-lg text-text-lighter m-0 leading-relaxed">
                Unlock new gaming possibilities with separate accounts for different strategies, play styles, and gaming communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-3xl mx-auto text-primary shadow-inner">
                  🎯
                </div>
                <h4 className="text-xl font-bold text-dark m-0">Strategy Testing</h4>
                <p className="text-base text-text-lighter m-0 leading-relaxed">
                  Test different strategies without affecting your main progress
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-3xl mx-auto text-primary shadow-inner">
                  👥
                </div>
                <h4 className="text-xl font-bold text-dark m-0">Community Separation</h4>
                <p className="text-base text-text-lighter m-0 leading-relaxed">
                  Join different gaming communities with separate identities
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-3xl mx-auto text-primary shadow-inner">
                  🏆
                </div>
                <h4 className="text-xl font-bold text-dark m-0">Competitive Edge</h4>
                <p className="text-base text-text-lighter m-0 leading-relaxed">
                  Maintain multiple ranks and achievements simultaneously
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section (Carbon Black) */}
          <div className="py-20 px-8 bg-dark text-white text-center rounded-3xl border border-white/10 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
            <div className="relative z-1 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight m-0 text-white">Level Up Your Gaming</h2>
              <p className="text-lg text-text-lighter m-0 leading-relaxed">
                Download Multi Run now and start managing multiple gaming accounts like a pro. Unlock new strategies and dominate your favorite games.
              </p>
              <div className="flex justify-center gap-4 flex-wrap pt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className="inline-flex items-center justify-center py-4 px-8 bg-white text-dark no-underline font-bold text-base rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:bg-border-light"
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Start Gaming
                </a>
                <Link
                  href="/hot-apps"
                  className="inline-flex items-center justify-center py-4 px-8 bg-transparent text-white no-underline font-bold text-base rounded-full border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/60"
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
