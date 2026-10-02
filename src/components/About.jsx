import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Star, Award } from 'lucide-react';

const ABOUT_IMG = 'https://images.pexels.com/photos/6388373/pexels-photo-6388373.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop';

function Counter({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const duration = 2200;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(eased * end);
      setCount(current);
      if (progress >= 1) { setCount(end); clearInterval(timer); }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={ref} className="counter-value">
      {prefix}{count}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const features = [
  'Certified & experienced personal trainers',
  'State-of-the-art gym equipment',
  'Clean, motivating environment',
  'Personalised fitness programs',
  'Open 6:00 AM – 9:00 PM, all 7 days',
];

const stats = [
  { end: 1500, suffix: '+', label: 'Happy Members', prefix: '' },
  { end: 50, suffix: '+', label: 'Equipment', prefix: '' },
  { end: 10, suffix: '+', label: 'Expert Trainers', prefix: '' },
  { end: 5, suffix: '+', label: 'Years Experience', prefix: '' },
];

const badges = [
  { icon: Shield, text: 'Certified Trainers' },
  { icon: Star, text: 'Safe & Clean' },
  { icon: Award, text: 'Proven Results' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0A0A0A] section-padding" data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="red-badge">About Us</span>
          <h2 className="font-barlow font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mt-4 tracking-tight">
            Who We <span className="text-gradient-red">Are</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 font-inter">
              Mid City Gym is Vadodara's most dedicated fitness centre, built for those who are serious about results. Located in the heart of Diwalipura, we've been transforming lives since 2019.
            </p>
            <p className="text-base text-gray-400 leading-relaxed mb-8 font-inter">
              Whether you're just starting your fitness journey or you're an experienced athlete, our certified trainers and premium facilities will help you reach every goal you set.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF3B30] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 font-inter text-sm">{f}</span>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-[#141414] border border-white/10 rounded-full px-4 py-2 hover:border-[#FF3B30]/30 transition-all"
                >
                  <Icon className="w-4 h-4 text-[#FF3B30]" />
                  <span className="text-xs font-medium text-gray-300 font-inter">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={ABOUT_IMG}
                alt="Mid City Gym Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FF3B30]/10 rounded-2xl border border-[#FF3B30]/20 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <span className="font-barlow font-black text-2xl text-[#FF3B30] block">6AM</span>
                <span className="font-inter text-xs text-gray-400">to 9PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass-card p-6 text-center group hover:border-[#FF3B30]/30 transition-all duration-300"
            >
              <div className="font-barlow font-black text-4xl sm:text-5xl text-white mb-2 leading-none">
                <Counter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="font-inter text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
