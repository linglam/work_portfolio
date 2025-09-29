import React, { useState } from 'react';
import PlayIcon from './icons/PlayIcon';
import TravelIcon from './icons/TravelIcon';
import MountainIcon from './icons/MountainIcon';
import RunnerIcon from './icons/RunnerIcon';

const About: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isExplorerCardFlipped, setIsExplorerCardFlipped] = useState(false);

  // --- ACTION REQUIRED ---
  // 1. Upload your video to YouTube and set its visibility to "Unlisted".
  // 2. Get the Video ID from the YouTube URL (e.g., for "https://www.youtube.com/watch?v=dQw4w9WgXcQ", the ID is "dQw4w9WgXcQ").
  // 3. Paste your Video ID below to replace the placeholder.
  // IMPORTANT: In your video's settings on YouTube, you MUST check the "Allow embedding" option! This is required to fix "Error 153".
  const youtubeVideoId = 'ItS0T7ku484';

  const posterUrl = "https://images.pexels.com/videos/3214466/pictures/pexels-photo-3214466.jpeg";
  const explorerMapUrl = "https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
  // YouTube embed URL using the privacy-enhanced "no-cookie" domain. This can help prevent embedding issues.
  // `mute=1` is required by most browsers for autoplay to work.
  const videoEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&rel=0&controls=1&modestbranding=1`;

  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-4 text-zinc-100">About Me</h2>
      <p className="text-sky-400 text-center font-medium mb-12">My Journey</p>
      
      <div className="grid md:grid-cols-4 gap-12 items-center">
        <div className="md:col-span-1">
          <div className="relative rounded-lg shadow-xl w-full aspect-square overflow-hidden group bg-zinc-800">
            {isVideoPlaying ? (
              <iframe
                className="w-full h-full"
                src={videoEmbedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src={posterUrl}
                  alt="Professional journey video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button 
                  className="absolute inset-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center cursor-pointer transition-opacity duration-300 group-hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-lg"
                  onClick={handlePlay}
                  aria-label="Play professional journey video"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                     <PlayIcon className="w-12 h-12 text-white" />
                  </div>
                </button>
              </>
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flippable Card */}
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
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg shadow-lg group-hover:shadow-sky-500/10 transition-shadow duration-300 bg-zinc-900 overflow-hidden">
                    <img src={explorerMapUrl} alt="World map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                      <TravelIcon className="w-10 h-10 text-sky-400 mb-2" />
                      <h4 className="text-2xl font-bold text-white">Global Explorer</h4>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg shadow-lg bg-zinc-800 p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-zinc-300">Passionate about immersing myself in different cultures, I've lived and worked in both Asia and the U.S., gaining a broad perspective on global education and technology trends.</p>
                  </div>
              </div>
            </div>

            {/* Static Cards */}
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:shadow-sky-500/10 transition-shadow duration-300 flex flex-col items-center text-center">
                <MountainIcon className="w-12 h-12 text-sky-400 mb-4"/>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">Mountain Adventurer</h4>
                <p className="text-zinc-400">Whether it's hiking a challenging trail or finding a quiet spot to reflect, the mountains are my source of inspiration and rejuvenation.</p>
            </div>
             <div className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:shadow-sky-500/10 transition-shadow duration-300 flex flex-col items-center text-center">
                <RunnerIcon className="w-12 h-12 text-sky-400 mb-4"/>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">Avid Runner</h4>
                <p className="text-zinc-400">I believe in the discipline and clarity that comes from running, a practice that sharpens my focus for professional challenges.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;