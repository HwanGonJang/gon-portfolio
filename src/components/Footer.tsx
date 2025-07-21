'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Globe, BookOpen, Heart } from 'lucide-react';

interface FooterProps {
  language: 'ko' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    ko: {
      copyright: "© 2025. Hwangon Jang. All rights reserved.",
      madeWith: "Made with"
    },
    en: {
      copyright: "© 2025. Hwangon Jang. All rights reserved.",
      madeWith: "Made with"
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/%ED%99%98%EA%B3%A4-%EC%9E%A5-47ab68291/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/HwanGonJang',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Notion',
      icon: Globe,
      url: 'https://www.notion.so/hwangonjang/c36e2f5c42834fd6bb836dcdd66718e1?pvs=4',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/hwangonjang/',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Medium',
      icon: BookOpen,
      url: 'https://medium.com/@myggona',
      color: 'hover:text-green-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              className="text-center md:text-left"
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-blue-400 transition-colors cursor-pointer"
            >
              HwangonJang
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
          >
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
          >
            <div className="flex items-center justify-center md:justify-end gap-1 text-sm text-gray-400">
              <span>{content[language].madeWith}</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>Next.js & TypeScript</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            {content[language].copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;