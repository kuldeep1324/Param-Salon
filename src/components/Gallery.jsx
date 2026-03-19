import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-primary text-textPrimary py-20 px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Our Work
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-borderTheme"
          >
            <img
              src={img}
              alt="Salon work"
              className="w-full h-72 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>
    </section>
  );
}

export default Gallery;