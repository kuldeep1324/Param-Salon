function Services() {
  const services = [
    { name: "Hair Cut & Styling", price: "₹300+" },
    { name: "Beard Grooming", price: "₹150+" },
    { name: "Hair Coloring", price: "₹1200+" },
    { name: "Facial & Skin Care", price: "₹800+" },
    { name: "Head Massage", price: "₹250+" },
    { name: "Bridal/Groom Package", price: "₹5000+" },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-400 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {service.name}
            </h3>

            <p className="text-yellow-400 text-xl mb-6">
              {service.price}
            </p>

            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
              Book Now
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;