"use client";
import Image from "next/image";

// Import your images (add more as needed)
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import Background from "@/components/Background";

const images = [
  { src: img1, alt: "Event 1" },
  { src: img2, alt: "Event 2" },
  { src: img3, alt: "Event 3" },
  { src: img4, alt: "Event 4" },
  { src: img5, alt: "Event 5" },
  { src: img6, alt: "Event 6" },
  { src: img7, alt: "Event 7" },
  { src: img8, alt: "Event 8" },
  { src: img9, alt: "Event 9" },
  { src: img10, alt: "Event 10" },
  { src: img11, alt: "Event 11" },
  { src: img12, alt: "Event 12" },
  { src: img13, alt: "Event 13" },
  { src: img14, alt: "Event 14" },
  { src: img15, alt: "Event 15" },
  { src: img16, alt: "Event 16" },
  { src: img17, alt: "Event 17" },
  { src: img18, alt: "Event 18" },
  { src: img19, alt: "Event 19" },
  { src: img20, alt: "Event 20" },
  // Add more images here as needed
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-8 lg:px-20">
              <Background/>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Gallery</h1>
          <p className="text-lg text-gray-600">A glimpse into our events, classes, and celebrations at YPY Pathsala.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-gray-100">
              <Image
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}