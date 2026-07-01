import { useState } from "react";
import { ToastProvider } from "./components/Toast";
import { UserProvider } from "./context/UserContext";
import PageTransition from "./components/PageTransition";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Packages from "./screens/Packages";
import Referrals from "./screens/Referrals";
import Profile from "./screens/Profile";
import Tasks from "./screens/Tasks";
import AdContinue from "./screens/AdContinue";
import History from "./screens/History";
import Deposit from "./screens/Deposit";
import WithdrawScreen from "./screens/WithdrawScreen";
import "./firebase"; // Initialize Firebase

export type Screen =
  | "login"
  | "register"
  | "dashboard"
  | "packages"
  | "referrals"
  | "profile"
  | "tasks"
  | "adContinue"
  | "packageDetail"
  | "history"
  | "deposit"
  | "withdraw";

export type HistoryType = "withdraw" | "deposit" | "task" | "referral" | "balance";

function AppInner() {
  const [screen, setScreen] = useState<Screen>("login");
  const [historyType, setHistoryType] = useState<HistoryType>("withdraw");
  const [direction] = useState<"forward" | "back">("forward");

  const go = (s: Screen) => {
    setScreen(s);
  };
  const back = () => {
    setScreen("dashboard");
  };
  const openHistory = (type: HistoryType) => {
    setHistoryType(type);
    setScreen("history");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-0 md:p-4">
      <div className="w-full md:w-[420px] md:min-h-[860px] md:rounded-[40px] md:shadow-2xl md:overflow-hidden bg-white md:ring-8 md:ring-gray-900/80 relative">
        <PageTransition key={screen + direction}>
          {screen === "login" && (
            <Login onRegister={() => go("register")} onLogin={() => go("dashboard")} />
          )}
          {screen === "register" && (
            <Login onRegister={() => go("register")} onLogin={() => go("dashboard")} isRegister />
          )}
          {screen === "dashboard" && (
            <Dashboard
              onNav={go}
              onPackages={() => go("packages")}
              onTasks={() => go("tasks")}
              onProfile={() => go("profile")}
              onReferrals={() => go("referrals")}
            />
          )}
          {screen === "packages" && <Packages go={go} />}
          {screen === "packageDetail" && <Packages go={go} detailMode />}
          {screen === "referrals" && (
            <Referrals onBack={back} />
          )}
          {screen === "profile" && (
            <Profile onBack={back} go={go} onHistory={openHistory} />
          )}
          {screen === "tasks" && (
            <Tasks
              onBack={back}
              onComplete={() => go("adContinue")}
            />
          )}
          {screen === "adContinue" && (
            <AdContinue onBack={back} go={go} />
          )}
          {screen === "history" && (
            <History onBack={back} type={historyType} />
          )}
          {screen === "deposit" && (
            <Deposit onBack={back} />
          )}
          {screen === "withdraw" && (
            <WithdrawScreen onBack={back} />
          )}
        </PageTransition>
      </div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.7); }
          60% { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .btn-pop:active { animation: popIn 0.2s ease-out; }
        .hover-pop:hover { transform: scale(1.03); transition: transform 0.2s ease-out; }
        .hover-pop { transition: transform 0.2s ease-out; }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <ToastProvider>
        <AppInner />
      </ToastProvider>
    </UserProvider>
  );
}

export default App;
