import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Schedule } from "./sections/Schedule";
import { Sponsors } from "./sections/Sponsors";
import { Newsletters } from "./sections/Newsletters";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Constellation } from "./components/decoration/Constellation";

function App() {
  return (
    <div className="relative">
      {/* Background */}
      <Constellation className="fixed inset-0 -z-10" />

      {/* Content */}
      <div className="relative z-10 min-h-screen text-charcoal">
        <div className="font-gordita">
          <Navbar />
          <Hero />
          <About />
          <Schedule />
          <Faq />
          <Sponsors />
          <Newsletters />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
