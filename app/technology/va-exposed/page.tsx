import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const VaExposedPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/technology" className="text-purple-600 hover:text-purple-800 font-medium">
                ← Back to Technology
              </Link>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">VirtualApp + Xposed</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Enhanced VirtualApp with Xposed framework integration for advanced app manipulation.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                    Framework Integration
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-mono">
                    Java/C++
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
                    ⭐ 13.2k Stars
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Xposed framework integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Advanced app manipulation capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Hook system for runtime modifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Enhanced security and privacy features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Module system for extensibility</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Architecture</h3>
                      <p className="text-gray-600 text-sm">Built on VirtualApp with Xposed framework integration</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Languages</h3>
                      <p className="text-gray-600 text-sm">Java, C++, Native Android</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Compatibility</h3>
                      <p className="text-gray-600 text-sm">Android 5.0 - 14.0</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">License</h3>
                      <p className="text-gray-600 text-sm">GPL v3.0</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">How Multi Run Uses This Technology</h2>
                <p className="text-gray-600 mb-6">
                  Multi Run leverages VirtualApp + Xposed technology to provide advanced app virtualization 
                  capabilities. This enables users to run multiple instances of apps with enhanced control 
                  over app behavior and permissions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/#download" 
                    className="btn bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                  >
                    Download Multi Run
                  </a>
                  <a 
                    href="https://github.com/android-hacker/VirtualXposed" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                  >
                    View on GitHub
                  </a>
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

export default VaExposedPage;