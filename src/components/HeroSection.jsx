import React from "react";

const HeroSection = () => {
  return (
    <section className="items-center justify-center px-6 py-8 pt-40 min-h-screen flex relative">
      <div className="mx-auto w-full max-w-7xl relative">
        <div className="w-32 h-32 bg-emerald-500 dark:bg-emerald-600 rounded-full absolute -top-10 -left-10 opacity-20"></div>
        <div className="w-24 h-24 bg-yellow-400 dark:bg-yellow-500 absolute top-20 -right-10 opacity-30"></div>
        <div className="bg-white dark:bg-neutral-900 shadow-2xl border-8 border-gray-900 dark:border-emerald-500 p-12 transform rotate-1 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div style={{backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(0, 0, 0, 0.1) 35px, rgba(0, 0, 0, 0.1) 70px)"}} className="w-full h-full absolute top-0 left-0"></div>
          </div>
          <div className="transform -rotate-1 relative z-10">
            <p className="text-8xl md:text-9xl font-black text-gray-900 mb-6 leading-none tracking-tight dark:text-emerald-400 relative">
              <span>DESIGN FOR</span>
              <br />
              <span>GOOD.</span>
            </p>
            <div className="mb-8 flex gap-4">
              <div className="bg-yellow-400 dark:bg-yellow-500 h-4 w-48"></div>
              <div className="bg-emerald-500 dark:bg-emerald-600 h-4 w-32"></div>
              <div className="bg-yellow-400 dark:bg-yellow-500 h-4 w-16"></div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 dark:text-gray-300">Building digital experiences that make people go "woah!"</p>
            <p className="text-xl font-semibold text-gray-600 mb-8 pl-4 dark:text-gray-400 border-l-4 border-emerald-500 dark:border-emerald-600">Full-stack developer • UI/UX enthusiast&nbsp;</p>
            <div className="flex flex-wrap gap-4">
              <a href="/qNOz6mFgqjUpQUY9wH40#projects" className="px-8 py-4 bg-gray-900 dark:bg-yellow-500 text-white font-bold text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:text-gray-900 border-4 border-gray-900 dark:border-yellow-500 hover:translate-x-1 hover:translate-y-1 transition-transform dark:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">VIEW WORK</a>
              <a href="/qNOz6mFgqjUpQUY9wH40#about" className="px-8 py-4 bg-white dark:bg-neutral-800 text-gray-900 font-bold text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:text-yellow-400 border-4 border-gray-900 dark:border-yellow-500 hover:translate-x-1 hover:translate-y-1 transition-transform dark:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">GET IN TOUCH</a>
            </div>
          </div>
        </div>
        <div className="mt-12 justify-center flex">
          <div className="bg-yellow-400 dark:bg-yellow-500 rounded-full animate-bounce p-4">
            <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_VOUMODbNv"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /> </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
