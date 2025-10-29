import React from "react";

const AboutSection = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-neutral-950 relative" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid-cols-2 items-start grid grid-cols-1 gap-16">
          <div>
            <p className="text-7xl md:text-8xl font-black text-gray-900 mb-8 leading-none dark:text-emerald-400">
              <span>ABOUT</span>
              <br />
              <span>ME</span>
            </p>
            <div className="bg-yellow-400 dark:bg-yellow-500 h-3 w-40 mb-8 transform -rotate-2"></div>
            <div className="text-lg text-gray-700 font-semibold space-y-6 dark:text-gray-300">
              <p className="pl-6 py-2 border-l-8 border-emerald-500 dark:border-emerald-600 text-2xl undefined sm:text-2xl font-semibold">My approach combines technical expertise with creative problem-solving. I believe the best products are born from understanding user needs deeply and iterating relentlessly. My approach combines technical expertise with creative problem-solving. I believe the best products are born from understanding user needs deeply and iterating relentlessly.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white dark:bg-neutral-800 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-14 border-6 border-gray-900 dark:border-yellow-500 p-8 dark:shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] transform -rotate-1">
              <div className="transform rotate-1">
                <p className="text-4xl font-black text-gray-900 mb-6 dark:text-yellow-400">WHAT I OFFER</p>
                <ul className="space-y-4">
                  <li className="items-start flex gap-4">
                    <span className="text-3xl font-black text-emerald-500 dark:text-yellow-400">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">Full-Stack Development</p>
                      <p className="text-gray-600 font-semibold text-xl dark:text-gray-400">End-to-end web application development</p>
                    </div>
                  </li>
                  <li className="items-start flex gap-4">
                    <span className="text-3xl font-black text-emerald-500 dark:text-emerald-400">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">UI/UX Design</p>
                      <p className="text-gray-600 font-semibold text-xl dark:text-gray-400">User-centered design and prototyping</p>
                    </div>
                  </li>
                  <li className="items-start flex gap-4">
                    <span className="text-3xl font-black text-emerald-500 dark:text-yellow-400">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">Technical Consulting</p>
                      <p className="text-gray-600 font-semibold text-xl dark:text-gray-400">Architecture and scalability solutions</p>
                    </div>
                  </li>
                  <li className="items-start mb-2 flex gap-4">
                    <span className="text-3xl font-black text-emerald-500 dark:text-emerald-400">→</span>
                    <div>
                      <p className="text-2xl font-black text-gray-900 dark:text-white">Workshops &amp; Training</p>
                      <p className="text-gray-600 font-semibold text-xl dark:text-gray-400">Team upskilling and mentorship</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-400 dark:bg-yellow-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-6 border-gray-900 dark:border-emerald-600 p-8 dark:shadow-[12px_12px_0px_0px_rgba(5,150,105,1)] transform rotate-1">
              <div className="transform -rotate-1">
                <p className="text-5xl font-black text-gray-900 mb-6">LET'S TALK!</p>
                <p className="text-2xl font-semibold text-gray-900 mb4'">Got a project in mind? I'd love to hear about it:</p>
                <div className="space-y-4">
                  <div className="items-center flex gap-4 text-3xl">
                    <div>
                      <a href="mailto:hello@developer.com" className="text-2xl font-bold text-gray-900 break-all hover:text-white transition-colors">hello@developer.com</a>
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
