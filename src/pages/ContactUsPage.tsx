import React from 'react';
import { FaEnvelope, FaTelegram, FaDiscord, FaTwitter, FaProductHunt } from 'react-icons/fa';

import Footer from '../components/elements/Footer';
import NavBar from '../components/elements/NavBar';
import Container from '../components/layout/Container';

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

const ContactUsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <NavBar />

            {/* Hero Section (Carbon Black) */}
            <section className="pt-36 pb-24 bg-dark text-white relative overflow-hidden border-b border-border-light/10">
                <Container>
                    <div className="relative z-1 text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                            <span>📬 Multi Run Support</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight m-0 text-white">Get in Touch</h1>
                        <p className="text-lg md:text-xl text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
                            Whether you need support, have feedback, or want to collaborate, we&apos;d love to hear from you through any of our channels.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-bg-lighter flex-1">
                <Container>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight m-0">Contact Channels</h2>
                        <p className="text-lg text-text-lighter m-0 max-w-2xl mx-auto leading-relaxed">
                            Choose the platform that works best for you. We&apos;re active on all channels and respond quickly to your inquiries.
                        </p>
                    </div>

                    {/* Contact Methods Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {contactMethods.map((method) => (
                            <a
                                key={method.id}
                                href={method.link}
                                className="bg-white rounded-3xl p-8 border border-border-light text-dark shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 relative group flex flex-col justify-between no-underline hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,98,255,0.12)] hover:border-primary/40"
                                target={method.type === 'email' ? '_self' : '_blank'}
                                rel={method.type === 'email' ? '' : 'noopener noreferrer'}
                                aria-label={`Contact us via ${method.title}`}
                            >
                                <div>
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-16 h-16 text-3xl rounded-2xl flex items-center justify-center border bg-primary/10 border-primary/20 text-primary transition-transform duration-300 group-hover:scale-105 shrink-0">
                                            {method.icon}
                                        </div>
                                        <div className="flex-1 min-w-0 space-y-1">
                                            <h3 className="text-xl font-bold m-0 tracking-tight text-dark truncate">{method.title}</h3>
                                            <span className="inline-block py-1 px-3 rounded-lg text-xs font-medium border bg-bg-code text-text-light border-border-light uppercase tracking-wider">{method.type}</span>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed m-0 mb-8 text-base text-text-light break-all">{method.value}</p>
                                </div>
                                <div className="flex justify-between items-center pt-6 border-t border-border-light/50 mt-auto">
                                    <span className="text-sm font-medium text-text-lighter">Active Channel</span>
                                    <span className="flex items-center gap-1 text-sm font-bold text-primary transition-all duration-200 group-hover:gap-2">
                    <span>{method.type === 'email' ? 'Send Email' : 'Visit Channel'}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                  </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Support Section (Clean White Card) */}
                    <div className="bg-white rounded-3xl py-16 px-8 md:px-16 my-24 border border-border-light shadow-[0_4px_24px_rgba(0,0,0,0.02)] text-center space-y-12">
                        <div className="max-w-2xl mx-auto space-y-4">
                            <h3 className="text-3xl md:text-4xl font-bold text-dark tracking-tight m-0">How We Can Help</h3>
                            <p className="text-lg text-text-lighter m-0 leading-relaxed">
                                Our team is dedicated to providing you with the best possible experience. Here&apos;s what we can assist you with:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-4">
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-3xl mx-auto text-primary shadow-inner">
                                    🛠️
                                </div>
                                <h4 className="text-xl font-bold text-dark m-0">Technical Support</h4>
                                <p className="text-base text-text-lighter m-0 leading-relaxed">
                                    Get help with app installation, setup, and troubleshooting
                                </p>
                            </div>

                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-3xl mx-auto text-primary shadow-inner">
                                    💡
                                </div>
                                <h4 className="text-xl font-bold text-dark m-0">Feature Requests</h4>
                                <p className="text-base text-text-lighter m-0 leading-relaxed">
                                    Share your ideas for new features and improvements
                                </p>
                            </div>

                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-3xl mx-auto text-primary shadow-inner">
                                    🤝
                                </div>
                                <h4 className="text-xl font-bold text-dark m-0">Business Inquiries</h4>
                                <p className="text-base text-text-lighter m-0 leading-relaxed">
                                    Discuss partnerships, collaborations, and business opportunities
                                </p>
                            </div>

                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-3xl mx-auto text-primary shadow-inner">
                                    📝
                                </div>
                                <h4 className="text-xl font-bold text-dark m-0">Feedback</h4>
                                <p className="text-base text-text-lighter m-0 leading-relaxed">
                                    Tell us about your experience and help us improve
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section (Carbon Black) */}
                    <div className="py-20 px-8 bg-dark text-white text-center rounded-3xl border border-white/10 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                        <div className="relative z-1 max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight m-0 text-white">Ready to Get Started?</h2>
                            <p className="text-lg text-text-lighter m-0 leading-relaxed">
                                Download Multi Run now and join thousands of users who are already managing multiple accounts with ease.
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap pt-4">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                                    className="inline-flex items-center justify-center py-4 px-8 bg-white text-dark no-underline font-bold text-base rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:bg-border-light"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Download Multi Run from Google Play Store"
                                >
                                    Download Multi Run
                                </a>
                                <a
                                    href="https://t.me/multi_run"
                                    className="inline-flex items-center justify-center py-4 px-8 bg-transparent text-white no-underline font-bold text-base rounded-full border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/60"
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
