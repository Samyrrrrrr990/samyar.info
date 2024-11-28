import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Trophy, Mail } from 'lucide-react';

// Global Styles
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap');
  
  body {
    background-color: #000411;
    color: white;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #1A2C50 #0A0E1A;
  }
`;

// 3D Parallax Effect Component for Home Page
const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Refined 3D Floating Elements */}
      <motion.div 
        style={{
          transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full backdrop-blur-xl border border-blue-500/30 transform rotate-45"
      />
      <motion.div 
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full backdrop-blur-xl border border-indigo-500/30 transform -rotate-45"
      />
      {/* Crystal-like geometric shapes */}
      <motion.div 
        style={{
          transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        className="absolute top-1/4 right-1/3 w-48 h-48 bg-blue-600/10 backdrop-blur-xl border-2 border-blue-500/50 transform skew-x-12 skew-y-6 rotate-12"
      />
      <motion.div 
        style={{
          transform: `translate(${mousePosition.x * 35}px, ${mousePosition.y * 35}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-indigo-600/10 backdrop-blur-xl border-2 border-indigo-500/50 transform -skew-x-12 -skew-y-6 -rotate-12"
      />
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Navigation Component
  const Navigation = () => (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-blue-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-4 cursor-pointer"
        >
          <div className="bg-gradient-to-r from-blue-400 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">SS</span>
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Samyar Shafiee
          </span>
        </motion.div>
        
        <div className="flex space-x-6">
          {['Home', 'Accomplishments', 'Contact', 'Link Tree'].map((page) => (
            <motion.button
              key={page}
              onClick={() => page === 'Link Tree' 
                ? window.open('https://linktr.ee/samyar1388?utm_source=linktree_admin_share', '_blank')
                : setCurrentPage(page.toLowerCase())}
              whileHover={{ scale: 1.1, color: '#3B82F6' }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 text-sm uppercase tracking-wider hover:text-blue-500 transition-all"
            >
              {page}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );

  // Home Page
  const HomePage = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParallaxBackground />
      <div className="relative z-10 max-w-4xl text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="bg-black/50 backdrop-blur-xl rounded-3xl p-12 border border-blue-900/30 shadow-2xl"
        >
          <Home size={80} className="mx-auto mb-6 text-blue-400 animate-pulse" />
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Samyar Shafiee
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Innovative student, researcher, and explorer. Driven by curiosity and a passion 
            for pushing the boundaries of knowledge across multiple disciplines.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );

  // Accomplishments Page
  const AccomplishmentsPage = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-blue-900/30"
        >
          <Trophy size={80} className="mx-auto mb-8 text-blue-400 animate-bounce" />
          <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Accomplishments
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Honor Roll - Grade 8", 
                icon: "🏅",
                description: "Recognized for academic excellence and consistent high performance."
              },
              { 
                title: "Honor Roll - Grade 9", 
                icon: "🏆",
                description: "Maintained outstanding academic standing and demonstrated leadership."
              },
              { 
                title: "Mathematics Award - Grade 8", 
                icon: "📐",
                description: "Outstanding achievement in mathematics, showcasing analytical skills."
              },
              { 
                title: "World Geography Club Co-Founder", 
                icon: "🌍",
                description: "Established and co-led a student-driven geographical research club."
              },
              { 
                title: "Research Paper Publication", 
                icon: "📄",
                description: "Authored and distributed 3 research papers to over 50 universities worldwide."
              }
            ].map((accomplishment, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring", 
                  stiffness: 100 
                }}
                className="bg-blue-900/20 rounded-xl p-6 flex flex-col space-y-4 hover:bg-blue-900/30 transition-all border border-blue-900/30"
              >
                <div className="flex items-center space-x-6">
                  <span className="text-4xl">{accomplishment.icon}</span>
                  <span className="text-lg font-semibold text-white">
                    {accomplishment.title}
                  </span>
                </div>
                <p className="text-sm text-white/70">
                  {accomplishment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  // Contact Page
  const ContactPage = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center border border-blue-900/30 max-w-xl w-full"
      >
        <Mail size={80} className="mx-auto mb-8 text-blue-400 animate-pulse" />
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Contact Me
        </h1>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-900/20 rounded-xl p-6 hover:bg-blue-900/30 border border-blue-900/30 transition-all"
        >
          <p className="text-xl mb-4 text-white/80">Feel free to reach out!</p>
          <a 
            href="mailto:samyar.shafiee2009@gmail.com" 
            className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-blue-500 hover:to-purple-700 transition-all"
          >
            samyar.shafiee2009@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  // Render current page
  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'accomplishments': return <AccomplishmentsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <>
      <style>{globalStyles}</style>
      <Navigation />
      <AnimatePresence mode="wait">
        {isLoaded && renderPage()}
      </AnimatePresence>
    </>
  );
};

export default App;
