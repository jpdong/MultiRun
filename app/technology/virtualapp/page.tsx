import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const VirtualAppPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/technology" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
                ← Back to Technology
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-6">🔧</div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800">VirtualApp</h1>
                      <p className="text-gray-600">Android App Virtualization Framework</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                    <p className="text-gray-700 mb-4">
                      VirtualApp is a pioneering open-source Android application virtualization engine. 
                      It creates a virtual space within Android apps, allowing multiple app instances 
                      to run simultaneously without requiring root access.
                    </p>
                    <p className="text-gray-700">
                      This groundbreaking technology forms the foundation for many app cloning and 
                      parallel space solutions, including Multi Run's core functionality.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Key Technical Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">App Sandboxing</h3>
                        <p className="text-sm text-blue-700">Isolates apps in separate virtual environments for security and stability.</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">No Root Required</h3>
                        <p className="text-sm text-green-700">Works on unrooted devices through advanced hooking mechanisms.</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">Plugin Architecture</h3>
                        <p className="text-sm text-purple-700">Modular design allows custom plugins and extensions.</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-2">Performance Optimized</h3>
                        <p className="text-sm text-orange-700">Efficient resource management and minimal overhead.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Architecture Highlights</h2>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold">Dynamic Hooking System</h3>
                        <p className="text-gray-700">Intercepts and redirects system calls to create isolated app environments.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-semibold">Virtual File System</h3>
                        <p className="text-gray-700">Creates separate storage spaces for each virtualized app instance.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h3 className="font-semibold">Process Management</h3>
                        <p className="text-gray-700">Manages multiple app processes within a single host application.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h3 className="font-semibold">Permission Handling</h3>
                        <p className="text-gray-700">Sophisticated permission mapping and isolation between virtual apps.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Use Cases & Applications</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Dual app functionality for social media and messaging</li>
                      <li>Enterprise app isolation and security</li>
                      <li>App testing and development environments</li>
                      <li>Privacy protection through app sandboxing</li>
                      <li>Game account management and progression separation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                      Core Technology
                    </div>
                    <h3 className="text-xl font-bold mb-2">Project Stats</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">GitHub Stars</span>
                      <span className="font-semibold">⭐ 8.5k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language</span>
                      <span className="font-semibold">Java</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">License</span>
                      <span className="font-semibold">GPL v3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contributors</span>
                      <span className="font-semibold">50+</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <a 
                      href="https://github.com/asLody/VirtualApp" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center block"
                    >
                      View on GitHub
                    </a>
                    <a 
                      href="/#download" 
                      className="w-full btn bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                    >
                      Try Multi Run
                    </a>
                    <Link 
                      href="/technology" 
                      className="w-full btn bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block"
                    >
                      More Projects
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

export default VirtualAppPage;