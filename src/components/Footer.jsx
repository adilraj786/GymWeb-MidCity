import React from "react";
import { Phone, MapPin, Clock, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Plans", href: "#membership" },
  { name: "Trainers", href: "#trainers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer() {
  return (
    <footer
      className="bg-[#0A0A0A] border-t border-white/5"
      data-testid="footer"
    >
      {/* Top divider with red glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FF3B30]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:animate-glow-pulse transition-all overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjWPgYvvNvXNtX_cR0Na4GbBG6jRL1Ki3mH_iKPWa3Pp3cy-L4g=w90-h90-p-rp-mo-br100"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-barlow font-black text-lg tracking-widest uppercase text-white">
                  MID TOWN
                </span>
                <span className="font-barlow font-medium text-xs tracking-[0.2em] uppercase text-[#FF3B30]">
                  GYM
                </span>
              </div>
            </div>
            <p className="font-inter text-sm text-gray-400 leading-relaxed mb-6">
              Vadodara's most dedicated fitness centre. Transforming lives since
              2019 with expert training, premium equipment, and a community that
              pushes you beyond limits.
            </p>
            {/* Social */}
            {/* <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 text-gray-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 text-gray-400"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-youtube"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all duration-300 text-gray-400"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-barlow font-bold text-sm uppercase tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="font-inter text-sm text-gray-400 hover:text-[#FF3B30] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FF3B30]/40 rounded-full group-hover:bg-[#FF3B30] transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-barlow font-bold text-sm uppercase tracking-widest text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Strength Training",
                "Weight Loss",
                "Personal Training",
                "Cardio Workouts",
                "Group Classes",
                "Nutrition Guidance",
              ].map((s) => (
                <li key={s}>
                  <span className="font-inter text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF3B30]/40 rounded-full" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-barlow font-bold text-sm uppercase tracking-widest text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF3B30] mt-1 flex-shrink-0" />
                <span className="font-inter text-sm text-gray-400 leading-relaxed">
                  Jaldhara Complex, Old Padra Rd, Manisha Char Rasta,
                  Diwalipura, Vadodara, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF3B30] flex-shrink-0" />
                <a
                  href="tel:+919687294124"
                  className="font-inter text-sm text-gray-400 hover:text-[#FF3B30] transition-colors"
                  data-testid="footer-phone"
                >
                  +91 9687294124
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF3B30] flex-shrink-0" />
                <span className="font-inter text-sm text-gray-400">
                  6:00 AM – 9:00 PM (All Days)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mid City Gym, Vadodara. All rights
            reserved.
          </p>
          <p className="font-inter text-xs text-gray-600">
            Designed with passion for fitness
          </p>
        </div>
      </div>
    </footer>
  );
}
