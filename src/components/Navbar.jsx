import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClasses =
    "text-lg font-bold text-gray-900 hover:text-yellow-500 transition-colors";
  const mobileLinkClasses = `${navLinkClasses} block w-full text-left`;

  return (
    <nav className="bg-white/90 fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b-4 border-yellow-400">
      <div className="mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <a
            href={import.meta.env.BASE_URL}
            className="text-2xl font-black text-gray-900 hover:text-yellow-500 transition-colors"
            onClick={closeMenu}
          >
            <span className="hidden sm:inline">LISA.KOWALEWSKI</span>
            <span className="sm:hidden">LISA.KOWALEWSKI</span>
          </a>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={toggleMenu}
              className="sm:hidden inline-flex flex-col justify-center items-center w-12 h-12 border-3 border-gray-900 bg-yellow-400 text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span className="block h-0.5 w-6 bg-gray-900"></span>
              <span className="block h-0.5 w-6 bg-gray-900 my-1"></span>
              <span className="block h-0.5 w-6 bg-gray-900"></span>
            </button>
            <div className="hidden sm:flex items-center gap-8">
              <button type="button" onClick={() => scrollToSection("projects")} className={navLinkClasses}>
                PROJECTS
              </button>
              <button type="button" onClick={() => scrollToSection("about")} className={navLinkClasses}>
                ABOUT
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("story")}
                className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-3 border-gray-900 hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                CV
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden border-t-4 border-gray-900 bg-white/95 px-6 py-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-3">
            <button type="button" onClick={() => scrollToSection("projects")} className={mobileLinkClasses}>
            PROJECTS
          </button>
            <button type="button" onClick={() => scrollToSection("about")} className={mobileLinkClasses}>
            ABOUT
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("story")}
            className="block w-1/6 self-start text-left px-4 py-2 bg-yellow-400 text-gray-900 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-3 border-gray-900 hover:translate-x-1 hover:translate-y-1 transition-transform"
          >
            CV
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;