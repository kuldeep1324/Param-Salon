function Location() {
  return (
    <section className="bg-secondary text-textPrimary py-20 px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Find Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 📍 Address Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-accent">
            Param Salon, Gwalior
          </h3>

          <p className="text-textSecondary mb-6 leading-relaxed">
            Roxy Pul, in front of Dr. Sanjay Dhavle Clinic, 
            Madhav Ganj, Gwalior, Madhya Pradesh 474001
          </p>

          <a
            href="https://www.google.com/maps?q=Roxy+Pul+Madhav+Ganj+Gwalior"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-accentHover transition"
          >
            Get Directions
          </a>
        </div>

        {/* 🗺️ Google Map */}
        <div className="rounded-2xl overflow-hidden border border-borderTheme">
          <iframe
            title="Param Salon Location"
            src="https://www.google.com/maps?q=Roxy+Pul+Madhav+Ganj+Gwalior&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Location;