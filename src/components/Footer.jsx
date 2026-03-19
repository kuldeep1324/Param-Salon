function Footer() {
  return (
    <footer className="bg-primary text-textPrimary pt-16 pb-8 border-t border-borderTheme">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* ⭐ Brand */}
        <div>
          <h2 className="text-3xl font-bold text-accent mb-4">
            PARAM SALON
          </h2>

          <p className="text-textSecondary leading-relaxed mb-6">
            Premium grooming and modern styling for men. 
            Experience luxury haircuts, beard care, and skin services 
            in a clean and professional environment.
          </p>

          <p className="text-textSecondary text-sm">
            Gwalior’s Trusted Salon Since 2020
          </p>
        </div>

        {/* 📍 Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">
            Visit Us
          </h3>

          <p className="text-textSecondary leading-relaxed">
            Roxy Pul, in front of Dr. Sanjay Dhavle Clinic,
            Madhav Ganj, Gwalior,
            Madhya Pradesh 474001
          </p>
        </div>

        {/* ⏰ Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">
            Opening Hours
          </h3>

          <ul className="text-textSecondary space-y-1">
            <li>Wed — 8:30 AM – 10 PM</li>
            <li>Thu — Closed</li>
            <li>Fri — 8:30 AM – 10 PM</li>
            <li>Sat — 8:30 AM – 10 PM</li>
            <li>Sun — 8:30 AM – 10 PM</li>
            <li>Mon — 8:30 AM – 10 PM</li>
            <li>Tue — 8:30 AM – 10 PM</li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">
            Contact
          </h3>

          <p className="text-textSecondary mb-3">
            📞 
            <a
              href="tel:09993962915"
              className="ml-2 text-accent hover:underline"
            >
              09993962915
            </a>
          </p>

          <p className="text-textSecondary mb-4">
            📷 
            <a
              href="https://www.instagram.com/param_salon_gwalior/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-accent hover:underline"
            >
              @param_salon_gwalior
            </a>
          </p>

          {/* ⭐ CTA Button */}
          <a
            href="tel:09993962915"
            className="inline-block bg-accent text-black px-6 py-2 rounded-full font-semibold hover:bg-accentHover transition"
          >
            Call Now
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-borderTheme"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-textSecondary text-sm">

        <p>
          © {new Date().getFullYear()} Param Salon. All rights reserved.
        </p>

        <p className="mt-3 md:mt-0">
          Designed with ❤️ for premium grooming
        </p>

      </div>

    </footer>
  );
}

export default Footer;