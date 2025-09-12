import React from 'react';

const Hero: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;

    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80; // Fixed offset for the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="block text-slate-100">Ling Lam, M.Ed</span>
          <span className="block text-sky-400 mt-2">EdTech & IT Leader</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
          15+ years' experience driving innovation in K-12 learning, IT, and program leadership across global and U.S. schools. Expert in AI integration, SaaS management, curriculum design, and professional development.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <a
            href="#experience"
            onClick={handleNavClick}
            className="bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/30"
          >
            View Experience
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="bg-slate-700 text-slate-100 font-semibold px-8 py-3 rounded-md hover:bg-slate-600 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
