import React from 'react';
import QuoteIcon from './icons/QuoteIcon';

const testimonials = [
  {
    summary: "Ling is a stellar teaching and collaborative spirit in school improvement and technology. He praises her innovative mindset, expertise in STEM, and her role as a co-presenter at professional development conferences, recommending her wholeheartedly for her honest, transparent, and ethical character.",
    author: 'Todd Dugan',
    title: 'Superintendent, Bunker Hill Community Unit District #8',
  },
  {
    summary: "Ling's exceptional ability to build rapport with students and parents. As an instructional coach, she was most impressed by Ling's growth mindset, collaborative spirit, and her skill in developing engaging, project-based curriculum in Computer Science and Design Thinking.",
    author: 'Kelly Kosuga',
    title: 'Instructional Coach, Alpha: Cindy Avitia High School',
  },
  {
    summary: "Ling is a collaborative and deeply invested teacher. She highlights Ling's initiative in going 'above and beyond,' from launching an after-school club for a Google competition to co-creating the school's first maker's space, praising her as a valuable asset to any organization.",
    author: 'Ashlee Gutierrez',
    title: 'Founding School Leader, Caliber: Beta Academy',
  },
  {
    summary: "Marcus Pottenger praises Ling's professionalism and creativity as a 2nd-grade teacher. He highlights her dedication to students' social-emotional needs by implementing 'philosophy for children' (p4c) strategies and designing her own curriculum, describing her as an energetic and valuable team player.",
    author: 'Marcus Pottenger',
    title: 'Technology Coordinator, Hokulani Elementary School',
  },
  {
    summary: "Having worked with Ling for over six years, Cynthia White describes her as a highly motivated and reliable asset. She commends Ling's exemplary work with at-risk youth, highlighting her skill in facilitating peer groups, developing programs, and building strong rapport to guide young people toward positive choices.",
    author: 'Cynthia White, M.Ed.',
    title: 'Executive Director, Kids Hurt Too Hawaii',
  },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <h2 className="text-4xl font-bold text-center mb-4 text-zinc-100">Testimonials</h2>
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
        </section>
    );
};

export default Testimonials;
