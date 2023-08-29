"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Carousel as FlowbiteCarousel, CarouselInterface } from "flowbite";

// Components
import { CarouselOptions } from "@/components";

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  const [carousel, setCarousel] = useState<FlowbiteCarousel | null>(null);

  const prevOnClick = () => {
    carousel?.prev();
  };

  const nextOnClick = () => {
    carousel?.next();
  };

  const slideTo = (index: number) => {
    carousel?.slideTo(index);
  };

  useEffect(() => {
    const { items, options } = CarouselOptions(images);
    const carousel: CarouselInterface = new FlowbiteCarousel(items, options);
    setCarousel(carousel);
  }, [images]);

  useEffect(() => {
    carousel?.cycle();
  }, [carousel]);

  return (
    <div className="relative w-full">
      <div className="relative h-36 overflow-hidden rounded-lg sm:h-46 xl:h-96 2xl:h-96">
        {images.map((image, i) => (
          <div key={i} id={`carousel-item-${i + 1}`} className="w-full">
            <Image
              src={image}
              className="block w-full object-cover"
              alt="IONJC"
              width={1400}
              height={1000}
            />
          </div>
        ))}
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800/30"
            aria-current="true"
            aria-label={`Slide ${i + 1}`}
            onClick={() => slideTo(i)}
          />
        ))}
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevOnClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextOnClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
