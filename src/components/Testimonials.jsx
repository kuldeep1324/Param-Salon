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
    <section className="bg-secondary px-4 py-14 text-textPrimary sm:px-6 sm:py-20">

      <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 md:mb-16 md:text-5xl">
        What Our Clients Say
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-2xl border border-borderTheme bg-card p-5 transition hover:border-accent sm:p-6 md:p-8"
          >
            {/* ⭐ Stars */}
            <div className="mb-4 text-xl text-accent">
              ★★★★★
            </div>

            {/* 💬 Review */}
            <p className="mb-5 text-sm text-textSecondary sm:mb-6 sm:text-base">
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