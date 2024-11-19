import { PortfolioCard } from "../components";
import { PortfolioData } from "../components/Dummydata";

const Portfolio = () => {
  return (
    <div className="bg-white py-11">
      <h1 className=" text-2xl font-semibold md:text-3xl text-center">
        Portfolio
      </h1>
      <div className="py-7 layout  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PortfolioData.map((data) => (
          <div key={data.id}>
            <PortfolioCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
