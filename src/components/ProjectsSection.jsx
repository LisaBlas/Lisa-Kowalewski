import React from "react";

const ProjectsSection = () => {
  return (
    <section className="py-32 px-6 bg-emerald-50 dark:bg-neutral-900 relative" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-7xl md:text-8xl font-black text-gray-900 mb-4 leading-none dark:text-emerald-400">
            <span>SELECTED</span>
            <br />
            <span>PROJECTS*</span>
          </p>
          <div className="items-center flex gap-4">
            <div className="bg-yellow-400 dark:bg-yellow-500 h-2 w-32"></div>
            <p className="text-xl font-bold text-gray-600 dark:text-gray-400">*Things I do, I've done and am proud of</p>
          </div>
        </div>
        <div className="lg:grid-cols-2 grid grid-cols-1 gap-8">
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 1" src="https://placehold.co/600x400/10b981/ffffff?text=E-Commerce+Platform" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
              <div className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-4 py-2 font-black text-sm absolute top-4 right-4 transform rotate-3">NEW!</div>
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">E-Commerce Platform</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">A full-stack shopping experience with real-time inventory and AI-powered recommendations.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">React</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Node.js</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">MongoDB</span>
              </div>
              <a href="/project" className="items-center text-lg font-black text-gray-900 inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 2" src="https://placehold.co/600x400/059669/ffffff?text=Design+System" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Design System</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Comprehensive component library used by 50+ developers across multiple products.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">Figma</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Storybook</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">TypeScript</span>
              </div>
              <a href="/qNOz6mFgqjUpQUY9wH40#" className="items-center text-lg font-black text-gray-900 inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 3" src="https://placehold.co/600x400/047857/ffffff?text=Mobile+App" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Fitness Tracker App</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Mobile-first health tracking app with gamification elements and social features.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">React Native</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Firebase</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Swift</span>
              </div>
              <a href="/qNOz6mFgqjUpQUY9wH40#" className="items-center text-lg font-black text-gray-900 inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 4" src="https://placehold.co/600x400/065f46/ffffff?text=Dashboard+Analytics" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
              <div className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-4 py-2 font-black text-sm absolute top-4 right-4 transform rotate-3">FEATURED</div>
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Analytics Dashboard</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Real-time data visualization platform processing millions of events daily.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">Vue.js</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">D3.js</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Python</span>
              </div>
              <a href="/qNOz6mFgqjUpQUY9wH40#" className="items-center text-lg font-black text-gray-900 inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
