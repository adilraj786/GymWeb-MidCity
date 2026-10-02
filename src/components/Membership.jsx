import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    duration: 'Monthly',
    price: '₹1,500',
    period: '/month',
    badge: null,
    popular: false,
    features: [
      'Access to all gym equipment',
      'Locker & changing facility',
      'Basic fitness assessment',
      'Open 6 AM – 9 PM daily',
      'Beginner workout guidance',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    duration: 'Quarterly',
    price: '₹3,999',
    period: '/3 months',
    badge: 'Most Popular',
    popular: true,
    features: [
      'Everything in Basic',
      '2 PT sessions per week',
      'Diet & nutrition consultation',
      'Monthly body assessment',
      'Access to group classes',
      'Priority equipment access',
    ],
    cta: 'Join Pro',
  },
  {
    name: 'Elite',
    duration: 'Yearly',
    price: '₹12,999',
    period: '/year',
    badge: 'Best Value',
    popular: false,
    features: [
      'Everything in Pro',
      'Unlimited PT sessions',
      'Custom nutrition plan',
      'Progress tracking app',
      '2 guest passes/month',
      'Supplement discount',
      'Priority booking',
    ],
    cta: 'Go Elite',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
};

export default function Membership() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="membership" className="bg-[#0A0A0A] section-padding" data-testid="membership-section">
      {/* Background accent */}
      <div className="absolute left-0 right-0 h-full bg-[radial-gradient(ellipse_at_center,rgba(255,59,48,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="red-badge">Pricing</span>
          <h2 className="font-barlow font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mt-4 tracking-tight">
            Membership <span className="text-gradient-red">Plans</span>
          </h2>
          <p className="mt-4 text-gray-400 font-inter text-base sm:text-lg max-w-xl mx-auto">
            Choose the plan that fits your goals. Every plan includes a 7-day free trial.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#FF3B30]/10 border border-[#FF3B30]/20 rounded-full px-4 py-2">
            <Flame className="w-4 h-4 text-[#FF3B30]" />
            <span className="text-[#FF3B30] font-inter text-sm font-medium">7-Day Free Trial on All Plans</span>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              data-testid={`membership-${plan.name.toLowerCase()}`}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#141414] border-[#FF3B30]/50 shadow-[0_0_60px_rgba(255,59,48,0.2)] scale-105 membership-popular'
                  : 'glass-card hover:border-[#FF3B30]/20'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-inter ${
                  plan.popular ? 'bg-[#FF3B30] text-white' : 'bg-[#FF3B30]/20 text-[#FF3B30] border border-[#FF3B30]/30'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <div className="font-barlow font-bold text-sm uppercase tracking-widest text-gray-400 mb-1">{plan.duration}</div>
                <div className={`font-barlow font-black text-3xl uppercase ${plan.popular ? 'text-[#FF3B30]' : 'text-white'}`}>
                  {plan.name}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 border-b border-white/10 pb-6">
                <span className="font-barlow font-black text-5xl text-white">{plan.price}</span>
                <span className="font-inter text-gray-400 text-sm ml-2">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-[#FF3B30]' : 'text-green-400'}`} />
                    <span className="text-gray-300 font-inter text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                data-testid={`plan-cta-${plan.name.toLowerCase()}`}
                className={`w-full relative overflow-hidden btn-shine font-barlow font-bold text-sm tracking-widest uppercase py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group ${
                  plan.popular
                    ? 'bg-[#FF3B30] text-white hover:bg-[#FF5247] hover:shadow-[0_0_30px_rgba(255,59,48,0.5)]'
                    : 'border-2 border-white/20 text-white hover:border-[#FF3B30] hover:text-[#FF3B30]'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-gray-500 font-inter text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          All plans include access to all facilities. No hidden fees. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
