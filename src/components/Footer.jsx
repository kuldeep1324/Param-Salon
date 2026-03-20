function Footer() {
  return (
    <footer className="bg-primary text-textPrimary pt-14 pb-8 border-t border-borderTheme">

      {/* 🔹 Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">

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
        <div className="text-center">
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
       <div className="text-right">
  <h3 className="text-accent text-xl font-bold mb-4">
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
    className="inline-block ml-auto bg-accent text-black px-6 py-2 rounded-full font-semibold hover:bg-accentHover transition"
  >
    Call Now
  </a>
</div>

      </div>

    </footer>
  );
}

export default Footer;