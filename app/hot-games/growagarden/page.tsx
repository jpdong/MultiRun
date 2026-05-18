import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Multiple Accounts | Multi Run - Virtual Gardening',
  description: 'Cultivate multiple virtual gardens with unique identities and creative styles using Multi Run.',
  alternates: {
    canonical: 'https://multirun.space/hot-games/growagarden',
  },
};

const GrowGardenPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafbfc] to-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-20 max-md:pt-20 max-md:pb-[60px] max-[480px]:pt-[60px] max-[480px]:pb-10 bg-gradient-to-br from-[#4caf50] to-[#2e7d32] text-white relative overflow-hidden">
        <Container>
          <div className="relative z-1 text-center max-w-[800px] mx-auto">
            <Link href="/hot-games" className="inline-flex items-center gap-2 text-white/80 no-underline text-sm font-medium mb-10 transition-all duration-200 ease py-2 px-4 rounded-lg bg-white/10 backdrop-blur-[10px] hover:text-white hover:bg-white/20 hover:-translate-x-1">
              &larr; Back to Games
            </Link>

            <div className="w-[120px] h-[120px] max-md:w-[100px] max-md:h-[100px] max-[480px]:w-80 max-[480px]:h-80 text-[60px] max-md:text-[50px] max-[480px]:text-4xl bg-white/15 rounded-3xl flex items-center justify-center mx-auto mb-8 max-md:mb-6 max-[480px]:mb-5 backdrop-blur-[20px] border border-white/20">🌱</div>

            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold mt-0 mb-4 tracking-tight leading-[1.1]">Grow a Garden</h1>
            <p className="text-xl font-normal mt-0 mb-8 opacity-90 leading-relaxed max-w-[600px] mx-auto">
              Cultivate multiple virtual gardens with unique identities and creative styles
            </p>

            <div className="flex justify-center gap-3 max-[480px]:gap-2 flex-wrap">
              <span className="py-2 px-4 max-[480px]:py-1.5 max-[480px]:px-3 bg-white/20 border border-white/30 rounded-[20px] text-sm max-[480px]:text-[0.8125rem] font-medium backdrop-blur-[10px]">Simulation</span>
              <span className="py-2 px-4 max-[480px]:py-1.5 max-[480px]:px-3 bg-[rgba(34,197,94,0.2)] border border-[rgba(34,197,94,0.4)] rounded-[20px] text-sm max-[480px]:text-[0.8125rem] font-medium backdrop-blur-[10px]">3M+ Downloads</span>
              <span className="py-2 px-4 max-[480px]:py-1.5 max-[480px]:px-3 bg-white/20 border border-white/30 rounded-[20px] text-sm max-[480px]:text-[0.8125rem] font-medium backdrop-blur-[10px]">Relaxing</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-[100px] max-md:py-20">
        <Container>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[80px] max-lg:gap-[60px] items-start">
            {/* Why Multiple Garden Accounts */}
            <div className="bg-white rounded-3xl max-md:rounded-[24px] p-12 max-md:p-8 max-[480px]:p-6 border border-[#f1f5f9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[#e2e8f0]">
              <h2 className="text-3xl max-md:text-2xl font-bold text-[#0f172a] mt-0 mb-6 tracking-tight">Why Multiple Garden Accounts?</h2>
              <p className="text-base text-[#64748b] leading-relaxed mt-0 mb-8">
                Grow a Garden is a peaceful yet engaging simulation game where creativity meets strategy.
                Multi Run allows you to explore unlimited gardening possibilities and create distinct botanical masterpieces.
              </p>

              <ul className="list-none p-0 m-0">
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Create gardens with completely different themes</span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Test various plant combinations and strategies</span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Focus on different seasons and events</span>
                </li>
                <li className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">✓</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Maximize rewards across multiple gardens</span>
                </li>
              </ul>
            </div>

            {/* Multi Run Benefits */}
            <div className="bg-white rounded-3xl max-md:rounded-[24px] p-12 max-md:p-8 max-[480px]:p-6 border border-[#f1f5f9] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[#e2e8f0]">
              <h2 className="text-3xl max-md:text-2xl font-bold text-[#0f172a] mt-0 mb-6 tracking-tight">Multi Run Advantages</h2>
              <p className="text-base text-[#64748b] leading-relaxed mt-0 mb-8">
                Experience seamless garden management with Multi Run&apos;s powerful features
                designed for virtual gardening enthusiasts and creative minds.
              </p>

              <ul className="list-none p-0 m-0">
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">🎨</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Design gardens without compromising your vision</span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">🌸</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Specialize each account for different seasons</span>
                </li>
                <li className="flex items-start gap-4 mb-5 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">🔄</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Create plant trading and resource networks</span>
                </li>
                <li className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] transition-all duration-200 ease hover:bg-[#f1f5f9] hover:border-[#cbd5e1]">
                  <span className="w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 mt-0.5">🏆</span>
                  <span className="text-[0.9375rem] text-[#374151] leading-relaxed font-medium">Maximize achievements across specialized gardens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-md:grid-cols-1 gap-8 max-md:gap-5 mt-[60px] max-md:mt-10">
            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🧘</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Zen Paradise</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">Focus on peaceful, meditative garden designs with traditional elements like bonsai and water features.</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🌺</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Tropical Oasis</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">Create lush tropical gardens with exotic plants, vibrant colors, and year-round blooming paradise.</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🔬</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Modern Botanical</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">Design contemporary gardens with cutting-edge plant technology and sustainable eco-friendly designs.</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🌹</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Rose Collection</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">Master every rose variety and create stunning specialized rose gardens with different themes.</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🥕</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Vegetable Paradise</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">Focus on growing rare vegetables and maximizing harvest yields with optimal farming strategies.</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 max-md:p-6 max-[480px]:p-5 border border-[#f1f5f9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:border-[#e2e8f0]">
              <span className="text-4xl mb-4 block">🦋</span>
              <h3 className="text-xl max-md:text-lg font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">Butterfly Sanctuary</h3>
              <p className="text-[0.9375rem] text-[#64748b] leading-relaxed m-0">Create gardens specifically designed to attract rare butterflies and beneficial insects.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] max-md:py-20 bg-gradient-to-br from-[#4caf50] to-[#2e7d32] text-white text-center">
        <Container>
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold mt-0 mb-4 tracking-tight leading-[1.2]">Ready to Grow Your Garden Empire?</h2>
            <p className="text-lg opacity-90 mt-0 mb-10 leading-relaxed">
              Transform your gardening experience with Multi Run. Create multiple gardens,
              explore endless creative possibilities, and become the ultimate virtual gardener!
            </p>
            <div className="flex justify-center gap-4 max-md:flex-col max-md:items-center flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-white text-[#0f172a] no-underline font-semibold text-base rounded-xl transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                aria-label="Download Multi Run from Google Play Store"
              >
                Start Gardening
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

export default GrowGardenPage;
