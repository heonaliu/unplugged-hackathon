import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-sage/80 backdrop-blur border-b border-charcoal/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <a href="#home" className="text-2xl font-bold">Home</a>

        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="hover:text-charcoal">About</a></li>
          <li><a href="#schedule" className="hover:text-charcoal">Schedule</a></li>
          <li><a href="#faq" className="hover:text-charcoal">FAQ</a></li>
          <li><a href="#newsletters" className="hover:text-charcoal">Newsletters</a></li>
          <li><a href="#sponsors" className="hover:text-charcoal">Sponsors</a></li>
        </ul>

        <button className="hidden md:block bg-charcoal text-white px-4 py-2 rounded hover:bg-black">
          Register Now
        </button>
        <button 
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-beige/90 backdrop-blur px-6 py-4 flex flex-col space-y-4">
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#faq">FAQ</a>
          <a href="#newsletters">Newsletters</a>
          <a href="#sponsors">Sponsors</a>
          <button className="bg-charcoal text-white px-4 py-2 rounded">Register Now</button>
        </div>
      )}
    </nav>
  );
};