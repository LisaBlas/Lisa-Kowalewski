import React from "react";

const StorySection = () => {
  return (
    <section className="py-32 px-6 bg-emerald-50 dark:bg-neutral-900 relative" id="story">
      <div className="mx-auto text-center max-w-5xl">
        <div className="bg-white dark:bg-neutral-800 border-8 border-emerald-500 dark:border-emerald-600 p-12 transform -rotate-1">
          <div className="transform rotate-1">
            <p className="text-5xl md:text-6xl font-black text-gray-900 mb-6 dark:text-emerald-400">WANT THE FULL STORY?</p>
            <p className="text-xl md:text-2xl font-normal text-gray-700 mb-8 dark:text-gray-300">Download my CV for a detailed look at my experience, education, and achievements. I will happily share my full portfolio on request - just email me!</p>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer" className="items-center px-8 sm:px-12 py-4 sm:py-6 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-black text-xl sm:text-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex sm:inline-flex mx-auto sm:mx-0 justify-center gap-4 border-6 border-gray-900 hover:translate-x-2 hover:translate-y-2 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_aRk7cZc1Q"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> </svg>
              DOWNLOAD CV (PDF)
            </a>
            <p className="text-md font-regular leading-tight sm:leading-relaxed text-gray-600 mt-6 dark:text-gray-400">Last updated: November 2025. Contact me for a german version.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;