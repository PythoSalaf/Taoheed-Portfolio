import { HeroBg, TextAnimation } from "../components";

const Home = () => {
  return (
    <div className="relative w-full h-[64vh] md:h-[80vh] pt-9 md:pt-16 overflow-hidden">
      <HeroBg />

      {/* Text content on top */}
      <div className="layout text-center relative z-20 flex flex-col items-center justify-start h-full">
        <h1 className="text-primary text-2xl font-secondary md:text-3xl">
          Hi, I'm Taoheed Afolabi,
        </h1>
        <h2 className="mt-7 text-2xl md:text-3xl ">
          Passionate and Innovative
        </h2>
        <div className="w-full text-center my-7">
          <TextAnimation />
        </div>
        <p className="text-sm md:text-lg lg:text-xl">
          A dedicated Frontend Developer with a flair for designing interactive,{" "}
          <br />
          modern web experiences. I blend technical skill with a creative touch{" "}
          <br />
          to build responsive and visually appealing applications that focus on{" "}
          <br />
          {/* user experience. Driven by a love for detail and clean aesthetics,
          <br />
          I’m committed to bringing innovative ideas to life in ways that engage
          and <br />
          inspire. Ready to create impactful digital experiences together! */}
        </p>
      </div>
    </div>
  );
};

export default Home;
