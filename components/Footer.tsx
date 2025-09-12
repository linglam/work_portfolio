import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-8 text-center text-slate-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-sky-400 transition-colors" aria-label="GitHub">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ling-lam" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-400 transition-colors" 
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Ling Lam, M.Ed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
