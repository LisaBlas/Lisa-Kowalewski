import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-yellow-400">
      <div className="mx-auto px-6 py-10 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xl font-black leading-tight text-gray-900">LISA KOWALEWSKI |</p>
            <p className="text-xl font-black leading-tight text-gray-900">Design for Good</p>
            <p className="text-gray-800 leading-tight">
              <a href="mailto:lisa.kowalewski.designs@gmail.com" className="leading-tight transition-colors hover:text-yellow-600">
                lisa.kowalewski.designs@gmail.com
              </a>
            </p>
            <p className="text-gray-600 leading-tight">© 2025 Lisa Kowalewski. All rights reserved.</p>
          </div>
          <div className="space-y-2 leading-tight sm:text-right">
            <p className="text-gray-800 leading-tight">Website created with:</p>
            <p className="text-gray-800 leading-tight">Windframe and Cursor</p>
            <p className="text-gray-800 leading-tight">Hosted via Github</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


