"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ProjectImageSliderProps = {
  badge: string;
  images?: {
    src: string;
    alt: string;
  }[];
};

export default function ProjectImageSlider({
  badge,
  images = [],
}: ProjectImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasImages = images.length > 0 && Boolean(images[activeIndex]?.src);

  const previousImage = () => {
    if (images.length === 0) return;

    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (images.length === 0) return;

    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-56 overflow-hidden rounded-t-2xl bg-[#1a2236] sm:h-64 md:h-72 lg:h-80">
      {hasImages ? (
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          priority
          className="object-contain object-center p-1 transition duration-500"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#1a2236] px-4 text-center">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#7d8496]">
              Project Image Coming Soon
            </p>

            <p className="mt-3 text-[13px] text-[#5f6778]">
              UI preview will be available after development
            </p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/80 via-transparent to-transparent" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/80"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/80"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-4">
        <span className="rounded-md border border-[#adc7ff]/10 bg-[#0b1f33]/90 px-2.5 py-1 text-[12px] font-semibold text-[#adc7ff] backdrop-blur-md sm:px-3 sm:text-sm">
          {badge}
        </span>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-cyan-300"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}