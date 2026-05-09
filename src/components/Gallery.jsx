import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { src: img1, label: "Classic Cut" },
    { src: img2, label: "Beard Sculpt" },
    { src: img3, label: "Color Art" },
    { src: img4, label: "Signature Style" },
    { src: img5, label: "Skin Glow" },
    { src: img6, label: "VIP Grooming" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="glow-blob glow-blob-gold absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 opacity-15" />

      {/* Section Header */}
      <motion.div
        className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label mb-6 inline-block">Portfolio</span>
        <h2 className="font-heading mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Our <span className="text-gold-gradient">Finest Work</span>
        </h2>
        <p className="mt-5 text-base font-light leading-relaxed text-[#bdbdbd] sm:text-lg">
          A glimpse into the artistry and precision that defines every visit to
          Param Salon.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="shine-effect group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06]"
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Dark Overlay on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Bottom Gradient (always visible, subtle) */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505]/70 to-transparent" />

            {/* Hover Content */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="font-heading text-lg font-semibold text-white sm:text-xl">
                {img.label}
              </span>
              <span className="rounded-full border border-[#ffcc00]/40 bg-[#ffcc00]/10 px-5 py-2 text-[12px] font-semibold uppercase tracking-wider text-[#ffcc00] transition-all duration-300 hover:bg-[#ffcc00] hover:text-[#050505]">
                View Style
              </span>
            </div>

            {/* Gold Corner Accent */}
            <div className={`absolute top-3 right-3 h-8 w-8 rounded-full border border-[#ffcc00]/30 flex items-center justify-center transition-all duration-500 ${
              hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}>
              <div className="h-2 w-2 rounded-full bg-[#ffcc00]" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Gallery;