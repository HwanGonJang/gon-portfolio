'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';

interface AboutProps {
  language: 'ko' | 'en';
}

const About = ({ language }: AboutProps) => {
  const content = {
    ko: {
      title: "About",
      description: (
        <>
          저는 클라우드/AI에 관심이 많은 데이터/클라우드 엔지니어입니다.<br />
          백엔드/프론트엔드 개발도 가능한 풀스택 개발자로서 Cloud, Kubernetes, Terraform, Spring Boot에 강점이 있습니다.<br />
          반복되는 작업은 자동화하고, 복잡한 시스템은 추상화하여 개발자와 사용자의 작업을 줄이는 일에 집중합니다. 
        </>
      ),
      mission1: "저는 사람들의 편의에 집중하는 개발자입니다. 제가 가진 능력으로 세상을 더 나은 방향으로 동작시키고 싶습니다.",
      experience: "Experience",
      education: "Education",
      activities: "Activities",
      experiences: [
        {
          period: "2022.07 ~ 2024.08",
          company: "(주)전능아이티 SMART DOCTOR",
          position: "백엔드/인프라 엔지니어",
          achievements: [
            "SmartDoctor B2B 프로덕트 백엔드 개발(Spring, Kotlin, AWS, Kubernetes, Terraform)",
            "Kubernetes 클라우드 인프라 개선으로 월 2000$ 비용 절감",
            "ArgoCD, GitOps 연동으로 CI/CD 속도 3배 향상",
            "Kubernetes Job을 통한 통합/단위 테스트 자동화",
            "백오피스 툴 및 사내 시스템 백엔드 개발"
          ]
        },
        {
          period: "2020.09 ~ 2021.12.31",
          company: "메이커스페이스 Camp51.9",
          position: "소프트웨어 매니저 (주 3회, 14시간)",
          achievements: [
            "메이커스페이스 운영을 위한 소프트웨어 개발(코로나 딥러닝 마스크 인식 출입 시스템, 딥러닝 라즈베리파이 자율주행자동차, 장비 예약 프로그램 등)",
            "학생, 외부인 대상의 기초 소프트웨어 교육",
            "3D 프린터, 레이저커터, 목공 등 장비 교육 및 관리"
          ]
        }
      ],
      educations: [
        {
          period: "2020.03 ~ 재학 중(4-2)",
          school: "숭실대학교",
          major: "소프트웨어학부",
          submajor: "빅데이터 융합전공(통계학부, AI융합학부)",
          gpa: "GPA - 3.98 / 4.5"
        }
      ],
      activityList: [
        {
          title: "Google Developer Groups on Campus Soongsil University",
          position: "Organizer",
          description: [
            "GDGoC Soongsil 개발자 커뮤니티 운영",
            "개발자 생태계 활성화에 기여",
            "세미나, 스터디, 컨퍼런스, 연합행사 등 학생 개발자들을 위한 다양한 활동 진행"
          ],
          link: "https://gdg.community.dev/gdg-on-campus-soongsil-university-seoul-south-korea/"
        },
        {
          title: "YOURSSU Backend 팀",
          position: "Vice Lead",
          description: [
            "숭실대학교 학생들을 위한 교내 서비스 개발",
            "Yourssu 클라우드/온프레미스 시스템 관리"
          ],
          link: "https://yourssu.com/"
        }
      ]
    },
    en: {
      title: "About",
      description: (
        <>
          I am a data/cloud engineer with a strong interest in cloud computing and AI.<br />
          As a full-stack developer capable of both backend and frontend development,<br />I have expertise in Cloud, Kubernetes, Terraform, and Spring Boot.<br />
          I focus on automating repetitive tasks and abstracting complex systems to reduce workload for both developers and users.
        </>
      ),
      mission1: (
        <>
        I am a developer who focuses on people&apos;s convenience. I want to make the world work in a better direction with my abilities.
        </>
      ),
      experience: "Experience",
      education: "Education",
      activities: "Activities",
      experiences: [
        {
          period: "2022.07 ~ 2024.08",
          company: "Cheonneung IT",
          position: "SMART DOCTOR Backend/Infrastructure Engineer",
          achievements: [
            "SmartDoctor B2B product backend development (Spring, Kotlin, AWS, Kubernetes, Terraform)",
            "Reduced monthly costs by $2000 through Kubernetes cloud infrastructure improvement",
            "3x faster CI/CD through ArgoCD and GitOps integration",
            "Automated integration/unit testing through Kubernetes Jobs",
            "Back-office tools and internal system backend development"
          ]
        },
        {
          period: "2020.09 ~ 2021.12.31",
          company: "Makerspace Camp51.9",
          position: "Software Manager (3 times a week, 14 hours)",
          achievements: [
            "Software development for makerspace operations (COVID-19 entry registration deep learning mask recognition kiosk, deep learning Raspberry Pi autonomous vehicle, equipment reservation program, etc.)",
            "Basic software education for students and external users",
            "Equipment education and management for 3D printers, laser cutters, woodworking, etc."
          ]
        }
      ],
      educations: [
        {
          period: "2020.03 ~ Currently enrolled (4-2)",
          school: "Soongsil University",
          major: "School of Software",
          submajor: "Big Data Convergence Major (Statistics, AI Convergence)",
          gpa: "GPA - 3.98 / 4.5"
        }
      ],
      activityList: [
        {
          title: "Google Developer Groups on Campus Soongsil University",
          position: "Organizer",
          description: [
            "Operating GDGoC Soongsil developer community",
            "Contributing to developer ecosystem activation",
            "Organizing various activities for student developers including seminars, studies, conferences, and joint events"
          ],
          link: "https://gdg.community.dev/gdg-on-campus-soongsil-university-seoul-south-korea/"
        },
        {
          title: "YOURSSU Backend Team",
          position: "Vice Lead",
          description: [
            "Developing campus services for Soongsil University students",
            "Managing Yourssu cloud/on-premise systems"
          ],
          link: "https://yourssu.com/"
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{content[language].title}</h2>
          <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>{content[language].description}</p>
            <p>{content[language].mission1}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-600" />
              {content[language].experience}
            </h3>
            
            <div className="space-y-8">
              {content[language].experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.company}</h4>
                  <p className="text-gray-600 mb-4">{exp.position}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              {content[language].education}
            </h3>
            
            <div className="space-y-6 mb-12">
              {content[language].educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-blue-50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{edu.school}</h4>
                  <p className="text-gray-700 mb-1">{edu.major}</p>
                  <p className="text-gray-600 mb-2">{edu.submajor}</p>
                  <p className="text-blue-600 font-medium">{edu.gpa}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              {content[language].activities}
            </h3>
            
            <div className="space-y-6">
              {content[language].activityList.map((activity, index) => (
                <motion.a
                  key={index}
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all cursor-pointer relative"
                >
                  <ExternalLink className="h-5 w-5 text-blue-600 absolute top-6 right-6" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-1 pr-8">{activity.title}</h4>
                  <p className="text-blue-600 font-medium mb-4">{activity.position}</p>
                  <ul className="space-y-2">
                    {activity.description.map((desc, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;