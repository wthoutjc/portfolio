"use client";
import { CarouselOptions, CarouselItem } from "flowbite";

export default function getOptions(images: string[]): {
  options: CarouselOptions;
  items: CarouselItem[];
} {
  const items = images.map((_, index) => ({
    position: index + 1,
    el: document.getElementById(`carousel-item-${index + 1}`)!,
  }));

  return {
    options: {
      defaultPosition: 0,
      interval: 10000,

      indicators: {
        items,
      },

      // callback functions
      onNext: () => {},
      onPrev: () => {},
      onChange: () => {},
    },
    items,
  };
}
