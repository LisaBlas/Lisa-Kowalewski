import React, { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      // Fallback: show after scrolling 200px if hero not found
      const onScroll = () => setVisible(window.scrollY > 200);
      onScroll();
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 hover:translate-x-1 hover:translate-y-1 transition-transform border-4 border-gray-900 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 transform rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        id="Windframe_1lF5jNG3u"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
};

export default ScrollTopButton;
