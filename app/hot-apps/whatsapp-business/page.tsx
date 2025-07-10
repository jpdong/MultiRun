import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const WhatsAppBusinessPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/hot-apps" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
                ← Back to Hot Apps
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-6">💬</div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800">WhatsApp Business</h1>
                      <p className="text-gray-600">Business Communication Platform</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Why Clone WhatsApp Business?</h2>
                    <p className="text-gray-700 mb-4">
                      WhatsApp Business is essential for modern business communication. With Multi Run, 
                      you can manage multiple business accounts simultaneously, perfect for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Running multiple business ventures</li>
                      <li>Managing different client portfolios</li>
                      <li>Separating personal and business communications</li>
                      <li>Testing different business strategies</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Business Profiles</h3>
                        <p className="text-sm text-green-700">Create professional business profiles with contact info, location, and business hours.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Automated Messages</h3>
                        <p className="text-sm text-blue-700">Set up welcome messages, away messages, and quick replies.</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">Catalog Showcase</h3>
                        <p className="text-sm text-purple-700">Display your products and services directly in WhatsApp.</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-2">Analytics</h3>
                        <p className="text-sm text-orange-700">Track message statistics and customer engagement.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-semibold">E-commerce Businesses</h3>
                        <p className="text-gray-700">Manage customer inquiries, send order updates, and provide support across multiple stores.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold">Service Providers</h3>
                        <p className="text-gray-700">Separate different service offerings and maintain professional communication channels.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h3 className="font-semibold">Freelancers</h3>
                        <p className="text-gray-700">Keep different client projects organized with dedicated business accounts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                      Most Popular
                    </div>
                    <h3 className="text-xl font-bold mb-2">App Statistics</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads</span>
                      <span className="font-semibold">2M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold">Communication</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-semibold">⭐ 4.8/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Updated</span>
                      <span className="font-semibold">Recent</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <a 
                      href="/#download" 
                      className="w-full btn bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                    >
                      Clone with Multi Run
                    </a>
                    <Link 
                      href="/hot-apps" 
                      className="w-full btn bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block"
                    >
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

export default WhatsAppBusinessPage;