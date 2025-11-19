'use client';

import { motion } from 'framer-motion';

export default function VideoIntro() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-4 md:px-6">
      {/* Hero: 물결치는 오로라 느낌 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 오른쪽 상단 블루 오로라 - 파도치는 형태 */}
        <div className="absolute right-[-15%] top-[-25%] h-[280px] w-[620px] rotate-[-35deg]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.95)_0%,rgba(37,99,235,0.85)_35%,rgba(29,78,216,0.6)_60%,rgba(15,23,42,0)_100%)] opacity-80 blur-[22px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(96,165,250,0.8)_0%,rgba(59,130,246,0.5)_45%,rgba(15,23,42,0)_100%)] opacity-70 blur-[18px]" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* 중앙 시안 오로라 - 구불구불한 형태 */}
        <div className="absolute left-[10%] top-[20%] h-[190px] w-[480px] rotate-[25deg]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(34,211,238,0.9)_0%,rgba(56,189,248,0.7)_40%,rgba(6,182,212,0.45)_70%,rgba(15,23,42,0)_100%)] opacity-70 blur-[20px]"></div>
          <div className="absolute top-[20%] left-[15%] h-[60%] w-[70%] bg-[radial-gradient(circle,rgba(103,232,249,0.75)_0%,rgba(34,211,238,0.4)_50%,rgba(15,23,42,0)_100%)] opacity-60 blur-[15px]"></div>
        </div>
        
        {/* 하단 인디고 오로라 - 번지는 형태 */}
        <div className="absolute left-[20%] bottom-[-10%] h-[160px] w-[420px] rotate-[15deg]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(99,102,241,0.85)_0%,rgba(79,70,229,0.65)_45%,rgba(67,56,202,0.35)_75%,rgba(15,23,42,0)_100%)] opacity-65 blur-[18px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="text-center space-y-6 md:space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-relaxed"
          >
            <span className="text-white">잠자는 동안에도</span>
            <span className="block bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(74,144,226,0.5)] mt-2 md:mt-3">
              트레이딩은 계속됩니다
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-accent/30 bg-dark/60"
          >
            {/* 내부 오버레이는 살짝만 남겨서 영상이 더 어둡고 선명하게 보이도록 */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/6 to-primary/10"></div>
            <iframe
              className="w-full h-full relative z-10"
              src="https://www.youtube.com/embed/kAGZdTcv384?si=9BP1U7Az9D_c5NR5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-2xl mx-auto pt-2 md:pt-4"
          >
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
              <span className="text-white">차트를 보며 고민하던 시간, 이제 당신의 삶을 위해 쓰세요</span>
              <br className="hidden md:block" />
              <span className="text-accent font-semibold block md:inline mt-2 md:mt-0">AI가 24시간 시장을 분석하고 최적의 타이밍에 매매합니다</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
