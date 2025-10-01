import React from 'react';
import MailIcon from './icons/MailIcon';

const Contact: React.FC = () => {
  return (
    <section className="py-20 md:py-32 text-center">
      <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-zinc-600 dark:text-zinc-400 mb-8">
        I'm always interested in discussing new opportunities in EdTech and educational leadership. Please feel free to reach out and connect!
      </p>
      <a
        href="mailto:manling.lam@gmail.com"
        aria-label="Send me an email"
        className="inline-flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 p-5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:ring-4 hover:ring-sky-500/30 transition-all duration-300 shadow-lg"
      >
        <MailIcon className="w-8 h-8 text-sky-500 dark:text-sky-400"/>
      </a>
    </section>
  );
};

export default Contact;