function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Best salon in Gwalior! Professional staff and amazing service.",
    },
    {
      name: "Amit Verma",
      text: "Loved the haircut and beard styling. Highly recommended!",
    },
    {
      name: "Sandeep Gupta",
      text: "Clean environment and friendly staff. Will visit again.",
    },
  ];

  return (
    <section className="bg-secondary text-textPrimary py-20 px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-card p-8 rounded-2xl border border-borderTheme hover:border-accent transition"
          >
            {/* ⭐ Stars */}
            <div className="text-accent text-xl mb-4">
              ★★★★★
            </div>

            {/* 💬 Review */}
            <p className="text-textSecondary mb-6">
              {review.text}
            </p>

            {/* 👤 Name */}
            <h4 className="font-semibold">
              — {review.name}
            </h4>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Testimonials;