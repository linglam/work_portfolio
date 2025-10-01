import React from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
  isRight?: boolean;
  selectedSkill: string | null;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isRight, selectedSkill }) => {
  const { title, company, period, location, description, skills } = experience;

  const isDimmed = selectedSkill && !skills?.includes(selectedSkill);

  const timelineDot = (
    <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${isDimmed ? 'bg-zinc-400 dark:bg-zinc-600 border-white dark:border-zinc-950' : 'bg-sky-500 border-white dark:border-zinc-950'}`}></div>
    </div>
  );
  
  const mobileTimelineBar = (
     <div className="absolute top-0 left-[5px] h-full w-0.5 bg-zinc-200 dark:bg-zinc-800"></div>
  );

  const mobileTimelineDot = (
    <div className="absolute top-1 -left-0.5 z-10">
        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${isDimmed ? 'bg-zinc-400 dark:bg-zinc-600 border-white dark:border-zinc-950' : 'bg-sky-500 border-white dark:border-zinc-950'}`}></div>
    </div>
  );

  const content = (
    <>
      <p className="text-sm font-semibold text-sky-500 dark:text-sky-400">{period}</p>
      <h3 className="text-xl font-bold mt-1 text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="text-md font-medium text-zinc-700 dark:text-zinc-300">
        {company} &middot; {location}
      </p>
      <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400 list-disc list-inside">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </>
  );

  const cardClasses = `bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 p-6 rounded-lg shadow-lg hover:shadow-sky-500/10 transition-all duration-300 ${isDimmed ? 'opacity-40 grayscale' : 'opacity-100'}`;

  // Mobile view (single column)
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
     return (
        <div className={`relative pl-8 pb-12 transition-opacity duration-300 ${isDimmed ? 'opacity-40' : 'opacity-100'}`}>
            {mobileTimelineDot}
            {mobileTimelineBar}
            <div className={`${cardClasses} ml-1`}>{content}</div>
        </div>
     );
  }

  // Desktop view (alternating timeline)
  return (
    <div className="relative md:mb-12">
      {timelineDot}
      <div className={`md:w-1/2 ${isRight ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
        <div className={cardClasses}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;