'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    image: '/hero-1.jpg',
    title: 'Engineering excellence to improve lives sustainably',
    description: 'From a once-flared resource to a force for good, we transformed Nigeria\'s natural resources into an engine of global progress.',
  },
  {
    image: '/hero-2.jpg',
    title: 'Building Nigeria\'s infrastructure for tomorrow',
    description: 'Delivering world-class construction, procurement, and technical services that drive industrial growth.',
  },
  {
    image: '/hero-3.jpg',
    title: 'Safety and quality in every project',
    description: 'Committed to excellence through rigorous standards, innovation, and sustainable practices.',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#003780]/90 via-[#003780]/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="container-padded w-full pb-16 md:pb-0">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl">
              {slides[currentSlide].description}
            </p>
            <div className="mt-6 md:mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-[#003780] no-underline transition hover:bg-[#ff3131] hover:text-white shadow-lg"
              >
                Discover more about Dasonic
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-[#003780]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-[#003780]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-12 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
