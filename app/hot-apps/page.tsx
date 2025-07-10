import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
import Container from '../../src/components/layout/Container';

const hotApps = [
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business',
    description: 'Run multiple WhatsApp Business accounts for different business ventures or client management.',
    icon: '💬',
    category: 'Communication',
    downloads: '2M+'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Manage multiple Instagram accounts for personal use, business promotion, and content creation.',
    icon: '📸',
    category: 'Social Media',
    downloads: '5M+'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Use multiple Telegram accounts for different purposes while maintaining privacy and organization.',
    icon: '✈️',
    category: 'Communication',
    downloads: '3M+'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    description: 'Create and manage multiple TikTok accounts for different content themes and audiences.',
    icon: '🎵',
    category: 'Entertainment',
    downloads: '4M+'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Switch between personal and business Facebook accounts seamlessly without logging out.',
    icon: '👥',
    category: 'Social Media',
    downloads: '6M+'
  },
  {
    id: 'twitter',
    name: 'Twitter (X)',
    description: 'Manage multiple Twitter accounts for different interests, businesses, or social circles.',
    icon: '🐦',
    category: 'Social Media',
    downloads: '2.5M+'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Run multiple YouTube channels with different accounts for content creation and viewing.',
    icon: '📺',
    category: 'Entertainment',
    downloads: '4.5M+'
  },
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Access multiple Gmail accounts simultaneously for personal and professional email management.',
    icon: '📧',
    category: 'Productivity',
    downloads: '7M+'
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Join multiple Discord servers with different accounts for gaming, communities, and work.',
    icon: '🎮',
    category: 'Communication',
    downloads: '1.8M+'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Use multiple Spotify accounts for different music preferences and family sharing.',
    icon: '🎶',
    category: 'Entertainment',
    downloads: '3.2M+'
  }
];

const HotAppsPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Hot Clone Apps</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the most popular apps that users clone with Multi Run. 
                Manage multiple accounts efficiently and boost your productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotApps.map((app) => (
                <Link 
                  key={app.id} 
                  href={`/hot-apps/${app.id}`}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 block"
                >
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-3">{app.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{app.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2">
                      {app.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{app.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Downloads: {app.downloads}</span>
                    <span className="text-blue-600 font-medium">Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Clone Your Favorite Apps?</h2>
                <p className="text-gray-600 mb-6">
                  Download Multi Run now and start managing multiple accounts with ease.
                </p>
                <a 
                  href="/#download" 
                  className="btn bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Download Multi Run
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default HotAppsPage;