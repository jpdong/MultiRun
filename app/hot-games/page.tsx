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
    <div className="min-h-screen bg-gradient-to-b from-[#fafbfc] to-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-20 max-md:pt-20 max-md:pb-[60px] max-[480px]:pt-[60px] max-[480px]:pb-10 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] text-white relative overflow-hidden">
        <Container>
          <div className="relative z-1 text-center max-w-[800px] mx-auto">
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold mt-0 mb-5 tracking-tight leading-[1.1]">Popular Games</h1>
            <p className="text-xl font-normal mt-0 mb-10 opacity-90 leading-relaxed max-w-[600px] mx-auto">
              Discover the most popular games that support multiple accounts.
              Level up your gaming experience with Multi Run&apos;s seamless account management.
            </p>

            <div className="flex justify-center gap-12 max-md:gap-6 flex-wrap mt-10">
              <div className="text-center">
                <span className="block text-2xl max-md:text-7 font-bold mb-1">20+</span>
                <span className="text-sm opacity-80 font-medium">Supported Games</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl max-md:text-7 font-bold mb-1">15M+</span>
                <span className="text-sm opacity-80 font-medium">Gaming Sessions</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl max-md:text-7 font-bold mb-1">4.7★</span>
                <span className="text-sm opacity-80 font-medium">Gamer Rating</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-[100px] max-md:py-20">
        <Container>
          <div className="text-center mb-20 max-md:mb-[60px]">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#0f172a] mt-0 mb-4 tracking-tight leading-[1.2]">Featured Games</h2>
            <p className="text-lg text-[#64748b] m-0 max-w-[600px] mx-auto leading-relaxed">
              Explore our curated collection of the most popular games for multiple account gaming
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 max-[480px]:gap-2 mb-[60px] max-md:mb-10 flex-wrap">
            {gameCategories.map((category) => (
              <button
                key={category}
                className={`py-3 px-6 max-[480px]:py-[10px] max-[480px]:px-4 border-2 border-[#e2e8f0] rounded-xl font-medium text-sm max-[480px]:text-[0.8125rem] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${category === 'All' ? 'bg-[#667eea] border-[#667eea] text-white -translate-y-px shadow-[0_4px_12px_rgba(102,126,234,0.3)]' : 'bg-white text-[#64748b] hover:bg-[#667eea] hover:border-[#667eea] hover:text-white hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(102,126,234,0.3)]'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-md:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-5 mb-20 max-md:mb-[60px]">
            {hotGames.map((game) => (
              <Link
                key={game.id}
                href={`/hot-games/${game.id}`}
                className={`rounded-3xl p-8 max-md:p-6 max-[480px]:p-5 no-underline transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden group ${game.featured ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none' : 'bg-white border border-[#f1f5f9] text-inherit'} hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] ${game.featured ? '' : 'hover:border-[#e2e8f0]'}`}
                aria-label={`Learn more about ${game.name}`}
              >
                <div className="flex items-center gap-5 max-md:gap-4 max-[480px]:flex-col max-[480px]:text-center max-[480px]:gap-3 mb-5 max-md:mb-4">
                  <div className={`w-16 h-16 max-md:w-14 max-md:h-14 max-[480px]:w-12 max-[480px]:h-12 text-[32px] max-md:text-[28px] max-[480px]:text-2xl rounded-2xl flex items-center justify-center border transition-all duration-200 ease group-hover:scale-105 group-hover:border-transparent ${game.featured ? 'bg-white/20 border-white/30 group-hover:bg-white/30' : 'bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border-[#e2e8f0] group-hover:bg-gradient-to-br group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:text-white'}`}>{game.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-xl max-md:text-lg font-semibold mt-0 mb-1 tracking-tight ${game.featured ? 'text-white' : 'text-[#0f172a]'}`}>{game.name}</h3>
                    <span className={`inline-flex items-center py-1 px-3 rounded-lg text-xs font-medium border ${game.featured ? 'bg-white/20 text-white border-white/30' : 'bg-[#f1f5f9] text-[#64748b] border-[#e2e8f0]'}`}>{game.category}</span>
                  </div>
                </div>

                <p className={`leading-relaxed mt-4 mb-5 text-[0.9375rem] ${game.featured ? 'text-white' : 'text-[#64748b]'}`}>{game.description}</p>

                <div className="flex justify-between items-center mt-auto">
                  <div className={`flex items-center gap-4 text-sm ${game.featured ? 'text-white/80' : 'text-[#64748b]'}`}>
                    <span className="flex items-center gap-1.5 font-medium before:content-['📊'] before:text-sm">{game.downloads}</span>
                    <span className="flex items-center gap-1.5 text-sm text-[#64748b] font-medium">⭐ {game.rating}</span>
                  </div>
                  <span className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ease group-hover:gap-2 after:content-['→'] after:transition-transform after:duration-200 after:ease group-hover:after:translate-x-0.5 ${game.featured ? 'text-white/90 group-hover:text-white' : 'text-[#667eea] group-hover:text-[#5a6fd8]'}`}>Learn More</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Gaming Benefits Section */}
          <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl py-[60px] px-10 max-md:py-10 max-md:px-6 my-20 border border-[#f1f5f9] text-center">
            <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#0f172a] mt-0 mb-5 tracking-tight">
              Why Multiple Gaming Accounts?
            </h3>
            <p className="text-lg text-[#64748b] mt-0 mb-10 max-w-[600px] mx-auto leading-relaxed">
              Unlock new gaming possibilities with separate accounts for different strategies,
              play styles, and gaming communities.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] rounded-2xl flex items-center justify-center text-[28px] mx-auto mb-4 text-white">
                  🎯
                </div>
                <h4 className="text-lg font-semibold text-[#0f172a] mt-0 mb-2">Strategy Testing</h4>
                <p className="text-[0.9375rem] text-[#64748b] m-0 leading-relaxed">
                  Test different strategies without affecting your main progress
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] rounded-2xl flex items-center justify-center text-[28px] mx-auto mb-4 text-white">
                  👥
                </div>
                <h4 className="text-lg font-semibold text-[#0f172a] mt-0 mb-2">Community Separation</h4>
                <p className="text-[0.9375rem] text-[#64748b] m-0 leading-relaxed">
                  Join different gaming communities with separate identities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] rounded-2xl flex items-center justify-center text-[28px] mx-auto mb-4 text-white">
                  🏆
                </div>
                <h4 className="text-lg font-semibold text-[#0f172a] mt-0 mb-2">Competitive Edge</h4>
                <p className="text-[0.9375rem] text-[#64748b] m-0 leading-relaxed">
                  Maintain multiple ranks and achievements simultaneously
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-[100px] max-md:py-20 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] text-white text-center rounded-[32px] max-md:rounded-3xl mx-5 max-md:mx-4 max-[480px]:mx-3 relative overflow-hidden">
            <div className="relative z-1 max-w-[600px] mx-auto">
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold mt-0 mb-4 tracking-tight leading-[1.2]">Level Up Your Gaming</h2>
              <p className="text-lg opacity-90 mt-0 mb-10 leading-relaxed">
                Download Multi Run now and start managing multiple gaming accounts like a pro.
                Unlock new strategies and dominate your favorite games.
              </p>
              <div className="flex justify-center gap-4 max-md:flex-col max-md:items-center flex-wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-white text-[#0f172a] no-underline font-semibold text-base rounded-xl transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Start Gaming
                </a>
                <Link
                  href="/hot-apps"
                  className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-transparent text-white no-underline font-semibold text-base rounded-xl border-2 border-white/30 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/10 hover:border-white/50"
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
