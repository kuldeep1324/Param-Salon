import video from "../assets/Param-Salon.mp4";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Param Salon
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">

          The Ultimate Hair Experience, Premium Grooming & Modern Hair Studio
        </p>

        <button className="bg-accent text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-accentHover transition">
          Book Appointment
        </button>

      </div>
    </section>
  );
}

export default Hero;