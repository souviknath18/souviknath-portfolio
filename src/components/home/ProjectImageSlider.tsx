"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type ProjectImageSliderProps = {
  badge: string;
  images?: {
    src: string;
    alt: string;
  }[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export default function ProjectImageSlider({
  badge,
  images = [],
  emptyTitle = "Project Preview Coming Soon",
  emptyDescription = "UI screenshots will be added after development",
}: ProjectImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasImages =
    images.length > 0 &&
    Boolean(images[activeIndex]?.src);

  useEffect(() => {
    if (activeIndex >= images.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, images.length]);

  const previousImage = () => {
    if (images.length <= 1) return;

    setActiveIndex((previousIndex) =>
      previousIndex === 0
        ? images.length - 1
        : previousIndex - 1,
    );
  };

  const nextImage = () => {
    if (images.length <= 1) return;

    setActiveIndex((previousIndex) =>
      previousIndex === images.length - 1
        ? 0
        : previousIndex + 1,
    );
  };

  return (
    <div className="relative h-56 overflow-hidden rounded-t-2xl bg-[#10182a] sm:h-64 md:h-72 lg:h-80">
      {hasImages ? (
        <Image
          key={images[activeIndex].src}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-center p-1 transition-opacity duration-500"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(99,247,255,0.06),transparent_60%)] px-6 text-center">
          <div className="max-w-xs">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
              <ImageIcon
                size={22}
                className="text-[#7d8496]"
              />
            </div>

            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-[#8c96ab] sm:text-[12px]">
              {emptyTitle}
            </p>

            <p className="mt-2 text-[12px] leading-[1.6] text-[#626c80] sm:text-[13px]">
              {emptyDescription}
            </p>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08111f]/80 via-transparent to-[#08111f]/10" />

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Show previous project image"
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300/30 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Show next project image"
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300/30 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Badge */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="rounded-md border border-[#adc7ff]/10 bg-[#0b1f33]/90 px-2.5 py-1 text-[11px] font-semibold text-[#adc7ff] backdrop-blur-md sm:px-3 sm:text-[12px]">
          {badge}
        </span>
      </div>

      {/* Slider Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project image ${index + 1}`}
              aria-current={
                activeIndex === index
                  ? "true"
                  : undefined
              }
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 ${
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