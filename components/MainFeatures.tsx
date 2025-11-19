'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const mainFeatures = [
  {
    title: '백테스트 성과',
    subtitle: '2020년 4월 ~ 2025년 1월',
    description: '초기 자본: $10,000 (약 1,000만원)\n최종 자산: $191,963 (약 2억 2천만원)\n\n총 수익률: 2220% | 승률: 86.1%',
    stats: [
      { label: '수익률', value: '2220%' },
      { label: '승률', value: '86.1%' },
      { label: '기간', value: '5년' }
    ],
    image: '/images/back-test.png'
  },
  {
    title: '실제 계좌 성과',
    subtitle: '검증된 실전 트레이딩',
    description: '사례 A: 35일간 자동매매, 11.55% 수익률\n사례 B: 72일간 자동매매, 26.27% 수익률\n\n시장 상황에 관계없이 일관된 복리 수익.',
    stats: [
      { label: '사례 A', value: '11.55%' },
      { label: '사례 B', value: '26.27%' },
      { label: '안정성', value: '높음' }
    ],
    image: '/images/real-case.png'
  },
];

export default function MainFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-40 px-6 relative">
      {/* MainFeatures: 물결치는 블루/민트 오로라 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 좌측 상단 블루 오로라 (첫 번째 카드) - 파도치는 형태 */}
        <div className="absolute left-[-15%] top-[-5%] h-[250px] w-[530px] rotate-[28deg]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.92)_0%,rgba(37,99,235,0.76)_42%,rgba(29,78,216,0.52)_70%,rgba(15,23,42,0)_100%)] opacity-80 blur-[22px]"></div>
          <div className="absolute top-[26%] left-[24%] h-[48%] w-[54%] bg-[radial-gradient(circle,rgba(96,165,250,0.8)_0%,rgba(59,130,246,0.48)_56%,rgba(15,23,42,0)_100%)] opacity-66 blur-[15px]"></div>
        </div>
        
        {/* 우측 중앙 민트 오로라 (두 번째 카드) - 구불구불 */}
        <div className="absolute right-[-12%] top-[20%] h-[260px] w-[540px] rotate-[-26deg]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.9)_0%,rgba(20,184,166,0.74)_42%,rgba(13,148,136,0.5)_70%,rgba(15,23,42,0)_100%)] opacity-82 blur-[24px]"></div>
          <div className="absolute bottom-[28%] right-[22%] h-[46%] w-[52%] bg-[radial-gradient(circle,rgba(94,234,212,0.78)_0%,rgba(45,212,191,0.46)_54%,rgba(15,23,42,0)_100%)] opacity-68 blur-[16px]"></div>
        </div>
        
        {/* 상단 중앙 시안 오로라 - 번지는 형태 */}
        <div className="absolute left-[30%] top-[-18%] h-[200px] w-[450px] rotate-[8deg]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,211,238,0.88)_0%,rgba(6,182,212,0.68)_46%,rgba(8,145,178,0.44)_74%,rgba(15,23,42,0)_100%)] opacity-76 blur-[20px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
            실제 트레이더,
            <span className="block bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(74,144,226,0.5)] mt-4">
              실제 성과
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto leading-loose">
            백테스팅과 실제 트레이딩 계좌에서 검증된 결과
          </p>
        </motion.div>

        <div className="space-y-32">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}
            >
              <div className="flex-1 w-full">
              <div className="relative p-8 rounded-2xl bg-dark-lighter/20 backdrop-blur-sm border border-accent/20 group hover:border-accent/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/5 blur-2xl transition-all duration-300"></div>                  
                <div className="relative z-10 rounded-xl overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  {feature.title}
                </h3>
                <p className="text-xl text-accent-light mb-10 font-semibold">
                  {feature.subtitle}
                </p>
                <p className="text-lg text-gray-400 leading-loose whitespace-pre-line mb-12">
                  {feature.description}
                </p>
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="relative group p-6 rounded-xl bg-dark-lighter/30 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative text-2xl font-black text-accent drop-shadow-[0_0_20px_rgba(0,180,255,0.6)] mb-2">{stat.value}</div>
                        <div className="relative text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative text-center mt-32 p-16 rounded-2xl bg-dark-lighter/20 backdrop-blur-sm border border-accent/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent"></div>
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-[100px]"></div>
          <h3 className="relative text-4xl md:text-5xl font-black mb-6 text-white">
            지금 바로 스마트한 트레이딩 시작하기
          </h3>
          <p className="relative text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            AI 기반 전략을 사용하는 15,000명 이상의 트레이더와 함께하세요. 30일 무료 체험으로 최고의 자동매매를 경험하세요.
          </p>
          <button className="relative px-10 py-4 bg-gradient-to-r from-accent-dark to-purple text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple/70 hover:from-purple hover:to-accent-dark transition-all transform hover:scale-105 mb-4 overflow-hidden group">
            <span className="relative z-10">30일 무료 체험 시작하기</span>
          </button>
          <p className="relative text-sm text-gray-500 mt-6">
            버튼을 클릭하여 AI 기반 트레이딩 전략을 시작하세요
          </p>
        </motion.div>
      </div>
    </section>
  );
}
