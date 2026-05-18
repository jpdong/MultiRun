import React from 'react';
import Container from '../components/layout/Container';
import { FaEnvelope, FaTelegram, FaDiscord, FaTwitter, FaProductHunt } from 'react-icons/fa';
import NavBar from '../components/elements/NavBar';
import Footer from '../components/elements/Footer';

interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  type: 'email' | 'telegram' | 'discord' | 'twitter' | 'producthunt';
}

const contactMethods: ContactMethod[] = [

  {
    id: 'telegram-channel',
    icon: <FaTelegram />,
    title: 'Telegram Channel',
    value: '@multi_run',
    link: 'https://t.me/multi_run',
    type: 'telegram'
  },
  {
    id: 'telegram-group',
    icon: <FaTelegram />,
    title: 'Telegram Community',
    value: 'Join our group chat',
    link: 'https://t.me/+m8gMGEhAb5E0ODk1',
    type: 'telegram'
  },
  {
    id: 'discord',
    icon: <FaDiscord />,
    title: 'Discord Server',
    value: 'Multi Run Community',
    link: 'https://discord.gg/T7DsKkdz',
    type: 'discord'
  },
  {
    id: 'twitter',
    icon: <FaTwitter />,
    title: 'Twitter / X',
    value: '@JP_DONG',
    link: 'https://x.com/JP_DONG',
    type: 'twitter'
  },
  {
    id: 'producthunt',
    icon: <FaProductHunt />,
    title: 'Product Hunt',
    value: '@jumpdong',
    link: 'https://www.producthunt.com/@jumpdong',
    type: 'producthunt'
  },
  {
    id: 'email',
    icon: <FaEnvelope />,
    title: 'Email Support',
    value: 'dongshan1025@gmail.com',
    link: 'mailto:dongshan1025@gmail.com',
    type: 'email'
  }
];

