import React from 'react';

interface HeroProps {
  setActiveView: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveView }) => {
  const videoUrl = "https://res.cloudinary.com/du0rolbnv/video/upload/v1759250505/technology_qlqwjt.mp4";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center py-20">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="block text-zinc-900 dark:text-zinc-100">Ling Lam, M.Ed</span>
          <span className="block text-sky-500 dark:text-sky-400 mt-2">EdTech & IT Leader</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mt-6">
          15+ years' experience driving innovation in K-12 learning, IT, and program leadership across global and U.S. schools. Expert in AI integration, SaaS management, curriculum design, and professional development.
        </p>

        <div className="my-10">
            <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl shadow-sky-500/20"
                aria-label="Promotional video showcasing technology and education"
            >
                Your browser does not support the video tag.
            </video>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); setActiveView('experience'); }}
            className="bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/30"
          >
            View Experience
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); setActiveView('contact'); }}
            className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 font-semibold px-8 py-3 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;