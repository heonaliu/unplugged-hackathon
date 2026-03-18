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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(163,177,138,0.12),transparent_40%)]"></div>
      <div className="relative z-10">
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
