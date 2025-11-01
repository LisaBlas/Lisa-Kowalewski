import React from "react";
import bundid from './Images/bundid.jpg';
import koln from './Images/koln.jpg';
import foster from './Images/foster.png';
import steuer from './Images/steuer.jpg';
import tele from './Images/tele.png';
import test from './Images/test.JPG';

const ProjectsSection = () => {
  return (
    <section className="py-32 px-6 bg-emerald-50 dark:bg-neutral-900 relative" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-7xl md:text-8xl font-black text-gray-900 mb-4 leading-none dark:text-emerald-400 lg:grid-cols-2 grid grid-cols-1 gap-8">
            <span>SELECTED</span>
            <br />
            <span>PROJECTS*</span>
          </p>
          <div className="items-center flex gap-4">
            <div className="bg-yellow-400 dark:bg-yellow-500 h-2 w-32"></div>
            <p className="text-xl font-bold text-gray-600 dark:text-gray-400">*Some things I do, I've done and am proud of</p>
          </div>
        </div>
        <div className="lg:grid-cols-2 grid grid-cols-1 gap-8">
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 1" src="https://placehold.co/600x400/10b981/ffffff?text=Working on it!" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
              <div className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 px-4 py-2 font-black text-sm absolute top-4 right-4 transform rotate-3">NEW!</div>
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Solarpunk Futures Workshop</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Imagination session to explore the future of nature and food in cities.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">Freelance</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Speculative Design</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Facilitation</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 3" src="https://placehold.co/600x400/047857/ffffff?text=Preview coming" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Think Twice</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Creating learning experiences and tools to train critical thinking and media literacy.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">Freelance</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">UI/UX Design</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-400 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Learning Design</span>
                <span className="px-4 py-2 bg-emerald-700 dark:bg-emerald-400 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Cursor/Replit</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 4" src={test} className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Educational Materials</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Creating engaging and practical learning materials for children and teens.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">With: KATE e.V.</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Learning Design</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Graphics and Illustration</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 4" src={koln} className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Formularwerkstatt</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Redesigning complicated forms and letters with the social services team in a sprint format.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">With: PwC/City of Cologne</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Service/UX Design</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">UX Writing</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img src={bundid} alt="description" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">BundID Design Relaunch</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Making the service more attractive, useable and clear. Evidence based design through qualitative and quantitative Testing.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">With: PwC/german Federal Ministry</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Qual./quant. Testing</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Service/UX Design</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 4" src={steuer} className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Steuerlotse für Rentner*innen</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Making the compulsory tax return for pensioners digital, legally correct and approachable.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">With: Tech4Germany/german Federal Ministry</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Service/UX Design</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">UX Writing</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 4" src={foster} className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Fostering Service Transformation</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">In depth discovery phase followed by implementation of new online and offline touchpoints to recruit more foster carers.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">With: Stockport Council (UK)</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Qual./Quant. Research</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Service/UX Design</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Business Analysis</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group border-6 border-gray-900 dark:border-emerald-600 overflow-hidden dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(5,150,105,1)] transition-all duration-300">
            <div className="h-80 bg-emerald-100 dark:bg-emerald-900 relative overflow-hidden">
              <img alt="Project 4" src={tele} className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full" />
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-gray-900 mb-3 dark:text-emerald-400">Telecare Service Pilot</p>
              <p className="text-xl text-gray-700 mb-6 font-semibold dark:text-gray-300">Launching a new fast-track service to improve uptake and effectiveness of assistive technology for vulnerable people at home.</p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold text-sm border-2 border-gray-900">With: Stockport Council (UK)</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Service/UX Design</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">User Research</span>
                <span className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white font-bold text-sm border-2 border-gray-900 dark:border-emerald-400">Performance Evaluation</span>
              </div>
              <a className="items-center text-lg font-black text-white inline-flex dark:text-yellow-400 hover:translate-x-2 transition-transform">VIEW PROJECT →</a>
            </div>
          </div>
          <div className="max-w-xl bg-yellow-400 dark:bg-yellow-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-6 border-gray-900 dark:border-emerald-600 p-8 dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] transform rotate-1">
                <div className="transform -rotate-1">
                  <p className="text-2xl font-black text-gray-900 mb-2">LOOKING FOR SOMETHING SPECIFIC?</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4 ">Get in touch for more details on these or other projects.</p>
                  <a href="mailto:lisa.kowalewski.designs@gmail.com" className="inline-block px-6 py-3 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white font-bold text-lg border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform">Email me</a>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
