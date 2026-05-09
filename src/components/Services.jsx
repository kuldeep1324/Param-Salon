import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      name: "Hair Cut & Styling",
      price: "₹300+",
      desc: "Expert precision cuts tailored to your face shape and style preference.",
      icon: "✂️",
    },
    {
      name: "Beard Grooming",
      price: "₹150+",
      desc: "Sharp, clean beard shaping with hot towel treatment for a refined look.",
      icon: "🧔",
    },
    {
      name: "Hair Coloring",
      price: "₹1200+",
      desc: "Premium global and fashion coloring with salon-grade products.",
      icon: "🎨",
    },
    {
      name: "Facial & Skin Care",
      price: "₹800+",
      desc: "Deep cleansing facials for fresh, rejuvenated, and glowing skin.",
      icon: "💆",
    },
    {
      name: "Head Massage",
      price: "₹250+",
      desc: "Relaxing therapeutic massage to relieve stress and promote well-being.",
      icon: "🧘",
    },
    {
      name: "Bridal/Groom Package",
      price: "₹5000+",
      desc: "Complete grooming experience for your special day — look your absolute best.",
      icon: "👑",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="glow-blob glow-blob-gold absolute right-0 top-0 h-[500px] w-[500px] opacity-20" />
      <div className="glow-blob glow-blob-orange absolute -left-40 bottom-0 h-[400px] w-[400px] opacity-15" />

      {/* Section Header */}
      <motion.div
        className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label mb-6 inline-block">Our Services</span>
        <h2 className="font-heading mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Crafted for the{" "}
          <span className="text-gold-gradient">Modern Gentleman</span>
        </h2>
        <p className="mt-5 text-base font-light leading-relaxed text-[#bdbdbd] sm:text-lg">
          Every service is a premium experience — precision, care, and expertise
          delivered with attention to detail.
        </p>
      </motion.div>

      {/* Service Cards Grid */}
      <motion.div
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="premium-card group relative p-6 sm:p-7 lg:p-8"
            variants={cardVariants}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#ffcc00]/0 to-[#ff9500]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]" />

            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffcc00]/15 to-[#ff9500]/10 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              {service.icon}
            </div>

            {/* Name */}
            <h3 className="font-heading mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#ffcc00] sm:text-2xl">
              {service.name}
            </h3>

            {/* Description */}
            <p className="mb-5 text-sm font-light leading-relaxed text-[#bdbdbd]/80 sm:text-[15px]">
              {service.desc}
            </p>

            {/* Price + CTA */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gold-gradient sm:text-2xl">
                {service.price}
              </span>

              <a
                href={`https://wa.me/919993962915?text=${encodeURIComponent(
                  `Hi Param Salon, I want to book ${service.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#ffcc00]/30 bg-[#ffcc00]/10 px-5 py-2 text-[13px] font-semibold text-[#ffcc00] transition-all duration-300 hover:bg-[#ffcc00] hover:text-[#050505] hover:shadow-gold cursor-pointer"
              >
                Book Now
              </a>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ffcc00] to-[#ff9500] transition-all duration-500 group-hover:w-3/4" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;