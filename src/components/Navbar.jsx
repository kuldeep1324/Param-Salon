import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-black/45 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <img
          src={logo}
          alt="Param Salon Logo"
          className="h-10 w-10 rounded-full border-2 border-accent object-cover sm:h-12 sm:w-12"
        />

        <ul
          className={`hidden gap-6 text-base font-medium transition-colors duration-300 md:flex lg:gap-8 ${
            scrolled ? "text-white" : "text-slate-100"
          }`}
        >
          <li className="cursor-pointer font-semibold hover:text-yellow-400">Home</li>
          <li className="cursor-pointer font-semibold hover:text-yellow-400">Services</li>
          <li className="cursor-pointer font-semibold hover:text-yellow-400">Gallery</li>
          <li className="cursor-pointer font-semibold hover:text-yellow-400">About</li>
          <li className="cursor-pointer font-semibold hover:text-yellow-400">Contact</li>
        </ul>

        <button className="hidden rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black transition hover:bg-yellow-300 md:block">
          Book Now
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg border border-white/40 px-3 py-1.5 text-xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="space-y-4 border-t border-white/15 bg-black/95 px-4 pb-5 pt-4 text-base text-white md:hidden sm:px-6">
          <p className="cursor-pointer hover:text-yellow-400">Home</p>
          <p className="cursor-pointer hover:text-yellow-400">Services</p>
          <p className="cursor-pointer hover:text-yellow-400">Gallery</p>
          <p className="cursor-pointer hover:text-yellow-400">About</p>
          <p className="cursor-pointer hover:text-yellow-400">Contact</p>

          <button className="w-full rounded-full bg-yellow-400 py-2 font-semibold text-black">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;