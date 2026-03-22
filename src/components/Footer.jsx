function Footer() {
  return (
    <footer className="border-t border-borderTheme bg-primary pb-8 pt-12 text-textPrimary sm:pt-14">

      {/* 🔹 Top Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 md:grid-cols-3">

        {/* 📍 LEFT — Address */}
        <div>
          <h3 className="text-accent text-xl font-bold mb-4">
            Visit Us
          </h3>

          <p className="text-textSecondary leading-relaxed">
            Roxy Pul, in front of Dr. Sanjay Dhavle Clinic,
            Madhav Ganj, Gwalior,
            Madhya Pradesh 474001
          </p>
        </div>

        {/* ⭐ CENTER — Copyright */}
        <div className="text-left md:text-center">
          <p className="text-textSecondary leading-relaxed">
            Designed for premium grooming
          </p>

          <p className="mt-2 text-textSecondary">
            © {new Date().getFullYear()} Param Salon.
            All rights reserved.
          </p>
          <p className="mt-2 text-textSecondary">
             ....Made With 💖 & ☕....
          </p>
        </div>

        {/* 📞 RIGHT — Contact */}
        <div className="text-left md:text-right">
          <h3 className="mb-4 text-xl font-bold text-accent">
            Contact
          </h3>

          <p className="mb-2">
            📞 09993962915
          </p>

          <p className="mb-4">
            📷 @param_salon_gwalior
          </p>

          <a
            href="tel:09993962915"
            className="inline-block rounded-full bg-accent px-6 py-2 font-semibold text-black transition hover:bg-accentHover md:ml-auto"
          >
            Call Now
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;