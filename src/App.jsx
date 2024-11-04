import { useEffect, useState } from "react";
import { Footer, Loader, Navbar } from "./components";
import { About, Home, Portfolio } from "./sections";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col relative min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full fixed z-40">
            <Navbar />
          </div>
          <div className="flex-grow pt-[4rem]">
            <Home />
            <About />
            <Portfolio />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
