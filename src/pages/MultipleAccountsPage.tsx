import React from 'react';
import NavBar from '../components/elements/NavBar';
import Footer from '../components/elements/Footer';
import FeatureCard from '../components/elements/FeatureCard';
import TestimonialCard from '../components/elements/TestimonialCard';
import SectionTitle from '../components/elements/SectionTitle';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import DownloadButton from '../components/elements/DownloadButton';
import { FaGooglePlay } from 'react-icons/fa';

const features = [
  {
    img: '/multi_feature_1.webp',
    title: 'App Cloning',
    desc: 'Clone and run multiple instances of the same app with separate data storage.',
  },
  {
    img: '/multi_feature_2.webp',
    title: 'Data Isolation',
    desc: 'Keep your accounts secure with isolated data spaces and no cross-contamination.',
  },
  {
    img: '/multi_feature_3.webp',
    title: 'Parallel Running',
    desc: 'Run multiple accounts simultaneously without performance issues.',
  },
  {
    img: '/multi_feature_4.webp',
    title: 'Easy Switching',
    desc: 'Quickly switch between accounts with our intuitive interface.',
  },
];

const faqs = [
  {
    question: 'How do I clone an app?',
    answer: 'Simply open Multi Run, select the app you want to clone, and follow the on-screen instructions.Separate workspaces for professional/personal use. Auto-schedule switches (e.g., mute work apps after hours) and hide sensitive apps in ​​Stealth Mode​​.',
  },
  {
    question: 'Is Multi Run free?',
    answer: 'Yes, Multi Run is free to use for all users.Dominate PUBG, Free Fire, or Genshin Impact with dual accounts—boost resources, strategize, or share devices hassle-free.',
  },
  {
    question: 'Will my data be safe and isolated?',
    answer: 'Yes, each cloned app runs in a separate, isolated environment to keep your data secure.Clone WhatsApp, Instagram, TikTok, games, and 2000+ apps—manage personal, work, and gaming profiles ​​simultaneously​​ on one device. Keep data 100% isolated with no overlap!',
  },
  {
    question: 'Which platforms are supported?',
    answer: 'Multi Run is available for Android.',
  },
];

const testimonials = [
  {
    avatar: '/avatars/alex.svg',
    name: 'Alex',
    text: 'Ever since I started using it, I enjoyed every bit of it. It\'s very simple to use and has a great interface. The experience so far is great. Worth 5 stars!',
  },
  {
    avatar: '/avatars/linda.svg',
    name: 'Linda',
    text: "i can't really believe my eyes it's really totaly free and there is no ads u can add multiple apps with free and quickly thank you so much for the creator 😙😙😍really advice everyone to try it it's better than others apps",
  },
  {
    avatar: '/avatars/sam.svg',
    name: 'Sam',
    text: 'Finally an app which works with WhatsApp and with less ads. As an Android developer, I understand the need of a foreground notification. But the app shows two foreground notifications.',
  },
  {
    avatar: '/avatars/emily.svg',
    name: 'Emily',
    text: 'I tried so many clone apps for this particular app and all didn\'t work except this one! Simple and plays its role very nicely.',
  },
];

const MultipleAccountsPage: React.FC = () => (
  <>
    <NavBar />
    <div style={{ background: '#f7f9fb', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Container>
        <Row gutter={[40, 40]} align="middle" style={{ padding: '80px 0 40px 0' }}>
          <Column xs={24} md={12}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 20, color: '#2c3e50' }}>Run Multi Accounts on One Device</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: 30, color: '#666' }}>
              Keep your personal and professional lives separate with our secure app cloning solution. No more switching between accounts - run them all simultaneously!
            </p>
            <DownloadButton text="Get Started" href="https://play.google.com/store/apps/details?id=com.dong.multirun" />
          </Column>
          <Column xs={24} md={12} style={{ textAlign: 'center' }}>
            <img src="/multi_title_image.webp" alt="Multi Run" style={{ maxWidth: '100%', height: 'auto', borderRadius: 10, boxShadow: '0 4px 16px rgba(52,152,219,0.08)' }} />
          </Column>
        </Row>
      </Container>
      {/* Features Section */}
      <div style={{ background: '#f9f9f9', padding: '80px 0' }} id="features">
        <Container>
          <SectionTitle>Powerful Features</SectionTitle>
          <Row gutter={[30, 30]}>
            {features.map(f => (
              <Column xs={24} md={12} lg={6} key={f.title}>
                <FeatureCard {...f} />
              </Column>
            ))}
          </Row>
        </Container>
      </div>
      {/* Download Section */}
      <div style={{ padding: '80px 0', textAlign: 'center' }} id="download">
        <Container>
          <SectionTitle>Download Multi Run</SectionTitle>
          <p>Available on all major platforms. Get started today!</p>
          <DownloadButton text="Google Play" href="https://play.google.com/store/apps/details?id=com.dong.multirun" icon={<FaGooglePlay />} />
        </Container>
      </div>
      {/* FAQ Section */}
      <div style={{ background: '#fff', padding: '80px 0' }} id="faq">
        <Container>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {faqs.map(f => (
              <div key={f.question} style={{ marginBottom: 30, padding: 20, background: '#f9f9f9', borderRadius: 10 }}>
                <h3 style={{ color: '#2c3e50', marginBottom: 10 }}>{f.question}</h3>
                <p style={{ color: '#666', margin: 0 }}>{f.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* Testimonials Section */}
      <div style={{ background: '#f9f9f9', padding: '80px 0' }} id="testimonials">
        <Container>
          <SectionTitle>What Users Say</SectionTitle>
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
    <Footer />
  </>
);
export default MultipleAccountsPage;
