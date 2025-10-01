import React, { useState } from 'react';
import TravelIcon from './icons/TravelIcon';
import MountainIcon from './icons/MountainIcon';
import RunnerIcon from './icons/RunnerIcon';

const About: React.FC = () => {
  const [isExplorerCardFlipped, setIsExplorerCardFlipped] = useState(false);
  const [isMountainCardFlipped, setIsMountainCardFlipped] = useState(false);
  const [isRunnerCardFlipped, setIsRunnerCardFlipped] = useState(false);

  const explorerMapUrl = "https://res.cloudinary.com/du0rolbnv/image/upload/v1759253493/PXL_20230705_085859662_uz6qxa.jpg";
  const mountainUrl = "https://res.cloudinary.com/du0rolbnv/image/upload/v1759251059/colorado2_ega5dl.jpg";
  const runnerUrl = "https://res.cloudinary.com/du0rolbnv/image/upload/v1759251058/bryce_eaykfm.jpg";
  
  const profilePictureUrl = "https://res.cloudinary.com/du0rolbnv/image/upload/v1759250394/Ling_l2aevm.jpg";

  const cardBackStyleDark = {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e%3cg fill='none' stroke='%233f3f46' stroke-width='1'%3e%3cpath d='M0 12h24M12 0v24'/%3e%3c/g%3e%3c/svg%3e")`,
  };
    const cardBackStyleLight = {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e%3cg fill='none' stroke='%23e4e4e7' stroke-width='1'%3e%3cpath d='M0 12h24M12 0v24'/%3e%3c/g%3e%3c/svg%3e")`,
  };

  return (
    <section className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">About Me</h2>
      <p className="text-sky-500 dark:text-sky-400 text-center font-medium mb-12">My Journey</p>
      
      <div className="grid md:grid-cols-4 gap-12 items-center">
        <div className="md:col-span-1">
          <div className="relative rounded-lg shadow-xl w-full aspect-square overflow-hidden group bg-zinc-200 dark:bg-zinc-800">
            <img
              src={profilePictureUrl}
              alt="A professional headshot of Ling Lam, M.Ed"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            As an EdTech and IT Leader with over 15 years of experience, I specialize in driving innovation in K-12 learning, EdTech, and program leadership across global and U.S. schools. My expertise includes AI integration, SaaS management, curriculum design, and professional development.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am an award-winning keynote speaker recognized for bridging pedagogy and technology to boost engagement, streamline operations, and deliver measurable results. I am passionate about integrating technology to enhance learning, optimize efficiency, and achieve impactful outcomes for students and educators alike.
          </p>
        </div>
      </div>
      
      <div className="mt-20 md:mt-32">
        <h3 className="text-3xl font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">Non-Tech Related</h3>
        <p className="text-sky-500 dark:text-sky-400 text-center font-medium mb-12">Beyond the Professional Sphere</p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Explorer Card */}
            <div>
              <div 
                className="relative min-h-[300px] [perspective:1000px] cursor-pointer group"
                onClick={() => setIsExplorerCardFlipped(!isExplorerCardFlipped)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsExplorerCardFlipped(!isExplorerCardFlipped)}
                aria-label="Explorer card, click to flip"
              >
                <div className={`relative w-full h-full min-h-[300px] transition-transform duration-700 [transform-style:preserve-3d] ${isExplorerCardFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg shadow-lg group-hover:shadow-sky-500/10 transition-shadow duration-300 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
                      <img src={explorerMapUrl} alt="Ling Lam traveling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                        <TravelIcon className="w-10 h-10 text-sky-400 mb-2" />
                        <h4 className="text-2xl font-bold text-white">Explorer</h4>
                      </div>
                    </div>
                    <div 
                      className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg shadow-lg bg-zinc-100 dark:bg-zinc-800 p-6 flex flex-col justify-center items-center text-center"
                    >
                      <div className="absolute inset-0 dark:hidden" style={cardBackStyleLight}></div>
                      <div className="absolute inset-0 hidden dark:block" style={cardBackStyleDark}></div>
                      <p className="text-zinc-700 dark:text-zinc-300 relative">Passionate about immersing myself in different cultures, I've lived and worked in Europe, Asia and different states in the U.S., gaining a broad perspective on work ethics and lifestyles.</p>
                    </div>
                </div>
              </div>
              <p className="text-center text-xs text-zinc-500 mt-2 italic">Click card to flip</p>
            </div>

            {/* Adventurer Card */}
            <div>
              <div 
                className="relative min-h-[300px] [perspective:1000px] cursor-pointer group"
                onClick={() => setIsMountainCardFlipped(!isMountainCardFlipped)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsMountainCardFlipped(!isMountainCardFlipped)}
                aria-label="Adventurer card, click to flip"
              >
                <div className={`relative w-full h-full min-h-[300px] transition-transform duration-700 [transform-style:preserve-3d] ${isMountainCardFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg shadow-lg group-hover:shadow-sky-500/10 transition-shadow duration-300 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
                      <img src={mountainUrl} alt="Scenic mountain landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                        <MountainIcon className="w-10 h-10 text-sky-400 mb-2" />
                        <h4 className="text-2xl font-bold text-white">Adventurer</h4>
                      </div>
                    </div>
                    <div
                      className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg shadow-lg bg-zinc-100 dark:bg-zinc-800 p-6 flex flex-col justify-center items-center text-center"
                    >
                      <div className="absolute inset-0 dark:hidden" style={cardBackStyleLight}></div>
                      <div className="absolute inset-0 hidden dark:block" style={cardBackStyleDark}></div>
                      <p className="text-zinc-700 dark:text-zinc-300 relative">Whether it's hiking a challenging trail or finding a quiet spot to reflect, the mountains are my source of inspiration and rejuvenation.</p>
                    </div>
                </div>
              </div>
              <p className="text-center text-xs text-zinc-500 mt-2 italic">Click card to flip</p>
            </div>

            {/* Trailblazer Card */}
            <div>
               <div 
                className="relative min-h-[300px] [perspective:1000px] cursor-pointer group"
                onClick={() => setIsRunnerCardFlipped(!isRunnerCardFlipped)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsRunnerCardFlipped(!isRunnerCardFlipped)}
                aria-label="Trailblazer card, click to flip"
              >
                <div className={`relative w-full h-full min-h-[300px] transition-transform duration-700 [transform-style:preserve-3d] ${isRunnerCardFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg shadow-lg group-hover:shadow-sky-500/10 transition-shadow duration-300 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
                      <img src={runnerUrl} alt="Person running on a scenic trail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                        <RunnerIcon className="w-10 h-10 text-sky-400 mb-2" />
                        <h4 className="text-2xl font-bold text-white">Trailblazer</h4>
                      </div>
                    </div>
                    <div
                      className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg shadow-lg bg-zinc-100 dark:bg-zinc-800 p-6 flex flex-col justify-center items-center text-center"
                    >
                      <div className="absolute inset-0 dark:hidden" style={cardBackStyleLight}></div>
                      <div className="absolute inset-0 hidden dark:block" style={cardBackStyleDark}></div>
                      <p className="text-zinc-700 dark:text-zinc-300 relative">Running teaches me discipline, a practice that sharpens my focus and determination.</p>
                    </div>
                </div>
              </div>
              <p className="text-center text-xs text-zinc-500 mt-2 italic">Click card to flip</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;