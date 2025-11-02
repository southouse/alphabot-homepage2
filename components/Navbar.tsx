'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-xl border-b border-accent/40"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-primary transition-colors">
            AlphaBot
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              기능
            </Link>
            <Link href="#performance" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              성과
            </Link>
            <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              가격
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              소개
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="#contact" 
              className="px-6 py-2 bg-gradient-to-r from-accent-dark to-purple text-white rounded-md font-bold text-sm hover:shadow-lg hover:shadow-purple/60 hover:from-purple hover:to-accent-dark transition-all"
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
