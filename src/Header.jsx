import React, { useState } from "react";

const navLinks = ["Home", "Skills", "Achievements & Education"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    // Handle special case for "Achievements & Education"
    if (id === "Achievements & Education") {
      const section = document.getElementById("achievements");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setIsOpen(false);
      return;
    }
    if (id === "Skills") {
      const section = document.getElementById("skills");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(false);
      return;
    }

    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsOpen(false); 
  };

  return (
    <header className="bg-black text-white p-4 shadow-md  w-full fixed top-0 left-0 z-[9999] font-poppins">

      <div className="flex justify-between items-center px-6">
        {/* Logo and Heading */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
            alt="Logo"
            className="h-8 transition-transform duration-500 hover:rotate-[360deg]"
          />
          <h1 className="text-base font-normal">Portfolio</h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
         {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navLinks.map((item) => (
              <li key={item}>
               <button
                onClick={() => scrollToSection(item)}
                className="relative text-white   no-underline px-6 py-2 font-normal 
                          after:content-[''] after:absolute after:bottom-0 after:left-0 
                          after:w-full after:h-[3px] after:bg-gradient-to-r after:from-purple-400 after:to-pink-500 after:scale-x-0 
                          md:hover:after:scale-x-100 after:transition-transform after:duration-300
                          md:after:block after:hidden"
              >

                  {/* bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent */}
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav id="mobile-menu" className="md:hidden p-4 pb-0  space-y-3">
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-white block px-4 py-2 font-normal w-full text-center"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
