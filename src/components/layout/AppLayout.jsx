import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-black text-gray-200">
      
      {/* Background Glow Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-100 h-100 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
