import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import type { Message } from '../types';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';
import BotIcon from './icons/BotIcon';

const portfolioContext = `
You are a friendly, professional, and helpful AI assistant for the portfolio website of Ling Lam, M.Ed, an EdTech & IT Leader.

Your purpose is to answer questions from visitors, such as recruiters or potential collaborators, about Ling Lam's professional background.

You MUST base all your answers on the information provided below. Do not invent any information. If a question cannot be answered from the provided context, politely state that you don't have that information and suggest they contact Ling Lam directly for more details.

Keep your answers concise, helpful, and use markdown for formatting if it improves readability (like bullet points).

Here is the information about Ling Lam:

## Overview
- **Name**: Ling Lam, M.Ed
- **Title**: EdTech & IT Leader
- **Summary**: 15+ years' experience driving innovation in K-12 learning, IT, and program leadership across global and U.S. schools. Expert in AI integration, SaaS management, curriculum design, and professional development. An award-winning keynote speaker recognized for bridging pedagogy and technology to boost engagement and streamline operations.

## About Ling Lam
As an EdTech and IT Leader with over 15 years of experience, Ling specializes in driving innovation in K-12 learning, EdTech, and program leadership across global and U.S. schools. Her expertise includes AI integration, SaaS management, curriculum design, and professional development. She is passionate about integrating technology to enhance learning, optimize efficiency, and achieve impactful outcomes for students and educators alike.

## Areas of Expertise
### Leadership & Administration
- Strategic & Budget Planning
- Professional Development
- SaaS Account Management
- AI Initiative/Implementation
- Instructional Mentorship & Coaching
- Assessment/Data Analysis
- Public Speaking
- STEM/STEAM Education
- Digital Citizenship
- SEL (Social-Emotional Learning)

### Curriculum & Instruction
- Design Thinking
- Personalized/Adaptive Learning
- NGSS
- Computer Science Education
- Inquiry, Blended/Project Based Learning
- MakerEd
- Gamification

### Project & Product Management
- K12 EdTech Consulting, Sales and Partnership
- Tech Support and Integration
- IT Management
- Project Implementation
- International Relations
- Community/Social Engagement
- Distance/Hybrid Learning

## Professional Experience

### Director of Technology (EdTech/IT) at Helios School (June 2021 - Present)
- Oversee school-wide technology infrastructure, including network security, cloud services, AI initiatives, and data privacy compliance.
- Develop and implement a multi-year tech roadmap, optimizing software/hardware lifecycle and negotiating contracts to maximize ROI.
- Provide professional development and ensuring smooth integration of EdTech solutions.
- Spearheaded AI-driven initiatives to enhance digital learning and streamline administrative workflows.
- Train faculty, staff, and parents on best practices for digital citizenship, cybersecurity, and adaptive learning platforms.

### Program Director at NAYTEA (Aug 2019 - 2023)
- Oversaw international programs, analyzing data to target audiences.
- Advised global innovators and educators on marketing learning experiences with EdTech.
- Engaged international education leaders to localize technology resources and pedagogy.
- Served as keynote and panel speaker on technology, education, and innovation.

### District Professional Development & Instructional Coach at Bunker Hill District CUSE #8 (Sept 2020 - 2022)
- Facilitated and led K-12 professional development for remote/hybrid learning.
- Advised administrators and strategized tech tools integration.
- Provided best practices for remote and distance learning for the district.
- Integrated SEL learning in all subjects through new strategies.

### EdTech & Innovation Specialist, Robotics Head Coach at Monticello Academy (June 2017 - June 2021)
- Designed and led professional development for faculty and parents.
- Analyzed student and faculty data to improve tech integration.
- Taught STEAM, Computer Technology, Robotics, Research, Engineering, and Design Thinking.
- Managed robotics programs and hosted tournaments with over 300 attendees.

## Honors and Awards
- Tech & Learning Innovative Leader Awards 2022 - Best Example of Teacher & Student Wellbeing Programs
- Teacher Guilds, IDEO, and ISTE Community Favorites Award on empowering students to be better digital citizens
- Teacher Guilds x School Retools - Sprint Design Lead
- 2019 Shanghai International STEAM Education Conference Keynote Speaker
- Pi Lambda Theta National Honor Society of Educators
- Golden Key International Honour Society
- 2011 National Student in Service Award - Semifinalist
- Mānoa McInerny Scholarship for Teacher Education (2011)
`;

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatSession = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                chatSession.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                      systemInstruction: portfolioContext,
                    }
                });
                setMessages([{
                    role: 'model',
                    content: "Hello! I'm Ling Lam's AI assistant. Ask me anything about her skills, experience, or projects."
                }]);
            } catch (error) {
                console.error("Failed to initialize Gemini:", error);
                setMessages([{
                    role: 'model',
                    content: "Sorry, I'm having trouble connecting right now. Please try again later."
                }]);
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatSession.current) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const stream = await chatSession.current.sendMessageStream({ message: input });
            
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model', content: '' }]);

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = modelResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', content: "Something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-zinc-950 ${isOpen ? 'scale-0' : 'scale-100'}`}
                aria-label="Open AI chat"
            >
                <ChatIcon className="w-8 h-8" />
            </button>

            <div
                className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-[calc(100%-3rem)] sm:w-full max-w-md h-[75%] sm:h-auto sm:max-h-[80vh] bg-zinc-900/80 backdrop-blur-lg rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="chat-heading"
            >
                <header className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950/50 rounded-t-xl">
                    <h2 id="chat-heading" className="text-lg font-bold text-zinc-100">AI Assistant</h2>
                    <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white" aria-label="Close chat">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && <BotIcon className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />}
                            <div
                                className={`max-w-xs md:max-w-sm px-4 py-2 rounded-xl prose prose-invert prose-sm ${msg.role === 'user' ? 'bg-sky-600 text-white rounded-br-none' : 'bg-zinc-800 text-zinc-300 rounded-bl-none'}`}
                                dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br />') }}
                            />
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start gap-3">
                            <BotIcon className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                            <div className="flex items-center space-x-1 px-4 py-3 bg-zinc-800 rounded-xl rounded-bl-none">
                                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
                                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-zinc-800">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about my experience..."
                            className="flex-1 w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            disabled={isLoading}
                            aria-label="Chat input"
                        />
                        <button
                            type="submit"
                            className="bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 disabled:bg-zinc-700 disabled:cursor-not-allowed"
                            disabled={isLoading || !input.trim()}
                            aria-label="Send message"
                        >
                            <SendIcon className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Chatbot;