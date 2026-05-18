import React from 'react';
import Container from '../components/layout/Container';

const apps = [
  { rank: 1, name: 'WhatsApp', description: 'Popular messaging app' },
  { rank: 2, name: 'Instagram', description: 'Social media platform' },
  { rank: 3, name: 'Facebook', description: 'Social networking service' },
  { rank: 4, name: 'TikTok', description: 'Short video platform' },
  { rank: 5, name: 'Telegram', description: 'Secure messaging app' },
];

const RankPage: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="py-8 max-w-[800px] mx-auto">
          <h1 className="text-dark mb-4">Top 5 Cloned Applications</h1>
          <p className="mb-12 text-xl">
            Here are the most popular apps that users clone with Multi Run.
          </p>

          <div className="max-w-[800px] mx-auto">
            {apps.map(app => (
              <div
                key={app.rank}
                className="flex items-center p-5 mb-4 bg-[#f9f9f9] rounded-[10px] text-left"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-5 font-bold">
                  {app.rank}
                </div>
                <div>
                  <h3 className="m-0 text-dark">{app.name}</h3>
                  <p className="m-0 text-[#666]">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RankPage;
