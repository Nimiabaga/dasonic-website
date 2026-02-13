'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Content Overlay with Circle */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
        <div className="container-padded relative w-full">
          <div className="relative flex justify-center lg:justify-end lg:mr-20 xl:mr-32">
            {/* Circular Overlay with Text Inside */}
            <div 
              className="relative w-[85vw] max-w-[450px] h-[85vw] max-h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full bg-[#ff3131]/80 backdrop-blur-sm flex items-center justify-center p-6 md:p-10 lg:p-14"
            >
              <div className="text-center max-w-full">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="mt-3 md:mt-4 lg:mt-5 text-sm md:text-base lg:text-lg text-white/95 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    href="/about"
                    className="rounded-full bg-white px-5 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-3.5 text-xs md:text-sm lg:text-base font-semibold text-[#003780] no-underline transition hover:bg-white/90 shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    Discover more about Dasonic
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
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
