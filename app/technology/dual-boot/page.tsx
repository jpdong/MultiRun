import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const DualBootPage: React.FC = () => {
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
                <h1 className="detail-title">DualBootPatcher</h1>
                <p className="detail-subtitle">
                  Advanced dual boot solution allowing multiple Android ROMs on a single device.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    System Level
                  </span>
                  <span className="detail-badge tech-language">
                    C++
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 1.2k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Multiple ROM support on single device</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Advanced boot management</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>System partition management</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Recovery integration</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Custom kernel support</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Technical Architecture</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🔧 System Level</h3>
                      <p>Deep system integration with bootloader and recovery</p>
                    </div>
                    <div className="use-case">
                      <h3>💾 Partition Management</h3>
                      <p>Advanced partition handling for multiple ROM installations</p>
                    </div>
                    <div className="use-case">
                      <h3>⚙️ Boot Control</h3>
                      <p>Sophisticated boot selection and management system</p>
                    </div>
                    <div className="use-case">
                      <h3>🛠️ Recovery Tools</h3>
                      <p>Integrated recovery tools for ROM management</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>How Multi Run Benefits from This Technology</h2>
                <p className="app-description">
                  While Multi Run operates at the application level, the dual boot concepts from 
                  DualBootPatcher inspire our approach to creating isolated environments for apps. 
                  The partition and environment isolation techniques inform our virtualization strategy.
                </p>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🔄 Environment Isolation</h3>
                    <p>Inspired isolation techniques for application environments</p>
                  </div>
                  <div className="use-case">
                    <h3>⚡ System Integration</h3>
                    <p>Deep system understanding for better app virtualization</p>
                  </div>
                  <div className="use-case">
                    <h3>🛡️ Security Models</h3>
                    <p>Advanced security concepts applied to app isolation</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Advanced System Technology</h2>
                  <p className="cta-description">
                    Discover how Multi Run applies system-level concepts for superior app virtualization.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/chenxiaolong/DualBootPatcher" 
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

export default DualBootPage;