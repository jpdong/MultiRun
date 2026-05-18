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
    <section className="py-[120px] max-md:py-20 max-[480px]:py-15 relative overflow-hidden bg-gradient-to-br from-[#f8fafc] to-white" id="hot-content">
      <Container>
        <header className="text-center mb-20 max-md:mb-[60px]">
          <h2 className="text-[clamp(2.25rem,5vw,3rem)] max-md:text-4xl max-[480px]:text-8 font-extrabold text-[#0f172a] mt-0 mb-4 tracking-tight leading-[1.1] bg-gradient-to-br from-[#0f172a] to-[#475569] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Popular Apps &amp; Games</h2>
          <p className="text-xl max-md:text-lg text-[#64748b] m-0 font-normal max-w-[600px] mx-auto leading-relaxed">
            Discover the most popular applications and games that work seamlessly with Multi Run
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-lg:grid-cols-1 gap-10 max-lg:gap-8 mb-[60px]">
          {/* Apps Section */}
          <div className="bg-white rounded-3xl max-md:rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[#e2e8f0]">
            <div className="flex items-center gap-4 max-[480px]:gap-3 mb-6 max-[480px]:mb-5">
              <div className="w-12 h-12 max-md:w-10 max-md:h-10 rounded-xl flex items-center justify-center text-2xl max-md:text-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_12px_rgba(102,126,234,0.3)]">📱</div>
              <h3 className="text-2xl max-md:text-xl font-bold text-[#0f172a] m-0 tracking-tight">Popular Apps</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-[480px]:grid-cols-2 gap-4 max-lg:gap-3 max-md:gap-3 max-[480px]:gap-[10px]">
              {appsData.map((app) => (
                <Link
                  key={app.name}
                  href={app.href}
                  className="flex flex-col items-center py-5 px-4 max-md:py-4 max-md:px-3 max-[480px]:py-[14px] max-[480px]:px-[10px] bg-[#f8fafc] rounded-2xl no-underline text-[#475569] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] border border-[#e2e8f0] relative overflow-hidden hover:bg-white hover:text-[#334155] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-8px_rgba(0,0,0,0.15)] hover:border-[#cbd5e1] group"
                  aria-label={`Learn more about ${app.name}`}
                >
                  <div className="text-[32px] max-md:text-[28px] max-[480px]:text-2xl mb-3 max-md:mb-2 max-[480px]:mb-1.5 transition-transform duration-200 ease group-hover:scale-110">{app.icon}</div>
                  <span className="text-sm max-[480px]:text-xs font-semibold text-center leading-[1.3] m-0">{app.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Games Section */}
          <div className="bg-white rounded-3xl max-md:rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[#e2e8f0]">
            <div className="flex items-center gap-4 max-[480px]:gap-3 mb-6 max-[480px]:mb-5">
              <div className="w-12 h-12 max-md:w-10 max-md:h-10 rounded-xl flex items-center justify-center text-2xl max-md:text-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_12px_rgba(102,126,234,0.3)]">🎮</div>
              <h3 className="text-2xl max-md:text-xl font-bold text-[#0f172a] m-0 tracking-tight">Popular Games</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-[480px]:grid-cols-2 gap-4 max-lg:gap-3 max-md:gap-3 max-[480px]:gap-[10px]">
              {gamesData.map((game) => (
                <Link
                  key={game.name}
                  href={game.href}
                  className="flex flex-col items-center py-5 px-4 max-md:py-4 max-md:px-3 max-[480px]:py-[14px] max-[480px]:px-[10px] bg-[#f8fafc] rounded-2xl no-underline text-[#475569] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] border border-[#e2e8f0] relative overflow-hidden hover:bg-white hover:text-[#334155] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-8px_rgba(0,0,0,0.15)] hover:border-[#cbd5e1] group"
                  aria-label={`Learn more about ${game.name}`}
                >
                  <div className="text-[32px] max-md:text-[28px] max-[480px]:text-2xl mb-3 max-md:mb-2 max-[480px]:mb-1.5 transition-transform duration-200 ease group-hover:scale-110">{game.icon}</div>
                  <span className="text-sm max-[480px]:text-xs font-semibold text-center leading-[1.3] m-0">{game.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Discover More Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-md:grid-cols-1 gap-6 max-md:gap-4 mt-10">
          <Link
            href="/hot-apps"
            className="flex items-center gap-5 max-md:gap-4 p-6 max-md:p-5 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[20px] no-underline text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_10px_25px_-5px_rgba(102,126,234,0.3)] relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(102,126,234,0.4)] group"
            aria-label="Discover all supported apps"
          >
            <div className="w-14 h-14 max-md:w-12 max-md:h-12 rounded-2xl bg-white/20 flex items-center justify-center text-[28px] max-md:text-2xl shrink-0 backdrop-blur-[10px]">📱</div>
            <div className="flex-1">
              <h4 className="text-xl max-md:text-lg font-bold mt-0 mb-1 tracking-tight">Explore All Apps</h4>
              <p className="text-sm opacity-90 m-0 leading-[1.4]">Browse our complete collection of supported applications</p>
            </div>
            <div className="text-xl transition-transform duration-200 ease group-hover:translate-x-1">&rarr;</div>
          </Link>

          <Link
            href="/hot-games"
            className="flex items-center gap-5 max-md:gap-4 p-6 max-md:p-5 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] rounded-[20px] no-underline text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_10px_25px_-5px_rgba(155,89,182,0.3)] relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(155,89,182,0.4)] group"
            aria-label="Discover all supported games"
          >
            <div className="w-14 h-14 max-md:w-12 max-md:h-12 rounded-2xl bg-white/20 flex items-center justify-center text-[28px] max-md:text-2xl shrink-0 backdrop-blur-[10px]">🎮</div>
            <div className="flex-1">
              <h4 className="text-xl max-md:text-lg font-bold mt-0 mb-1 tracking-tight">Explore All Games</h4>
              <p className="text-sm opacity-90 m-0 leading-[1.4]">Discover games that work perfectly with multiple accounts</p>
            </div>
            <div className="text-xl transition-transform duration-200 ease group-hover:translate-x-1">&rarr;</div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HotArea;
