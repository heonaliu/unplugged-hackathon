import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Schedule } from "./sections/Schedule"
import { Sponsors } from "./sections/Sponsors"
import { Newsletters } from "./sections/Newsletters"
import { Faq } from "./sections/FAQ"
import { Footer } from "./sections/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Sponsors />
      <Newsletters />
      <Faq />
      <Footer />
    </>
  )
}

export default App
