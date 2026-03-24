import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section id="gallery" className="bg-primary px-4 py-14 text-textPrimary sm:px-6 sm:py-20">

      <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 md:mb-16 md:text-5xl">
        Our Work
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">

        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-borderTheme"
          >
            <img
              src={img}
              alt="Salon work"
              className="h-56 w-full object-cover transition duration-500 hover:scale-110 sm:h-64 md:h-72"
            />
          </div>
        ))}

      </div>
    </section>
  );
}

export default Gallery;