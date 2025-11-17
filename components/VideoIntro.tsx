'use client';

import { motion } from 'framer-motion';

export default function VideoIntro() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-6">
      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="text-center space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-relaxed"
          >
            <span className="text-white">잠자는 동안에도</span>
            <span className="block bg-gradient-to-r from-accent-light via-cyan to-mint bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(74,144,226,0.5)] mt-3">
              트레이딩은 계속됩니다
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-accent/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/20"></div>
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
            className="text-center max-w-2xl mx-auto pt-4"
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              <span className="text-white">차트를 보며 고민하던 시간, 이제 당신의 삶을 위해 쓰세요</span>
              <br className="hidden md:block" />
              <span className="text-accent font-semibold">AI가 24시간 시장을 분석하고 최적의 타이밍에 매매합니다</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
