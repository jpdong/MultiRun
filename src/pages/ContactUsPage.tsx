import React from 'react';
import Container from '../components/layout/Container';
import { FaEnvelope, FaTelegram, FaDiscord, FaTwitter, FaProductHunt } from 'react-icons/fa';
import NavBar from '../components/elements/NavBar';
import Footer from '../components/elements/Footer';
import styles from '../components/contact/Contact.module.css';

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
    <div className={styles.contactPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSubtitle}>
              We're here to help you make the most of Multi Run
            </p>
            <p className={styles.heroDescription}>
              Whether you need support, have feedback, or want to collaborate,
              we'd love to hear from you through any of our channels.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Contact Channels</h2>
            <p className={styles.sectionDescription}>
              Choose the platform that works best for you. We're active on all channels
              and respond quickly to your inquiries.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className={styles.contactGrid}>
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                className={`${styles.contactCard} ${styles[method.type]}`}
                target={method.type === 'email' ? '_self' : '_blank'}
                rel={method.type === 'email' ? '' : 'noopener noreferrer'}
                aria-label={`Contact us via ${method.title}`}
              >
                <div className={styles.contactIcon}>
                  {method.icon}
                </div>
                <h3 className={styles.contactTitle}>{method.title}</h3>
                <p className={styles.contactValue}>{method.value}</p>
                <span className={styles.contactAction}>
                  {method.type === 'email' ? 'Send Email' : 'Visit Channel'}
                </span>
              </a>
            ))}
          </div>

          {/* Support Section */}
          <div className={styles.supportSection}>
            <h3 className={styles.supportTitle}>How We Can Help</h3>
            <p className={styles.supportDescription}>
              Our team is dedicated to providing you with the best possible experience.
              Here's what we can assist you with:
            </p>

            <div className={styles.supportGrid}>
              <div className={styles.supportItem}>
                <div className={styles.supportItemIcon}>🛠️</div>
                <h4 className={styles.supportItemTitle}>Technical Support</h4>
                <p className={styles.supportItemDescription}>
                  Get help with app installation, setup, and troubleshooting
                </p>
              </div>

              <div className={styles.supportItem}>
                <div className={styles.supportItemIcon}>💡</div>
                <h4 className={styles.supportItemTitle}>Feature Requests</h4>
                <p className={styles.supportItemDescription}>
                  Share your ideas for new features and improvements
                </p>
              </div>

              <div className={styles.supportItem}>
                <div className={styles.supportItemIcon}>🤝</div>
                <h4 className={styles.supportItemTitle}>Business Inquiries</h4>
                <p className={styles.supportItemDescription}>
                  Discuss partnerships, collaborations, and business opportunities
                </p>
              </div>

              <div className={styles.supportItem}>
                <div className={styles.supportItemIcon}>📝</div>
                <h4 className={styles.supportItemTitle}>Feedback</h4>
                <p className={styles.supportItemDescription}>
                  Tell us about your experience and help us improve
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.ctaDescription}>
                Download Multi Run now and join thousands of users who are already
                managing multiple accounts with ease.
              </p>
              <div className={styles.ctaButtons}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dong.multirun"
                  className={styles.ctaButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Multi Run from Google Play Store"
                >
                  Download Multi Run
                </a>
                <a
                  href="https://t.me/multi_run"
                  className={`${styles.ctaButton} ${styles.secondary}`}
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
