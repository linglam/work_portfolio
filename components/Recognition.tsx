import React from 'react';
import QuoteIcon from './icons/QuoteIcon';

const testimonials = [
  {
    summary: "Ling is a stellar teaching and collaborative spirit in school improvement and technology. She has an innovative mindset, expertise in STEM, and her role as a co-presenter at professional development conferences, recommending her wholeheartedly for her honest, transparent, and ethical character.",
    author: 'Todd Dugan',
    title: 'Superintendent, Bunker Hill Community Unit District #8',
  },
  {
    summary: "Ling's exceptional ability to build rapport with students and parents. As an instructional coach, she was most impressed by Ling's growth mindset, collaborative spirit, and her skill in developing engaging, project-based curriculum in Computer Science and Design Thinking.",
    author: 'Kelly Kosuga',
    title: 'Instructional Coach, Alpha: Cindy Avitia High School',
  },
  {
    summary: "Ling is a collaborative and deeply invested teacher. Her initiative in going 'above and beyond,' from launching an after-school club for a Google competition to co-creating the school's first maker's space, praising her as a valuable asset to any organization.",
    author: 'Ashlee Gutierrez',
    title: 'Founding School Leader, Caliber: Beta Academy',
  },
  {
    summary: "Ling's professionalism and creativity as a 2nd-grade teacher. Her dedication to students' social-emotional needs by implementing 'philosophy for children' (p4c) strategies and designing her own curriculum, describing her as an energetic and valuable team player.",
    author: 'Marcus Pottenger',
    title: 'Technology Coordinator, Hokulani Elementary School',
  },
  {
    summary: "Having worked with Ling for over six years, She is a highly motivated and reliable asset. She commends Ling's exemplary work with at-risk youth, highlighting her skill in facilitating peer groups, developing programs, and building strong rapport to guide young people toward positive choices.",
    author: 'Cynthia White, M.Ed.',
    title: 'Executive Director, Kids Hurt Too Hawaii',
  },
];

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


const Recognition: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <h2 className="text-4xl font-bold text-center mb-4 text-zinc-100">Recognition & Praise</h2>
            <p className="text-sky-400 text-center font-medium mb-20">Testimonials and awards from colleagues and organizations.</p>
            
            <div className="mb-20 md:mb-24">
                <h3 className="text-3xl font-bold text-center mb-4 text-zinc-100">Testimonials</h3>
                <p className="text-sky-400 text-center font-medium mb-12">What others are saying</p>
                
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-zinc-900 p-8 rounded-lg shadow-lg flex flex-col justify-between relative overflow-hidden hover:shadow-sky-500/10 transition-shadow duration-300">
                            <QuoteIcon className="absolute top-4 right-4 w-16 h-16 text-zinc-800/50" />
                            <blockquote className="relative z-10">
                                <p className="text-zinc-300 leading-relaxed italic">"{testimonial.summary}"</p>
                            </blockquote>
                            <footer className="mt-6 relative z-10">
                                <p className="font-bold text-zinc-100">{testimonial.author}</p>
                                <p className="text-sky-400 text-sm">{testimonial.title}</p>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-3xl font-bold text-center mb-4 text-zinc-100">Honors and Awards</h3>
                <p className="text-sky-400 text-center font-medium mb-12">Recognition and achievements</p>
                
                <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-lg shadow-lg">
                    <ul className="space-y-4">
                        {awardsList.map((award, index) => (
                            <li key={index} className="flex items-start text-lg">
                                <svg className="w-6 h-6 mr-3 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4l-3 3-3-3m5 12v4m-2-2h4"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 110-18 9 9 0 010 18z"></path>
                                </svg>
                                <span className="text-zinc-300">{award}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Recognition;