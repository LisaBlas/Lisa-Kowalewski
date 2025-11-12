import React from "react";
import Navbar from "@/Navbar";

const Project = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <div className="relative isolate overflow-hidden min-h-screen">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-emerald-200 via-emerald-300 to-emerald-400 opacity-20 blur-2xl"></div>
          <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-emerald-300 via-emerald-400 to-emerald-500 opacity-40 blur-3xl"></div>
          <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b absolute top-28 left-1/4 from-emerald-300 via-emerald-200 to-emerald-100 opacity-60 blur-3xl"></div>
        </div>

        <Navbar />

        <main className="mx-auto max-w-5xl px-6 pt-28 pb-24">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 w-full mt-6">Project Title</h1>
            <p className="mt-4 text-lg font-semibold text-gray-700 w-full">
              Short description of the project highlighting the goal, context, and a brief outcome. Keep it concise and impactful.
            </p>
          </header>

          <section className="mb-10">
            <div className="aspect-video w-full overflow-hidden border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <img
                src="/windframe.svg"
                alt="Project preview"
                className="h-full w-full object-contain bg-white"
              />
            </div>
          </section>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Tags</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-yellow-400 text-gray-900 font-bold text-sm border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">UI/UX</span>
                <span className="px-4 py-2 bg-white text-gray-900 font-bold text-sm border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">React</span>
                <span className="px-4 py-2 bg-white text-gray-900 font-bold text-sm border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Tailwind</span>
              </div>
            </div>
            <div>
              <div className="bg-yellow-400 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-6 border-gray-900 p-8 transform rotate-1">
                <div className="transform -rotate-1">
                  <p className="text-2xl font-black text-gray-900 mb-2">LET'S TALK!</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">Interested in this project or something similar?</p>
                  <a href="mailto:hello@developer.com" className="inline-block px-6 py-3 bg-white text-gray-900 font-bold text-lg border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform">Email me</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Project;


