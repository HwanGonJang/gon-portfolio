'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import Image from 'next/image';

interface ProjectsProps {
  language: 'ko' | 'en';
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    ko: {
      title: "Projects",
      viewProject: "프로젝트 보기",
      viewCode: "코드 보기",
      projects: [
        {
          id: 1,
          title: "On-Premise Stock Streaming Data Pipeline",
          date: "2024.11 ~",
          description: "홈랩 서버로 대량의 실시간 주식 데이터 처리 파이프라인 및 대시보드 구현",
          features: [
            "비용 0원으로 빅데이터 파이프라인 구현",
            "NASDAQ 20개 종목 실시간 스트리밍",
            "sLM을 통한 주식 분석 및 추천",
            "주식 매수/매도 인사이트를 위한 다양한 정보 제공"
          ],
          techStack: ["Kubernetes", "Helm", "Kafka", "Spark", "Cassandra", "FastAPI", "LLM", "Kotlin", "Spring Boot", "PostgreSQL", "Next.js"],
          thumbnail: "/projects/gsd.png",
          projectUrl: "https://gsd.hwangonjang.com/",
          githubUrl: "https://github.com/HwanGonJang/stock-streaming-data-pipeline",
          detailUrl: "https://www.notion.so/hwangonjang/On-Premise-1b6e1528eee08074846bec71121acc9c?source=copy_link"
        },
        {
          id: 2,
          title: "Yourssu Infrastructure System",
          date: "2024.02 ~ 2025.05",
          description: "교내 서비스 제공을 위한 온프레미스 서버 구성 및 배포 백오피스 구현",
          features: [
            "Kubernetes 기능을 추상화하여 개발/비개발 팀원이 쉽고 빠르게 서버 배포",
            "Deployment, Service, Ingress 자동 구성 및 타 Manifest 수동 구성",
            "실시간 Kubernetes 리소스 모니터링",
            "관리자 페이지를 통한 배포 검토 및 수락"
          ],
          techStack: ["Kubernetes", "FastAPI", "PostgreSQL", "Next.js"],
          thumbnail: "/projects/yis.png",
          projectUrl: "https://yis.yourssu.com/",
          githubUrl: "#",
          detailUrl: "https://www.notion.so/hwangonjang/Yourssu-Infrastructure-System-1ffe1528eee080b29f22f81ee3468dbb?source=copy_link"
        },
        {
          id: 3,
          title: "ANBD",
          date: "2025.01 ~ 2025.05",
          description: "동네 기반 무료 나눔 중고 거래 플랫폼",
          features: [
            "완전 무료 기반의 나눔을 통한 지속가능성",
            "Gemini 기반 추천 시스템 및 친환경 리폼 아이디어 제공",
            "실시간 채팅 기능"
          ],
          techStack: ["GCP", "Docker", "Terraform", "Kotlin", "Spring Boot", "PostgreSQL", "Gemini", "Flutter"],
          thumbnail: "/projects/anbd.png",
          projectUrl: "https://www.youtube.com/watch?v=hoBEhgEUL4M",
          githubUrl: "https://github.com/gdsc-ssu/ANBD",
          detailUrl: "https://www.notion.so/hwangonjang/2025-Solution-Challenge-ANBD-1f6e1528eee080eaa94bdf38b27ed17d?source=copy_link"
        },
        {
          id: 4,
          title: "오늘의 공부",
          date: "2023.03 ~ 2023.06",
          description: "딥러닝 집중도 수치화 학습 SNS 서비스",
          features: [
            "CNN을 이용한 눈 깜빡임 모니터링 시스템",
            "눈 깜빡임에 의한 집중도 수치화",
            "WebRTC를 이용하여 웹캠 스트리밍",
            "KISS 논문 1저자 등재"
          ],
          techStack: ["Tensorflow", "Keras", "Spring Boot", "MySQL", "React", "WebRTC"],
          thumbnail: "/projects/todaystudy.png",
          projectUrl: "https://www.youtube.com/watch?v=pWOFVk8XX2I",
          githubUrl: "https://github.com/swp2022",
          detailUrl: "https://www.notion.so/hwangonjang/SNS-85f7e7e7c011435db8a8b0c2a529e9c8?source=copy_link",
          kissUrl: "https://kiss.kstudy.com/Detail/Ar?key=3957966"
        },
        {
          id: 5,
          title: "Missul;GAN",
          date: "2022.06 ~ 2022.08",
          description: "GAN과 CNN을 이용한 생성형 AI 미술관",
          features: [
            "GAN, CNN을 이용한 이미지 화풍 변환 구현",
            "다른 사람들이 만든 작품을 감상하는 온라인 큐레이션",
            "OpenSea 연동 NFT 거래 자동화"
          ],
          techStack: ["Pytorch", "Tensorflow", "Spring Boot", "MySQL", "React"],
          thumbnail: "/projects/missulgan.png",
          projectUrl: "#",
          githubUrl: "https://github.com/MISSUL-GAN",
          detailUrl: "https://www.notion.so/hwangonjang/Missul-GAN-GAN-CNN-SNS-NFT-8a53fef7896046d08dd3a8513011636d?source=copy_link"
        }
      ]
    },
    en: {
      title: "Projects",
      viewProject: "View Project",
      viewCode: "View Code",
      projects: [
        {
          id: 1,
          title: "On-Premise Stock Streaming Data Pipeline",
          date: "2024.11 ~",
          description: "Implemented a large-scale real-time stock data processing pipeline and dashboard on home lab servers",
          features: [
            "Zero-cost big data pipeline implementation",
            "Real-time streaming of 20 NASDAQ stocks",
            "Stock analysis and recommendations through sLM",
            "Comprehensive insights for stock buy/sell decisions"
          ],
          techStack: ["Kubernetes", "Helm", "Kafka", "Spark", "Cassandra", "FastAPI", "LLM", "Kotlin", "Spring Boot", "PostgreSQL", "Next.js"],
          thumbnail: "/projects/gsd.png",
          projectUrl: "https://gsd.hwangonjang.com/",
          githubUrl: "https://github.com/HwanGonJang/stock-streaming-data-pipeline",
          detailUrl: "https://www.notion.so/hwangonjang/On-Premise-1b6e1528eee08074846bec71121acc9c?source=copy_link"
        },
        {
          id: 2,
          title: "Yourssu Infrastructure System",
          date: "2024.02 ~ 2025.05",
          description: "Built on-premise server infrastructure and deployment back-office system for campus services",
          features: [
            "Abstracted Kubernetes functionality for easy and fast server deployment",
            "Automatic Deployment, Service, Ingress configuration and manual Manifest setup",
            "Real-time Kubernetes resource monitoring",
            "Administrator page for deployment review and approval"
          ],
          techStack: ["Kubernetes", "FastAPI", "PostgreSQL", "Next.js"],
          thumbnail: "/projects/yis.png",
          projectUrl: "https://yis.yourssu.com/",
          githubUrl: "#",
          detailUrl: "https://www.notion.so/hwangonjang/Yourssu-Infrastructure-System-1ffe1528eee080b29f22f81ee3468dbb?source=copy_link"
        },
        {
          id: 3,
          title: "ANBD",
          date: "2025.01 ~ 2025.05",
          description: "Neighborhood-based free sharing and second-hand trading platform",
          features: [
            "Sustainability through completely free-based sharing",
            "Gemini-based recommendation system and eco-friendly reform ideas",
            "Real-time chat functionality"
          ],
          techStack: ["GCP", "Docker", "Terraform", "Kotlin", "Spring Boot", "PostgreSQL", "Gemini", "Flutter"],
          thumbnail: "/projects/anbd.png",
          projectUrl: "https://www.youtube.com/watch?v=hoBEhgEUL4M",
          githubUrl: "https://github.com/gdsc-ssu/ANBD",
          detailUrl: "https://www.notion.so/hwangonjang/2025-Solution-Challenge-ANBD-1f6e1528eee080eaa94bdf38b27ed17d?source=copy_link"
        },
        {
          id: 4,
          title: "Today's Study",
          date: "2023.03 ~ 2023.06",
          description: "Deep learning concentration quantification learning SNS service",
          features: [
            "CNN-based eye blinking monitoring system",
            "Concentration quantification through eye blinking",
            "Webcam streaming using WebRTC",
            "First author publication in KISS journal"
          ],
          techStack: ["Tensorflow", "Keras", "Spring Boot", "MySQL", "React", "WebRTC"],
          thumbnail: "/projects/todaystudy.png",
          projectUrl: "https://www.youtube.com/watch?v=pWOFVk8XX2I",
          githubUrl: "https://github.com/swp2022",
          detailUrl: "https://www.notion.so/hwangonjang/SNS-85f7e7e7c011435db8a8b0c2a529e9c8?source=copy_link",
          kissUrl: "https://kiss.kstudy.com/Detail/Ar?key=3957966"
        },
        {
          id: 5,
          title: "Missul;GAN",
          date: "2022.06 ~ 2022.08",
          description: "Generative AI art gallery using GAN and CNN",
          features: [
            "Image style transfer using GAN and CNN",
            "Online curation for viewing other people's artworks",
            "Automated NFT trading integrated with OpenSea"
          ],
          techStack: ["Pytorch", "Tensorflow", "Spring Boot", "MySQL", "React"],
          thumbnail: "/projects/missulgan.png",
          projectUrl: "#",
          githubUrl: "https://github.com/MISSUL-GAN",
          detailUrl: "https://www.notion.so/hwangonjang/Missul-GAN-GAN-CNN-SNS-NFT-8a53fef7896046d08dd3a8513011636d?source=copy_link"
        }
      ]
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{content[language].title}</h2>
        </motion.div>

        <div className="space-y-12">
          {content[language].projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div 
                  className="relative h-64 lg:h-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* TODO: 실제 프로젝트 썸네일 이미지로 교체 (권장 크기: 400x250px) */}
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-3">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-5">
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">
                            {feature.includes('KISS 논문') || feature.includes('KISS journal') ? (
                              <a 
                                href={project.kissUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                              >
                                {feature}
                              </a>
                            ) : (
                              feature
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 flex-wrap">
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {content[language].viewProject}
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      {content[language].viewCode}
                    </motion.a>
                    
                    {project.detailUrl && (
                      <motion.a
                        href={project.detailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-blue-300 text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        {language === 'ko' ? '자세히' : 'Detail'}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600">
            {language === 'ko' 
              ? '더 많은 프로젝트는 Notion에서 확인하실 수 있습니다.' 
              : 'More projects are available on my Notion.'}
          </p>
          <motion.a
            href="https://www.notion.so/hwangonjang/14447707489c4f96b59d8017fb512d86?v=1b66946e99314fe48efddf71357c75e7&source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-4 w-4" />
            {language === 'ko' ? 'Notion 보기' : 'View Notion'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;