const iconGradientMap: Record<string, string> = {
  email: 'bg-gradient-to-br from-[#ef4444] to-[#dc2626] text-white',
  telegram: 'bg-gradient-to-br from-[#0088cc] to-[#006699] text-white',
  discord: 'bg-gradient-to-br from-[#5865f2] to-[#4752c4] text-white',
  twitter: 'bg-gradient-to-br from-[#1da1f2] to-[#0d8bd9] text-white',
  producthunt: 'bg-gradient-to-br from-[#da552f] to-[#c44821] text-white',
};

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafbfc] to-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-20 max-md:pt-20 max-md:pb-[60px] max-[480px]:pt-[60px] max-[480px]:pb-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white relative overflow-hidden">
        <Container>
          <div className="relative z-1 text-center max-w-[700px] mx-auto">
            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold mt-0 mb-5 tracking-tight leading-[1.1]">Get in Touch</h1>
            <p className="text-xl font-normal mt-0 mb-10 opacity-90 leading-relaxed">
              We&apos;re here to help you make the most of Multi Run
            </p>
            <p className="text-base opacity-80 leading-relaxed m-0">
              Whether you need support, have feedback, or want to collaborate,
              we&apos;d love to hear from you through any of our channels.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-[100px] max-md:py-20">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#0f172a] mt-0 mb-4 tracking-tight leading-[1.2]">Contact Channels</h2>
            <p className="text-lg text-[#64748b] m-0 max-w-[600px] mx-auto leading-relaxed">
              Choose the platform that works best for you. We&apos;re active on all channels
              and respond quickly to your inquiries.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-md:grid-cols-1 gap-8 max-md:gap-5 mb-20 max-md:mb-[60px]">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                className="bg-white rounded-3xl max-md:rounded-[24px] py-10 px-8 max-md:py-8 max-md:px-6 max-[480px]:py-6 max-[480px]:px-5 border border-[#f1f5f9] text-center no-underline text-inherit transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#e2e8f0] group"
                target={method.type === 'email' ? '_self' : '_blank'}
                rel={method.type === 'email' ? '' : 'noopener noreferrer'}
                aria-label={`Contact us via ${method.title}`}
              >
                <div className={`w-20 h-20 max-md:w-16 max-md:h-16 max-[480px]:w-14 max-[480px]:h-14 rounded-[20px] flex items-center justify-center text-[36px] max-md:text-[28px] max-[480px]:text-2xl mx-auto mb-6 max-md:mb-5 border border-[#e2e8f0] transition-all duration-300 ease bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] group-hover:scale-105 group-hover:border-transparent ${iconGradientMap[method.type] ? `group-hover:${iconGradientMap[method.type].split(' ').join(' group-hover:')}` : ''}`}
                  style={{ background: undefined }}
                >
                  <span className={`[.group:hover_&]:bg-gradient-to-br ${method.type === 'email' ? '[.group:hover_&]:from-[#ef4444] [.group:hover_&]:to-[#dc2626]' : method.type === 'telegram' ? '[.group:hover_&]:from-[#0088cc] [.group:hover_&]:to-[#006699]' : method.type === 'discord' ? '[.group:hover_&]:from-[#5865f2] [.group:hover_&]:to-[#4752c4]' : method.type === 'twitter' ? '[.group:hover_&]:from-[#1da1f2] [.group:hover_&]:to-[#0d8bd9]' : '[.group:hover_&]:from-[#da552f] [.group:hover_&]:to-[#c44821]'} [.group:hover_&]:text-white [.group:hover_&]:border-transparent`}>
                    {method.icon}
                  </span>
                </div>
                <h3 className="text-[1.375rem] max-[480px]:text-xl font-semibold text-[#0f172a] mt-0 mb-3 tracking-tight">{method.title}</h3>
                <p className="text-[0.9375rem] text-[#64748b] mt-0 mb-5 break-all leading-relaxed">{method.value}</p>
                <span className="inline-flex items-center gap-2 text-[#667eea] text-sm font-medium transition-all duration-200 ease group-hover:gap-[10px] group-hover:text-[#5a6fd8] after:content-['→'] after:transition-transform after:duration-200 after:ease group-hover:after:translate-x-0.5">
                  {method.type === 'email' ? 'Send Email' : 'Visit Channel'}
                </span>
              </a>
            ))}
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-[32px] max-md:rounded-3xl py-[60px] px-10 max-md:py-10 max-md:px-6 max-[480px]:py-8 max-[480px]:px-5 my-20 max-md:my-[60px] border border-[#f1f5f9] text-center">
            <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[#0f172a] mt-0 mb-4 tracking-tight">How We Can Help</h3>
            <p className="text-lg text-[#64748b] mt-0 mb-10 max-w-[500px] mx-auto leading-relaxed">
              Our team is dedicated to providing you with the best possible experience.
              Here&apos;s what we can assist you with:
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-md:grid-cols-1 gap-8 max-md:gap-5 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-[28px] max-[480px]:w-14 max-[480px]:h-14 max-[480px]:text-2xl mx-auto mb-4 text-white">🛠️</div>
                <h4 className="text-lg font-semibold text-[#0f172a] mt-0 mb-2">Technical Support</h4>
                <p className="text-[0.9375rem] text-[#64748b] m-0 leading-relaxed">
                  Get help with app installation, setup, and troubleshooting
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-[28px] max-[480px]:w-14 max-[480px]:h-14 max-[480px]:text-2xl mx-auto mb-4 text-white">💡</div>
                <h4 className="text-lg font-semibold text-[#0f172a] mt-0 mb-2">Feature Requests</h4>
                <p className="text-[0.9375rem] text-[#64748b] m-0 leading-relaxed">
                  Share your ideas for new features and improvements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-[28px] max-[480px]:w-14 max-[480px]:h-14 max-[480px]:text-2xl mx-auto mb-4 text-white">🤝</div>
                <h4 className="text-lg font-semibold text-[#0f172a] mt-0 mb-2">Business Inquiries</h4>
                <p className="text-[0.9375rem] text-[#64748b] m-0 leading-relaxed">
                  Discuss partnerships, collaborations, and business opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center text-[28px] max-[480px]:w-14 max-[480px]:h-14 max-[480px]:text-2xl mx-auto mb-4 text-white">📝</div>
                <h4 className="text-lg font-semibold text-[#0f172a] mt-0 mb-2">Feedback</h4>
                <p className="text-[0.9375rem] text-[#64748b] m-0 leading-relaxed">
                  Tell us about your experience and help us improve
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-[100px] max-md:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white text-center rounded-[32px] max-md:rounded-3xl mx-5 max-md:mx-4 max-[480px]:mx-3 relative overflow-hidden">
            <div className="relative z-1 max-w-[600px] mx-auto">
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold mt-0 mb-4 tracking-tight leading-[1.2]">Ready to Get Started?</h2>
              <p className="text-lg opacity-90 mt-0 mb-10 leading-relaxed">
                Download Multi Run now and join thousands of users who are already
                managing multiple accounts with ease.
              </p>
              <div className="flex justify-center gap-4 max-md:flex-col max-md:items-center flex-wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-white text-[#0f172a] no-underline font-semibold text-base rounded-xl transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Download Multi Run
                </a>
                <a
                  href="https://t.me/multi_run"
                  className="inline-flex items-center gap-2 py-4 px-8 max-md:w-full max-md:max-w-[280px] max-md:justify-center bg-transparent text-white no-underline font-semibold text-base rounded-xl border-2 border-white/30 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/10 hover:border-white/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Telegram channel"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
