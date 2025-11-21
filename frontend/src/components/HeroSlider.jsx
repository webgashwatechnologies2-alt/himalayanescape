import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] relative">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-screen flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl">
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: '0.2s' }}
                    >
                      <p className="text-teal-400 text-lg md:text-xl font-semibold mb-4 tracking-wide">
                        {slide.subtitle}
                      </p>
                    </div>
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                    </div>
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: '0.6s' }}
                    >
                      <p className="text-slate-200 text-lg md:text-xl mb-8">
                        {slide.description}
                      </p>
                    </div>
                    <div
                      className="animate-fade-in-up flex flex-wrap gap-4"
                      style={{ animationDelay: '0.8s' }}
                    >
                      <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                        Explore Packages
                      </button>
                      <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default HeroSlider;