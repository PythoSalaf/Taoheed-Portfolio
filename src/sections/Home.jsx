import { HeroBg, TextAnimation } from "../components";

const Home = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] pt-9 md:pt-16 overflow-hidden">
      <HeroBg />

      {/* Text content on top */}
      <div className="layout text-center relative z-20 flex flex-col items-center justify-start h-full">
        <h1 className="text-black text-2xl md:text-3xl">
          Hi, I'm Taoheed Afolabi,
        </h1>
        <div className="w-full text-center my-7">
          <TextAnimation />
        </div>
        <h3 className="text-2xl md:text-2xl lg:text-3xl">
          a dedicated frontend developer with a love for creating seamless and
          visually stunning web applications.
        </h3>
      </div>
    </div>
  );
};

export default Home;
