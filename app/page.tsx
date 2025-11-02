import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Introduction from "@/components/Introduction";
import MainFeatures from "@/components/MainFeatures";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      {/* 전체 페이지 공통 배경 블러 효과 - 어두운 네이비 톤 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[900px] h-[900px] bg-accent-dark/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[15%] w-[800px] h-[800px] bg-primary-light/25 rounded-full blur-[100px]"></div>
        <div className="absolute top-[70%] left-[20%] w-[700px] h-[700px] bg-accent/22 rounded-full blur-[110px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[850px] h-[850px] bg-purple/18 rounded-full blur-[90px]"></div>
        <div className="absolute top-[25%] left-[50%] w-[750px] h-[750px] bg-purple-deep/15 rounded-full blur-[130px]"></div>
        <div className="absolute top-[60%] right-[40%] w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Introduction />
        <MainFeatures />
        <Footer />
      </div>
    </main>
  );
}
