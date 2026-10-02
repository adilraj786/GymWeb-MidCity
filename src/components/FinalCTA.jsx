import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Users } from 'lucide-react';

export default function FinalCTA() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="cta" className="relative overflow-hidden py-24 lg:py-32" data-testid="final-cta-section">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,59,48,0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF3B30]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FF3B30]/30 to-transparent" />

      {/* Decorative blur circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#FF3B30]/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-[#FF3B30]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="flex items-center gap-2 bg-[#FF3B30]/15 border border-[#FF3B30]/30 rounded-full px-5 py-2.5 animate-glow-pulse">
            <Flame className="w-4 h-4 text-[#FF3B30]" />
            <span className="font-inter font-bold text-sm text-[#FF3B30] uppercase tracking-widest">
              Limited Seats Available
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-barlow font-black text-5xl sm:text-6xl lg:text-8xl uppercase leading-none text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Start Your
          <br />
          <span className="text-gradient-red">Fitness Journey</span>
          <br />
          Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-300 font-inter text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Don't wait for Monday. Don't wait for New Year. The best time to start is RIGHT NOW. Claim your 7-day free trial and join 1,500+ members who've already transformed their lives.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => scrollTo('#contact')}
            data-testid="cta-free-trial-btn"
            className="relative overflow-hidden btn-shine group bg-[#FF3B30] hover:bg-[#FF5247] text-white font-barlow font-bold text-base tracking-[0.15em] uppercase px-10 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,59,48,0.5)] flex items-center gap-3 animate-glow-pulse"
          >
            Claim Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#membership')}
            data-testid="cta-plans-btn"
            className="border-2 border-white/20 hover:border-[#FF3B30] text-white hover:text-[#FF3B30] font-barlow font-bold text-base tracking-[0.15em] uppercase px-10 py-5 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/5 flex items-center gap-3"
          >
            View Plans
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#FF3B30]" />
            <span className="font-inter text-sm">1,500+ Active Members</span>
          </div>
          <span className="text-white/10 hidden sm:block">|</span>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#FF3B30]" />
            <span className="font-inter text-sm">No Lock-in Contracts</span>
          </div>
          <span className="text-white/10 hidden sm:block">|</span>
          <div className="flex items-center gap-2">
            <span className="font-inter text-sm">7-Day Free Trial</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
