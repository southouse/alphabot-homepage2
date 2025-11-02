# Alpha Bot - AI 자동매매 솔루션

감정은 지우고, 수익은 쌓는다. 1000만원을 2억 2천으로 만든 AI 자동매매 '알파봇'의 랜딩 페이지입니다.

## 프로젝트 소개

이 프로젝트는 AI 자동매매 솔루션 "알파봇"의 마케팅 웹사이트로, [bitplanet.co.kr](https://bitplanet.co.kr)의 디자인 스타일을 참고하여 제작되었습니다.

## 주요 특징

- ✨ **다크 테마**: 어두운 배경에 보라/인디고, 청록색 그라데이션
- 🎨 **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- 🎭 **Framer Motion**: 부드러운 애니메이션과 전환 효과
- ⚡ **Next.js 14**: App Router 사용
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 최적화

## 핵심 성과 (표시 내용)

- 📊 **2220%** - 2020-2025년 백테스트 수익률
- 🎯 **86.1%** - 압도적인 승률
- ⏰ **24/7** - 감정 없는 자동매매

## 디자인 요소

### 색상 팔레트
- **Primary**: 인디고/보라 계열 (`#4F46E5`)
- **Accent**: 청록색 (`#06B6D4`)
- **Dark**: 다크 네이비 배경 (`#0F172A`)

### 애니메이션
- 페이드 인/아웃
- 스크롤 애니메이션
- 호버 효과
- 플로팅 애니메이션
- 그라데이션 펄스 효과

## 시작하기

### 설치

\`\`\`bash
npm install
\`\`\`

### 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

\`\`\`bash
npm run build
npm start
\`\`\`

## 페이지 구조

1. **Hero 섹션**: 메인 헤드라인, 핵심 성과 3가지, CTA 버튼
2. **Solution & Features**: 알파봇의 3가지 주요 기능
3. **How it Works**: 3단계 자동매매 프로세스
4. **Proof & Results**: 백테스트 & 실제 계좌 성과
5. **Final CTA**: 최종 행동 유도 및 연동 안내

## 프로젝트 구조

\`\`\`
├── app/
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 홈 페이지
│   └── globals.css      # 전역 스타일
├── components/
│   ├── Navbar.tsx       # 네비게이션 바
│   ├── Hero.tsx         # 히어로 섹션 (메인 헤드라인 + 성과)
│   ├── Features.tsx     # Solution & Features (3가지 기능)
│   ├── Introduction.tsx # How it Works (3단계 프로세스)
│   ├── MainFeatures.tsx # Proof & Results + Final CTA
│   └── Footer.tsx       # 푸터
├── tailwind.config.ts   # Tailwind 설정
└── package.json
\`\`\`

## 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Font**: Inter (Google Fonts)
