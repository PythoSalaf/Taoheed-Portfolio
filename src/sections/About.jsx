import { AboutIcon } from "../assets";

const About = () => {
  return (
    <div className="w-full bg-primary pb-5 md:pb-0 pt-7 ">
      <h1 className="text-3xl text-white text-center">About</h1>
      <div className="flex items-start justify-between flex-col md:flex-row gap-9 pt-6 md:pt-12 w-full">
        <div className="w-full ">
          <img
            src={AboutIcon}
            alt="about-icon"
            className="w-[85%] md:w-[70%] mx-auto"
          />
        </div>
        <div className="w-[94%] mx-auto md:w-full pb-6 md:pb-0 bg-white   md:h-[90vh] rounded-tl-xl">
          <h4 className="w-[98%] md:w-[94%] mx-auto py-4 text-lg md:text-2xl">
            My journey in the vast world of web development <br /> has been
            centered around harnessing the power of React. <br /> From
            conceptualization to implementation, I specialize in building
            dynamic and responsive user interfaces that not only meet but exceed
            expectations. My journey in the vast world of web development has
            been centered around harnessing the power of React. From
            conceptualization to implementation, I specialize in building
            dynamic and responsive user interfaces that not only meet but exceed
            expectations.
          </h4>
          <div className="mt-7 md:mt-20 flex items-center justify-center gap-x-6">
            <button className="bg-primary text-white rounded-xl py-2 px-4">
              Download CV
            </button>
            <button className="bg-primary text-white rounded-xl py-2 px-9">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
