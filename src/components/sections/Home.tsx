'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, BookOpen, FileText, Globe } from 'lucide-react';

interface HomeProps {
  language: 'ko' | 'en';
}

const Home = ({ language }: HomeProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const content = {
    ko: {
      greeting: "Walk to Work!",
      name: "Hwangon Jang",
      description: (
        <>
          안녕하세요! 소셜 임팩트를 실현하는 개발자 장환곤입니다.<br />
          빅데이터와 클라우드 기술을 통해 세상을 더 나은 방향으로 만들어가고 싶습니다.
        </>
      ),
      roles: ["Backend Developer", "Cloud Engineer", "Data Engineer", "DevOps Engineer"]
    },
    en: {
      greeting: "Walk to Work!",
      name: "Hwangon Jang",
      description: (
        <>
          Hello! I&apos;m Hwangon Jang, a developer who realizes social impact.<br />
          I want to make the world work in a better direction through<br />big data processing and cloud technologies.
        </>
      ),
      roles: ["Backend Developer", "Cloud Engineer", "Data Engineer", "DevOps Engineer"]
    }
  };

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % content[language].roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [content, language]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-6 h-6 bg-purple-400 rounded-full opacity-40"
        />
      </div>

      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-center">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8 lg:col-span-3"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl lg:text-6xl text-blue-600 font-semibold mb-4"
              >
                {content[language].greeting}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900"
              >
                {content[language].name}
              </motion.h1>
              
              {/* Animated Role Display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-12 flex items-center"
              >
                <span className="text-2xl font-medium text-gray-700 mr-2">I'm a </span>
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {content[language].roles[currentRoleIndex]}
                </motion.span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {content[language].description}
              </motion.p>
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex gap-4 justify-center lg:justify-start flex-wrap"
              >
                <motion.a
                  href="https://www.linkedin.com/in/%ED%99%98%EA%B3%A4-%EC%9E%A5-47ab68291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-blue-700" />
                </motion.a>
                <motion.a
                  href="https://github.com/HwanGonJang"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Github className="h-6 w-6 text-gray-700" />
                </motion.a>
                <motion.a
                  href="https://www.notion.so/hwangonjang/c36e2f5c42834fd6bb836dcdd66718e1?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Globe className="h-6 w-6 text-gray-700" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/hwangonjang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-pink-700" />
                </motion.a>
                <motion.a
                  href="https://medium.com/@myggona"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                >
                  <BookOpen className="h-6 w-6 text-green-700" />
                </motion.a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg"
                >
                  {language === 'ko' ? 'Contact Me' : 'Contact Me'}
                </motion.button>
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-lg"
                >
                  {language === 'ko' ? 'View Projects' : 'View Projects'}
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end lg:col-span-1"
            >
              <div className="relative">
                {/* Animated Background Rings */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] rounded-full border-2 border-dashed border-blue-300 opacity-30"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] rounded-full border border-purple-300 opacity-20"
                />
                
                {/* Profile Image Container - Much Larger */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  style={{
                    rotateX: mousePosition.y * 5,
                    rotateY: mousePosition.x * 5,
                  }}
                  className="relative w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl bg-transparent"
                >
                  {/* Enhanced for PNG with transparency */}
                  <Image
                    src="/profile.jpeg"
                    alt="Hwangon Jang Profile"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                    priority
                  />
                  
                  {/* Floating Skill Tags */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-5 -left-10 px-3 py-1 bg-blue-500 text-white text-sm rounded-full shadow-lg"
                  >
                    Kubernetes
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -top-8 -right-8 px-3 py-1 bg-green-500 text-white text-sm rounded-full shadow-lg"
                  >
                    Spring Boot
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [-8, 8, -8],
                      rotate: [0, 3, 0, -3, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute -bottom-5 -left-8 px-3 py-1 bg-purple-500 text-white text-sm rounded-full shadow-lg"
                  >
                    AWS
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [8, -8, 8],
                      rotate: [0, -3, 0, 3, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -bottom-8 -right-10 px-3 py-1 bg-orange-500 text-white text-sm rounded-full shadow-lg"
                  >
                    Terraform
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;