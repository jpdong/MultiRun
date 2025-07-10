import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const TikTokPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/hot-apps" className="text-blue-600 hover:text-blue-800 font-medium">
                ← Back to Hot Apps
              </Link>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-8xl mb-6">🎵</div>
                <h1 className="text-4xl font-bold mb-4">TikTok</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Create and manage multiple TikTok accounts for different content themes and audiences.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Entertainment
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    4M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Use Multiple TikTok Accounts?</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Create content for different niches</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Separate personal and professional content</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Test different content strategies</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Target different demographics</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Maintain privacy and anonymity</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Multi Run Benefits</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check blue">✓</span>
                      <span>Switch between accounts instantly</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Upload content to multiple accounts</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Track performance across accounts</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Isolated data and analytics</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>No interference between accounts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h2>Content Creation Strategies</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🎭 Entertainment</h3>
                    <p>Comedy skits, viral trends, and entertainment content</p>
                  </div>
                  <div className="use-case">
                    <h3>🏋️‍♂️ Fitness</h3>
                    <p>Workout routines, fitness tips, and health content</p>
                  </div>
                  <div className="use-case">
                    <h3>🍳 Food & Cooking</h3>
                    <p>Recipe tutorials, cooking tips, and food reviews</p>
                  </div>
                  <div className="use-case">
                    <h3>🎸 Music & Dance</h3>
                    <p>Music covers, dance tutorials, and performances</p>
                  </div>
                  <div className="use-case">
                    <h3>💼 Business</h3>
                    <p>Entrepreneurship tips, business advice, and marketing</p>
                  </div>
                  <div className="use-case">
                    <h3>🎓 Education</h3>
                    <p>Learning content, tutorials, and skill development</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #ff0050 0%, #ff6b6b 100)'}}>
                  <h2 className="cta-title">Ready to Amplify Your TikTok Presence?</h2>
                  <p className="cta-description">
                    Download Multi Run and start managing multiple TikTok accounts like a pro.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
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

export default TikTokPage;