'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const dataSlides = [
  {
    title: '실제 수익률',
    description: (
      <>
        검증된 실제 트레이딩 수익률 데이터입니다.
        <br className="hidden md:block" />
        백테스트가 아닌 라이브 계좌에서 발생한 실제 수익을 확인하세요.
      </>
    ),
    image: '/images/real-profit-rate.png'
  },
  {
    title: '실제 회원수',
    description: (
      <>
        현재 알파봇을 사용 중인 실제 회원 수와
        <br className="hidden md:block" />
        활성 사용자 통계를 실시간으로 확인할 수 있습니다.
      </>
    ),
    image: '/images/real-members.png'
  },
  {
    title: '실제 수익금',
    description: (
      <>
        알파봇 사용자들이 실제로 벌어들인 누적 수익금 데이터입니다.
        <br className="hidden md:block" />
        투명하게 공개된 실제 거래 내역을 확인하세요.
      </>
    ),
    image: '/images/real-earnings.png'
  },
];

export default function RealData() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dataSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dataSlides.length) % dataSlides.length);
  };

  return (
    <section ref={ref} className="py-40 px-6 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
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
            
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(74,144,226,0.5)]">
              {dataSlides[currentSlide].title}
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
              className="flex flex-col items-center"
            >
              {/* 이미지 영역 - 중앙에 크게 */}
              <div className="relative w-full max-w-5xl mb-16">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-purple/15 to-mint/20 rounded-3xl blur-3xl opacity-60"></div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 via-transparent to-cyan/10 rounded-3xl blur-2xl"></div>
                
                <div className="relative rounded-2xl overflow-hidden border border-accent/30 bg-dark/50 backdrop-blur-sm shadow-2xl p-32">
                  <div className="flex items-center justify-center text-[12rem]">
                    📊
                  </div>
                  <p className="text-center text-gray-500 mt-12 text-xl">
                    여기에 {dataSlides[currentSlide].title} 캡쳐 이미지가 들어갑니다
                  </p>
                </div>
              </div>

              {/* 텍스트 영역 - 이미지 아래 중앙 */}
              <div className="text-center max-w-3xl">
                <p className="text-lg md:text-xl text-gray-400 leading-loose mb-12">
                  {dataSlides[currentSlide].description}
                </p>

                {/* 슬라이드 인디케이터 */}
                <div className="flex gap-3 justify-center">
                  {dataSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-12 bg-accent' 
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`슬라이드 ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
