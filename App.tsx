import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import Chatbot from './components/Chatbot';
import Achievement from './components/Recognition';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('home');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <Hero setActiveView={setActiveView} />;
      case 'about':
        return <About />;
      case 'experience':
        return (
          <>
            <Expertise selectedSkill={selectedSkill} onSkillSelect={setSelectedSkill} />
            <Experience selectedSkill={selectedSkill} />
          </>
        );
      case 'achievement':
        return <Achievement />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 font-sans">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="container mx-auto px-6 md:px-12">
        <div key={activeView} className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;