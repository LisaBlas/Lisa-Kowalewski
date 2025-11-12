import React from "react";

const StorySection = () => {
  return (
    <section className="py-32 px-6 bg-emerald-50 relative" id="story">
      <div className="mx-auto max-w-5xl text-center">
        <div className="bg-white border-8 border-emerald-500 p-12 transform -rotate-1">
          <div className="transform rotate-1">
            <p className="text-5xl md:text-6xl font-black text-gray-900 mb-6">WANT THE FULL STORY?</p>
            <p className="text-xl md:text-2xl font-normal text-gray-700 mb-8">
              Download my CV for a detailed look at my experience, education, and achievements. I will happily share my full portfolio on request - just email me!
            </p>
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:inline-flex mx-auto sm:mx-0 items-center justify-center gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-yellow-400 text-gray-900 font-black text-xl sm:text-2xl border-6 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-2 hover:translate-y-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Windframe_aRk7cZc1Q"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> </svg>
              DOWNLOAD CV (PDF)
            </a>
            <p className="mt-6 text-md font-regular leading-tight text-gray-600 sm:leading-relaxed">
              Last updated: November 2025. Contact me for a german version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;