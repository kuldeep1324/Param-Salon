import { useState } from "react";
import logo from "../assets/logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <img
        src={logo}
        alt="Param Salon Logo"
        className="h-12 w-12 object-cover rounded-full border-2 border-accent"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Book Button */}
        <button className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4 text-lg">
          <p className="hover:text-yellow-400 cursor-pointer">Home</p>
          <p className="hover:text-yellow-400 cursor-pointer">Services</p>
          <p className="hover:text-yellow-400 cursor-pointer">Gallery</p>
          <p className="hover:text-yellow-400 cursor-pointer">About</p>
          <p className="hover:text-yellow-400 cursor-pointer">Contact</p>

          <button className="w-full bg-yellow-400 text-black py-2 rounded-full font-semibold">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;