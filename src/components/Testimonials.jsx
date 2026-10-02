import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Patel',
    achievement: 'Lost 15kg in 4 months',
    rating: 5,
    text: 'Mid City Gym completely changed my life. I walked in unmotivated and out of shape, and the trainers here transformed me. The facilities are top-notch and the environment is always clean and energetic.',
    tag: 'Weight Loss',
  },
  {
    name: 'Priya Sharma',
    achievement: 'Gained confidence & strength',
    rating: 5,
    text: 'As a working professional, I needed a gym that fits my schedule. 6AM to 9PM timings are perfect! The personal training sessions are genuinely result-oriented. Best gym in Vadodara, hands down.',
    tag: 'Strength',
  },
  {
    name: 'Amit Desai',
    achievement: 'Packed 8kg muscle in 6 months',
    rating: 5,
    text: 'The trainers here are incredibly knowledgeable and supportive. They crafted a custom plan for me and tracked my progress every step of the way. I\'ve tried other gyms in Vadodara but nothing compares.',
    tag: 'Muscle Gain',
  },
  {
    name: 'Meera Joshi',
    achievement: 'Transformed post-pregnancy',
    rating: 5,
    text: 'I was nervous to start after pregnancy but the trainers here made me feel so comfortable. Within 5 months I\'m back to my fitness goals. The nutrition guidance was a game changer for me!',
    tag: 'Transformation',
  },
  {
    name: 'Kiran Shah',
    achievement: 'Consistent for 2+ years',
    rating: 4,
    text: 'I\'ve been a member for over 2 years now. The environment is always motivating, the equipment is well-maintained, and the staff genuinely cares about your progress. Highly recommend to everyone!',
    tag: 'Fitness',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-[#0A0A0A] section-padding overflow-hidden" data-testid="testimonials-section">
      {/* Background glow */}
      <div className="absolute left-0 right-0 h-full bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,59,48,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="red-badge">Success Stories</span>
          <h2 className="font-barlow font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mt-4 tracking-tight">
            Real <span className="text-gradient-red">Transformations</span>
          </h2>
          <p className="mt-4 text-gray-400 font-inter text-base max-w-xl mx-auto">
            Hear from the people whose lives we've changed.
          </p>
          {/* Overall rating */}
          <div className="mt-4 inline-flex items-center gap-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'fill-[#FF3B30] text-[#FF3B30]' : 'fill-none text-[#FF3B30]'}`} />
            ))}
            <span className="font-barlow font-bold text-xl text-white ml-2">4.3</span>
            <span className="font-inter text-gray-400 text-sm">/ 5 — 200+ Reviews</span>
          </div>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-10"
        >
          <div
            key={current}
            className="glass-card p-8 sm:p-12 max-w-3xl mx-auto relative overflow-hidden"
            data-testid="featured-testimonial"
          >
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[#FF3B30]/10" />
            
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF3B30] text-[#FF3B30]" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white font-inter text-lg sm:text-xl leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF3B30]/20 border border-[#FF3B30]/30 flex items-center justify-center flex-shrink-0">
                <span className="font-barlow font-bold text-[#FF3B30] text-lg">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-barlow font-bold text-white uppercase tracking-wide">
                  {testimonials[current].name}
                </div>
                <div className="font-inter text-[#FF3B30] text-sm">{testimonials[current].achievement}</div>
              </div>
              <div className="ml-auto">
                <span className="text-xs font-inter font-medium text-gray-400 bg-[#FF3B30]/10 border border-[#FF3B30]/20 rounded-full px-3 py-1">
                  {testimonials[current].tag}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              data-testid={`testimonial-dot-${i}`}
              className={`rounded-full transition-all duration-300 ${
                current === i ? 'bg-[#FF3B30] w-8 h-2' : 'bg-white/20 w-2 h-2 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setCurrent(i)}
              className="testimonial-card glass-card p-5 cursor-pointer border border-white/8"
              data-testid={`testimonial-mini-${i}`}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-[#FF3B30] text-[#FF3B30]" />
                ))}
              </div>
              <p className="text-gray-400 font-inter text-xs leading-relaxed mb-3 line-clamp-3">"{t.text}"</p>
              <div className="font-barlow font-bold text-white text-sm uppercase">{t.name}</div>
              <div className="font-inter text-[#FF3B30] text-xs">{t.achievement}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
