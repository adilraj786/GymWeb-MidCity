import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HERO_IMG = 'https://images.pexels.com/photos/6389516/pexels-photo-6389516.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y: bgY }}
      >
        <img
          src={HERO_IMG}
          alt="Mid City Gym - Premium Fitness"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="hero-overlay absolute inset-0 z-10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
      {/* Red glow accent */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_20%_60%,rgba(255,59,48,0.12)_0%,transparent_60%)]" />

      {/* Content */}
      <motion.div
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="red-badge mb-6">Vadodara's Premier Fitness Destination</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-barlow font-black uppercase leading-none mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-white">Transform</span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-white">Your Body.</span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-gradient-red">Transform</span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-gradient-red">Your Life.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Join Mid City Gym and unlock the strongest version of yourself. Expert trainers, world-class equipment, and a community that pushes you beyond limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <button
              onClick={() => scrollToSection('#membership')}
              data-testid="hero-join-btn"
              className="relative overflow-hidden btn-shine group bg-[#FF3B30] hover:bg-[#FF5247] text-white font-barlow font-bold text-base tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,59,48,0.5)] flex items-center justify-center gap-2"
            >
              Join Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              data-testid="hero-trial-btn"
              className="border-2 border-white/30 hover:border-[#FF3B30] text-white hover:text-[#FF3B30] font-barlow font-bold text-base tracking-[0.12em] uppercase px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,59,48,0.2)] flex items-center justify-center gap-2 backdrop-blur-sm bg-white/5"
            >
              Get Free Trial
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="mt-12 flex flex-wrap gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {[
              { value: '1500+', label: 'Members' },
              { value: '50+', label: 'Equipment' },
              { value: '10+', label: 'Trainers' },
              { value: '5+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-barlow font-black text-3xl text-white leading-none counter-value">{stat.value}</span>
                <span className="font-inter text-xs uppercase tracking-widest text-gray-400 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-inter text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#FF3B30] scroll-indicator" />
      </motion.div>
    </section>
  );
}
