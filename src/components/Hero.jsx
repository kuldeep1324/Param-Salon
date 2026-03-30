import HeroSection from '../assets/HeroSection.png';
import { useState } from 'react';
import BookingModal from './BookingModal';

function Hero() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  return (
    <>
      <section id="home" className="relative min-h-[80vh] w-full overflow-hidden pt-16 sm:min-h-screen">

      {/* 🖼️ Background Image */}
      <img
        src={HeroSection}
        alt="Param Salon"
        className="absolute h-full w-full object-cover"
      />

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ✨ Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-16 text-center text-white sm:px-6">

        <p className="mb-4 rounded-full border border-accent/40 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent sm:text-sm">
          Param Signature Grooming
        </p>

        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:mb-6 md:text-7xl">
          Param Salon
        </h1>

        <p className="mb-7 max-w-2xl text-base text-gray-300 sm:text-lg md:mb-8 md:text-xl">
          Precision Haircraft, Refined Grooming, and Contemporary Salon Care
        </p>

        <button
          onClick={() => setBookingModalOpen(true)}
          className="rounded-full bg-accent px-6 py-3 text-base font-semibold text-black shadow-lg shadow-accent/30 transition duration-300 hover:bg-accentHover hover:shadow-accent/50 hover:scale-105 sm:px-8 sm:py-4 sm:text-lg cursor-pointer"
        >
          Book Now
        </button>

        <div className="mt-7 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3 sm:gap-4 sm:text-base">
          <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur">
            4.9 Client Rating
          </div>
          <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur">
            Open Daily 9 AM - 10 PM
          </div>
          <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur">
            Premium Product Line
          </div>
        </div>

      </div>
    </section>

    <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
}

export default Hero;