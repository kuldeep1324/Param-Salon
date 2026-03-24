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
    <section id="services" className="bg-black px-4 py-14 text-white sm:px-6 sm:py-20">
      
      <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 md:mb-16 md:text-5xl">
        Our Services
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-5 transition duration-300 hover:border-yellow-400 sm:p-6 lg:p-8"
          >
            <h3 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
              {service.name}
            </h3>

            <p className="mb-5 text-lg text-yellow-400 sm:mb-6 sm:text-xl">
              {service.price}
            </p>

            <a
              href={`https://wa.me/919993962915?text=${encodeURIComponent(
                `Hi Param Salon, I want to book ${service.name}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black transition hover:bg-yellow-300 sm:px-6"
            >
              Book Now
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;