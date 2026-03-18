import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Schedule } from "./sections/Schedule";
import { Sponsors } from "./sections/Sponsors";
import { Newsletters } from "./sections/Newsletters";
import { Faq } from "./sections/FAQ";
import { Footer } from "./sections/Footer";

function App() {
  return (
    
    <div className="relative min-h-screen bg-beige text-charcoal">

      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Sponsors />
        <Newsletters />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
