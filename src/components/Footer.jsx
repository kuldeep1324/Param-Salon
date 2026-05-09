import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  const workingHours = [
    { day: "Mon – Sat", time: "9:00 AM – 10:00 PM" },
    { day: "Sunday", time: "9:00 AM – 10:00 PM" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/param_salon_gwalior",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919993962915",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "Phone",
      href: "tel:09993962915",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative bg-[#050505] text-white overflow-hidden"
    >
      {/* Top Glow Border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ffcc00]/40 to-transparent" />

      {/* Glow Blob */}
      <div className="glow-blob glow-blob-gold absolute left-1/2 -top-20 h-[300px] w-[600px] -translate-x-1/2 opacity-10" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20 lg:px-10">
        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold">
              Param <span className="text-gold-gradient">Salon</span>
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-[#bdbdbd]/50 font-light">
              Premium Grooming Studio
            </p>
            <p className="mt-5 text-sm font-light leading-relaxed text-[#bdbdbd]/70">
              Crafting confidence through precision grooming and exceptional
              care since day one. Your style, elevated.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#bdbdbd] transition-all duration-300 hover:border-[#ffcc00]/30 hover:bg-[#ffcc00]/10 hover:text-[#ffcc00] hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-[#bdbdbd]/70 transition-all duration-300 hover:text-[#ffcc00] hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Working Hours
            </h4>
            <ul className="space-y-3">
              {workingHours.map((item) => (
                <li key={item.day} className="flex items-center justify-between text-sm">
                  <span className="font-light text-[#bdbdbd]/70">{item.day}</span>
                  <span className="font-medium text-white/80">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 border border-green-500/20">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-green-400">Open Now</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Contact Us
            </h4>

            <div className="space-y-3">
              <a
                href="tel:09993962915"
                className="flex items-center gap-3 text-sm font-light text-[#bdbdbd]/70 transition-colors duration-300 hover:text-[#ffcc00]"
              >
                <span className="text-base">📞</span> 09993962915
              </a>
              <a
                href="https://www.instagram.com/param_salon_gwalior"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-light text-[#bdbdbd]/70 transition-colors duration-300 hover:text-[#ffcc00]"
              >
                <span className="text-base">📷</span> @param_salon_gwalior
              </a>
            </div>

            <a
              href="tel:09993962915"
              className="btn-gold mt-6 inline-block !px-6 !py-2.5 !text-[13px]"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/[0.06] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs font-light text-[#bdbdbd]/40">
              © {new Date().getFullYear()} Param Salon. All rights reserved.
            </p>
            <p className="text-xs font-light text-[#bdbdbd]/40">
              Made with <span className="text-[#ffcc00]">♥</span> & ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;