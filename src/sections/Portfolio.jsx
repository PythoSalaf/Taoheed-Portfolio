import { motion } from "framer-motion";
import { PortfolioCard } from "../components";
import { PortfolioData } from "../components/Dummydata";

const Portfolio = () => {
  const AnimatedPortfolioCard = ({ index, ...props }) => {
    // Define animation variants
    const variants = {
      hidden: { opacity: 0, rotateY: -90, scale: 0.8 }, // Start with a rotated and scaled-down card
      visible: { opacity: 1, rotateY: 0, scale: 1 }, // End with a normal card
    };

    const transition = {
      duration: 0.5, // Slightly slower animation
      delay: index * 0.2, // Staggered animation for each card
      ease: "easeOut",
    };

    return (
      <motion.div
        initial="hidden"
        whileInView="visible" // Trigger animation only when in viewport
        viewport={{ once: false, amount: 0.3 }} // Re-trigger animation if section re-enters
        variants={variants}
        transition={transition}
        className="w-full"
      >
        <PortfolioCard {...props} />
      </motion.div>
    );
  };

  const Grid = () => {
    return (
      <div className="py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-7">
        {PortfolioData.map((data, index) => (
          <AnimatedPortfolioCard key={data.id} index={index} {...data} />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-8 md:py-11" id="portfolio">
      <h1 className="text-2xl font-semibold md:text-3xl text-center">
        Portfolio
      </h1>
      <div className="mt-10 layout">
        <Grid />
      </div>
    </div>
  );
};

export default Portfolio;
