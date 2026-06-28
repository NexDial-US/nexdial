import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import BookCall from './pages/BookCall';
import FAQ from './pages/FAQ';
import Insights from './pages/Insights';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Logo from './components/Logo';

type Page =
  | 'home'
  | 'services'
  | 'industries'
  | 'about'
  | 'careers'
  | 'contact'
  | 'book'
  | 'faq'
  | 'insights'
  | 'privacy'
  | 'terms';

// Loading screen
const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050816] flex flex-col items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with glow */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-[#1D6EFF]/30 rounded-full scale-150" />
          <Logo size="lg" className="relative z-10" />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1D6EFF] to-[#00B8FF]"
            style={{
              animation: 'loadBar 1.4s ease-out forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleLoadingDone = () => {
    setLoading(false);
    setTimeout(() => setVisible(true), 50);
  };

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':       return <Home onNavigate={navigate} />;
      case 'services':   return <Services onNavigate={navigate} />;
      case 'industries': return <Industries onNavigate={navigate} />;
      case 'about':      return <About onNavigate={navigate} />;
      case 'careers':    return <Careers onNavigate={navigate} />;
      case 'contact':    return <Contact onNavigate={navigate} />;
      case 'book':       return <BookCall onNavigate={navigate} />;
      case 'faq':        return <FAQ onNavigate={navigate} />;
      case 'insights':   return <Insights onNavigate={navigate} />;
      case 'privacy':    return <Privacy onNavigate={navigate} />;
      case 'terms':      return <Terms onNavigate={navigate} />;
      default:           return <Home onNavigate={navigate} />;
    }
  };

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadingDone} />}

      <div
        className="min-h-screen bg-[#050816] flex flex-col transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <Navbar currentPage={currentPage} onNavigate={navigate} />
        <div className="flex-1">
          {renderPage()}
        </div>
        <Footer onNavigate={navigate} />
      </div>
    </>
  );
}

export default App;
