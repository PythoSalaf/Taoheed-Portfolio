import { useState, useEffect } from "react";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
// import { resume } from "../Assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Track the active section

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "portfolio",
        "testimonial",
        "contact",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && isElementInViewport(element)) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className="w-full fixed h-16 top-0 bg-white flex items-center justify-between z-20 shadow-lg">
        <div className="flex items-center justify-between w-[95%] mx-auto">
          {/* Logo */}
          <div className="w-[15%]">
            <a
              href="#home"
              className="uppercase text-primary text-xl md:text-2xl lg:text-3xl"
            >
              taoheed
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="w-[60%] hidden md:flex items-center justify-center">
            <ul className="flex items-center gap-4 justify-between font-secondary text-lg  md:w-[80%] lg:w-[60%]">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "portfolio", label: "Portfolio" },
                { id: "testimonial", label: "Testimonial" },
                { id: "contact", label: "Contact" },
              ].map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={
                      activeSection === section.id
                        ? "text-primary font-bold underline pb-1"
                        : "text-gray-600 hover:text-primary transition-colors"
                    }
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition duration-300">
            Let's talk
          </button>
          {/* Mobile Menu Toggle */}
          <div
            className="flex items-center cursor-pointer gap-2 bg-white md:hidden px-[6px] py-[3px] text-primary border-[1.9px] border-primary rounded-xl"
            onClick={() => setToggle(!toggle)}
          >
            <h3 className="cursor-pointer uppercase font-semibold text-base">
              Menu
            </h3>
            {toggle ? <VscChromeClose size={20} /> : <VscThreeBars size={20} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div className="md:hidden fixed bg-primary w-full h-[45vh] top-[3.6rem] flex flex-col items-center pt-4 z-20">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Portfolio" },
              { id: "review", label: "Testimonial" },
              { id: "contact", label: "Contact" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="mb-3 text-lg font-serif font-semibold text-white capitalize"
                onClick={() => setToggle(false)}
              >
                {section.label}
              </a>
            ))}
            <button
              onClick={() => setToggle(false)}
              className="uppercase mt-3 font-serif font-semibold text-white text-[17px] border-white px-5 py-[7px] rounded-lg border"
            >
              <a href="" download>
                Download CV
              </a>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
