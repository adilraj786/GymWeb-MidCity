import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, User, Heart, Users, Leaf } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    desc: 'Build raw power with our comprehensive free weights, barbells, and resistance machines designed for all fitness levels.',
    color: '#FF3B30',
  },
  {
    icon: Zap,
    title: 'Weight Loss',
    desc: 'Scientifically structured programs combining cardio, HIIT, and nutrition guidance for sustainable fat loss results.',
    color: '#FF3B30',
  },
  {
    icon: User,
    title: 'Personal Training',
    desc: '1-on-1 sessions with certified trainers who design custom workout plans tailored exactly to your goals.',
    color: '#FF3B30',
  },
  {
    icon: Heart,
    title: 'Cardio Workouts',
    desc: 'Boost endurance and heart health with treadmills, cycles, ellipticals, and dedicated cardio zones.',
    color: '#FF3B30',
  },
  {
    icon: Users,
    title: 'Group Classes',
    desc: 'High-energy group sessions including Zumba, aerobics, and functional fitness to keep you motivated.',
    color: '#FF3B30',
  },
  {
    icon: Leaf,
    title: 'Nutrition Guidance',
    desc: 'Expert diet consultation to complement your workouts, with personalised meal plans for faster results.',
    color: '#FF3B30',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0A] section-padding" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="red-badge">What We Offer</span>
          <h2 className="font-barlow font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mt-4 tracking-tight">
            Our <span className="text-gradient-red">Services</span>
          </h2>
          <p className="mt-4 text-gray-400 font-inter text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof, guided by expert professionals.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="service-card glass-card p-7 cursor-pointer transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF3B30]/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#FF3B30]" />
                </div>

                {/* Title */}
                <h3 className="font-barlow font-bold text-xl uppercase text-white mb-3 tracking-wide group-hover:text-[#FF3B30] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-inter text-sm leading-relaxed">{service.desc}</p>

                {/* Hover line */}
                <div className="mt-5 h-[2px] w-0 bg-[#FF3B30] group-hover:w-full transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
