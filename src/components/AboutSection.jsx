import React from "react";

const AboutSection = () => {
  return (
    <section className="py-32 px-6 bg-white relative" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid-cols-2 items-start grid grid-cols-1 gap-16">
          <div>
            <p className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-none">
              <span>ABOUT</span>
              <br />
              <span>ME</span>
            </p>
            <div className="bg-yellow-400 h-3 w-40 mb-8 transform -rotate-2"></div>
            <div className="text-lg text-gray-700 font-semibold space-y-6">
              <p className="pl-6 py-2 border-l-8 border-emerald-500 text-xl md:text-2xl font-normal">In my design work, I focus on creating things that matter - solutions that actually solve problems and have real value for people. I care less about perfect pixels and more about building complete experiences that make sense from start to finish and can be sustained over time. My process is grounded in known best practices and real evidence - testing early and often to learn what works. I aim for that state between polish and purpose, where the design feels appropriate and is ready to deliver the desired impact.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-14 border-6 border-gray-900 p-8 transform -rotate-1">
              <div className="transform rotate-1">
                <p className="text-4xl font-black text-gray-900 mb-6">WHAT I OFFER</p>
                <ul className="space-y-4">
                  <li className="items-start flex gap-4">
                    <span className="text-3xl font-black text-emerald-500">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900">User Research and Testing</p>
                      <p className="text-gray-600 font-semibold text-xl">Actionable quantitative and qualitative insights</p>
                    </div>
                  </li>
                  <li className="items-start flex gap-4">
                    <span className="text-3xl font-black text-emerald-500">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900">Service/UI/UX Design</p>
                      <p className="text-gray-600 font-semibold text-xl">From individual touchpoints to holistic journeys</p>
                    </div>
                  </li>
                  <li className="items-start flex gap-4">
                    <span className="text-3xl font-black text-emerald-500">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900">Workshops and Facilitation</p>
                      <p className="text-gray-600 font-semibold text-xl">Developing and leading workshops (for all ages)</p>
                    </div>
                  </li>
                  <li className="items-start mb-2 flex gap-4">
                    <span className="text-3xl font-black text-emerald-500">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900">Strategic Design and Visioning</p>
                      <p className="text-gray-600 font-semibold text-xl">Tackling systems and imagining possibilities</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-400 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-6 border-gray-900 p-8 transform rotate-1">
              <div className="transform -rotate-1">
                <p className="text-4xl font-black text-gray-900 mb-6">LET'S TALK!</p>
                <p className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb4'">Got a project in mind? I'd love to hear about it:</p>
                <div className="space-y-4">
                  <div className="items-center flex gap-4 text-3xl">
                    <div>
                       <a href="mailto:lisa.kowalewski.designs@gmail.com" className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 break-all hover:text-white transition-colors">
                         lisa.kowalewski.designs<br className="sm:hidden" />
                         @gmail.com
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
