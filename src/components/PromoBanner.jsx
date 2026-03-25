import { useState } from "react";
import BookingModal from "./BookingModal";

function PromoBanner() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const highlights = [
    { title: "4.9/5 Rated", detail: "Loved by regular clients in Gwalior" },
    { title: "Same-Day Slots", detail: "Quick appointments for busy schedules" },
    { title: "Premium Products", detail: "Salon-grade care for hair and skin" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-secondary px-4 py-14 text-textPrimary sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-6 sm:p-8 md:p-10">
        <div className="mb-7 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Signature Experience
            </p>
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Upgrade your look with precision grooming
            </h2>
          </div>

          <button
            onClick={() => setBookingModalOpen(true)}
            className="inline-block rounded-full bg-accent px-6 py-3 text-center font-semibold text-black shadow-lg shadow-accent/30 transition duration-300 hover:bg-accentHover hover:shadow-accent/50 cursor-pointer"
          >
            Check Available Slots
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10">
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-textSecondary">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
}

export default PromoBanner;
