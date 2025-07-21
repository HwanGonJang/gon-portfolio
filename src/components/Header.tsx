'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Globe, BookOpen, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  language: 'ko' | 'en';
  setLanguage: (lang: 'ko' | 'en') => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = {
    ko: ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'],
    en: ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact']
  };

  const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-2xl font-bold text-gray-900 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
          >
            HwangonJang
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems[language].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(sections[index])}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === sections[index]
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/in/hwangon-jang/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://github.com/ggona" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </a>
              <a href="https://www.notion.so/ggona/Hwangon-Jang-34b41d84b91b4e088d3aeb5b0f94fc13" target="_blank" rel="noopener noreferrer">
                <Globe className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </a>
              <a href="https://www.instagram.com/gon_i_am/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-600 transition-colors" />
              </a>
              <a href="https://medium.com/@myggona" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5 text-gray-600 hover:text-green-600 transition-colors" />
              </a>
            </div>

            <div className="ml-4 flex items-center space-x-2">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'ko' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="space-y-2">
              {menuItems[language].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(sections[index])}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === sections[index]
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-center space-x-4 mb-4">
                <a href="https://www.linkedin.com/in/hwangon-jang/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://github.com/ggona" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
                </a>
                <a href="https://www.notion.so/ggona/Hwangon-Jang-34b41d84b91b4e088d3aeb5b0f94fc13" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
                </a>
                <a href="https://www.instagram.com/gon_i_am/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-gray-600 hover:text-pink-600 transition-colors" />
                </a>
                <a href="https://medium.com/@myggona" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-6 w-6 text-gray-600 hover:text-green-600 transition-colors" />
                </a>
              </div>
              
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => setLanguage('ko')}
                  className={`px-3 py-1 text-sm rounded ${
                    language === 'ko' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm rounded ${
                    language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;