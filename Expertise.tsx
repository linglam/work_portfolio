import React from 'react';

const expertiseAreas = [
    {
        title: 'Leadership & Administration',
        skills: [
            'Strategic & Budget Planning',
            'Professional Development',
            'SaaS Account Management',
            'AI Initiative/Implementation',
            'Instructional Mentorship & Coaching',
            'Assessment/Data Analysis',
            'Public Speaking',
            'STEM/STEAM Education',
            'Digital Citizenship',
            'SEL (Social-Emotional Learning)',
        ],
    },
    {
        title: 'Curriculum & Instruction',
        skills: [
            'Design Thinking',
            'Personalized/Adaptive Learning',
            'NGSS',
            'Computer Science Education',
            'Inquiry, Blended/Project Based Learning',
            'MakerEd',
            'Gamification',
        ],
    },
    {
        title: 'Project & Product Management',
        skills: [
            'K12 EdTech Consulting, Sales and Partnership',
            'Tech Support and Integration',
            'IT Management',
            'Project Implementation',
            'International Relations',
            'Community/Social Engagement',
            'Distance/Hybrid Learning',
        ],
    },
];

interface ExpertiseProps {
    selectedSkill: string | null;
    onSkillSelect: (skill: string | null) => void;
}

const Expertise: React.FC<ExpertiseProps> = ({ selectedSkill, onSkillSelect }) => {
    return (
        <section className="py-20 md:py-32">
            <h2 className="text-4xl font-bold text-center mb-4 text-zinc-100">Areas of Expertise</h2>
            <p className="text-sky-400 text-center font-medium">Core competencies and skills</p>
            <p className="text-zinc-500 text-center mt-2 mb-12">Click a skill to see it in action in my experience below.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertiseAreas.map((area) => (
                    <div key={area.title} className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col">
                        <h3 className="text-xl font-bold text-sky-400 mb-4">{area.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {area.skills.map((skill) => {
                                const isActive = selectedSkill === skill;
                                return (
                                <button 
                                    key={skill} 
                                    onClick={() => onSkillSelect(isActive ? null : skill)}
                                    className={`text-sm font-medium px-3 py-1 rounded-full shadow-sm transition-all duration-200 ${
                                        isActive 
                                        ? 'bg-sky-500 text-white ring-2 ring-offset-2 ring-offset-zinc-900 ring-sky-400' 
                                        : 'bg-zinc-800 text-sky-300 hover:bg-zinc-700'
                                    }`}
                                >
                                    {skill}
                                </button>
                            )})}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;