import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  Send,
} from "lucide-react";

const WHATSAPP_NUM = "919687294124";
const PHONE = "+91 9687294124";
const ADDRESS =
  "Jaldhara Complex, Old Padra Rd, Manisha Char Rasta, Diwalipura, Vadodara, Gujarat 390015";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Jaldhara+Complex+Old+Padra+Road+Diwalipura+Vadodara+Gujarat&output=embed";

const fitnessGoals = [
  "Weight Loss",
  "Muscle Gain",
  "General Fitness",
  "Personal Training",
  "Cardio & Endurance",
  "Other",
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    goal: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (
      !form.phone.trim() ||
      !/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ""))
    )
      e.phone = "Valid 10-digit mobile number required";
    if (!form.goal) e.goal = "Please select your fitness goal";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] section-padding"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="red-badge">Contact Us</span>
          <h2 className="font-barlow font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mt-4 tracking-tight">
            Get In <span className="text-gradient-red">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 font-inter text-base max-w-xl mx-auto">
            Ready to start your fitness journey? Reach out to us — we'll get
            back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {submitted ? (
              <div
                className="glass-card p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
                data-testid="form-success"
              >
                <div className="w-20 h-20 bg-[#FF3B30]/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#FF3B30]" />
                </div>
                <h3 className="font-barlow font-black text-2xl uppercase text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-400 font-inter text-base mb-6">
                  Thanks {form.name}! Our team will contact you at{" "}
                  <span className="text-white">+91 {form.phone}</span> within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", goal: "", message: "" });
                  }}
                  className="border border-[#FF3B30]/30 text-[#FF3B30] font-inter text-sm px-6 py-2 rounded-full hover:bg-[#FF3B30]/10 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-5"
                data-testid="contact-form"
                noValidate
              >
                <h3 className="font-barlow font-bold text-xl uppercase text-white mb-2">
                  Book Free Consultation
                </h3>

                {/* Name */}
                <div>
                  <label className="block font-inter text-sm text-gray-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    data-testid="contact-name-input"
                    className={`gym-input w-full bg-[#1A1A1A] border rounded-xl px-4 py-3 text-white font-inter text-sm placeholder-gray-600 transition-all duration-300 ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/10 focus:border-[#FF3B30]/50"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-inter">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-inter text-sm text-gray-400 mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center bg-[#1A1A1A] border border-white/10 rounded-xl px-3 py-3 text-gray-400 font-inter text-sm flex-shrink-0">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      data-testid="contact-phone-input"
                      className={`gym-input flex-1 bg-[#1A1A1A] border rounded-xl px-4 py-3 text-white font-inter text-sm placeholder-gray-600 transition-all duration-300 ${
                        errors.phone
                          ? "border-red-500"
                          : "border-white/10 focus:border-[#FF3B30]/50"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 font-inter">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Fitness Goal */}
                <div>
                  <label className="block font-inter text-sm text-gray-400 mb-1.5">
                    Fitness Goal *
                  </label>
                  <select
                    value={form.goal}
                    onChange={(e) => handleChange("goal", e.target.value)}
                    data-testid="contact-goal-select"
                    className={`gym-input w-full bg-[#1A1A1A] border rounded-xl px-4 py-3 text-white font-inter text-sm transition-all duration-300 appearance-none ${
                      errors.goal
                        ? "border-red-500"
                        : "border-white/10 focus:border-[#FF3B30]/50"
                    }`}
                  >
                    <option value="" className="bg-[#1A1A1A]">
                      Select your goal
                    </option>
                    {fitnessGoals.map((g) => (
                      <option key={g} value={g} className="bg-[#1A1A1A]">
                        {g}
                      </option>
                    ))}
                  </select>
                  {errors.goal && (
                    <p className="text-red-500 text-xs mt-1 font-inter">
                      {errors.goal}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-inter text-sm text-gray-400 mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your fitness goals..."
                    rows={3}
                    data-testid="contact-message-input"
                    className="gym-input w-full bg-[#1A1A1A] border border-white/10 focus:border-[#FF3B30]/50 rounded-xl px-4 py-3 text-white font-inter text-sm placeholder-gray-600 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-btn"
                  className="relative overflow-hidden btn-shine w-full bg-[#FF3B30] hover:bg-[#FF5247] text-white font-barlow font-bold text-sm tracking-widest uppercase py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,59,48,0.4)] flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Book Free Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map + Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Google Maps */}
            <div
              className="rounded-2xl overflow-hidden border border-white/10 h-[280px] sm:h-[320px]"
              data-testid="google-maps-embed"
            >
              <iframe
                title="Mid City Gym Location"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div className="glass-card p-6 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF3B30] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-barlow font-bold text-sm uppercase text-white tracking-wide mb-1">
                    Address
                  </div>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    {ADDRESS}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF3B30] flex-shrink-0" />
                <div>
                  <div className="font-barlow font-bold text-sm uppercase text-white tracking-wide mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    className="font-inter text-gray-400 text-sm hover:text-[#FF3B30] transition-colors"
                    data-testid="contact-phone-link"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FF3B30] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-barlow font-bold text-sm uppercase text-white tracking-wide mb-1">
                    Timings
                  </div>
                  <div className="text-gray-400 text-sm space-y-2 font-inter">
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>8:00 AM – 12:00 PM</span>
                    </p>

                    <p className="flex justify-between">
                      <span>Monday</span>
                      <span>6:00 AM – 9:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Tuesday</span>
                      <span>6:00 AM – 9:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Wednesday</span>
                      <span> 6:00 AM – 9:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Thursday</span>
                      <span>6:00 AM – 9:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Friday</span>
                      <span>6:00 AM – 9:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>6:00 AM – 9:00 PM</span>
                    </p>
                  </div>
                  <p className="font-inter text-gray-500 text-xs">
                    All 7 days, including holidays
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE}`}
                data-testid="call-now-btn"
                className="flex items-center justify-center gap-2 bg-[#141414] border border-white/10 hover:border-[#FF3B30] text-white hover:text-[#FF3B30] font-barlow font-bold text-sm tracking-wide uppercase py-3.5 rounded-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%2C%20I%27m%20interested%20in%20joining%20Mid%20City%20Gym.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-contact-btn"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-barlow font-bold text-sm tracking-wide uppercase py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
