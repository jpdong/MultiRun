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
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <NavBar />

      {/* Hero Section (Carbon Black) */}
      <section className="pt-36 pb-24 bg-dark text-white relative overflow-hidden border-b border-border-light/10">
        <Container>
          <div className="relative z-1 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
              <span>📱 Supported Applications</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight m-0 text-white">Popular Apps for Multi Run</h1>
            <p className="text-lg md:text-xl text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
              Clone and manage multiple accounts for your favorite social and productivity apps simultaneously.
            </p>

            <div className="flex justify-center gap-12 md:gap-16 flex-wrap pt-8 border-t border-white/10 max-w-2xl mx-auto">
              <div className="text-center space-y-1">
                <span className="block text-3xl font-bold text-white">500+</span>
                <span className="text-xs uppercase tracking-wider text-text-lighter font-medium">Supported Apps</span>
              </div>
              <div className="text-center space-y-1">
                <span className="block text-3xl font-bold text-white">50K+</span>
                <span className="text-xs uppercase tracking-wider text-text-lighter font-medium">Downloads</span>
              </div>
              <div className="text-center space-y-1">
                <span className="block text-3xl font-bold text-white">4.5★</span>
                <span className="text-xs uppercase tracking-wider text-text-lighter font-medium">User Rating</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-bg-lighter flex-1">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight m-0">Featured Applications</h2>
            <p className="text-lg text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of the most popular apps for multiple account management
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`py-3 px-8 border rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${category === 'All' ? 'bg-primary border-primary text-white shadow-[0_4px_16px_rgba(0,98,255,0.25)]' : 'bg-white text-dark border-border-light hover:border-primary hover:text-primary hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {hotApps.map((app) => (
              <Link
                key={app.id}
                href={`/hot-apps/${app.id}`}
                className={`rounded-3xl p-8 transition-all duration-300 relative group flex flex-col justify-between no-underline ${app.featured ? 'bg-dark text-white border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:border-primary/50' : 'bg-white border border-border-light text-dark shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-primary/40'} hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,98,255,0.12)]`}
                aria-label={`Learn more about ${app.name}`}
              >
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 text-3xl rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shrink-0 ${app.featured ? 'bg-white/10 border-white/20 text-white' : 'bg-primary/10 border-primary/20 text-primary'}`}>
                      {app.icon}
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className={`text-xl font-bold m-0 tracking-tight truncate ${app.featured ? 'text-white' : 'text-dark'}`}>{app.name}</h3>
                      <span className={`inline-block py-1 px-3 rounded-lg text-xs font-medium border ${app.featured ? 'bg-white/10 text-white/80 border-white/20' : 'bg-bg-code text-text-light border-border-light'}`}>{app.category}</span>
                    </div>
                  </div>

                  <p className={`leading-relaxed m-0 mb-8 text-base ${app.featured ? 'text-text-lighter' : 'text-text-light'}`}>{app.description}</p>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-border-light/50 mt-auto">
                  <div className={`flex items-center gap-2 text-sm font-medium ${app.featured ? 'text-white/60' : 'text-text-lighter'}`}>
                    <span>📊 {app.downloads}</span>
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-bold transition-all duration-200 group-hover:gap-2 ${app.featured ? 'text-white group-hover:text-primary' : 'text-primary'}`}>
                    <span>Learn More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section (Carbon Black) */}
          <div className="py-20 px-8 bg-dark text-white text-center rounded-3xl border border-white/10 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
            <div className="relative z-1 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight m-0 text-white">Ready to Get Started?</h2>
              <p className="text-lg text-text-lighter m-0 leading-relaxed">
                Download Multi Run now and start managing multiple accounts across all your favorite apps seamlessly.
              </p>
              <div className="flex justify-center gap-4 flex-wrap pt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className="inline-flex items-center justify-center py-4 px-8 bg-white text-dark no-underline font-bold text-base rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:bg-border-light"
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Download Multi Run
                </a>
                <Link
                  href="/hot-games"
                  className="inline-flex items-center justify-center py-4 px-8 bg-transparent text-white no-underline font-bold text-base rounded-full border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/60"
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
