import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const trainers = [
  {
    name: 'Rajesh Patel',
    role: 'Head Strength Coach',
    experience: '8 Years',
    specialization: 'Powerlifting & Muscle Gain',
    img: 'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'HIIT & Cardio Expert',
    experience: '6 Years',
    specialization: 'Weight Loss & Cardio',
    img: 'https://images.pexels.com/photos/5327465/pexels-photo-5327465.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    rating: 5,
  },
  {
    name: 'Arjun Singh',
    role: 'Powerlifting Specialist',
    experience: '10 Years',
    specialization: 'Olympic Lifting & Strength',
    img: 'https://images.pexels.com/photos/29825228/pexels-photo-29825228.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    rating: 5,
  },
  {
    name: 'Neha Sharma',
    role: 'Yoga & Wellness Coach',
    experience: '7 Years',
    specialization: 'Flexibility & Mindfulness',
    img: 'https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?auto=format&fit=crop&w=600&h=800&q=80',
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Trainers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'start',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
    },
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrentIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrentIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setCurrentIndex(index);
    }
  }, [emblaApi]);

  return (
    <section id="trainers" className="bg-[#0A0A0A] section-padding overflow-hidden" data-testid="trainers-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="red-badge">Expert Trainers</span>
          <h2 className="font-barlow font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mt-4 tracking-tight">
            Meet Our <span className="text-gradient-red">Trainers</span>
          </h2>
          <p className="mt-4 text-gray-400 font-inter text-base max-w-xl mx-auto">
            World-class certified professionals dedicated to your transformation.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef} data-testid="trainers-carousel">
            <div className="flex gap-6">
              {trainers.map((trainer, i) => (
                <div
                  key={trainer.name}
                  className="flex-none w-[280px] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                  data-testid={`trainer-card-${i}`}
                >
                  <div className="trainer-card relative overflow-hidden rounded-2xl group cursor-pointer h-[400px] sm:h-[460px]">
                    {/* Image */}
                    <img
                      src={trainer.img}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="trainer-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      {/* Stars */}
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: trainer.rating }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-[#FF3B30] text-[#FF3B30]" />
                        ))}
                      </div>
                      <h3 className="font-barlow font-black text-xl uppercase text-white tracking-wide">
                        {trainer.name}
                      </h3>
                      <p className="font-inter text-[#FF3B30] text-sm font-medium">{trainer.role}</p>
                      <div className="flex items-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <span className="font-inter text-xs text-gray-300 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">{trainer.experience}</span>
                        <span className="font-inter text-xs text-gray-300 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">{trainer.specialization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              data-testid="trainers-prev"
              className="w-12 h-12 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {trainers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  data-testid={`trainer-dot-${i}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'bg-[#FF3B30] w-6' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              data-testid="trainers-next"
              className="w-12 h-12 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
