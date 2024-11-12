import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import {
  GitIcon,
  JavascriptIcon,
  NextIcon,
  QueryIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../assets"; // Ensure this path is correct

const HeroBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: { value: "#fff" }, // sets background to white
        opacity: 1,
      },
      detectRetina: true, // enables retina support for sharper rendering
      fpsLimit: 120, // limits FPS to reduce CPU usage
      fullScreen: { enable: true, zIndex: 0 },
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "push" }, // click to add particles
          onHover: {
            enable: true,
            mode: "bubble", // particles react on hover
            parallax: { enable: false },
          },
          resize: { enable: true, delay: 0.5 },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          grab: {
            distance: 100,
            links: { opacity: 1 },
          },
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        number: {
          value: 30,
          density: { enable: true, width: 1920, height: 1080 },
        },
        opacity: {
          value: 0.3, // sets icons to a faded opacity, making text more visible
          random: { enable: true, minimumValue: 0.2 },
          animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false },
        },
        shape: {
          type: "image", // sets particles to images
          options: {
            image: [
              { src: ReactIcon, width: 20, height: 20 },
              { src: ReduxIcon, width: 20, height: 20 },
              { src: TailwindIcon, width: 20, height: 20 },
              { src: JavascriptIcon, width: 20, height: 20 },
              { src: TypescriptIcon, width: 20, height: 20 },
              { src: QueryIcon, width: 20, height: 20 },
              { src: NextIcon, width: 20, height: 20 },
              { src: GitIcon, width: 20, height: 20 },
            ],
          },
        },
        size: { value: 16 },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: { default: "out" },
        },
        links: {
          enable: false,
          distance: 100,
          color: "#fff",
          opacity: 0.4,
        },
      },
    }),
    []
  );

  return (
    <Particles
      init={init ? null : initParticlesEngine}
      loaded={(container) => console.log("Particles loaded", container)}
      options={options}
      className="absolute w-full h-full z-[-1]"
    />
  );
};

export default HeroBg;
