export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-beige/80 backdrop-blur border-b border-charcoal/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/*LOGO*/}
        <li><a href="#home">Home</a></li>    

        {/*NAV LINKS*/}
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#newsletters">Newsletters</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
        </ul>
        <button>Register Now</button>

      </div>
    </nav>
  );
};