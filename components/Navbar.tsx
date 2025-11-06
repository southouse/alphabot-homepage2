'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-white hover:text-accent transition-colors">
            AlphaBot
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link href="#features" className="text-white hover:text-accent transition-colors text-base font-medium">
              기능
            </Link>
            <Link href="#performance" className="text-white hover:text-accent transition-colors text-base font-medium">
              성과
            </Link>
            <Link href="#pricing" className="text-white hover:text-accent transition-colors text-base font-medium">
              가격
            </Link>
            <Link href="#about" className="text-white hover:text-accent transition-colors text-base font-medium">
              소개
            </Link>
          </div>
          
          <div className="flex items-center">
            <Link 
              href="#contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-accent-dark to-purple text-white rounded-md font-semibold text-base hover:shadow-lg hover:shadow-purple/60 hover:from-purple hover:to-accent-dark transition-all"
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
