import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "./BookingModal";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Location", href: "#location" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["home", "services", "gallery", "testimonials", "location", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#ffcc00]/20 blur-md group-hover:bg-[#ffcc00]/30 transition-all duration-500" />
              <img
                src={logo}
                alt="Param Salon"
                className="relative h-11 w-11 rounded-full border-2 border-[#ffcc00]/60 object-cover transition-all duration-500 group-hover:border-[#ffcc00] group-hover:scale-105 sm:h-12 sm:w-12"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-bold tracking-wide text-white">
                Param <span className="text-gold-gradient">Salon</span>
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#bdbdbd]/70 font-light">
                Premium Grooming
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 rounded-full ${
                    activeSection === link.href.slice(1)
                      ? "text-[#ffcc00]"
                      : "text-[#bdbdbd] hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ffcc00] to-[#ff9500]"
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="hidden md:block btn-gold !px-6 !py-2.5 !text-[13px] cursor-pointer"
          >
            Book Appointment
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#ffcc00]/30 hover:bg-white/10 md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="border-t border-white/[0.06] bg-[#050505]/95 backdrop-blur-2xl md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="space-y-1 px-5 py-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-[14px] font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "bg-[#ffcc00]/10 text-[#ffcc00]"
                        : "text-[#bdbdbd] hover:bg-white/5 hover:text-white"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.button
                  onClick={() => { setBookingModalOpen(true); setMenuOpen(false); }}
                  className="mt-4 block w-full btn-gold !py-3.5 cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  Book Appointment
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
}

export default Navbar;