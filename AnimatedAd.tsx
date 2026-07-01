import { useEffect, useState } from "react";

export default function AnimatedAd() {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: "1s"}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: "2s"}} />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/30 animate-float"
          style={{
            width: `${3 + Math.random() * 6}px`,
            height: `${3 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Ad content - cycling through 4 phases */}
      <div className="relative z-10 h-full flex items-center justify-center p-6">
        {phase === 0 && (
          <div className="text-center animate-[fadeUp_0.6s_ease-out]">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-4 border border-white/20">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white font-semibold text-sm">LIVE NOW</span>
            </div>
            <h2 className="text-4xl font-black text-white leading-tight mb-3">
              Earn <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">PKR 5000</span><br />
              Daily From Home
            </h2>
            <p className="text-white/80 text-sm max-w-[280px] mx-auto">Join 1M+ users already earning with our platform</p>
            <div className="mt-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl"></span>
              ))}
              <span className="text-white/70 text-sm ml-2">4.9/5 Rating</span>
            </div>
          </div>
        )}
        
        {phase === 1 && (
          <div className="text-center animate-[fadeUp_0.6s_ease-out]">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl mb-4 animate-bounce">
              <span className="text-4xl">💰</span>
            </div>
            <h2 className="text-3xl font-black text-white mb-2">
              Instant Withdrawals
            </h2>
            <p className="text-white/80 text-sm max-w-[280px] mx-auto mb-4">
              Withdraw to EasyPaisa, JazzCash, NayaPay or SadaPay within minutes
            </p>
            <div className="flex justify-center gap-2">
              {["EP", "JC", "NP", "SP"].map((code, i) => (
                <div key={i} className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                  {code}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {phase === 2 && (
          <div className="text-center animate-[fadeUp_0.6s_ease-out]">
            <div className="text-6xl mb-3 animate-pulse"></div>
            <h2 className="text-3xl font-black text-white mb-2">
              40% Referral Bonus
            </h2>
            <p className="text-white/80 text-sm max-w-[280px] mx-auto mb-4">
              Invite friends and earn 40% commission on every package they buy!
            </p>
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-bold shadow-lg">
              Share & Earn →
            </div>
          </div>
        )}
        
        {phase === 3 && (
          <div className="text-center animate-[fadeUp_0.6s_ease-out]">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full mb-4 font-bold shadow-lg">
              <span className="text-xl"></span>
              <span>LIMITED OFFER</span>
            </div>
            <h2 className="text-4xl font-black text-white leading-tight mb-3">
              Start Earning<br />
              <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                In 30 Seconds
              </span>
            </h2>
            <p className="text-white/80 text-sm mb-4">No investment required for FREE plan</p>
            <button className="bg-white text-gray-900 font-bold px-8 py-3 rounded-full shadow-2xl hover:scale-105 transition inline-flex items-center gap-2">
              Get Started Free
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </button>
          </div>
        )}
      </div>

      {/* Bottom branding bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow">
              EP
            </div>
            <div>
              <div className="text-white font-bold text-sm">EarnPro</div>
              <div className="text-white/60 text-xs">Earn Smart, Live Better</div>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
            <span className="text-green-400 text-xs font-bold">1M+</span>
            <span className="text-white/60 text-xs">Users</span>
          </div>
        </div>
      </div>
    </div>
  );
}
