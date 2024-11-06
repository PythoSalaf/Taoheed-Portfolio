import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <div>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "A Frontend Developer", // initially rendered starting point
          1000,
          "A React Enthusiast",
          1000,
          "A Responsive Web Design Specialist",
          1000,
          "A Performance Optimization Guru",
          1000,
          "An Accessibility Champion",
          500,
        ]}
        speed={50}
        className="text-primary text-sm sm:text-lg  md:text-2xl lg:text-3xl font-secondary "
        repeat={Infinity}
      />
    </div>
  );
};

export default TextAnimation;
