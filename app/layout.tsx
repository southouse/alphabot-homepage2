import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha Bot - AI 자동매매 솔루션 | 감정은 지우고, 수익은 쌓는다",
  description: "1000만원을 2억 2천으로 만든 AI 자동매매 알파봇. 2220% 수익률, 86.1% 승률. 공포와 탐욕을 배제한 기계적 매매로 꾸준한 복리 수익을 경험하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
