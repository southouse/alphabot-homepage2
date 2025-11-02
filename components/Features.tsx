'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: '고급 알고리즘',
    subtitle: '최첨단 트레이딩 도구',
    description: '복잡한 가격 움직임을 자동화하고, 고급 신호를 받고, 트레이딩뷰 차트에서 스마트 머니의 반전을 감지합니다.',
    icon: '📊'
  },
  {
    title: '스크리너 & 알림',
    subtitle: '높은 확률의 셋업을 쉽게 찾기',
    description: '가장 독점적인 트레이딩 알고리즘으로 전문가급 스크리너와 알림을 사용하세요. 시장 혼란을 걸러내고 거래 셋업을 찾습니다.',
    icon: '🔍'
  },
  {
    title: '차세대 백테스팅',
    subtitle: 'AI 기반 전략 최적화',
    description: '신호 설정을 위한 심층 최적화 엔진. AI 전략을 위해 알고리즘을 결합하고 트레이딩뷰에서 원클릭으로 전략을 복제합니다.',
    icon: '⚡'
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative p-10 rounded-xl bg-dark-lighter/30 backdrop-blur-sm border border-accent/20 hover:border-accent/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/5 blur-2xl transition-all duration-300"></div>
      <div className="relative text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="relative text-2xl font-black mb-2 text-white group-hover:text-accent transition-all duration-300">
        {feature.title}
      </h3>
      <p className="relative text-base text-accent mb-4 font-semibold">
        {feature.subtitle}
      </p>
      <p className="relative text-gray-400 leading-relaxed text-base">
        {feature.description}
      </p>
      <button className="relative mt-6 text-accent hover:text-mint font-semibold text-sm transition-colors flex items-center gap-2 group-hover:gap-3 transition-all">
        자세히 보기 <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </button>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            승리하는 전략을 만드는
            <span className="block bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(74,144,226,0.5)] mt-2">
              AI 에이전트
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            AI 에이전트에게 최고의 트레이딩 전략을 찾아달라고 요청하고, 트레이딩뷰에서 원클릭으로 전략을 복제하고, 알림을 설정하고, 프로처럼 거래를 자동화하세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
