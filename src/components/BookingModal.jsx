import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
  });

  const services = [
    "Haircut & Styling",
    "Beard Grooming",
    "Hair Coloring",
    "Complete Grooming",
    "Facial & Skin Care",
    "Head Massage",
    "Bridal/Groom Package",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill in all required fields");
      return;
    }

    const message = `Hi Param Salon! I'd like to book an appointment.\n\n📋 Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}${
      formData.preferredDate ? `\nPreferred Date: ${formData.preferredDate}` : ""
    }${formData.preferredTime ? `\nPreferred Time: ${formData.preferredTime}` : ""}`;

    const whatsappUrl = `https://wa.me/919993962915?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
    setFormData({ name: "", phone: "", service: "", preferredDate: "", preferredTime: "" });
  };

  const inputClasses =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-[14px] text-white placeholder:text-[#bdbdbd]/40 transition-all duration-300 focus:border-[#ffcc00]/40 focus:outline-none focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(255,204,0,0.08)]";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0b0b]/95 backdrop-blur-2xl shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-[#ffcc00]/50 to-transparent" />

            {/* Glow Blob */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-[#ffcc00]/10 blur-3xl pointer-events-none" />

            <div className="relative p-7 sm:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#bdbdbd] transition-all duration-300 hover:border-[#ffcc00]/30 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              {/* Header */}
              <div className="mb-7">
                <span className="section-label !text-[10px] !px-3 !py-1 mb-3 inline-block">
                  Premium Booking
                </span>
                <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  Book Your <span className="text-gold-gradient">Appointment</span>
                </h2>
                <p className="mt-2 text-[13px] font-light text-[#bdbdbd]/70">
                  Fill in your details and we'll confirm your slot on WhatsApp.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">
                    Full Name <span className="text-[#ffcc00]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">
                    Phone Number <span className="text-[#ffcc00]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">
                    Select Service <span className="text-[#ffcc00]">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses} cursor-pointer`}
                  >
                    <option value="" className="bg-[#111]">
                      Choose a service...
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#111]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">
                      Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">
                      Time
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-outline flex-1 !py-3.5 !text-[13px] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-gold flex-1 !py-3.5 !text-[13px] cursor-pointer"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>

              {/* Info */}
              <p className="mt-5 text-center text-[11px] font-light text-[#bdbdbd]/40">
                ✓ Available 9 AM – 10 PM daily · Instant confirmation
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookingModal;
