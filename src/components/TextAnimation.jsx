import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <div>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "Frontend Developer", // initially rendered starting point
          1000,
          "React Enthusiast",
          1000,
          "Responsive Web Design Specialist",
          1000,
          "Performance Optimization Guru",
          1000,
          "Accessibility Champion",
          500,
        ]}
        speed={50}
        className="text-primary text-sm sm:text-lg  md:text-xl lg:text-2xl font-secondary "
        repeat={Infinity}
      />
    </div>
  );
};

export default TextAnimation;
