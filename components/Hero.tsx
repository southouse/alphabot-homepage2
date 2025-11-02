'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/5 to-accent/5"></div>
      
      {/* Animated circles */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
              <span className="block text-white mb-2">감정은 지우고, 수익은 쌓는다</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                AI 자동매매 알파봇
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            전략을 찾는 #1 AI 에이전트, <span className="text-primary font-semibold">15,000명 이상의 트레이더가</span> 사용하는 최고의 트레이딩 지표로 구동됩니다.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6"
          >
            <button className="px-10 py-4 bg-primary text-black rounded-lg font-bold text-lg hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105">
              30일 무료 체험 시작하기
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-16"
          >
            <div className="p-8 rounded-xl bg-dark-lighter/50 border border-white/5 hover:border-primary/30 transition-all">
              <div className="text-5xl font-black text-primary mb-3">2220%</div>
              <div className="text-gray-400 text-lg">5년 백테스트<br />수익률</div>
            </div>
            <div className="p-8 rounded-xl bg-dark-lighter/50 border border-white/5 hover:border-primary/30 transition-all">
              <div className="text-5xl font-black text-primary mb-3">86.1%</div>
              <div className="text-gray-400 text-lg">승률<br />정확도</div>
            </div>
            <div className="p-8 rounded-xl bg-dark-lighter/50 border border-white/5 hover:border-primary/30 transition-all">
              <div className="text-5xl font-black text-primary mb-3">24/7</div>
              <div className="text-gray-400 text-lg">자동<br />매매</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/80 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
