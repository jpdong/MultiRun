import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
import Container from '../../src/components/layout/Container';

const technologyProjects = [
  {
    id: 'virtualapp',
    name: 'VirtualApp',
    description: 'A powerful Android app virtualization framework that allows running multiple app instances.',
    github: 'asLody/VirtualApp',
    stars: '8.5k',
    language: 'Java',
    category: 'App Virtualization'
  },
  {
    id: 'va-exposed',
    name: 'VirtualApp + Xposed',
    description: 'Enhanced VirtualApp with Xposed framework integration for advanced app manipulation.',
    github: 'android-hacker/VirtualXposed',
    stars: '13.2k',
    language: 'Java/C++',
    category: 'Framework Integration'
  },
  {
    id: 'parallel-space',
    name: 'Parallel Space',
    description: 'Open source implementation of parallel app technology for Android devices.',
    github: 'xx-dev/ParallelSpace',
    stars: '2.1k',
    language: 'Java',
    category: 'Parallel Apps'
  },
  {
    id: 'epic',
    name: 'Epic',
    description: 'A modern Android app virtualization solution with enhanced security and performance.',
    github: 'tiann/epic',
    stars: '1.8k',
    language: 'Java/C++',
    category: 'App Virtualization'
  },
  {
    id: 'android-container',
    name: 'Android Container',
    description: 'Lightweight container technology for running isolated Android applications.',
    github: 'container4android/AndroidContainer',
    stars: '956',
    language: 'C++/Java',
    category: 'Containerization'
  },
  {
    id: 'dual-boot',
    name: 'DualBootPatcher',
    description: 'Advanced dual boot solution allowing multiple Android ROMs on a single device.',
    github: 'chenxiaolong/DualBootPatcher',
    stars: '1.2k',
    language: 'C++',
    category: 'System Level'
  },
  {
    id: 'shelter',
    name: 'Shelter',
    description: 'Isolate and clone apps using Android work profile for enhanced privacy.',
    github: 'PeterCxy/Shelter',
    stars: '2.8k',
    language: 'Java',
    category: 'Privacy & Security'
  },
  {
    id: 'magisk-modules',
    name: 'Magisk Hide',
    description: 'Systemless root solution with app hiding capabilities for sensitive applications.',
    github: 'topjohnwu/Magisk',
    stars: '35k',
    language: 'C++/Java',
    category: 'Root & Hide'
  },
  {
    id: 'app-ops',
    name: 'App Ops',
    description: 'Permission management framework for controlling app access and behavior.',
    github: 'rikka/AppOps',
    stars: '1.5k',
    language: 'Java',
    category: 'Permission Control'
  },
  {
    id: 'island',
    name: 'Island',
    description: 'App isolation solution using Android work profile with enhanced management features.',
    github: 'oasisfeng/island',
    stars: '3.1k',
    language: 'Java',
    category: 'App Isolation'
  }
];

const TechnologyPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Android Virtualization Technology</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the cutting-edge open source technologies that power app virtualization, 
                parallel spaces, and multi-account management on Android.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/technology/${project.id}`}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 block"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                      <span className="text-yellow-500">⭐ {project.stars}</span>
                    </div>
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">{project.language}</span>
                    <span className="text-purple-600 font-medium">Explore →</span>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    📁 {project.github}
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Powered by Open Source Innovation</h2>
                <p className="text-gray-600 mb-6">
                  Multi Run leverages these advanced technologies to provide the best app virtualization experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/#download" 
                    className="btn bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Try Multi Run
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
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

export default TechnologyPage;