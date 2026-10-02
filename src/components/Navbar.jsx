import React, { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Plans", href: "#membership" },
  { name: "Trainers", href: "#trainers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/92 backdrop-blur-2xl py-3 shadow-[0_4px_30px_rgba(255,59,48,0.08)] border-b border-white/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNav(e, "#hero")}
            className="flex items-center gap-2 group"
            data-testid="navbar-logo"
          >
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
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className="font-inter text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-white hover:text-[#FF3B30] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF3B30] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919687294124"
              className="hidden lg:block text-sm font-medium text-gray-400 hover:text-white transition-colors"
              data-testid="navbar-phone"
            >
              +91 96872 94124
            </a>
            <a
              href="#membership"
              onClick={(e) => handleNav(e, "#membership")}
              data-testid="navbar-join-btn"
              className="relative overflow-hidden btn-shine bg-[#FF3B30] hover:bg-[#FF5247] text-white font-barlow font-bold text-sm tracking-[0.12em] uppercase px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,59,48,0.5)]"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          data-testid="mobile-menu"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              data-testid={`mobile-nav-${link.name.toLowerCase()}`}
              className="font-barlow font-bold text-3xl tracking-widest uppercase text-white hover:text-[#FF3B30] transition-colors duration-200"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#membership"
            onClick={(e) => handleNav(e, "#membership")}
            className="mt-4 bg-[#FF3B30] text-white font-barlow font-bold text-lg tracking-widest uppercase px-10 py-4 rounded-full hover:bg-[#FF5247] transition-all"
            data-testid="mobile-join-btn"
          >
            Join Now
          </a>
        </div>
      )}
    </>
  );
}
