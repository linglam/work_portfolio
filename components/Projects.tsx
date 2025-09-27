import React from 'react';
import type { Experience } from '../types';
import ExperienceItem from './ProjectCard';

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Director of Technology (EdTech/IT)',
    company: 'Helios School',
    period: 'June 2021 - Present',
    location: 'Sunnyvale, California',
    description: [
      'Oversee school-wide technology infrastructure, including network security, cloud services, AI initiatives, and compliance with data privacy policies.',
      'Develop and implement a multi-year tech roadmap, optimizing software/hardware lifecycle and negotiating contracts to maximize ROI.',
      'Provide professional development and ensuring smooth integration of EdTech solutions.',
      'Spearheaded AI-driven initiatives to enhance digital learning and streamline administrative workflows.',
      'Train faculty, staff, and parents on best practices for digital citizenship, cybersecurity, and adaptive learning platforms.',
    ],
    skills: [
        'AI Initiative/Implementation',
        'IT Management',
        'Strategic & Budget Planning',
        'Professional Development',
        'Digital Citizenship',
        'SaaS Account Management',
    ],
  },
  {
    id: 2,
    title: 'Program Director',
    company: 'NAYTEA',
    period: 'Aug 2019 - 2023',
    location: 'Shengzhen & Shanghai, China',
    description: [
      'Oversaw international programs and projects, analyzing data to identify and target audiences.',
      'Advised global innovators and educators to better market the learning experience with education technology.',
      'Engaged international education leaders to localize technology resources and pedagogy.',
      'Served as keynote and panel speaker on technology, education, and innovation.',
    ],
    skills: [
        'International Relations',
        'Public Speaking',
        'K12 EdTech Consulting, Sales and Partnership',
        'Assessment/Data Analysis',
    ],
  },
  {
    id: 3,
    title: 'District Professional Development & Instructional Coach',
    company: 'Bunker Hill District CUSE #8',
    period: 'Sept 2020 - 2022',
    location: 'Bunker Hill, Illinois',
    description: [
      'Facilitated and led K-12 professional development for remote/hybrid learning.',
      'Advised administrators and strategized tech tools integration.',
      'Provided best practices for remote and distance learning for the district.',
      'Integrated SEL learning in all subjects through new strategies.',
    ],
    skills: [
        'Professional Development',
        'Instructional Mentorship & Coaching',
        'Distance/Hybrid Learning',
        'SEL (Social-Emotional Learning)',
    ],
  },
   {
    id: 4,
    title: 'EdTech & Innovation Specialist, Robotics Head Coach, and Instructional Coach',
    company: 'Monticello Academy',
    period: 'June 2017 - June 2021',
    location: 'Santa Clara, California',
    description: [
        'Designed, facilitated, and led professional development training for faculty members and parents.',
        'Analyzed student and faculty data to improve overall tech integration and implementation.',
        'Designed and taught STEAM, Computer Technology, Robotics, Research, Engineering, and Design Thinking classes.',
        'Managed and directed robotics programs, hosting tournaments with over 300 attendees.',
    ],
    skills: [
        'Professional Development',
        'STEM/STEAM Education',
        'Design Thinking',
        'Assessment/Data Analysis',
        'Instructional Mentorship & Coaching',
        'MakerEd',
    ],
  },
];

interface ExperienceProps {
    selectedSkill: string | null;
}

const Experience: React.FC<ExperienceProps> = ({ selectedSkill }) => {
  return (
    <section className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-4 text-zinc-100">Experience & Achievement</h2>
      <p className="text-sky-400 text-center font-medium mb-12">My professional journey</p>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-zinc-800 hidden md:block"></div>
        {experiences.map((experience, index) => (
          <ExperienceItem key={experience.id} experience={experience} isRight={index % 2 !== 0} selectedSkill={selectedSkill} />
        ))}
      </div>
    </section>
  );
};

export default Experience;