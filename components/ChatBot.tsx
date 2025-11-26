"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "안녕하세요! 👋\nAlpha Bot에 관심 가져주셔서 감사합니다.\n궁금하신 점을 말씀해주세요."
    }
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const botReply: Record<string, string> = {
    "💰 수익률이 궁금해요": "우리 Alpha Bot의 평균 수익률은 월 5~10% 정도입니다.",
    "📊 백테스트 결과는?": "지난 1년간의 백테스트 결과, 승률 78%를 기록했습니다.",
    "🔒 안전성은 어떤가요?": "Alpha Bot은 리스크 관리 알고리즘을 적용하여 안전성을 최대화했습니다.",
    "💬 상담 직원 연결하기(카카오톡)":
      "오픈 카카오톡을 통해 메시지 남겨주시면 상담 직원이 친절하게 답변 해드립니다! 🤖",
    "💬 상담 직원 연결하기(텔레그램)":
      "텔레그램을 통해 메시지 남겨주시면 상담 직원이 친절하게 답변 해드립니다! 🤖"
  };

  const sendMessage = (msg?: string) => {
    const text = msg ?? input;
    if (!text.trim()) return;

    // 유저 메시지 추가
    setMessages(prev => [...prev, { from: "user", text }]);

    // 봇 답변 추가 (빠른 질문일 경우)
    if (botReply[text]) {
      setTimeout(() => {
        setMessages(prev => [...prev, { from: "bot", text: botReply[text] }]);
      }, 500);
    }

    setInput("");
  };

  return (
    <>
      {/* 챗봇 버튼 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-gradient-to-br from-accent via-purple to-primary shadow-lg shadow-accent/50 flex items-center justify-center group hover:shadow-xl hover:shadow-accent/70 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
        <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping"></span>
      </motion.button>

      {/* 챗봇 창 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-8 z-40 w-96 h-[500px] bg-gradient-to-br from-[rgba(15,23,42,0.95)] to-[rgba(30,41,59,0.95)] backdrop-blur-xl rounded-2xl shadow-2xl border border-accent/20 overflow-hidden"
          >
            {/* 헤더 */}
            <div className="p-4 border-b border-accent/20 bg-gradient-to-r from-accent/10 to-primary/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-mint animate-pulse"></span>
                Alpha Bot 상담
              </h3>
              <p className="text-sm text-gray-400 mt-1">무엇을 도와드릴까요?</p>
            </div>

            {/* 채팅 영역 */}
            <div className="p-4 h-[360px] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3"
                  >
                    {msg.from === "bot" ? (
                      <>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-primary flex-shrink-0 flex items-center justify-center">
                          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="bg-accent/10 rounded-lg rounded-tl-none p-3 border border-accent/20">
                            <p className="text-sm text-gray-200 whitespace-pre-line">
                              {msg.text.split("\n").map((line, i) => (
                                <span key={i}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex-1 text-right">
                        <div className="inline-block bg-primary text-white p-3 rounded-lg rounded-tr-none">
                          <p className="text-sm whitespace-pre-line">{msg.text}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* 빠른 질문 버튼 */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">빠른 질문</p>
                  <div className="flex flex-col gap-2">
                    {[
                      "💰 수익률이 궁금해요",
                      "📊 백테스트 결과는?",
                      "🔒 안전성은 어떤가요?",
                      "💬 상담 직원 연결하기(카카오톡)",
                      "💬 상담 직원 연결하기(텔레그램)"
                    ].map((q, idx) => (
                      <button
                        key={idx}
                        className="text-left p-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors text-sm text-gray-200"
                        onClick={() => {
                          if (q === "💬 상담 직원 연결하기(카카오톡)") {
                            // ✅ 메시지 추가 + 링크 열기
                            setMessages(prev => [...prev, { from: "bot", text: botReply[q] }]);
                            window.open("https://open.kakao.com/o/sxG0Yfeh", "_blank");
                          } if (q === "💬 상담 직원 연결하기(텔레그램)"){
                            // ✅ 메시지 추가 + 링크 열기
                            setMessages(prev => [...prev, { from: "bot", text: botReply[q] }]);
                            window.open("https://t.me/Alpha_bot1004", "_blank");
                          }
                          else {
                            sendMessage(q);
                          }
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 입력창 */}
            <div className="p-4 border-t border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-2 bg-[rgba(15,23,42,0.6)] border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent/40 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-accent to-primary rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
