import { useState } from "react";

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
  });

  const services = [
    "Haircut",
    "Beard Grooming",
    "Hair Color",
    "Complete Grooming",
    "Facial",
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

    // Validate form
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill in all required fields");
      return;
    }

    // Create WhatsApp message
    const message = `Hi Param Salon! I'd like to book an appointment.\n\n📋 Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}${
      formData.preferredDate ? `\nPreferred Date: ${formData.preferredDate}` : ""
    }${formData.preferredTime ? `\nPreferred Time: ${formData.preferredTime}` : ""}`;

    const whatsappUrl = `https://wa.me/919993962915?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    onClose();
    setFormData({
      name: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-3xl border border-accent/30 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-6 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Book Your Appointment
          </h2>
          <p className="mt-2 text-sm text-textSecondary">
            Fill in your details and we'll confirm your slot on WhatsApp
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 transition focus:border-accent focus:outline-none focus:bg-white/10"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit number"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 transition focus:border-accent focus:outline-none focus:bg-white/10"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Select Service *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition focus:border-accent focus:outline-none focus:bg-white/10"
            >
              <option value="" className="bg-zinc-900">
                Choose a service...
              </option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-zinc-900">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition focus:border-accent focus:outline-none focus:bg-white/10"
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Preferred Time
            </label>
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white transition focus:border-accent focus:outline-none focus:bg-white/10"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-white/20 px-4 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-accent px-4 py-3 font-semibold text-black shadow-lg shadow-accent/30 transition hover:bg-accentHover"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>

        {/* Info */}
        <p className="mt-6 text-center text-xs text-textSecondary">
          ✓ We're available 9 AM - 10 PM daily
        </p>
      </div>
    </div>
  );
}

export default BookingModal;
