
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import Awards from './components/Awards';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Expertise selectedSkill={selectedSkill} onSkillSelect={setSelectedSkill} />
        <Experience selectedSkill={selectedSkill} />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;