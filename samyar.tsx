import React, { useState } from 'react';
import { Home, Award, Music, Link2 } from 'lucide-react';
import { Mail } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-800 opacity-20 rounded-full filter blur-3xl animate-blob"></div>
    <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-900 opacity-15 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-700 opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>
);

const NavButton = ({ icon: Icon, onClick, active }) => (
  <button 
    onClick={onClick}
    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 
      ${active ? 'bg-blue-600 text-white' : 'hover:bg-blue-100 text-blue-600'}`}
  >
    <Icon size={24} />
  </button>
);

const PageLayout = ({ children, title }) => (
  <div className="relative min-h-screen bg-black text-blue-200 overflow-hidden">
    <AnimatedBackground />
    <div className="relative container mx-auto px-4 py-12 z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-blue-300 tracking-tight">
        {title}
      </h1>
      {children}
    </div>
  </div>
);

const HomePage = () => (
  <PageLayout title="Samyar Shafiee">
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
      <div className="bg-blue-900/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform perspective-1000 hover:rotate-3 hover:shadow-blue-500/50">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">About Me</h2>
        <p className="text-blue-200 leading-relaxed">
          I'm a multifaceted student passionate about academic excellence and creative expression. 
          With a strong foundation in mathematics and a love for music, I continuously strive to 
          expand my skills and explore new horizons.
        </p>
      </div>
      <div className="bg-blue-900/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform perspective-1000 hover:-rotate-3 hover:shadow-blue-500/50">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Quick Links</h2>
        <div className="space-y-4">
          <a 
            href="https://linktr.ee/samyar1388?utm_source=linktree_admin_share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-300 hover:text-blue-400 transition-colors"
          >
            <Link2 className="mr-3" /> My Linktree Profile
          </a>
          <a 
            href="mailto:samyar.shafiee2009@gmail.com" 
            className="flex items-center text-blue-300 hover:text-blue-400 transition-colors"
          >
            <Mail className="mr-3" /> samyar.shafiee2009@gmail.com
          </a>
        </div>
      </div>
    </div>
  </PageLayout>
);

const AcademicPage = () => (
  <PageLayout title="Academic Achievements">
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-blue-900/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform perspective-1000 hover:rotate-3">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
          <Award className="mr-3" /> Honour Roll
        </h2>
        <p className="text-blue-200">
          Consistently maintained high academic performance in Grade 8 and Grade 9, 
          demonstrating dedication to academic excellence and intellectual growth.
        </p>
      </div>
      <div className="bg-blue-900/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform perspective-1000 hover:-rotate-3">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
          <Award className="mr-3" /> Mathematics Achievement
        </h2>
        <p className="text-blue-200">
          Received the Mathematics Award in Grade 8, highlighting exceptional problem-solving 
          skills and mathematical understanding. Consistently demonstrated advanced analytical 
          and computational abilities.
        </p>
      </div>
    </div>
  </PageLayout>
);

const MusicPage = () => (
  <PageLayout title="Musical Journey">
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-blue-900/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform perspective-1000 hover:rotate-3">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
          <Music className="mr-3" /> Trombone Experience
        </h2>
        <p className="text-blue-200">
          Dedicated trombone player with three years of continuous musical training. 
          Developed technical skills, musical interpretation, and ensemble collaboration 
          through consistent practice and performance.
        </p>
      </div>
      <div className="bg-blue-900/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform perspective-1000 hover:-rotate-3">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
          <Music className="mr-3" /> Current Bands
        </h2>
        <p className="text-blue-200">
          Active member of two musical ensembles in Grade 10:
          - Concept Band: Exploring innovative musical arrangements and creative performances
          - Marching Band: Developing precision, teamwork, and performance skills
        </p>
      </div>
    </div>
  </PageLayout>
);

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const pages = {
    home: <HomePage />,
    academic: <AcademicPage />,
    music: <MusicPage />
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900/20 backdrop-blur-lg p-4 flex justify-center space-x-4 z-50">
        <NavButton 
          icon={Home} 
          onClick={() => setActivePage('home')} 
          active={activePage === 'home'}
        />
        <NavButton 
          icon={Award} 
          onClick={() => setActivePage('academic')} 
          active={activePage === 'academic'}
        />
        <NavButton 
          icon={Music} 
          onClick={() => setActivePage('music')} 
          active={activePage === 'music'}
        />
        <a 
          href="https://linktr.ee/samyar1388?utm_source=linktree_admin_share" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
        >
          <Link2 size={24} />
        </a>
      </div>
      {pages[activePage]}
    </div>
  );
};

export default App;
