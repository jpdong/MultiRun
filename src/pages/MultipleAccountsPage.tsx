import React from 'react';
import NavBar from '../components/elements/NavBar';
import Footer from '../components/elements/Footer';
import TestimonialCard from '../components/elements/TestimonialCard';
import SectionTitle from '../components/elements/SectionTitle';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import DownloadButton from '../components/elements/DownloadButton';
import { FaGooglePlay } from 'react-icons/fa';
import HotArea from './HotArea';
import HomeBlogSection from '../components/blog/HomeBlogSection';
import { BlogPost } from '../lib/types';

const faqs = [
  {
    question: 'How do I clone an app?',
    answer: 'Simply open Multi Run, select the app you want to clone, and follow the on-screen instructions.Separate workspaces for professional/personal use. Auto-schedule switches (e.g., mute work apps after hours) and hide sensitive apps in Stealth Mode.',
  },
  {
    question: 'Is Multi Run free?',
    answer: 'Yes, Multi Run is free to use for all users.Dominate PUBG, Free Fire, or Genshin Impact with multiple accounts resources, strategize, or share devices hassle-free.',
  },
  {
    question: 'Will my data be safe and isolated?',
    answer: 'Yes, each cloned app runs in a separate, isolated environment to keep your data secure.Clone WhatsApp, Instagram, TikTok, games, and 2000+ apps—manage personal, work, and gaming profiles simultaneously on one device. Keep data 100% isolated with no overlap!',
  },
  {
    question: 'Which platforms are supported?',
    answer: 'Multi Run is available for Android.',
  },
];

const testimonials = [
  {
    avatar: '/avatars/alex.jpg',
    name: 'Alex',
    text: 'Ever since I started using it with multiple accounts, I enjoyed every bit of it. It\'s very simple to use and has a great interface. The experience so far is great. Worth 5 stars!',
  },
  {
    avatar: '/avatars/linda.jpg',
    name: 'Linda',
    text: "i can't really believe my eyes it's really totaly free and there is no ads u can add multiple accounts with free and quickly thank you so much for the creator 😙😙😍really advice everyone to try it it's better than others apps",
  },
  {
    avatar: '/avatars/sam.jpg',
    name: 'Sam',
    text: 'Finally an app which works with WhatsApp and with less ads. I love this app. It\'s very simple to use and has a great interface. The experience so far is great. Worth 5 stars!',
  },
  {
    avatar: '/avatars/emily.jpg',
    name: 'Emily',
    text: 'I tried so many multiple accounts clone apps for this particular app and all didn\'t work except this one! Simple and plays its role very nicely.',
  },
];

interface MultipleAccountsPageProps {
  blogPosts: BlogPost[];
}

