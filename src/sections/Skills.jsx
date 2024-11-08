import { SkillsData } from "../components/Dummydata";

const Skills = () => {
  return (
    <div className=" w-full bg-white py-10 font-semibold">
      <h2 className="text-center text-2xl md:text-3xl">Skills & Experiences</h2>
      <div className="w-full mt-10">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {SkillsData.map((item) => (
            <div
              className="w-[95%] mx-auto md:w-full  flex items-center h-16 md:h-20 "
              key={item.id}
            >
              <div className="w-[30%] bg-white  border border-[#dadada] flex items-center h-full rounded-l-xl">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
