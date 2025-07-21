'use client';

import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  language: 'ko' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    ko: {
      title: "Contact",
      subtitle: "프로젝트 협업이나 기술 관련 이야기를 나누고 싶으시다면 언제든지 연락주세요!",
      directEmail: "직접 이메일 보내기",
      formTitle: "메시지 보내기",
      nameLabel: "이름",
      emailLabel: "이메일",
      messageLabel: "메시지",
      namePlaceholder: "성함을 입력해주세요",
      emailPlaceholder: "이메일 주소를 입력해주세요",
      messagePlaceholder: "메시지를 입력해주세요",
      sendButton: "메시지 보내기",
      sendingButton: "전송 중...",
      successMessage: "메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.",
      errorMessage: "메시지 전송에 실패했습니다. 직접 이메일로 연락주시거나 잠시 후 다시 시도해주세요.",
      responseTime: "보통 24시간 내에 답변드립니다"
    },
    en: {
      title: "Contact",
      subtitle: "Feel free to reach out if you'd like to collaborate on projects or discuss technology!",
      directEmail: "Send Direct Email",
      formTitle: "Send Message",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email address",
      messagePlaceholder: "Enter your message",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Message sent successfully! I'll get back to you as soon as possible.",
      errorMessage: "Failed to send message. Please contact me directly via email or try again later.",
      responseTime: "I usually respond within 24 hours"
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS 설정 - 실제 사용 시 환경변수로 관리 필요
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      // EmailJS로 이메일 전송
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{content[language].title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
              className="space-y-8"
          >
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">{content[language].directEmail}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <a 
                    href="mailto:myggona@gmail.com"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    myggona@gmail.com
                  </a>
                </div>
                
                <p className="text-gray-600 ml-5">
                  {content[language].responseTime}
                </p>
              </div>
              
              <motion.a
                href="mailto:myggona@gmail.com"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
                {content[language].directEmail}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">{content[language].formTitle}</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4" />
                    {content[language].nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={content[language].namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4" />
                    {content[language].emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={content[language].emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4" />
                    {content[language].messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder={content[language].messagePlaceholder}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? content[language].sendingButton : content[language].sendButton}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-700">{content[language].successMessage}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-700">{content[language].errorMessage}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;