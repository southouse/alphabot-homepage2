'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const introSlides = [
  {
    step: '1단계',
    title: '신호 발생',
    description: '알파봇이 최적의 \'롱\' 진입 시그널을 포착하고, 설정된 거래소로 자동 주문을 전송합니다. 시드의 4.75%만을 사용하여 안전하게 진입하며, AI 알고리즘이 시장 상황을 실시간으로 분석하여 최적의 타이밍을 포착합니다.',
    image: '/images/signal-generate.png'
  },
  {
    step: '2단계',
    title: '하락장 대응',
    description: '가격 하락 시에도 패닉하지 않습니다. 알파봇 로직이 판단하는 지지 구간에서만 정확하게 추가 매수(순환매)를 실행하여 평균 단가를 낮춥니다. 감정 없는 AI의 냉철한 판단으로 하락장을 기회로 만듭니다.',
    image: '/images/circle-position.jpg'
  },
  {
    step: '3단계',
    title: '자동 분할 익절',
    description: '평균 단가 2% 상승 시마다 자동으로 물량의 일부(30%, 40%...)를 분할 매도하여 수익을 실시간으로 확정합니다. 욕심을 부리지 않고 안정적으로 수익을 쌓아가는 전략으로 장기적인 성공을 보장합니다.',
    image: '/images/upupup.png'
  },
];

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % introSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + introSlides.length) % introSlides.length);
  };

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-12">
            <button
              onClick={prevSlide}
              className="w-16 h-12 bg-dark-lighter/40 hover:bg-dark-lighter/60 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h2 className="text-4xl md:text-5xl font-black text-white">
              <span className="bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(74,144,226,0.5)]">
                자동매매 프로세스
              </span>
            </h2>
            
            <button
              onClick={nextSlide}
              className="w-16 h-12 bg-dark-lighter/40 hover:bg-dark-lighter/60 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* 텍스트 영역 */}
              <div>
                <div className="text-lg font-bold tracking-widest mb-8 bg-gradient-to-r from-cyan-bright via-accent-light to-cyan bg-clip-text text-transparent">
                  {introSlides[currentSlide].step}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-black mb-8 text-white leading-[1.1]">
                  {introSlides[currentSlide].title}
                </h3>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                  {introSlides[currentSlide].description}
                </p>

                {/* 네비게이션 점들 */}
                <div className="flex items-center gap-4">
                  {introSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-12 bg-accent' 
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 이미지 영역 */}
              <div className="relative">
                {/* 영롱한 그라데이션 배경 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-purple/15 to-mint/20 rounded-3xl blur-3xl opacity-60"></div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 via-transparent to-cyan/10 rounded-3xl blur-2xl"></div>
                
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark/50 backdrop-blur-sm shadow-2xl">
                  <Image 
                    src={introSlides[currentSlide].image} 
                    alt={introSlides[currentSlide].title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