const MultipleAccountsPage: React.FC<MultipleAccountsPageProps> = ({ blogPosts }) => (
  <>
    <NavBar />
    <div className="bg-bg-light min-h-screen font-sans">
      {/* Hero Section (Carbon Black Background) */}
      <div className="bg-dark text-white pt-24 pb-24 px-6">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Run Multiple Accounts on One Device with Multi Run App
            </h1>
            <p className="text-lg md:text-xl text-text-lighter max-w-3xl mx-auto leading-relaxed">
              Keep your personal and professional lives separate with our secure app clone solution. No more switching between multiple accounts - run them all simultaneously!
            </p>
            <div className="pt-4 flex justify-center">
              <DownloadButton text="Get Started on Google Play" href="https://play.google.com/store/apps/details?id=com.dong.multirun" icon={<FaGooglePlay />} />
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative rounded-2xl p-2 bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm overflow-hidden">
              <img src="/multi_title_image.webp" alt="Multi Run with Multiple Accounts" className="w-full h-auto rounded-xl block" />
            </div>
          </div>
        </Container>
      </div>

      {/* Features Section (Cinematic Alternating Rows) */}
      <div className="bg-white py-24" id="features">
        <Container>
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Powerful Features of Multi Run</h2>
            <p className="text-lg text-text-lighter max-w-2xl mx-auto">
              Experience seamless app cloning and parallel running with enterprise-grade isolation.
            </p>
          </div>

          {/* Feature 1: Text Left, Image Right */}
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-1.5 bg-border-light text-primary text-xs font-bold rounded-full uppercase tracking-wider">Core Feature</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-dark">App Cloning</h3>
                <p className="text-lg text-text-lighter leading-relaxed">
                  Clone and run multiple accounts of the same app with separate data storage.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-border-light shadow-[0_8px_24px_rgba(0,0,0,0.06)] bg-bg-lighter p-4">
                  <img src="/multi_run_1.webp" alt="Multi Run with Multiple Accounts" className="w-full h-auto object-contain rounded-xl block max-h-[360px] mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Hairline Rule */}
          <div className="max-w-6xl mx-auto px-6 mb-20"><div className="h-[1px] bg-border-light w-full" /></div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-1.5 bg-border-light text-primary text-xs font-bold rounded-full uppercase tracking-wider">Secure & Private</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-dark">Data Isolation</h3>
                <p className="text-lg text-text-lighter leading-relaxed">
                  Keep your multiple accounts secure with isolated data spaces and no cross-contamination.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-border-light shadow-[0_8px_24px_rgba(0,0,0,0.06)] bg-bg-lighter p-4">
                  <img src="/multi_run_2.webp" alt="Multiple Accounts App" className="w-full h-auto object-contain rounded-xl block max-h-[360px] mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Hairline Rule */}
          <div className="max-w-6xl mx-auto px-6 mb-20"><div className="h-[1px] bg-border-light w-full" /></div>

          {/* Feature 3: Text Left, Image Right */}
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-1.5 bg-border-light text-primary text-xs font-bold rounded-full uppercase tracking-wider">High Performance</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-dark">Parallel Running</h3>
                <p className="text-lg text-text-lighter leading-relaxed">
                  Run multiple accounts simultaneously without performance issues.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-border-light shadow-[0_8px_24px_rgba(0,0,0,0.06)] bg-bg-lighter p-4">
                  <img src="/multi_run_3.webp" alt="Parallel Space" className="w-full h-auto object-contain rounded-xl block max-h-[360px] mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Hairline Rule */}
          <div className="max-w-6xl mx-auto px-6 mb-20"><div className="h-[1px] bg-border-light w-full" /></div>

          {/* Feature 4: Image Left, Text Right */}
          <div className="max-w-6xl mx-auto px-6 mb-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-1.5 bg-border-light text-primary text-xs font-bold rounded-full uppercase tracking-wider">Seamless Experience</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-dark">Easy Switching</h3>
                <p className="text-lg text-text-lighter leading-relaxed">
                  Quickly switch between multiple accounts with our intuitive interface.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-border-light shadow-[0_8px_24px_rgba(0,0,0,0.06)] bg-bg-lighter p-4">
                  <img src="/multi_run_4.webp" alt="Dual Clone App" className="w-full h-auto object-contain rounded-xl block max-h-[360px] mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Download Section (Carbon Black Background) */}
      <div className="bg-dark py-24 text-white text-center px-6" id="download">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Download Multi Run</h2>
          <p className="text-lg text-text-lighter max-w-2xl mx-auto mb-10">Available on all major platforms. Get started today!</p>
          <DownloadButton text="Google Play" href="https://play.google.com/store/apps/details?id=com.dong.multirun" icon={<FaGooglePlay />} />
        </Container>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24 px-6" id="faq">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map(f => (
              <div key={f.question} className="p-8 bg-bg-lighter border border-border-light rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <h3 className="text-xl font-bold text-dark mb-3">{f.question}</h3>
                <p className="text-text-lighter text-base leading-relaxed m-0">{f.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="bg-bg-lighter py-24 px-6 border-t border-border-light" id="testimonials">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Users Say About Multi Run</h2>
          </div>
          <Row gutter={[30, 30]}>
            {testimonials.map(t => (
              <Column xs={24} md={12} lg={6} key={t.name}>
                <TestimonialCard {...t} />
              </Column>
            ))}
          </Row>
        </Container>
      </div>
    </div>

    {/* Blog Section */}
    <HomeBlogSection posts={blogPosts} />

    <HotArea />
    <Footer />
  </>
);
export default MultipleAccountsPage;
