import React from 'react';
import Container from '../components/layout/Container';
import { FaEnvelope, FaTelegram, FaDiscord, FaTwitter, FaHome } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ContactCard: React.FC<{ icon: React.ReactNode; title: string; link: string; value: string }> = ({ icon, title, link, value }) => (
  <div style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
    <div style={{ fontSize: '4rem', marginBottom: '1rem', color: '#165DFF' }}>{icon}</div>
    <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>{title}</h3>
    <a href={link} style={{ fontSize: '1.1rem', color: '#666', textDecoration: 'none', wordBreak: 'break-all' }}>{value}</a>
  </div>
);

const ContactUsPage: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="page-content" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <a href="/" style={{ position: 'absolute', left: '2rem', top: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#165DFF', textDecoration: 'none' }}>
            <FaHome style={{ fontSize: '1.2rem' }} />
            <span>HOME</span>
          </a>
          <h1>Contact Us</h1>
          <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
            We'd love to hear from you! Reach out through any of these channels:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <ContactCard
              icon={<FaEnvelope />}
              title="Email"
              link="mailto:dongshan1025@gmail.com"
              value="dongshan1025@gmail.com"
            />
            <ContactCard
              icon={<FaTelegram />}
              title="Telegram Channel"
              link="https://t.me/multi_run"
              value="https://t.me/multi_run"
            />
            <ContactCard
              icon={<FaTelegram />}
              title="Telegram Group"
              link="https://t.me/+m8gMGEhAb5E0ODk1"
              value="https://t.me/+m8gMGEhAb5E0ODk1"
            />
            <ContactCard
              icon={<FaDiscord />}
              title="Discord"
              link="https://discord.gg/T7DsKkdz"
              value="https://discord.gg/T7DsKkdz"
            />
            <ContactCard
              icon={<FaTwitter />}
              title="Twitter"
              link="https://x.com/JP_DONG"
              value="https://x.com/JP_DONG"
            />
            <ContactCard
              icon={<FiExternalLink />}
              title="ProductHunt"
              link="https://www.producthunt.com/@jumpdong"
              value="https://www.producthunt.com/@jumpdong"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
