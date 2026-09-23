"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectImageSliderProps = {
  badge: string;
  images?: ProjectImage[];
  emptyTitle?: string;
  emptyDescription?: string;
  variant?: "featured" | "compact";
};

export default function ProjectImageSlider({
  badge,
  images = [],
  emptyTitle = "Project Preview Coming Soon",
  emptyDescription = "UI screenshots will be added after development",
  variant = "compact",
}: ProjectImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [failedImages, setFailedImages] = useState<Set<string>>(
    () => new Set(),
  );

  const activeImage = images[activeIndex];

  const hasImages =
    images.length > 0 &&
    Boolean(activeImage?.src) &&
    !failedImages.has(activeImage?.src);

  useEffect(() => {
    if (images.length === 0) {
      setActiveIndex(0);
      return;
    }

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

  const handleImageError = (src: string) => {
    setFailedImages((previousFailedImages) => {
      const updatedFailedImages = new Set(previousFailedImages);

      updatedFailedImages.add(src);

      return updatedFailedImages;
    });
  };

  /*
   * Featured:
   * Used for VoyageAI.
   *
   * Uses a 16:9 container because VoyageAI screenshots
   * are wide desktop screenshots.
   *
   * Compact:
   * Used for Aura Finance and MvLEND.
   */
  const sizeClasses =
    variant === "featured"
      ? "aspect-[16/9] w-full"
      : "h-[260px] sm:h-[300px] md:h-[330px] lg:h-[360px] xl:h-[380px]";

  /*
   * Featured screenshots get extra horizontal space.
   *
   * This keeps the screenshot away from the previous
   * and next navigation buttons while still showing
   * the complete screenshot without cropping.
   */
  const imageClasses =
    variant === "featured"
      ? "object-contain object-center px-12 transition-opacity duration-500 sm:px-14 md:px-16"
      : "object-contain object-center p-2 transition-opacity duration-500 sm:p-3 md:p-4";

  return (
    <div
      className={`relative overflow-hidden rounded-t-2xl bg-[#10182a] ${sizeClasses}`}
    >
      {/* ================================================================ */}
      {/* IMAGE / FALLBACK                                                 */}
      {/* ================================================================ */}

      {hasImages && activeImage ? (
        <div className="absolute inset-0">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes={
              variant === "featured"
                ? "(max-width: 768px) 100vw, 1200px"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className={imageClasses}
            onError={() => handleImageError(activeImage.src)}
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(99,247,255,0.06),transparent_60%)] px-6 text-center">
          <div className="max-w-xs">
            {/* Placeholder Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
              <ImageIcon
                size={25}
                className="text-[#7d8496]"
                aria-hidden="true"
              />
            </div>

            {/* Placeholder Title */}
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-[#8c96ab] sm:text-[12px]">
              {activeImage
                ? "Preview Unavailable"
                : emptyTitle}
            </p>

            {/* Placeholder Description */}
            <p className="mt-2 text-[12px] leading-[1.6] text-[#626c80] sm:text-[13px]">
              {activeImage
                ? "This project screenshot could not be loaded."
                : emptyDescription}
            </p>
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* OVERLAY                                                          */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08111f]/45 via-transparent to-[#08111f]/5" />

      {/* ================================================================ */}
      {/* NAVIGATION                                                       */}
      {/* ================================================================ */}

      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            type="button"
            onClick={previousImage}
            aria-label="Show previous project image"
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300/40 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 sm:left-4"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Show next project image"
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300/40 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 sm:right-4"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* ================================================================ */}
      {/* BADGE                                                            */}
      {/* ================================================================ */}

      <div className="absolute bottom-4 left-4 z-20 sm:bottom-5 sm:left-5">
        <span className="rounded-md border border-[#adc7ff]/10 bg-[#0b1f33]/90 px-2.5 py-1 text-[11px] font-semibold text-[#adc7ff] shadow-lg backdrop-blur-md sm:px-3 sm:text-[12px]">
          {badge}
        </span>
      </div>

      {/* ================================================================ */}
      {/* SLIDER INDICATORS                                                */}
      {/* ================================================================ */}

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/40 px-2.5 py-2 shadow-lg backdrop-blur-md sm:bottom-5 sm:right-5">
          {images.map((image, index) => {
            const imageFailed = failedImages.has(image.src);

            return (
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
                title={
                  imageFailed
                    ? "Image unavailable"
                    : image.alt
                }
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 ${
                  activeIndex === index
                    ? imageFailed
                      ? "w-6 bg-white/25"
                      : "w-6 bg-cyan-300"
                    : imageFailed
                      ? "w-1.5 bg-white/15"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}