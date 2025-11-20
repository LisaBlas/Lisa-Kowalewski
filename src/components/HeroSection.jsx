import React from "react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="items-center justify-center px-6 py-8 pt-40 min-h-screen flex relative" id="hero">
      <div className="mx-auto w-full max-w-7xl relative">
        <div className="w-32 h-32 bg-emerald-500 rounded-full absolute -top-10 -left-10 opacity-20"></div>
        <div className="w-24 h-24 bg-yellow-400 absolute top-20 -right-10 opacity-30"></div>
        <div className="bg-white shadow-2xl border-8 border-gray-900 p-12 transform rotate-1 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div style={{backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(0, 0, 0, 0.1) 35px, rgba(0, 0, 0, 0.1) 70px)"}} className="w-full h-full absolute top-0 left-0"></div>
          </div>
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 font-bold text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 z-20">
            OPEN TO WORK
          </div>
          <div className="transform -rotate-1 relative z-10">
            <p className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-6 leading-none tracking-tight relative">
              <span>DESIGN FOR</span>
              <br />
              <span>GOOD.</span>
            </p>
            <div className="mb-8 flex gap-4">
              <div className="bg-yellow-400 h-4 w-48"></div>
              <div className="bg-emerald-500 h-4 w-32"></div>
              <div className="bg-yellow-400 h-4 w-16"></div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Because useful, responsible design matters.</p>
            <p className="text-xl font-semibold text-gray-600 mb-8 pl-4 border-l-4 border-emerald-500">Freelance designer • Curious human • Urban farming enthusiast</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gray-900 text-white font-bold text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-gray-900 hover:translate-x-1 hover:translate-y-1 transition-transform cursor-pointer"
              >
                MY WORK
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-white text-gray-900 font-bold text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-gray-900 hover:translate-x-1 hover:translate-y-1 transition-transform cursor-pointer"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 justify-center flex">
          <div className="bg-yellow-400 rounded-full animate-bounce p-4">
            <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_VOUMODbNv"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /> </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;