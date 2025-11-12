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
    <div className="bg-white text-gray-800 antialiased">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-emerald-200 via-emerald-300 to-emerald-400 opacity-20 blur-2xl"></div>
          <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-emerald-300 via-emerald-400 to-emerald-500 opacity-40 blur-3xl"></div>
          <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b absolute top-28 left-1/4 from-emerald-300 via-emerald-200 to-emerald-100 opacity-60 blur-3xl"></div>
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
