import React from "react";
import bundid from "../Images/bundid.jpg";
import koln from "../Images/koln.jpg";
import foster from "../Images/foster.png";
import steuer from "../Images/steuer.jpg";
import tele from "../Images/tele.png";
import test from "../Images/test.JPG";
import think from "../Images/think.png";
import solar from "../Images/solar.jpg";
const cardBaseClasses =
  "bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-6 border-gray-900 overflow-hidden transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
const tagBaseClasses = "px-4 py-2 font-bold text-sm border-2 border-gray-900";

const ProjectsSection = () => {
  return (
    <section className="py-32 px-6 bg-emerald-50 relative" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-none tracking-tight">
            <span>SELECTED</span>
            <br />
            <span>PROJECTS*</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 h-2 w-32" />
            <p className="text-xl font-bold text-gray-600">
              *Some things I do, I've done and am proud of
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                alt="Project 1"
                src={solar}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 transform rotate-3 bg-yellow-400 px-4 py-2 text-sm font-black text-gray-900">
                IN PROGRESS!
              </div>
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">Solarpunk Futures Workshop</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                Imagination session to explore the future of nature and food in cities.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>Freelance</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Speculative Design</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Facilitation</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                alt="Project 2"
                src={think}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 transform rotate-3 bg-yellow-400 px-4 py-2 text-sm font-black text-gray-900">
                IN PROGRESS!
              </div>
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">DoubleThink</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                Creating learning experiences and tools to train critical thinking and media literacy.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>Freelance</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>UI/UX Design</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Learning Design</span>
                <span className={`${tagBaseClasses} bg-emerald-700 text-white`}>Cursor/Replit</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                alt="Project 3"
                src={test}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">Educational Materials</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                Creating engaging and practical learning materials for children and teens.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>With: KATE e.V.</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Learning Design</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Graphics &amp; Illustration</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                alt="Project 4"
                src={koln}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">Formularwerkstatt</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                Redesigning complicated forms and letters with the social services team in a sprint format.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>With: PwC/City of Cologne</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Service/UX Design</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>UX Writing</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                src={bundid}
                alt="BundID Design Relaunch"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">BundID Design Relaunch</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                Making the service more attractive, usable and clear. Evidence-based design through qualitative and quantitative testing.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>With: PwC/German Federal Ministry</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Qual./Quant. Testing</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Service/UX Design</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                alt="Project 5"
                src={steuer}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">Steuerlotse für Rentner*innen</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                Making the compulsory tax return for pensioners digital, legally correct and approachable.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>With: Tech4Germany/German Federal Ministry</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Service/UX Design</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>UX Writing</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                alt="Project 6"
                src={foster}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">Fostering Service Transformation</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                In-depth discovery phase followed by implementation of new online and offline touchpoints to recruit more foster carers.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>With: Stockport Council (UK)</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Qual./Quant. Research</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Service/UX Design</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Business Analysis</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className={cardBaseClasses}>
            <div className="relative h-80 bg-emerald-100 overflow-hidden">
              <img
                alt="Project 7"
                src={tele}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <p className="mb-3 text-4xl font-black text-gray-900">Telecare Service Pilot</p>
              <p className="mb-6 text-xl font-semibold text-gray-700">
                Launching a new fast-track service to improve uptake and effectiveness of assistive technology for vulnerable people at home.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className={`${tagBaseClasses} bg-yellow-400 text-gray-900`}>With: Stockport Council (UK)</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Service/UX Design</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>User Research</span>
                <span className={`${tagBaseClasses} bg-emerald-500 text-white`}>Performance Evaluation</span>
              </div>
              <a className="inline-flex items-center text-lg font-black text-gray-900 transition-transform hover:translate-x-2">
                VIEW PROJECT →
              </a>
            </div>
          </div>

          <div className="max-w-xl bg-yellow-400 border-6 border-gray-900 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="transform -rotate-1">
              <p className="text-2xl font-black text-gray-900 mb-2">LOOKING FOR SOMETHING SPECIFIC?</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Get in touch for more details on these or other projects.
              </p>
              <a
                href="mailto:lisa.kowalewski.designs@gmail.com"
                className="inline-block px-6 py-3 text-lg font-bold text-gray-900 bg-white border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-1 hover:translate-y-1"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

