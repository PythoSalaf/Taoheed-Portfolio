import { HeroBg, TextAnimation } from "../components";

const Home = () => {
  return (
    <div className="relative w-full h-[64vh] md:h-[80vh] pt-9 md:pt-16 overflow-hidden">
      <HeroBg />

      {/* Text content on top */}
      <div className="layout text-center relative z-20 flex flex-col items-center justify-start h-full">
        <h1 className="text-black text-xl  md:text-2xl lg:text-2xl">
          Hi, I'm Taoheed Afolabi,
        </h1>

        <div className="w-full text-center my-10">
          <TextAnimation />
        </div>
        <p className="text-base md:text-lg lg:text-2xl">
          I'm a dedicated Frontend Developer with a flair for designing
          interactive, modern web
          <br />
          experiences. I blend technical skill with a creative touch to build
          responsive
          <br />
          and visually appealing applications that focus on user experience.
          <br />
          {/* Driven by a love for detail and clean aesthetics,
          <br />
          I’m committed to bringing innovative ideas to life in ways that engage
          and <br />
          inspire. Ready to create impactful digital experiences together! */}
        </p>
        <div className="mt-20 flex items-center gap-x-6">
          <button className="bg-primary text-white rounded-xl py-2 px-4">
            Download CV
          </button>
          <button className="bg-primary text-white rounded-xl py-2 px-9">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
