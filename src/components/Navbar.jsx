import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially to set the active section on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const activeLink = document.querySelector(`#nav-${activeSection}`);
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeSection]);

  return (
    <div className="relative w-full bg-white shadow-lg py-4">
      <div className="layout flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <h2 className="uppercase text-primary text-xl md:text-2xl lg:text-3xl">
            Taoheed
          </h2>
        </a>

        {/* Navigation Links */}
        <div className="relative hidden md:flex items-center gap-x-6 font-secondary text-lg">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "portfolio", label: "Portfolio" },
            { id: "testimonial", label: "Testimonial" },
            { id: "contact", label: "Contact" },
          ].map((section) => (
            <a
              key={section.id}
              id={`nav-${section.id}`}
              href={`#${section.id}`}
              className={`relative ${
                activeSection === section.id
                  ? "text-black font-bold"
                  : "text-gray-600 hover:text-black"
              } transition-colors duration-300`}
            >
              {section.label}
            </a>
          ))}
          {/* Underline Effect */}
          <span
            className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
            style={underlineStyle}
          ></span>
        </div>

        {/* CTA Button */}
        <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition duration-300">
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
