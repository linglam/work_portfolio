
import React from 'react';

const awardsList = [
    'Tech & Learning Innovative Leader Awards 2022 - Best Example of Teacher & Student Wellbeing Programs',
    'Teacher Guilds, IDEO, and ISTE Community Favorites Award on empowering students to be better digital citizens',
    'Teacher Guilds x School Retools - Sprint Design Lead',
    '2019 Shanghai International STEAM Education Conference Keynote Speaker',
    'Pi Lambda Theta National Honor Society of Educators',
    'Golden Key International Honour Society',
    '2011 National Student in Service Award - Semifinalist',
    'Mānoa McInerny Scholarship for Teacher Education (2011)',
];

const Awards: React.FC = () => {
    return (
        <section id="awards" className="py-20 md:py-32">
            <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Honors and Awards</h2>
            <p className="text-sky-400 text-center font-medium mb-12">Recognition and achievements</p>
            
            <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
                <ul className="space-y-4">
                    {awardsList.map((award, index) => (
                        <li key={index} className="flex items-start text-lg">
                            <svg className="w-6 h-6 mr-3 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4l-3 3-3-3m5 12v4m-2-2h4"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 110-18 9 9 0 010 18z"></path>
                            </svg>
                            <span className="text-slate-300">{award}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Awards;
