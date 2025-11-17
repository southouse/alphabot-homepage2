'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const sections = [
  {
    id: 'profit-cards',
    title: '실제 수익 내역',
    cards: [
      { id: 1, image: '/images/profit-card-1.png', pnl: 76.50, lastPrice: 101996.4, avgPrice: 94193.6 },
      { id: 2, image: '/images/profit-card-2.png', pnl: 52.34, lastPrice: 100234.5, avgPrice: 95432.1 },
      { id: 3, image: '/images/profit-card-3.png', pnl: 68.92, lastPrice: 102145.8, avgPrice: 93876.2 },
      { id: 4, image: '/images/profit-card-4.png', pnl: 45.67, lastPrice: 99876.3, avgPrice: 96234.5 },
      { id: 5, image: '/images/profit-card-5.png', pnl: 81.23, lastPrice: 103456.2, avgPrice: 92567.8 },
      { id: 6, image: '/images/profit-card-6.png', pnl: 39.45, lastPrice: 98765.1, avgPrice: 97123.4 },
      { id: 7, image: '/images/profit-card-7.png', pnl: 55.78, lastPrice: 101234.7, avgPrice: 94876.3 },
      { id: 8, image: '/images/profit-card-8.png', pnl: 72.11, lastPrice: 102789.3, avgPrice: 93234.5 },
      { id: 9, image: '/images/profit-card-9.png', pnl: 61.89, lastPrice: 100456.2, avgPrice: 95123.7 },
      { id: 10, image: '/images/profit-card-10.png', pnl: 48.23, lastPrice: 99234.8, avgPrice: 96789.4 },
      { id: 11, image: '/images/profit-card-11.png', pnl: 74.56, lastPrice: 103234.1, avgPrice: 92987.3 },
      { id: 12, image: '/images/profit-card-12.png', pnl: 42.91, lastPrice: 98567.4, avgPrice: 97456.8 },
      { id: 13, image: '/images/profit-card-13.png', pnl: 58.34, lastPrice: 101345.6, avgPrice: 94567.2 },
      { id: 14, image: '/images/profit-card-14.png', pnl: 51.78, lastPrice: 100123.7, avgPrice: 95876.4 },
    ]
  },
  {
    id: 'trade-history',
    title: '트레이드 히스토리',
    isTable: true,
    tableData: [
      { id: 1, period: '1/27 ~ 1/29', profit: 112.6, dailyReturn: 1.13, seed1Return: 1.13, seed2Return: 1.13 },
      { id: 2, period: '2/1 ~ 2/4', profit: 214.9, dailyReturn: 2.13, seed1Return: 3.28, seed2Return: 3.28 },
      { id: 3, period: '2/22 ~ 3/3', profit: 1170.7, dailyReturn: 11.34, seed1Return: 14.98, seed2Return: 14.98 },
      { id: 4, period: '3/3 ~ 3/5', profit: -50.8, dailyReturn: -0.44, seed1Return: 14.47, seed2Return: 14.47, note: '손절' },
      { id: 5, period: '3/6 ~ 3/7', profit: 164.2, dailyReturn: 1.61, seed1Return: 16.12, seed2Return: 16.12 },
      { id: 6, period: '3/11', profit: 89.8, dailyReturn: 0.85, seed1Return: 17.01, seed2Return: 17.01 },
      { id: 7, period: '3/21 ~ 3/25', profit: 118.7, dailyReturn: 1.14, seed1Return: 18.20, seed2Return: 18.20 },
      { id: 8, period: '3/26 ~ 4/3', profit: 161.7, dailyReturn: 1.38, seed1Return: 19.82, seed2Return: 19.82 },
      { id: 9, period: '4/3 ~ 4/7', profit: 900.3, dailyReturn: 7.59, seed1Return: 28.82, seed2Return: 28.82 },
      { id: 10, period: '4/13 ~ 4/14', profit: 41.7, dailyReturn: 0.36, seed1Return: 29.24, seed2Return: 29.24 },
      { id: 11, period: '4/16 ~ 4/23', profit: 235.5, dailyReturn: 2.27, seed1Return: 31.59, seed2Return: 31.59 },
      { id: 12, period: '4/24 ~ 4/27', profit: 130.5, dailyReturn: 1.00, seed1Return: 32.90, seed2Return: 32.90 },
      { id: 13, period: '4/28 ~ 4/29', profit: 44.1, dailyReturn: 0.33, seed1Return: 33.34, seed2Return: 33.34 },
      { id: 14, period: '4/30 ~ 5/4', profit: 143.7, dailyReturn: 1.37, seed1Return: 34.78, seed2Return: 34.78 },
      { id: 15, period: '5/5 ~ 5/9', profit: 249.4, dailyReturn: 2.27, seed1Return: 37.27, seed2Return: 37.27 },
      { id: 16, period: '5/13 ~ 5/14', profit: 47.7, dailyReturn: 0.40, seed1Return: 37.75, seed2Return: 37.75 },
      { id: 17, period: '5/15 ~ 5/16', profit: 48.8, dailyReturn: 0.41, seed1Return: 38.24, seed2Return: 38.24 },
      { id: 18, period: '5/19 ~ 5/20', profit: 58.4, dailyReturn: 0.49, seed1Return: 38.82, seed2Return: 38.82, note: '1만 USDT 추가' },
    ]
  }
];

