import React from "react";

const ScrollTopButton = () => {
  return (
    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} type="submit" className="fixed bottom-8 right-8 z-50 p-4 hover:translate-x-1 hover:translate-y-1 transition-transform border-4 border-gray-900 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <svg className="w-8 h-8 text-gray-900 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_1lF5jNG3u"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /> </svg>
    </button>
  );
};

export default ScrollTopButton;
