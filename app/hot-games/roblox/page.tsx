import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
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
    <div className="min-h-screen bg-gradient-to-b from-[#fafbfc] to-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-20 max-md:pt-20 max-md:pb-[60px] max-[480px]:pt-[60px] max-[480px]:pb-10 bg-gradient-to-br from-[#00a2ff] to-[#0078d4] text-white relative overflow-hidden">
        <Container>
          <div className="relative z-1 text-center max-w-[800px] mx-auto">
            <Link href="/hot-games" className="inline-flex items-center gap-2 text-white/80 no-underline text-sm font-medium mb-10 transition-all duration-200 ease py-2 px-4 rounded-lg bg-white/10 backdrop-blur-[10px] hover:text-white hover:bg-white/20 hover:-translate-x-1">
              &larr; Back to Games
            </Link>

            <div className="w-[120px] h-[120px] max-md:w-[100px] max-md:h-[100px] max-[480px]:w-20 max-[480px]:h-20 text-[60px] max-md:text-[50px] max-[480px]:text-4xl bg-white/15 rounded-3xl flex items-center justify-center mx-auto mb-8 max-md:mb-6 max-[480px]:mb-5 backdrop-blur-[20px] border border-white/20">🧱</div>

            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold mt-0 mb-4 tracking-tight leading-[1.1]">Roblox</h1>
            <p className="text-xl font-normal mt-0 mb-8 opacity-90 leading-relaxed max-w-[600px] mx-auto">
              Explore infinite worlds with multiple creative identities in the ultimate metaverse platform
            </p>

            <div className="flex justify-center gap-3 max-[480px]:gap-2 flex-wrap">
              <span className="py-2 px-4 max-[480px]:py-1.5 max-[480px]:px-3 bg-white/20 border border-white/30 rounded-[20px] text-sm max-[480px]:text-[0.8125rem] font-medium backdrop-blur-[10px]">Metaverse</span>
              <span className="py-2 px-4 max-[480px]:py-1.5 max-[480px]:px-3 bg-[rgba(34,197,94,0.2)] border border-[rgba(34,197,94,0.4)] rounded-[20px] text-sm max-[480px]:text-[0.8125rem] font-medium backdrop-blur-[10px]">10M+ Downloads</span>
              <span className="py-2 px-4 max-[480px]:py-1.5 max-[480px]:px-3 bg-white/20 border border-white/30 rounded-[20px] text-sm max-[480px]:text-[0.8125rem] font-medium backdrop-blur-[10px]">Creator Platform</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-[100px] max-md:py-20">
        <Container>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[80px] max-lg:gap-[60px] items-start">
            {/* Why Multiple Roblox Accounts */}
            <div className="bg-white rounded-3xl max-md:rounded-[24px] p-12 max-md:p-8 max-[480px]:p-6 border border-[#f1f5f9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[#e2e8f0]">
              <h2 className="text-3xl max-md:text-2xl font-bold text-[#0f172a] mt-0 mb-6 tracking-tight">Why Multiple Roblox Accounts?</h2>
              <p className="text-base text-[#64748b] leading-relaxed mt-0 mb-8">
                Roblox is the ultimate metaverse platform where imagination meets creation.
                Multi Run opens up unlimited possibilities for exploration, creativity, and social interaction.
              </p>

              <ul className="list-none p-0 m-0">
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Diverse gaming experiences across genres
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Separate creator and player identities
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Build different social circles and communities
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Maximize achievements and trading opportunities
                  </span>
                </li>
              </ul>
            </div>

            {/* Multi Run Benefits */}
            <div className="bg-white rounded-3xl max-md:rounded-[24px] p-12 max-md:p-8 max-[480px]:p-6 border border-[#f1f5f9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[#e2e8f0]">
              <h2 className="text-3xl max-md:text-2xl font-bold text-[#0f172a] mt-0 mb-6 tracking-tight">Multi Run Advantages</h2>
              <p className="text-base text-[#64748b] leading-relaxed mt-0 mb-8">
                Experience seamless Roblox gaming with Multi Run&apos;s powerful features
                designed for creators, gamers, and metaverse enthusiasts.
              </p>

              <ul className="list-none p-0 m-0">
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">🌍</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Access different Roblox experiences simultaneously
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">🎨</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Separate accounts for development and gameplay
                  </span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">👥</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Join different communities without mixing identities
                  </span>
                </li>
                <li className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">💰</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">
                    Optimize trading and marketplace activities
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-md:grid-cols-1 gap-8 max-md:gap-5 mt-[60px] max-md:mt-10">
            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🎮</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Game Developer</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">
                Focus on creating and publishing your own Roblox games
                with dedicated development accounts.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">👥</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Social Gamer</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">
                Connect with friends and explore popular games together
                in different social circles.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🏆</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Competitive Player</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">
                Master competitive games and climb leaderboards
                with specialized gaming accounts.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🐾</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Pet Collector</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">
                Maximize pet collection and trading in games like
                Adopt Me! and Pet Simulator X.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🎭</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Role Player</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">
                Build different character roles and storylines
                in roleplay games like Brookhaven RP.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">⚔️</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Combat Specialist</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">
                Master different fighting styles and strategies
                in combat games like Blox Fruits.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] max-md:py-20 bg-gradient-to-br from-[#00a2ff] to-[#0078d4] text-white text-center">
        <Container>
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold mt-0 mb-4 tracking-tight leading-[1.2]">Ready to Explore Infinite Worlds?</h2>
            <p className="text-lg opacity-90 mt-0 mb-10 leading-relaxed">
              Transform your Roblox experience with Multi Run. Create multiple identities,
              explore endless possibilities, and become a master of the metaverse!
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
                href="/hot-games"
                className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-transparent text-white no-underline font-semibold text-base rounded-xl border-2 border-white/30 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/10 hover:border-white/50"
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
