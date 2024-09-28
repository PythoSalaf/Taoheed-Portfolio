import { Footer, Navbar } from "./components";
import { About, Home, Portfolio } from "./sections";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Home />
        <About />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
