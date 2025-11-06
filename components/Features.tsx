'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const features = [
  {
    category: 'ALGORITHMS',
    title: '고급 알고리즘',
    description: '복잡한 가격 움직임을 자동화하고, 고급 신호를 받고, 트레이딩뷰 차트에서 스마트 머니의 반전을 감지합니다. AI 기반 전략으로 최적의 진입점과 청산점을 실시간으로 분석합니다.',
    image: '/images/chart1.png'
  },
  {
    category: 'SCREENER & ALERTS',
    title: '스크리너 & 알림',
    description: '가장 독점적인 트레이딩 알고리즘으로 전문가급 스크리너와 알림을 사용하세요. 시장 혼란을 걸러내고 거래 셋업을 찾습니다. 높은 확률의 트레이딩 기회를 놓치지 마세요.',
    image: '/images/chart2.png'
  },
  {
    category: 'BACKTESTING',
    title: '차세대 백테스팅',
    description: '신호 설정을 위한 심층 최적화 엔진. AI 전략을 위해 알고리즘을 결합하고 트레이딩뷰에서 원클릭으로 전략을 복제합니다. 과거 데이터로 전략을 검증하고 최적화하세요.',
    image: '/images/chart3.png'
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid md:grid-cols-2 gap-16 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}
    >
      <div className={`${!isEven ? 'md:col-start-2' : ''}`}>
        <div className="text-base font-semibold tracking-wide mb-6 bg-gradient-to-r from-cyan-bright via-accent-light to-cyan bg-clip-text text-transparent">
          {feature.category}
        </div>
        <h3 className="text-5xl md:text-6xl font-black mb-8 text-white leading-[1.1]">
          {feature.title}
        </h3>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
          {feature.description}
        </p>
        <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium text-base transition-all duration-300 flex items-center gap-2 group">
          자세히 보기 <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
      
      <div className={`relative ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
        {/* 영롱한 그라데이션 배경 효과 */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-purple/15 to-mint/20 rounded-3xl blur-3xl opacity-60"></div>
        <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 via-transparent to-cyan/10 rounded-3xl blur-2xl"></div>
        
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark/50 backdrop-blur-sm shadow-2xl">
          <Image 
            src={feature.image} 
            alt={feature.title}
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="space-y-40">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
