'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function MainPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Home language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Blog language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}