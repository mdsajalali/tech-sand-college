"use client";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Link from "next/link";

const images = [
  { src: "/gallery/eight.jpeg" },
  { src: "/gallery/five.jpeg" },
  { src: "/gallery/four.jpeg" },
  { src: "/gallery/nine.jpeg" },
  { src: "/gallery/one.jpeg" },
  { src: "/gallery/seven.jpeg" },
  { src: "/gallery/six.jpeg" },
  { src: "/gallery/ten.jpeg" },
  { src: "/gallery/three.jpeg" },
  { src: "/gallery/two.jpg" },
];

export default function GalleryContent() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="pb-5 text-center text-[20px] font-medium md:text-2xl">
          BUBT 5th Convocation at BCCI
        </h1>
        <LightGallery
          plugins={[lgZoom]}
          speed={500}
          elementClassNames="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {images.map((image, index) => (
            <Link
              key={index}
              href={image.src}
              className="block overflow-hidden rounded"
            >
              <div className="relative h-[300px] w-[500px]">
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="transform rounded transition duration-300 hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </Container>
  );
}
