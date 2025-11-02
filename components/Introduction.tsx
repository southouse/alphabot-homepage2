'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const introCards = [
  {
    title: '1단계: 신호 발생',
    description: '알파봇이 최적의 \'롱\' 진입 시그널을 포착하고,\n설정된 거래소로 자동 주문을 전송합니다.\n(시드 4.75% 진입)',
    icon: '🎯'
  },
  {
    title: '2단계: 하락장 대응',
    description: '가격 하락 시, 패닉하지 않습니다.\n알파봇 로직이 판단하는 지지 구간에서만\n정확하게 추가 매수(순환매)를 실행하여\n평균 단가를 낮춥니다.',
    icon: '📉'
  },
  {
    title: '3단계: 자동 분할 익절',
    description: '평균 단가 2% 상승 시마다 자동으로\n물량의 일부(30%, 40%...)를 분할 매도하여\n수익을 실시간으로 확정합니다.',
    icon: '�'
  },
];

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(74,144,226,0.4)]">
              알파봇의 3단계 자동매매 프로세스
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {introCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-dark-lighter/30 backdrop-blur-sm border border-accent/30 hover:border-accent/60 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/15 to-primary-light/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-2xl transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">
                  {card.title}
                </h4>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
