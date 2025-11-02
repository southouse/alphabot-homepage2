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
        primary: {
          DEFAULT: '#00D4FF', // 밝은 시안 (LuxAlgo 스타일)
          dark: '#00A8CC',
          light: '#33E0FF',
        },
        accent: {
          DEFAULT: '#00FFD1', // 청록색
          dark: '#00CCB3',
          light: '#66FFE0',
        },
        dark: {
          DEFAULT: '#000000', // 순수 검은색
          lighter: '#0A0A0A',
          light: '#1A1A1A',
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