export default function TradingCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <section ref={ref} className="py-40 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-12">
            <button
              onClick={prevSection}
              className="w-16 h-12 bg-dark-lighter/40 hover:bg-dark-lighter/60 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(74,144,226,0.5)]">
              {sections[currentSection].title}
            </h2>
            
            <button
              onClick={nextSection}
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
              key={currentSection}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {sections[currentSection].isTable ? (
                // 타임라인 형태 레이아웃 (트레이드 히스토리)
                <div className="max-w-7xl mx-auto relative">
                  {/* 중앙 수직 라인 */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-cyan to-mint transform -translate-x-1/2 opacity-30"></div>
                  
                  {/* 스크롤 가능한 타임라인 컨테이너 */}
                  <div className="max-h-[700px] overflow-y-auto custom-scrollbar pr-4">
                    {sections[currentSection].tableData?.map((row, index) => {
                      const isLeft = index % 2 === 0;
                      
                      return (
                        <motion.div
                          key={row.id}
                          initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          className={`relative flex items-center mb-16 ${isLeft ? 'justify-start' : 'justify-end'}`}
                        >
                          {/* 타임라인 카드 */}
                          <div className={`w-[46%] ${isLeft ? 'pr-8' : 'pl-8'}`}>
                            <div className="relative group">
                              {/* 카드 글로우 */}
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-purple/20 to-mint/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              
                              {/* 카드 본체 */}
                              <div className="relative bg-gradient-to-br from-dark/80 to-primary-dark/60 backdrop-blur-xl rounded-xl border border-accent/30 p-6 shadow-2xl hover:scale-105 transition-all duration-300">
                                {/* 수익금 - 큰 강조 */}
                                <div className="mb-4">
                                  <div className="text-sm text-white/60 mb-2 font-semibold">수익금</div>
                                  <div className={`text-4xl font-black ${row.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {row.profit >= 0 ? '+' : ''}{row.profit} <span className="text-xl text-white/70">USDT</span>
                                  </div>
                                </div>
                                
                                {/* 수익률 정보 */}
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between items-center">
                                    <span className="text-white/60">매매별 수익률</span>
                                    <span className={`font-bold ${row.dailyReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                      {row.dailyReturn >= 0 ? '+' : ''}{row.dailyReturn}%
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-white/60">누적 수익률 (시드1)</span>
                                    <span className="font-bold text-cyan-300">+{row.seed1Return}%</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-white/60">누적 수익률 (시드2)</span>
                                    <span className="font-bold text-mint">+{row.seed2Return}%</span>
                                  </div>
                                </div>
                                
                                {/* 비고 */}
                                {row.note && (
                                  <div className="mt-4 pt-4 border-t border-white/10">
                                    <div className="text-xs text-yellow-400 flex items-center gap-2">
                                      <span>⚠️</span>
                                      <span>{row.note}</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* 중앙 날짜 배지 (타임라인 노드) */}
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            {/* 날짜 배지 */}
                            <div className={`px-4 py-2 rounded-full border-2 ${
                              row.profit >= 0 
                                ? 'bg-green-500/90 border-green-300' 
                                : 'bg-red-500/90 border-red-300'
                            } shadow-2xl backdrop-blur-sm`}>
                              <div className="text-white font-bold text-sm whitespace-nowrap">
                                {row.period}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* 하단 정보 */}
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-6 px-6 py-3 bg-dark/60 backdrop-blur-xl rounded-full border border-accent/20">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-white/70">수익</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-white/70">손실</span>
                      </div>
                      <div className="text-sm text-white/50">실제 라이브 데이터</div>
                    </div>
                  </div>
                </div>
              ) : (
                // 카드 진열 (실제 수익 내역)
                <div className="relative min-h-[750px] w-full px-4">
                  {sections[currentSection].cards?.map((card, index) => {
                  // 2줄 배치: 첫 줄 6개, 둘째 줄 6개
                  const isFirstRow = index < 6;
                  
                  // 각 카드의 위치와 회전을 다르게 설정 (간격 좁게, 살짝 포개기)
const positions = [
  // 첫번째 줄 (6장)
  { x: 10, y: 30, rotate: -5, zIndex: 1 },
  { x: 180, y: 45, rotate: 3, zIndex: 2 },
  { x: 350, y: 35, rotate: -2, zIndex: 3 },
  { x: 520, y: 50, rotate: 4, zIndex: 4 },
  { x: 690, y: 40, rotate: -3, zIndex: 5 },
  { x: 860, y: 55, rotate: 2, zIndex: 6 },
  // 두번째 줄 (6장)
  { x: 10, y: 340, rotate: -4, zIndex: 7 },
  { x: 180, y: 355, rotate: 2, zIndex: 8 },
  { x: 350, y: 345, rotate: -1, zIndex: 9 },
  { x: 520, y: 360, rotate: 3, zIndex: 10 },
  { x: 690, y: 350, rotate: -2, zIndex: 11 },
  { x: 860, y: 365, rotate: 5, zIndex: 12 },
  // 오른쪽 위 추가 (1장)
  { x: 1030, y: 60, rotate: -3, zIndex: 13 },
  // 오른쪽 아래 추가 (1장)
  { x: 1030, y: 370, rotate: 3, zIndex: 14 },
];                  const pos = positions[index];
                  
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 100, rotate: pos.rotate - 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: pos.y,
                        x: pos.x,
                        rotate: pos.rotate
                      }}
                      transition={{ duration: 0.8, delay: index * 0.08, type: "spring" }}
                      className="absolute"
                      style={{ zIndex: pos.zIndex }}
                    >
                      <div className="relative w-52 h-72 group cursor-pointer">
                        {/* 카드 글로우 효과 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 via-purple/20 to-mint/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
                        
                        {/* 카드 본체 */}
                        <div className="relative rounded-2xl overflow-hidden border-2 border-accent/40 bg-gradient-to-br from-dark/90 to-primary-dark/80 backdrop-blur-sm shadow-2xl h-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-0 group-hover:z-50">
                          {/* 임시 플레이스홀더 - 실제 카드 이미지와 유사한 레이아웃 */}
                          <div className="h-full flex flex-col justify-between p-5">
                            {/* 상단 - Unrealized PnL 라벨 */}
                            <div>
                              <p className="text-gray-400 text-xs mb-2">Unrealized PnL</p>
                              <div className="flex items-baseline gap-2 mb-1">
                                <p className="text-white font-bold text-sm">BTCUSDT</p>
                                <span className="text-accent text-xs px-2 py-0.5 bg-accent/20 rounded">Long</span>
                                <span className="text-white text-xs">10X</span>
                              </div>
                            </div>
                            
                            {/* 중앙 - 수익률 (큰 텍스트) */}
                            <div className="text-center my-3">
                              <p className={`font-black text-4xl mb-2 ${card.pnl >= 0 ? 'text-green-500' : 'text-pink-500'}`}>
                                {card.pnl >= 0 ? '+' : ''}{card.pnl}%
                              </p>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between text-gray-400">
                                  <span>Last Price</span>
                                  <span className="text-white">{card.lastPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                  <span>Avg. Open Price</span>
                                  <span className="text-white">{card.avgPrice.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* 하단 - 사용자 정보 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-accent/30 flex items-center justify-center">
                                  <span className="text-xs">👤</span>
                                </div>
                                <div>
                                  <p className="text-white text-xs font-medium">Card {card.id}</p>
                                  <p className="text-gray-500 text-[10px]">{new Date().toLocaleString('en-US', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                              </div>
                              <div className="text-[10px] text-gray-500">
                                Code
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                </div>
              )}

              {/* 슬라이드 인디케이터 */}
              <div className="flex gap-3 justify-center mt-16">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSection 
                        ? 'w-12 bg-accent' 
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`섹션 ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
