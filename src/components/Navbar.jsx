import { useState } from "react";
import { Home } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-orange/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-2">
        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl text-white items-center font-bold no-underline"
        >
          <Home />
        </a>

        <ul className="hidden md:flex space-x-8 list-none">
          <li>
            <a
              href="#about"
              className="text-white hover:text-charcoal no-underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              className="text-white hover:text-charcoal no-underline"
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-white hover:text-charcoal no-underline"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#sponsors"
              className="text-white hover:text-charcoal no-underline"
            >
              Sponsors
            </a>
          </li>
          <li>
            <a
              href="#newsletters"
              className="text-white hover:text-charcoal no-underline"
            >
              Newsletters
            </a>
          </li>
        </ul>

        <button className="hidden md:block bg-white text-orange px-4 py-2 rounded hover:bg-charcoal/90 border-none">
          Register Now
        </button>
        <button
          className="bg-transparent text-white border-none md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="bg-orange/10 backdrop-blur md:hidden  px-6 py-4 flex flex-col space-y-4">
          <a
            className="text-white hover:text-charcoal no-underline"
            href="#about"
          >
            About
          </a>
          <a
            className="text-white hover:text-charcoal no-underline"
            href="#schedule"
          >
            Schedule
          </a>
          <a
            className="text-white hover:text-charcoal no-underline"
            href="#faq"
          >
            FAQ
          </a>
          <a
            className="text-white hover:text-charcoal no-underline"
            href="#sponsors"
          >
            Sponsors
          </a>
          <a
            className="text-white hover:text-charcoal no-underline"
            href="#newsletters"
          >
            Newsletters
          </a>
          <div className="flex gap-6 mt-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/GED5aVUj9QmLWBu2A"
              className="inline-block bg-white text-orange px-4 py-2 rounded hover:bg-gray-50 border-none w-full no-underline text-center"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
