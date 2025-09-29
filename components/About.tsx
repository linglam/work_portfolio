import React, { useState, useRef } from 'react';
import PlayIcon from './icons/PlayIcon';
import TravelIcon from './icons/TravelIcon';
import MountainIcon from './icons/MountainIcon';
import RunnerIcon from './icons/RunnerIcon';

const About: React.FC = () => {
  const [hasVideoStarted, setHasVideoStarted] = useState(false);
  const [isExplorerCardFlipped, setIsExplorerCardFlipped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setHasVideoStarted(true);
      } catch (error) {
        console.error("Video play failed:", error);
        setHasVideoStarted(false); // Revert to show play button again
      }
    }
  };
  
  // A fast-paced clip showing evolving network connections, symbolizing technological advancement.
  const videoUrl = 'https://videos.pexels.com/video-files/852441/852441-hd_1920_1080_25fps.mp4';
  const posterUrl = "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const explorerMapUrl = "https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const personalInterestMapUrl = "https://images.pexels.com/photos/1101990/pexels-photo-1101990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


  return (
    <section className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-4 text-zinc-100">About Me</h2>
      <p className="text-sky-400 text-center font-medium mb-12">My Journey</p>
      
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="relative rounded-lg shadow-xl w-full aspect-square overflow-hidden group">
            <video
              ref={videoRef}
              poster={posterUrl}
              className="w-full h-full object-cover"
              controls={hasVideoStarted}
              playsInline
              preload="metadata"
              muted
              loop
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!hasVideoStarted && (
              <button 
                className="absolute inset-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center cursor-pointer transition-opacity duration-300 group-hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-lg"
                onClick={handlePlay}
                aria-label="Play technology innovation video"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                   <PlayIcon className="w-12 h-12 text-white" />
                </div>
              </button>
            )}
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <p className="text-lg text-zinc-400 leading-relaxed">
            As an EdTech and IT Leader with over 15 years of experience, I specialize in driving innovation in K-12 learning, EdTech, and program leadership across global and U.S. schools. My expertise includes AI integration, SaaS management, curriculum design, and professional development.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed">
            I am an award-winning keynote speaker recognized for bridging pedagogy and technology to boost engagement, streamline operations, and deliver measurable results. I am passionate about integrating technology to enhance learning, optimize efficiency, and achieve impactful outcomes for students and educators alike.
          </p>
        </div>
      </div>
      
      <div className="mt-20 md:mt-32">
        <h3 className="text-3xl font-bold text-center mb-4 text-zinc-100">Personal Interests</h3>
        <p className="text-sky-400 text-center font-medium mb-12">Beyond the Professional Sphere</p>
        <div className="max-w-5xl mx-auto space-y-8">
            <div 
              className="relative min-h-[300px] [perspective:1000px] cursor-pointer group"
              onClick={() => setIsExplorerCardFlipped(!isExplorerCardFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsExplorerCardFlipped(!isExplorerCardFlipped)}
              aria-label="Global Explorer card, click to flip"
            >
              <div className={`relative w-full h-full min-h-[300px] transition-transform duration-700 [transform-style:preserve-3d] ${isExplorerCardFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                  {/* Front Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center group-hover:shadow-sky-500/10 transition-shadow duration-300 overflow-hidden bg-zinc-900">
                      <img src={personalInterestMapUrl} alt="Modern airport terminal silhouette" className="absolute inset-0 w-full h-full object-cover opacity-10" />
                      <div className="relative z-10 flex flex-col items-center">
                          <div className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-full mb-4 inline-block">
                            <TravelIcon className="w-8 h-8 text-sky-400" />
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-2">Global Explorer</h4>
                          <p className="text-zinc-300 max-w-lg mx-auto">
                            Traveling has broadened my perspective, allowing me to connect with diverse cultures and gather inspiration from around the world.
                          </p>
                          <p className="text-xs text-zinc-500 mt-4 italic opacity-0 group-hover:opacity-100 transition-opacity">(Click to flip)</p>
                      </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-zinc-900 rounded-lg shadow-lg text-center flex flex-col items-center justify-center overflow-hidden">
                      <img src={explorerMapUrl} alt="Futuristic world map with network connections" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
                          <p className="text-lg text-zinc-200 italic leading-relaxed">
                              "As a well-immersed cultural EdTech leader, I draw from diverse global insights to create inclusive and innovative learning solutions."
                          </p>
                      </div>
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-8 rounded-lg shadow-lg text-center flex flex-col items-center hover:shadow-sky-500/10 transition-shadow duration-300">
                <div className="bg-zinc-800 p-4 rounded-full mb-4">
                  <MountainIcon className="w-8 h-8 text-sky-400" />
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">Mountaineer</h4>
                <p className="text-zinc-400">
                  The discipline and resilience required for mountaineering mirror my approach to tackling complex professional challenges.
                </p>
              </div>
              <div className="bg-zinc-900 p-8 rounded-lg shadow-lg text-center flex flex-col items-center hover:shadow-sky-500/10 transition-shadow duration-300">
                <div className="bg-zinc-800 p-4 rounded-full mb-4">
                  <RunnerIcon className="w-8 h-8 text-sky-400" />
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">Avid Runner</h4>
                <p className="text-zinc-400">
                  Running marathons has taught me the value of perseverance, goal-setting, and pushing beyond perceived limits.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
