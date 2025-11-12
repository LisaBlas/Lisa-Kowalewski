import React from "react";
import Navbar from "@/Navbar";
import HeroSection from "@/HeroSection";
import ProjectsSection from "@/ProjectsSection";
import AboutSection from "@/AboutSection";
import StorySection from "@/StorySection";
import ScrollTopButton from "@/ScrollTopButton";
import Footer from "@/Footer";

const App = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 antialiased">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-emerald-200 via-emerald-300 to-emerald-400 opacity-20 blur-2xl dark:opacity-0"></div>
          <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-emerald-300 via-emerald-400 to-emerald-500 opacity-40 blur-3xl dark:opacity-0"></div>
          <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-emerald-300 via-emerald-200 to-emerald-100 opacity-60 blur-3xl dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-400 dark:opacity-64"></div>
        </div>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <StorySection />
        <Footer />
        <ScrollTopButton />
      </div>
    </div>
  );
};

export default App;
