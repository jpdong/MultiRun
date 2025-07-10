import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const IslandPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/technology" className="back-link">
                ← Back to Technology
              </Link>
            </div>
            
            <div className="detail-page">
              <div className="detail-header">
                <h1 className="detail-title">Island</h1>
                <p className="detail-subtitle">
                  App isolation solution using Android work profile with enhanced management features.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    App Isolation
                  </span>
                  <span className="detail-badge tech-language">
                    Java
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 3.1k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Work profile-based app isolation</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Enhanced management interface</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Advanced app cloning capabilities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Intelligent app organization</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Seamless user experience</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Advanced Isolation Technology</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🏝️ Complete Isolation</h3>
                      <p>Full separation of apps using Android work profile technology</p>
                    </div>
                    <div className="use-case">
                      <h3>🎛️ Smart Management</h3>
                      <p>Intelligent app organization and management features</p>
                    </div>
                    <div className="use-case">
                      <h3>🔄 Seamless Switching</h3>
                      <p>Easy switching between isolated and regular app instances</p>
                    </div>
                    <div className="use-case">
                      <h3>👤 User-Friendly</h3>
                      <p>Intuitive interface for managing isolated applications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>How Multi Run Uses This Technology</h2>
                <p className="app-description">
                  Multi Run incorporates the elegant isolation and management concepts from Island 
                  to provide a seamless user experience while maintaining strong app separation. 
                  The work profile approach informs our architecture for secure app virtualization.
                </p>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🎯 Smart Isolation</h3>
                    <p>Intelligent app separation with minimal user intervention</p>
                  </div>
                  <div className="use-case">
                    <h3>📱 Enhanced UX</h3>
                    <p>Smooth and intuitive interface for managing multiple app instances</p>
                  </div>
                  <div className="use-case">
                    <h3>🔒 Security Focus</h3>
                    <p>Strong security model inspired by work profile architecture</p>
                  </div>
                  <div className="use-case">
                    <h3>⚡ Performance</h3>
                    <p>Optimized performance for daily use scenarios</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Elegant App Isolation</h2>
                  <p className="cta-description">
                    Discover how Multi Run combines powerful isolation with an elegant user experience.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/oasisfeng/island" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button secondary"
                    >
                      View on GitHub
                    </a>
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

export default IslandPage;