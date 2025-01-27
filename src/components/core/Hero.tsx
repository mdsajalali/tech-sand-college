"use client";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SliderArrowBtn from "./SliderArrowBtn";

const uniData = [
  {
    id: 1,
    src: "/hero/banner_one.jpg",
  },
  {
    id: 2,
    src: "/hero/banner_two.jpeg",
  },
  {
    id: 3,
    src: "/hero/banner_three.jpg",
  },
  {
    id: 4,
    src: "/hero/banner_four.jpg",
  },
];

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Left Button */}
      <SliderArrowBtn
        direction="left"
        className="productPrev absolute left-4 top-1/2 z-10 -translate-y-1/2 transform"
      />

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{ prevEl: ".productPrev", nextEl: ".productNext" }}
        className="w-full"
      >
        {uniData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative min-h-[40vh] w-full md:h-96 md:min-h-[70vh]">
              <Image
                src={item.src}
                alt={`banner ${item.id}`}
                layout="fill"
                objectFit="cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 px-4 py-2 text-center">
                <div className="text-white">
                  <h1 className="mb-2 text-[16px] font-bold uppercase md:text-4xl">
                    Welcome to department of CSE
                  </h1>
                  <h2 className="mb-2 px-10 text-xl font-semibold md:px-0 md:text-2xl">
                    We Provide B.SC. in CSE{" "}
                    <span className="text-red-500">
                      <ReactTyped
                        strings={["(Regular)", "(Diploma Holders)"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                      />
                    </span>
                    Program
                  </h2>
                  <h3 className="text-[16px] font-light uppercase md:text-xl">
                    Thanks for being with us
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Button */}
      <SliderArrowBtn
        direction="right"
        className="productNext absolute right-4 top-1/2 z-10 -translate-y-1/2 transform"
      />
    </div>
  );
}
