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
    <div className="flex flex-col min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="flex-grow">
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
