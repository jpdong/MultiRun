import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'Bluesky Multiple Accounts | Multi Run',
  description: 'Manage multiple Bluesky accounts for personal use, content creation, and community engagement.',
  alternates: {
    canonical: 'https://multirun.space/hot-apps/bluesky'
  }
};

const BlueskyPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/hot-apps" className="back-link blue">
                ← Back to Hot Apps
              </Link>
            </div>
            
            <div className="detail-page">
              <div className="detail-header">
                <div className="detail-icon">🔵</div>
                <h1 className="detail-title">Bluesky</h1>
                <p className="detail-subtitle">
                  Manage multiple Bluesky accounts for personal use, content creation, and community engagement.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Social Media
                  </span>
                  <span className="detail-badge app-category green">
                    Growing Fast
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Clone Bluesky?</h2>
                  <p className="app-description">
                    Bluesky is an emerging decentralized social network that offers a fresh alternative to traditional platforms. 
                    With Multi Run, manage multiple Bluesky accounts for:
                  </p>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Separating personal and professional identities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Engaging with different communities and interests</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Content creation across multiple niches</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Testing different content strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Key Features</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🌐 Decentralized Network</h3>
                      <p>Experience a social platform built on the AT Protocol for greater user control.</p>
                    </div>
                    <div className="use-case">
                      <h3>📝 Custom Feeds</h3>
                      <p>Create and follow custom feeds tailored to specific interests and communities.</p>
                    </div>
                    <div className="use-case">
                      <h3>🔄 Cross-posting</h3>
                      <p>Share content across multiple accounts with different audiences.</p>
                    </div>
                    <div className="use-case">
                      <h3>🔍 Discovery Features</h3>
                      <p>Find new connections and content through Bluesky's discovery tools.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>Popular Use Cases</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>👤 Personal & Professional</h3>
                    <p>Maintain separate accounts for personal connections and professional networking.</p>
                  </div>
                  <div className="use-case">
                    <h3>🎨 Content Creators</h3>
                    <p>Manage different accounts for various content themes and audience segments.</p>
                  </div>
                  <div className="use-case">
                    <h3>🏢 Business Presence</h3>
                    <p>Establish brand presence on this emerging platform while maintaining personal accounts.</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #0080FF 0%, #0050A0 100%)'}}>
                  <h2 className="cta-title">Ready to Clone Bluesky?</h2>
                  <p className="cta-description">
                    Download Multi Run now and start managing multiple Bluesky accounts seamlessly.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Clone with Multi Run
                    </a>
                    <Link href="/hot-apps" className="cta-button secondary">
                      View More Apps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default BlueskyPage;