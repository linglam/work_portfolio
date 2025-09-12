import React, { useState, useRef } from 'react';
import PlayIcon from './icons/PlayIcon';

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
    <section id="about" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">About Me</h2>
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
                className="absolute inset-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center cursor-pointer transition-opacity duration-300 group-hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-lg"
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
          <p className="text-lg text-slate-400 leading-relaxed">
            As an EdTech and IT Leader with over 15 years of experience, I specialize in driving innovation in K-12 learning, EdTech, and program leadership across global and U.S. schools. My expertise includes AI integration, SaaS management, curriculum design, and professional development.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am an award-winning keynote speaker recognized for bridging pedagogy and technology to boost engagement, streamline operations, and deliver measurable results. I am passionate about integrating technology to enhance learning, optimize efficiency, and achieve impactful outcomes for students and educators alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;