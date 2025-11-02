'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              AlphaBot
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI 기반 전략으로 스마트한 트레이딩을 시작하세요.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">제품</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="#pricing" className="hover:text-white transition-colors">가격</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">기능</Link></li>
              <li><Link href="#algos" className="hover:text-white transition-colors">알고리즘</Link></li>
              <li><Link href="#screeners" className="hover:text-white transition-colors">스크리너</Link></li>
              <li><Link href="#backtesters" className="hover:text-white transition-colors">백테스터</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">리소스</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="#docs" className="hover:text-white transition-colors">문서</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors">블로그</Link></li>
              <li><Link href="#community" className="hover:text-white transition-colors">커뮤니티</Link></li>
              <li><Link href="#affiliates" className="hover:text-white transition-colors">제휴</Link></li>
              <li><Link href="#support" className="hover:text-white transition-colors">지원</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">회사</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="#about" className="hover:text-white transition-colors">소개</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors">채용</Link></li>
              <li><Link href="#privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><Link href="#terms" className="hover:text-white transition-colors">이용약관</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
            <p>© 2025 AlphaBot. All rights reserved.</p>
            <p className="mt-4 md:mt-0 text-center md:text-right max-w-2xl">
              트레이딩과 투자는 위험합니다. 과거 성과가 미래 결과를 보장하지 않습니다. 모든 콘텐츠는 재정 조언이 아닙니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
