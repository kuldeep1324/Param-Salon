import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Regular Client",
      text: "Best salon in Gwalior! The attention to detail is incredible. Professional staff, premium ambiance, and the haircut I got was absolutely perfect. Worth every rupee!",
      rating: 5,
      initials: "RS",
    },
    {
      name: "Amit Verma",
      role: "Business Professional",
      text: "Loved the haircut and beard styling. Param Salon has this luxury feel that you don't find anywhere else in the city. The grooming quality is on par with premium metros.",
      rating: 5,
      initials: "AV",
    },
    {
      name: "Sandeep Gupta",
      role: "First-time Visitor",
      text: "Clean environment, friendly staff, and an overall amazing experience. The head massage was incredibly relaxing. I'm definitely coming back — this is my go-to salon now.",
      rating: 5,
      initials: "SG",
    },
    {
      name: "Vikram Singh",
      role: "Loyal Client",
      text: "I've been visiting Param Salon for over a year. The consistency in quality and service is what keeps me coming back. They genuinely care about how you look.",
      rating: 5,
      initials: "VS",
    },
    {
      name: "Prashant Joshi",
      role: "Groom Package Client",
      text: "Got the Bridal Groom Package for my wedding and it was the best decision! Looked and felt like a million bucks. The team made sure every detail was perfect.",
      rating: 5,
      initials: "PJ",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="glow-blob glow-blob-gold absolute -left-32 top-1/3 h-[400px] w-[400px] opacity-15" />
      <div className="glow-blob glow-blob-orange absolute right-0 bottom-0 h-[350px] w-[350px] opacity-10" />

      {/* Section Header */}
      <motion.div
        className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label mb-6 inline-block">Testimonials</span>
        <h2 className="font-heading mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          What Our <span className="text-gold-gradient">Clients Say</span>
        </h2>

        {/* Rating Badge */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ffcc00]/20 bg-[#ffcc00]/[0.06] px-5 py-2.5">
          <span className="text-lg">⭐⭐⭐⭐⭐</span>
          <span className="text-sm font-semibold text-[#ffcc00]">
            4.9/5
          </span>
          <span className="text-sm text-[#bdbdbd]">from 120+ clients</span>
        </div>
      </motion.div>

      {/* Desktop: Cards Grid */}
      <motion.div
        className="hidden mx-auto max-w-7xl md:grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {reviews.slice(0, 3).map((review, index) => (
          <motion.div
            key={index}
            className="premium-card group relative p-7 lg:p-8"
            variants={cardVariants}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-7 text-4xl font-serif text-[#ffcc00]/10 group-hover:text-[#ffcc00]/20 transition-colors duration-500">
              "
            </div>

            {/* Stars */}
            <div className="mb-5 flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-[#ffcc00] text-sm">★</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="mb-7 text-[15px] font-light leading-relaxed text-[#bdbdbd]/90">
              "{review.text}"
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ffcc00] to-[#ff9500] text-sm font-bold text-[#050505]">
                {review.initials}
              </div>
              <div>
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="text-[13px] text-[#bdbdbd]/70">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <motion.div
          className="mx-auto max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="premium-card relative overflow-hidden p-6 sm:p-8">
            {/* Quote Icon */}
            <div className="absolute top-5 right-6 text-5xl font-serif text-[#ffcc00]/10">
              "
            </div>

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: reviews[activeIndex].rating }).map((_, i) => (
                <span key={i} className="text-[#ffcc00] text-sm">★</span>
              ))}
            </div>

            {/* Review Text */}
            <motion.p
              key={activeIndex}
              className="mb-6 text-[15px] font-light leading-relaxed text-[#bdbdbd]/90"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              "{reviews[activeIndex].text}"
            </motion.p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ffcc00] to-[#ff9500] text-sm font-bold text-[#050505]">
                {reviews[activeIndex].initials}
              </div>
              <div>
                <h4 className="font-semibold text-white">{reviews[activeIndex].name}</h4>
                <p className="text-[13px] text-[#bdbdbd]/70">{reviews[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-400 cursor-pointer ${
                  i === activeIndex
                    ? "w-8 bg-gradient-to-r from-[#ffcc00] to-[#ff9500]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;