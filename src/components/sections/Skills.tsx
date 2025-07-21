'use client';

import { motion } from 'framer-motion';
import { 
  SiKotlin, 
  SiPython, 
  SiJavascript,
  SiSpringboot, 
  SiFastapi, 
  SiPostgresql, 
  SiAmazon, 
  SiTerraform, 
  SiDocker, 
  SiKubernetes, 
  SiGooglecloud,
  SiElasticsearch,
  SiApachekafka,
  SiApachespark,
  SiGrafana,
  SiPrometheus,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiApachecassandra
} from 'react-icons/si';
import { Star } from 'lucide-react';
import JavaIcon from '../JavaIcon';

interface SkillsProps {
  language: 'ko' | 'en';
}

const Skills = ({ language }: SkillsProps) => {
  const content = {
    ko: {
      title: "Skills",
      categories: {
        language: "Languages",
        backend: "Backend",
        infrastructure: "Infrastructure", 
        data: "Data",
        ai: "AI",
        frontend: "Frontend"
      }
    },
    en: {
      title: "Skills",
      categories: {
        language: "Languages",
        backend: "Backend",
        infrastructure: "Infrastructure", 
        data: "Data",
        ai: "AI",
        frontend: "Frontend"
      }
    }
  };

  const skillCategories = [
    {
      category: 'language',
      skills: [
        { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF', isStrong: true },
        { name: 'Python', icon: SiPython, color: '#3776AB', isStrong: true },
        { name: 'Java', icon: JavaIcon, color: '#ED8B00', isStrong: true },
        { name: 'C', icon: SiC, color: '#A8B9CC', isStrong: false },
        { name: 'C++', icon: SiCplusplus, color: '#00599C', isStrong: false },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', isStrong: false }
      ]
    },
    {
      category: 'backend',
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', isStrong: true },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688', isStrong: false },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', isStrong: false }
      ]
    },
    {
      category: 'infrastructure',
      skills: [
        { name: 'AWS', icon: SiAmazon, color: '#FF9900', isStrong: true },
        { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', isStrong: true },
        { name: 'Docker', icon: SiDocker, color: '#2496ED', isStrong: true },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', isStrong: true },
        { name: 'GCP', icon: SiGooglecloud, color: '#4285F4', isStrong: false }
      ]
    },
    {
      category: 'data',
      skills: [
        { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571', isStrong: false },
        { name: 'Cassandra', icon: SiApachecassandra, color: '#1287B1', isStrong: false },
        { name: 'Kafka', icon: SiApachekafka, color: '#231F20', isStrong: false },
        { name: 'Spark', icon: SiApachespark, color: '#E25A1C', isStrong: false },
        { name: 'Grafana', icon: SiGrafana, color: '#F46800', isStrong: false },
        { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', isStrong: false }
      ]
    },
    {
      category: 'ai',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', isStrong: false },
        { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', isStrong: false }
      ]
    },
    {
      category: 'frontend',
      skills: [
        { name: 'HTML', icon: SiHtml5, color: '#E34F26', isStrong: false },
        { name: 'CSS', icon: SiCss3, color: '#1572B6', isStrong: false },
        { name: 'React', icon: SiReact, color: '#61DAFB', isStrong: false },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', isStrong: false },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', isStrong: false }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{content[language].title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {content[language].categories[category.category as keyof typeof content[typeof language]['categories']]}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                    className={`relative flex flex-col items-center p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      skill.isStrong 
                        ? 'border-yellow-400 bg-yellow-50 shadow-md' 
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {skill.isStrong && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -top-2 -right-2"
                      >
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    )}
                    
                    <skill.icon 
                      className="h-12 w-12 mb-3"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-yellow-600">
            <Star className="h-5 w-5 fill-yellow-500" />
            <span className="text-sm font-medium">
              {language === 'ko' ? '강점 기술' : 'Strong Skills'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;