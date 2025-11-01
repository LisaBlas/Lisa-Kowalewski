import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white/90 dark:bg-neutral-950/90 fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b-4 border-yellow-400 dark:border-yellow-500">
      <div className="mx-auto px-6 py-4 max-w-7xl">
        <div className="items-center justify-between flex">
          <a href="/" className="text-2xl font-black text-gray-900 dark:text-yellow-400">LISA.KOWALEWSKI</a>
          <div className="items-center flex gap-8">
            <a href={`${import.meta.env.BASE_URL}#projects`} className="text-lg font-bold text-gray-900 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">PROJECTS</a>
            <a href={`${import.meta.env.BASE_URL}#about`} className="text-lg font-bold text-gray-900 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors text-lg font-bold text-gray-900">ABOUT</a>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-3 border-gray-900 hover:translate-x-1 hover:translate-y-1 transition-transform">CV</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;