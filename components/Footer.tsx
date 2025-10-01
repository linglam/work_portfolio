import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 md:px-12 py-8 text-center text-zinc-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors" aria-label="GitHub">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ling-lam" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors" 
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