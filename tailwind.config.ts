import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 메인 컬러 - 더 어두운 네이비 톤
        primary: {
          DEFAULT: '#0A1E4A', // 어두운 네이비 블루
          dark: '#050A1E', // 딥 네이비 블루 RGB(5, 10, 30)
          light: '#1A3A6E', // 미디엄 네이비 블루
        },
        // 서브 컬러 (강조) - 밝기 줄임
        accent: {
          DEFAULT: '#4A90E2', // 차분한 블루 (밝기 낮춤)
          dark: '#3D5A9E', // 어두운 블루
          light: '#5AA8FF', // 밝은 블루 (덜 밝게)
        },
        cyan: {
          DEFAULT: '#4A90E2', // 사이언 강조 (밝기 낮춤)
          bright: '#5AA8FF',
          glow: '#66D9EF',
        },
        purple: {
          DEFAULT: '#506EFF', // 보라빛 블루
          pink: '#C850A0', // 핑크-퍼플 (밝기 낮춤)
          deep: '#6A00C8', // 진한 퍼플
        },
        mint: {
          DEFAULT: '#5ACCB8', // 민트 (밝기 낮춤)
        },
        blue: {
          DEFAULT: '#4A90E2',
          gradient: {
            start: '#0A1E4A',
            end: '#1A3A6E',
          }
        },
        dark: {
          DEFAULT: '#050A1E', // 딥 네이비 블루 베이스
          lighter: '#0A1430',
          light: '#0F1F3F',
        },
        gray: {
          DEFAULT: '#808080',
          dark: '#4A4A4A',
          light: '#B3B3B3',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
