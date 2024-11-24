import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SkillsData } from "../components/Dummydata";

const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle inView based on visibility
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="w-full bg-white py-8 md:py-16 font-semibold" id="skills">
      <h2 className="text-center text-2xl md:text-3xl">Skills & Experiences</h2>
      <div className="w-full my-10">
        <div className="layout grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mx-auto">
          {SkillsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-[95%] mx-auto md:w-full flex items-center h-16 md:h-20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} // Animate on scroll
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Stagger animations
                ease: "easeOut",
              }}
            >
              <div className="w-[30%] bg-white border border-[#dadada] flex items-center h-full rounded-l-xl">
                <img
                  src={item.icon}
                  alt={`${item.name}`}
                  className="w-[50%] md:w-[65%] mx-auto"
                />
              </div>
              <div className="w-[70%] bg-primary h-full flex items-center rounded-r-xl">
                <div className="w-[70%] mx-auto">
                  <h3 className="text-lg md:text-xl capitalize font-semibold text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
