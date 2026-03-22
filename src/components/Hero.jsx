import HeroSection from '../assets/HeroSection.png';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden pt-16 sm:min-h-screen sm:pt-20">

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

        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:mb-6 md:text-7xl">
          Param Salon
        </h1>

        <p className="mb-7 max-w-2xl text-base text-gray-300 sm:text-lg md:mb-8 md:text-xl">
          Precision Haircraft, Refined Grooming, and Contemporary Salon Care
        </p>

        <button className="rounded-full bg-accent px-6 py-3 text-base font-semibold text-black transition hover:bg-accentHover sm:px-8 sm:py-4 sm:text-lg">
          Book Appointment
        </button>

      </div>
    </section>
  );
}

export default Hero;