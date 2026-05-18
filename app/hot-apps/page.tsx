import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
import Container from '../../src/components/layout/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Apps for Multiple Accounts | Multi Run - Clone & Manage',
  description: 'Discover the most popular apps for multiple account management. Clone Instagram, Facebook, Twitter, BlueSky, Spotify and more with Multi Run.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps',
  },
};

interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  downloads: string;
  featured?: boolean;
}

const hotApps: App[] = [
  {
    id: 'bluesky',
    name: 'BlueSky',
    description: 'Manage multiple accounts on the decentralized social network that puts you in control of your data and experience.',
    icon: '🦋',
    category: 'Social Media',
    downloads: 'Growing Fast',
    featured: true
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Create and manage multiple Instagram accounts for personal branding, business promotion, and content creation.',
    icon: '📸',
    category: 'Social Media',
    downloads: '5M+'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Switch seamlessly between personal and business Facebook accounts without the hassle of logging out.',
    icon: '👥',
    category: 'Social Media',
    downloads: '6M+'
  },
  {
    id: 'twitter',
    name: 'Twitter (X)',
    description: 'Manage multiple Twitter accounts for different interests, businesses, or social circles with ease.',
    icon: '🐦',
    category: 'Social Media',
    downloads: '2.5M+'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Use multiple Spotify accounts for different music preferences, family sharing, and playlist management.',
    icon: '🎶',
    category: 'Entertainment',
    downloads: '3.2M+'
  }
];

const categories = ['All', 'Social Media', 'Entertainment', 'Communication'];

const HotAppsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafbfc] to-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-20 max-md:pt-20 max-md:pb-[60px] max-[480px]:pt-[60px] max-[480px]:pb-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white relative overflow-hidden">
        <Container>
          <div className="relative z-1 text-center max-w-[800px] mx-auto">
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold mt-0 mb-5 tracking-tight leading-[1.1]">Popular Apps</h1>
            <p className="text-xl font-normal mt-0 mb-10 opacity-90 leading-relaxed max-w-[600px] mx-auto">
              Discover the most popular applications that users clone with Multi Run.
              Manage multiple accounts efficiently and unlock new possibilities.
            </p>

            <div className="flex justify-center gap-12 max-md:gap-6 flex-wrap mt-10">
              <div className="text-center">
                <span className="block text-2xl max-md:text-7 font-bold mb-1">500+</span>
                <span className="text-sm opacity-80 font-medium">Supported Apps</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl max-md:text-7 font-bold mb-1">50K+</span>
                <span className="text-sm opacity-80 font-medium">Downloads</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl max-md:text-7 font-bold mb-1">4.5★</span>
                <span className="text-sm opacity-80 font-medium">User Rating</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-[100px] max-md:py-20">
        <Container>
          <div className="text-center mb-20 max-md:mb-[60px]">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#0f172a] mt-0 mb-4 tracking-tight leading-[1.2]">Featured Applications</h2>
            <p className="text-lg text-[#64748b] m-0 max-w-[600px] mx-auto leading-relaxed">
              Explore our curated collection of the most popular apps for multiple account management
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 max-[480px]:gap-2 mb-[60px] max-md:mb-10 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`py-3 px-6 max-[480px]:py-[10px] max-[480px]:px-4 border-2 border-[#e2e8f0] rounded-xl font-medium text-sm max-[480px]:text-[0.8125rem] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${category === 'All' ? 'bg-[#667eea] border-[#667eea] text-white -translate-y-px shadow-[0_4px_12px_rgba(102,126,234,0.3)]' : 'bg-white text-[#64748b] hover:bg-[#667eea] hover:border-[#667eea] hover:text-white hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(102,126,234,0.3)]'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-md:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-5 mb-20 max-md:mb-[60px]">
            {hotApps.map((app) => (
              <Link
                key={app.id}
                href={`/hot-apps/${app.id}`}
                className={`rounded-3xl p-8 max-md:p-6 max-[480px]:p-5 no-underline transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden group ${app.featured ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none' : 'bg-white border border-[#f1f5f9] text-inherit'} hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] ${app.featured ? '' : 'hover:border-[#e2e8f0]'}`}
                aria-label={`Learn more about ${app.name}`}
              >
                <div className="flex items-center gap-5 max-md:gap-4 max-[480px]:flex-col max-[480px]:text-center max-[480px]:gap-3 mb-5 max-md:mb-4">
                  <div className={`w-16 h-16 max-md:w-14 max-md:h-14 max-[480px]:w-12 max-[480px]:h-12 text-[32px] max-md:text-[28px] max-[480px]:text-2xl rounded-2xl flex items-center justify-center border transition-all duration-200 ease group-hover:scale-105 group-hover:border-transparent ${app.featured ? 'bg-white/20 border-white/30 group-hover:bg-white/30' : 'bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border-[#e2e8f0] group-hover:bg-gradient-to-br group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:text-white'}`}>{app.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-xl max-md:text-lg font-semibold mt-0 mb-1 tracking-tight ${app.featured ? 'text-white' : 'text-[#0f172a]'}`}>{app.name}</h3>
                    <span className={`inline-flex items-center py-1 px-3 rounded-lg text-xs font-medium border ${app.featured ? 'bg-white/20 text-white border-white/30' : 'bg-[#f1f5f9] text-[#64748b] border-[#e2e8f0]'}`}>{app.category}</span>
                  </div>
                </div>

                <p className={`leading-relaxed mt-4 mb-5 text-[0.9375rem] ${app.featured ? 'text-white' : 'text-[#64748b]'}`}>{app.description}</p>

                <div className="flex justify-between items-center mt-auto">
                  <div className={`flex items-center gap-4 text-sm ${app.featured ? 'text-white/80' : 'text-[#64748b]'}`}>
                    <span className="flex items-center gap-1.5 font-medium before:content-['📊'] before:text-sm">{app.downloads}</span>
                  </div>
                  <span className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ease group-hover:gap-2 after:content-['→'] after:transition-transform after:duration-200 after:ease group-hover:after:translate-x-0.5 ${app.featured ? 'text-white/90 group-hover:text-white' : 'text-[#667eea] group-hover:text-[#5a6fd8]'}`}>Learn More</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="py-[100px] max-md:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white text-center rounded-[32px] max-md:rounded-3xl mx-5 max-md:mx-4 max-[480px]:mx-3 relative overflow-hidden">
            <div className="relative z-1 max-w-[600px] mx-auto">
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold mt-0 mb-4 tracking-tight leading-[1.2]">Ready to Get Started?</h2>
              <p className="text-lg opacity-90 mt-0 mb-10 leading-relaxed">
                Download Multi Run now and start managing multiple accounts across all your favorite apps seamlessly.
              </p>
              <div className="flex justify-center gap-4 max-md:flex-col max-md:items-center flex-wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-white text-[#0f172a] no-underline font-semibold text-base rounded-xl transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Download Multi Run
                </a>
                <Link
                  href="/hot-games"
                  className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-transparent text-white no-underline font-semibold text-base rounded-xl border-2 border-white/30 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/10 hover:border-white/50"
                  aria-label="Explore popular games"
                >
                  Explore Games
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

export default HotAppsPage;
