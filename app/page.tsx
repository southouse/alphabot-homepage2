import VideoIntro from "@/components/VideoIntro";
import RealData from "@/components/RealData";
import TradingCards from "@/components/TradingCards";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Introduction from "@/components/Introduction";
import MainFeatures from "@/components/MainFeatures";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      {/* 전체 페이지 공통 배경 블러 효과 - 은하수 느낌: 어두운 곳은 확실히 어둡게 */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 어두운 베이스 (진한 파란색/보라) - 더 어둡게 */}
        <div className="absolute top-[8%] left-[10%] w-[700px] h-[700px] bg-primary-dark/60 rounded-full blur-[150px]"></div>
        <div className="absolute top-[45%] left-[0%] w-[650px] h-[650px] bg-primary-light/45 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[15%] right-[15%] w-[600px] h-[600px] bg-accent-dark/50 rounded-full blur-[135px]"></div>
        <div className="absolute top-[30%] right-[5%] w-[550px] h-[550px] bg-purple-deep/35 rounded-full blur-[145px]"></div>
        
        {/* 은하수 효과 - 밝은 부분 (좁고 선명하게) */}
        <div className="absolute top-[18%] right-[25%] w-[400px] h-[400px] bg-white/25 rounded-full blur-[80px]"></div>
        <div className="absolute top-[55%] right-[8%] w-[380px] h-[380px] bg-cyan-bright/30 rounded-full blur-[75px]"></div>
        <div className="absolute bottom-[12%] left-[30%] w-[420px] h-[420px] bg-mint/28 rounded-full blur-[85px]"></div>
        <div className="absolute top-[40%] left-[45%] w-[350px] h-[350px] bg-purple-pink/22 rounded-full blur-[90px]"></div>
        
        {/* 추가 어두운 영역 강화 */}
        <div className="absolute bottom-[40%] left-[0%] w-[500px] h-[500px] bg-primary-dark/55 rounded-full blur-[130px]"></div>
        <div className="absolute top-[0%] right-[0%] w-[480px] h-[480px] bg-accent-dark/45 rounded-full blur-[125px]"></div>
      </div>
      
      {/* 별처럼 반짝이는 하얀 점들 - 작고 더 투명하게 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.4)]"></div>
        <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_4px_rgba(255,255,255,0.35)]"></div>
        <div className="absolute top-[30%] left-[40%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.45)]"></div>
        <div className="absolute top-[45%] right-[15%] w-1 h-1 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_4px_rgba(255,255,255,0.35)]"></div>
        <div className="absolute top-[55%] left-[10%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.4)]"></div>
        <div className="absolute top-[70%] right-[40%] w-1 h-1 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_4px_rgba(255,255,255,0.4)]"></div>
        <div className="absolute top-[80%] left-[30%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_2px_rgba(255,255,255,0.35)]"></div>
        <div className="absolute bottom-[15%] right-[20%] w-1 h-1 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_4px_rgba(255,255,255,0.35)]"></div>
        <div className="absolute bottom-[25%] left-[50%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.4)]"></div>
        <div className="absolute top-[40%] left-[70%] w-1 h-1 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_4px_rgba(255,255,255,0.4)]"></div>
        <div className="absolute top-[65%] right-[50%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_2px_rgba(255,255,255,0.35)]"></div>
        <div className="absolute bottom-[35%] left-[15%] w-1 h-1 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_4px_rgba(255,255,255,0.45)]"></div>
        <div className="absolute top-[22%] right-[45%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.35)]"></div>
        <div className="absolute top-[58%] left-[55%] w-1 h-1 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_4px_rgba(255,255,255,0.38)]"></div>
        <div className="absolute bottom-[48%] right-[30%] w-0.5 h-0.5 bg-white/60 rounded-full blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.4)]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <VideoIntro />
        <RealData />
        <TradingCards />
        {/* <Hero /> */}
        <Features />
        <Introduction />
        <MainFeatures />
        <Footer />
      </div>
    </main>
  );
}
