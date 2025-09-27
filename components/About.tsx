import React, { useState, useRef } from 'react';
import PlayIcon from './icons/PlayIcon';
import TravelIcon from './icons/TravelIcon';
import MountainIcon from './icons/MountainIcon';
import RunnerIcon from './icons/RunnerIcon';

const About: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        setIsPlaying(false);
      });
    }
  };
  
  // A placeholder video illustrating a journey from classroom teaching to EdTech leadership.
  const videoUrl = 'https://videos.pexels.com/video-files/857248/857248-hd_1280_720_30fps.mp4';
  const posterUrl = "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600";

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
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              playsInline
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button 
                className="absolute inset-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center cursor-pointer transition-opacity duration-300 group-hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-lg"
                onClick={handlePlay}
                aria-label="Play professional journey video"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-lg text-center flex flex-col items-center hover:shadow-sky-500/10 transition-shadow duration-300">
            <div className="bg-zinc-800 p-4 rounded-full mb-4">
              <TravelIcon className="w-8 h-8 text-sky-400" />
            </div>
            <h4 className="text-xl font-bold text-zinc-100 mb-2">Global Explorer</h4>
            <p className="text-zinc-400">
              Traveling has broadened my perspective, allowing me to connect with diverse cultures and gather inspiration from around the world.
            </p>
          </div>
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
    </section>
  );
};

export default About;