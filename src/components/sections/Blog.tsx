'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface BlogProps {
  language: 'ko' | 'en';
}

const Blog = ({ language }: BlogProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    ko: {
      title: "Blog",
      readMore: "더 읽기",
      viewAllPosts: "모든 포스트 보기",
      articles: [
        {
          id: 1,
          title: "[Spring Boot] Multi-tenancy와 HikariCP",
          description: "Spring Boot에서 Multi-tenancy와 HikariCP를 사용하여 단일 애플리케이션-다중 데이터베이스 환경에서 연결을 효율적이고 안정적으로 관리하는 방법을 설명합니다.",
          date: "2024.10",
          readTime: "8분",
          thumbnail: "/blogs/1.png",
          url: "https://medium.com/@myggona/spring-boot-multi-tenant-with-hikaricp-c1c5072cbe0e"
        },
        {
          id: 2,
          title: "[Infrastructure] Kubernetes 통합 테스트",
          description: "원격 Kubernetes 클러스터에서 Spring Boot 애플리케이션의 통합 테스트를 자동화하는 방법을 설명합니다.",
          date: "2024.11",
          readTime: "6분",
          thumbnail: "/blogs/2.png",
          url: "https://medium.com/@myggona/infrastructure-integration-testing-with-kubernetes-3cc88450cc9a"
        },
        {
          id: 3,
          title: "[Infrastructure] EKS 보안 강화하기",
          description: "EKS 클러스터를 관리하는 개발자가 AWS 통합 서비스를 통해 제품의 보안을 강화할 수 있는 방법들을 소개합니다.",
          date: "2024.11",
          readTime: "6분",
          thumbnail: "/blogs/3.png",
          url: "https://medium.com/@myggona/infrastructure-enhancing-eks-security-6374d207cc7f"
        },
        {
          id: 4,
          title: "[Infrastructure] IaC와 Terraform",
          description: "Terraform은 클라우드 인프라를 관리하기 위한 도구입니다. 이 포스트에서는 Terraform 사용의 기초와 실습, 그리고 현대 DevOps 환경에서 중요한 이유를 설명합니다.",
          date: "2024.11",
          readTime: "8분",
          thumbnail: "/blogs/4.png",
          url: "https://medium.com/@myggona/infrastructure-terraform-a178198c0768"
        },
        {
          id: 5,
          title: "[Infrastructure] Terraform Atlantis 적용하기",
          description: "Atlantis는 Hootsuite에서 1년 이상 사용되어 온 Terraform 협업 도구입니다. 이 포스트에서는 Terraform 프로젝트에 Atlantis를 구현하는 방법을 설명합니다.",
          date: "2024.11",
          readTime: "5분",
          thumbnail: "/blogs/5.png",
          url: "https://medium.com/@myggona/infrastructure-apply-terraform-atlantis-22cf8f78f441"
        },
        {
          id: 6,
          title: "[Spring Boot] Kotlin Spring Boot 테스트",
          description: "테스트 코드는 소프트웨어의 기능과 성능을 검증하는 데 사용됩니다. 이 포스트에서는 테스트 코드의 컨벤션과 Kotlin Spring Boot에서 소프트웨어를 테스트하는 방법을 보여줍니다.",
          date: "2024.11",
          readTime: "8분",
          thumbnail: "/blogs/6.png",
          url: "https://medium.com/@myggona/spring-boot-test-in-kotlin-spring-boot-653acafdb788"
        },
        {
          id: 7,
          title: "[Infrastructure] Docker 이미지 최적화",
          description: "오늘날 많은 회사들이 제품을 배포할 때 컨테이너 환경을 사용합니다. 이 포스트에서는 Docker 이미지의 보안과 성능을 향상시키는 방법을 설명합니다.",
          date: "2024.11",
          readTime: "5분",
          thumbnail: "/blogs/7.png",
          url: "https://medium.com/@myggona/infrastructure-docker-image-optimization-improving-security-and-performance-031431fb8e17"
        },
        {
          id: 8,
          title: "[Spring Boot] Persistence Context",
          description: "Persistence Context는 JPA를 이해하는 데 가장 중요한 개념입니다. 이 포스트에서는 Persistence Context를 자세히 설명합니다.",
          date: "2024.11",
          readTime: "7분",
          thumbnail: "/blogs/8.png",
          url: "https://medium.com/@myggona/spring-boot-persistence-context-b112bc7382df"
        },
        {
          id: 9,
          title: "[Spring Boot] Spring AOP로 로깅과 모니터링",
          description: "관점 지향 프로그래밍(AOP)은 Spring Framework의 핵심 요소 중 하나입니다. 이 포스트에서는 Spring AOP와 Elasticsearch를 사용하여 로깅 시스템을 구현합니다.",
          date: "2024.11",
          readTime: "8분",
          thumbnail: "/blogs/9.png",
          url: "https://medium.com/@myggona/spring-boot-spring-aop-logging-and-monitoring-with-amazon-opensearch-b97a90e2052e"
        },
        {
          id: 10,
          title: "[CS] 분산 시스템 이해하기",
          description: "이 글에서는 응답 시간을 개선하고 애플리케이션 성능을 향상시키기 위한 다양한 캐싱 전략을 탐구합니다. 다양한 캐싱 메커니즘을 다루고 주요 고려사항들을 논의합니다.",
          date: "2025.03",
          readTime: "12분",
          thumbnail: "/blogs/10.png",
          url: "https://medium.com/@myggona/understanding-distributed-systems-c8cdfc84cb2c"
        },
        {
          id: 11,
          title: "[CS] RDBMS 구조와 동작 원리",
          description: "이 포스트에서는 RDBMS의 기본 개념을 탐구하고 MySQL 아키텍처를 심도 있게 살펴봅니다.",
          date: "2025.03",
          readTime: "18분",
          thumbnail: "/blogs/11.png",
          url: "https://medium.com/@myggona/rdbms-structure-and-operation-26b67ed7c8fc"
        },
        {
          id: 12,
          title: "[CS] CacheDB 이해하기",
          description: "이 글에서는 응답 시간을 개선하고 애플리케이션 성능을 향상시키기 위한 다양한 캐싱 전략을 탐구합니다. 다양한 캐싱 메커니즘을 다루고 주요 고려사항들을 논의합니다.",
          date: "2025.03",
          readTime: "8분",
          thumbnail: "/blogs/12.png",
          url: "https://medium.com/@myggona/cs-speeding-up-response-time-with-cachedb-c226bbf9bb84"
        }
      ]
    },
    en: {
      title: "Blog",
      readMore: "Read More",
      viewAllPosts: "View All Posts",
      articles: [
        {
          id: 1,
          title: "[Spring Boot] Persistence Context",
          description: "I will explain how to manage connections efficiently and reliably in a single application-multiple databases environment using Multi-tenancy and HikariCP in Spring Boot.",
          date: "2024.10",
          readTime: "8 min read",
          thumbnail: "/blogs/1.png",
          url: "https://medium.com/@myggona/spring-boot-multi-tenant-with-hikaricp-c1c5072cbe0e"
        },
        {
          id: 2,
          title: "[Infrastructure] Integration Testing with Kubernetes",
          description: "In this post, I'll explain how to automate integration testing of spring boot application on remote Kubernetes cluster.",
          date: "2024.11",
          readTime: "6 min read",
          thumbnail: "/blogs/2.png",
          url: "https://medium.com/@myggona/infrastructure-integration-testing-with-kubernetes-3cc88450cc9a"
        },
        {
          id: 3,
          title: "[Infrastructure] Enhancing EKS Security",
          description: "Developer who manages EKS cluster can enhance security of products with AWS integrated services. In this post, I will introduce several ways to enhance security for Amazon EKS.",
          date: "2024.11",
          readTime: "6 min read",
          thumbnail: "/blogs/3.png",
          url: "https://medium.com/@myggona/infrastructure-enhancing-eks-security-6374d207cc7f"
        },
        {
          id: 4,
          title: "[Infrastructure] IaC And Terraform",
          description: "Terraform is a tool for managing cloud infrastructure. In this post, I will explain the basics and practice of using Terraform and why it is important in the modern DevOps environment.",
          date: "2024.11",
          readTime: "8 min read",
          thumbnail: "/blogs/4.png",
          url: "https://medium.com/@myggona/infrastructure-terraform-a178198c0768"
        },
        {
          id: 5,
          title: "[Infrastructure] Apply Terraform Atlantis",
          description: "Atlantis is a tool for collaborating on Terraform that's been in use at Hootsuite for over a year. In this post, I will explain how to implement Atlantis in my Terraform project.",
          date: "2024.11",
          readTime: "5 min read",
          thumbnail: "/blogs/5.png",
          url: "https://medium.com/@myggona/infrastructure-apply-terraform-atlantis-22cf8f78f441"
        },
        {
          id: 6,
          title: "[Spring Boot] Test in Kotlin Spring Boot",
          description: "Test code is used to verify the features and functionality of software. Testing is crucial for finding and fixing flaws. In this post, I will show my convention of test code and how to test software in Kotlin Spring Boot.",
          date: "2024.11",
          readTime: "8 min read",
          thumbnail: "/blogs/6.png",
          url: "https://medium.com/@myggona/spring-boot-test-in-kotlin-spring-boot-653acafdb788"
        },
        {
          id: 7,
          title: "[Infrastructure] Docker Image Optimization-Improving Security and Performance",
          description: "Today, many companies deploying their products use container environments. In this post, I will explain how to improve the security and performance of Docker Images.",
          date: "2024.11",
          readTime: "5 min read",
          thumbnail: "/blogs/7.png",
          url: "https://medium.com/@myggona/infrastructure-docker-image-optimization-improving-security-and-performance-031431fb8e17"
        },
        {
          id: 8,
          title: "[Spring Boot] Persistence Context",
          description: "The persistence context is the most important idea to understand JPA. In this post, I will explain Persistence Context in detail.",
          date: "2024.11",
          readTime: "7 min read",
          thumbnail: "/blogs/8.png",
          url: "https://medium.com/@myggona/spring-boot-persistence-context-b112bc7382df"
        },
        {
          id: 9,
          title: "[Spring Boot] Spring AOP-Logging and Monitoring with Amazon OpenSearch",
          description: "Aspect-Oriented-Programming(AOP) is one of the key elements of the Spring Framework. In this post, we'll implement a logging system using Spring AOP and Elasticsearch.",
          date: "2024.11",
          readTime: "8 min read",
          thumbnail: "/blogs/9.png",
          url: "https://medium.com/@myggona/spring-boot-spring-aop-logging-and-monitoring-with-amazon-opensearch-b97a90e2052e"
        },
        {
          id: 10,
          title: "[CS] Understanding Distributed Systems",
          description: "This article explores various caching strategies to improve response times and enhance application performance. It covers different caching mechanisms and discusses key considerations.",
          date: "2025.03",
          readTime: "12 min read",
          thumbnail: "/blogs/10.png",
          url: "https://medium.com/@myggona/understanding-distributed-systems-c8cdfc84cb2c"
        },
        {
          id: 11,
          title: "[CS] RDBMS Structure and Operation",
          description: "In this post, we'll explore the fundamentals of RDBMS and take a deep dive into MySQL's architecture.",
          date: "2025.03",
          readTime: "18 min read",
          thumbnail: "/blogs/11.png",
          url: "https://medium.com/@myggona/rdbms-structure-and-operation-26b67ed7c8fc"
        },
        {
          id: 12,
          title: "[CS] Understanding CacheDB",
          description: "This article explores various caching strategies to improve response times and enhance application performance. It covers different caching mechanisms and discusses key considerations.",
          date: "2025.03",
          readTime: "8 min read",
          thumbnail: "/blogs/12.png",
          url: "https://medium.com/@myggona/cs-speeding-up-response-time-with-cachedb-c226bbf9bb84"
        }
      ]
    }
  };

  const articles = content[language].articles;
  const articlesPerView = 3;
  const totalPages = Math.ceil(articles.length / articlesPerView);
  const currentPage = Math.floor(currentIndex / articlesPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + articlesPerView >= articles.length ? 0 : prev + articlesPerView));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? Math.floor((articles.length - 1) / articlesPerView) * articlesPerView : prev - articlesPerView));
  };

  const visibleArticles = articles.slice(currentIndex, currentIndex + articlesPerView);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{content[language].title}</h2>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </motion.button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * articlesPerView)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentPage ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </motion.button>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {visibleArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  {/* TODO: 실제 블로그 포스트 썸네일 이미지로 교체 (권장 크기: 400x250px) */}
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  
                  <motion.a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {content[language].readMore}
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://medium.com/@myggona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-4 w-4" />
            {content[language].viewAllPosts}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;