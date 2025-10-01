import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleLinkClick = (view: string) => {
    setActiveView(view);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { key: 'about', label: 'About Me' },
    { key: 'experience', label: 'Experience' },
    { key: 'achievement', label: 'Achievements' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-zinc-950/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="text-xl font-bold text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors">
            Ling Lam, M.Ed
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.key} href={`#${link.key}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.key); }} className={`font-medium transition-colors ${activeView === link.key ? 'text-sky-500 dark:text-sky-400' : 'text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400'}`}>
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-600 dark:text-zinc-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.key} href={`#${link.key}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.key); }} className={`text-lg font-medium transition-colors ${activeView === link.key ? 'text-sky-500 dark:text-sky-400' : 'text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400'}`}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;