import HeroSection from "../assets/HeroSection.png";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";

function Hero() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const badges = [
    { icon: "⭐", text: "4.9 Client Rating" },
    { icon: "🕐", text: "Open Daily 9 AM – 10 PM" },
    { icon: "✨", text: "Premium Product Line" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="relative min-h-screen w-full overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.15}px)` }}
        >
          <img
            src={HeroSection}
            alt="Param Salon — Premium Grooming"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Cinematic Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />

        {/* Floating Glow Blobs */}
        <div className="glow-blob glow-blob-gold absolute -left-32 top-1/4 h-[400px] w-[400px] animate-float-slow" />
        <div className="glow-blob glow-blob-orange absolute -right-32 bottom-1/4 h-[350px] w-[350px] animate-float" />
        <div className="glow-blob glow-blob-gold absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

        {/* Main Content */}
        <motion.div
          className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Signature Label */}
          <motion.div variants={itemVariants}>
            <span className="section-label mb-8 inline-block">
              ✦ Signature Grooming Experience ✦
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-heading mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            <span className="block">Param</span>
            <span className="block text-gold-gradient">Salon</span>
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            variants={itemVariants}
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ffcc00]/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#ffcc00]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ffcc00]/50" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-[#bdbdbd] sm:text-xl md:text-2xl"
            variants={itemVariants}
          >
            Precision Haircraft, Refined Grooming & Contemporary Salon Care
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mb-12 flex flex-col gap-4 sm:flex-row sm:gap-5"
            variants={itemVariants}
          >
            <button
              onClick={() => setBookingModalOpen(true)}
              className="btn-gold !px-10 !py-4 !text-base cursor-pointer"
            >
              Book Your Appointment
            </button>
            <a
              href="#services"
              className="btn-outline !px-10 !py-4 !text-base"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Info Badges */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            variants={itemVariants}
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="glass rounded-full px-5 py-2.5 text-[13px] font-medium text-white/90 transition-all duration-300 hover:border-[#ffcc00]/20 hover:bg-white/[0.08]"
              >
                <span className="mr-2">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <a href="#services" className="flex flex-col items-center gap-2 group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors">
                Scroll
              </span>
              <motion.div
                className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1"
                animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(255,204,0,0.4)", "rgba(255,255,255,0.2)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="h-1.5 w-1 rounded-full bg-[#ffcc00]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
}

export default Hero;