function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919993962915"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Call Button */}
      <a
        href="tel:09993962915"
        className="bg-accent text-black p-4 rounded-full shadow-lg transition transform hover:scale-110"
        title="Call Now"
      >
        📞
      </a>

    </div>
  );
}

export default FloatingContact;