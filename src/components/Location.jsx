import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const details = [
    {
      icon: "📍",
      title: "Address",
      text: "Roxy Pul, in front of Dr. Sanjay Dhavle Clinic, Madhav Ganj, Gwalior, MP 474001",
    },
    {
      icon: "🕐",
      title: "Working Hours",
      text: "Monday – Sunday: 9:00 AM – 10:00 PM",
    },
    {
      icon: "📞",
      title: "Phone",
      text: "09993962915",
      href: "tel:09993962915",
    },
  ];

  return (
    <section
      id="location"
      ref={ref}
      className="relative bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="glow-blob glow-blob-gold absolute right-0 top-1/4 h-[400px] w-[400px] opacity-15" />

      {/* Section Header */}
      <motion.div
        className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label mb-6 inline-block">Visit Us</span>
        <h2 className="font-heading mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Find <span className="text-gold-gradient">Us</span>
        </h2>
        <p className="mt-5 text-base font-light leading-relaxed text-[#bdbdbd] sm:text-lg">
          Step into our premium grooming studio and experience the difference.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12 items-stretch">
        {/* Left — Info */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {details.map((item, i) => (
            <div
              key={i}
              className="premium-card group flex items-start gap-5 p-5 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffcc00]/15 to-[#ff9500]/10 text-xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <div>
                <h4 className="mb-1 font-heading text-base font-semibold text-white">
                  {item.title}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-light text-[#bdbdbd] transition-colors duration-300 hover:text-[#ffcc00]"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p className="text-sm font-light leading-relaxed text-[#bdbdbd]">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* CTA */}
          <a
            href="https://www.google.com/maps?q=Roxy+Pul+Madhav+Ganj+Gwalior"
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-2 inline-block text-center cursor-pointer"
          >
            Get Directions →
          </a>
        </motion.div>

        {/* Right — Map */}
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/[0.06]"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative h-full min-h-[350px] sm:min-h-[400px]">
            <iframe
              title="Param Salon Location"
              src="https://www.google.com/maps?q=Roxy+Pul+Madhav+Ganj+Gwalior&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)",
                position: "absolute",
                inset: 0,
              }}
              allowFullScreen=""
              loading="lazy"
            />
            {/* Gold tint overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[#ffcc00]/[0.03]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Location;