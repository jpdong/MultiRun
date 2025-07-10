import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const InstagramPage: React.FC = () => {
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
                    <div className="text-6xl mr-6">📸</div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800">Instagram</h1>
                      <p className="text-gray-600">Photo & Video Sharing Platform</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Why Clone Instagram?</h2>
                    <p className="text-gray-700 mb-4">
                      Instagram is the leading platform for visual storytelling and brand building. 
                      With Multi Run, manage multiple Instagram accounts for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Personal and business content separation</li>
                      <li>Different niche audiences and themes</li>
                      <li>Brand management across multiple businesses</li>
                      <li>Content testing and A/B strategies</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-pink-800 mb-2">Stories & Reels</h3>
                        <p className="text-sm text-pink-700">Share engaging short-form content and behind-the-scenes moments.</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">Business Tools</h3>
                        <p className="text-sm text-purple-700">Access insights, promote posts, and manage business inquiries.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Shopping Features</h3>
                        <p className="text-sm text-blue-700">Tag products, create shop sections, and drive sales directly.</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-2">Creator Studio</h3>
                        <p className="text-sm text-orange-700">Schedule posts, track performance, and manage content efficiently.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Popular Use Cases</h2>
                    <div className="space-y-4">
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h3 className="font-semibold">Content Creators</h3>
                        <p className="text-gray-700">Separate personal life from content creation with dedicated accounts for different niches.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h3 className="font-semibold">Small Businesses</h3>
                        <p className="text-gray-700">Manage multiple business accounts for different products, locations, or target markets.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold">Influencers</h3>
                        <p className="text-gray-700">Test different content strategies and maintain multiple brand partnerships.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                      Top Rated
                    </div>
                    <h3 className="text-xl font-bold mb-2">App Statistics</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads</span>
                      <span className="font-semibold">5M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold">Social Media</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-semibold">⭐ 4.9/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Updated</span>
                      <span className="font-semibold">Recent</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <a 
                      href="/#download" 
                      className="w-full btn bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-center block"
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

export default InstagramPage;